import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import '@vaadin/vaadin-item/vaadin-item.js';
import '@vaadin/vaadin-button/vaadin-button.js';
import '@vaadin/vaadin-dialog/vaadin-dialog.js';
import '@vaadin/vaadin-grid/vaadin-grid.js';
import '@polymer/iron-meta/iron-meta.js';
import './form-people-component.js';
import {PropertiesMixin} from '../mixins/properties-mixin.js';
import {UtilsMixin} from '../mixins/utils-mixin.js';
import '../shared-styles.js';
import '../my-icons.js';

/**
 * `grid-people-component` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class GridPeopleComponent extends UtilsMixin(PropertiesMixin(PolymerElement)) {
    static get properties() {
        return {
            civilstatus: {
                type: Array
            },
            people: {
                type: Array
            },
            editing: Object,
            peopleservice: Object
        }
    }

    static get template() {
        return html`
            <style include="shared-styles">
                .vaadin-dialog-container {
                    width: 65vw;
                }
            </style>

            <div class="vaadin-grid-title-container">
                <vaadin-item class="vaadin-item-title"><iron-icon icon="my-icons:grid-on"></iron-icon>[[title.peoplelist]]</vaadin-item>
                <vaadin-button theme="primary" on-click="showDialog">[[button.new]]</vaadin-button>
            </div>
            <vaadin-dialog id="dialog" no-close-on-esc no-close-on-outside-click>
                <template>
                    <div class="vaadin-dialog-container">
                        <form-people-component civilstatus="[[civilstatus]]" mode="new" on-close-dialog="closeDialog"></form-people-component>
                    </div>
                </template>
            </vaadin-dialog>
            <vaadin-grid theme="compact" id="grid" items="[[people]]">
                <vaadin-grid-column resizable>
                    <template class="header">[[label.firstname]]</template>
                    <template>
                        <vaadin-text-field id="firstname-[[index]]" value="[[item.firstname]]" readonly$="[[!isEditing(editing, item)]]"></vaadin-text-field>
                    </template>
                </vaadin-grid-column>
                <vaadin-grid-column resizable>
                    <template class="header">[[label.document]]</template>
                    <template>
                        <div>[[item.document]]</div>
                    </template>
                </vaadin-grid-column>
                <vaadin-grid-column resizable>
                    <template class="header">[[label.firstsurname]]</template>
                    <template>
                        <vaadin-text-field id="firstsurname-[[index]]" value="[[item.firstsurname]]" readonly$="[[!isEditing(editing, item)]]"></vaadin-text-field>
                    </template>
                </vaadin-grid-column>
                <vaadin-grid-column resizable>
                    <template class="header">[[label.secondsurname]]</template>
                    <template>
                        <vaadin-text-field id="secondsurname-[[index]]" value="[[item.secondsurname]]" readonly$="[[!isEditing(editing, item)]]"></vaadin-text-field>
                    </template>
                </vaadin-grid-column>
                <vaadin-grid-column resizable>
                    <template class="header">[[label.birthdate]]</template>
                    <template>
                        <div>[[item.birthdate]]</div>
                    </template>
                </vaadin-grid-column>
                <vaadin-grid-column resizable>
                    <template class="header">[[label.civilstatus]]</template>
                    <template>
                        <div>[[mapCivilStatus(item.civilstatus)]]</div>
                    </template>
                </vaadin-grid-column>
                <vaadin-grid-column width="14em">
                    <template>
                        <div style="text-align: right;">
                            <vaadin-button id="edit-button" hidden="[[editing]]" on-click="edit" focus-target$="[[!editing]]" theme="icon" aria-label="Edit"><iron-icon icon="my-icons:mode-edit"></iron-icon></vaadin-button>
                            <vaadin-button hidden="[[editing]]" on-click="delete" theme="icon error" aria-label="Delete"><iron-icon icon="my-icons:delete"></iron-icon></vaadin-button>
                            <vaadin-button hidden="[[!isEditing(editing, item)]]" on-click="save" focus-target$="[[editing]]" theme="primary">[[button.save]]</vaadin-button>
                            <vaadin-button hidden="[[!isEditing(editing, item)]]" on-click="cancel">[[button.cancel]]</vaadin-button>
                        </div>
                    </template>
                </vaadin-grid-column>
            </vaadin-grid>

            <iron-meta id="metagrid"></iron-meta>
        `;
    }

    /**
     * Instance of the element is created/upgraded. Use: initializing state,
     * set up event listeners, create shadow dom.
     * @constructor
     */
    constructor() {
        super();
    }

    /**
     * Use for one-time configuration of your component after local
     * DOM is initialized.
     */
    ready() {
        super.ready();
        this.editing = null;
        this.peopleservice = this.$.metagrid.byKey('peopleservice');
    }

    isEditing(editing, item) {
        return item === editing;
    }

    edit(e) {
        var item = e.model.item;
        this.editing = item;
        this.$.grid.querySelector('#firstname-' + e.model.index).focus();
    }

    save(e) {
        var item = e.model.item;
        item.firstname = this.$.grid.querySelector('#firstname-' + e.model.index).value;
        item.firstsurname = this.$.grid.querySelector('#firstsurname-' + e.model.index).value;
        item.secondsurname = this.$.grid.querySelector('#secondsurname-' + e.model.index).value;
        this.editing = null;
        this.peopleservice.update(item);
        this.$.grid.querySelector('#edit-button').focus();
    }

    cancel() {
        this.editing = null;
        this.$.grid.clearCache();
        this.$.grid.querySelector('#edit-button').focus();
    }

    delete(e) {
        var id = e.model.item.id;
        this.peopleservice.delete(id);
    }

    showDialog() {
        this.$.dialog.opened = true;
    }

    closeDialog() {
        this.$.dialog.opened = false;
    }
}

customElements.define('grid-people-component', GridPeopleComponent);