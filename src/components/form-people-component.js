import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import '@vaadin/vaadin-item/vaadin-item.js';
import '@vaadin/vaadin-form-layout/vaadin-form-layout.js';
import '@vaadin/vaadin-text-field/vaadin-text-field.js';
import '@vaadin/vaadin-date-picker/vaadin-date-picker.js';
import '@vaadin/vaadin-ordered-layout/vaadin-horizontal-layout.js';
import '@vaadin/vaadin-button/vaadin-button.js';
import '@vaadin/vaadin-combo-box/vaadin-combo-box.js';
import '@polymer/iron-meta/iron-meta.js';
import {CommonsMixin} from '../mixins/commons-mixin.js';
import '../shared-styles.js';
import '../my-icons.js';

/**
 * `form-people-component` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class FormPeopleComponent extends CommonsMixin(PolymerElement) {
    static get properties() {
        return {
            mode: String,
            civilstatus: {
                type: Array
            },
            person: {
                type: Object,
                value: function() {
                    return this.emptyPerson();
                }
            },
            peopleservice: Object
        }
    }

    static get template() {
        return html`
            <style include="shared-styles"></style>

            <template is="dom-if" if="[[checkMode('search')]]">
                <vaadin-item class="vaadin-item-title"><iron-icon icon="my-icons:search"></iron-icon>Criterios de Búsqueda</vaadin-item>
            </template>
            <template is="dom-if" if="[[checkMode('new')]]">
                <vaadin-item class="vaadin-item-title"><iron-icon icon="my-icons:add-box"></iron-icon>Alta de Personas</vaadin-item>
            </template>
            <vaadin-form-layout>
                <vaadin-text-field label="Nombre" value="{{person.firstname}}"></vaadin-text-field>
                <vaadin-text-field label="NIF" value="{{person.document}}"></vaadin-text-field>
                <vaadin-text-field label="Primer apellido" value="{{person.firstsurname}}"></vaadin-text-field>
                <vaadin-text-field label="Segundo apellido" value="{{person.secondsurname}}"></vaadin-text-field>
                <template is="dom-if" if="[[!checkMode('search')]]">
                    <vaadin-date-picker label="Fecha nacimiento" value="{{person.birthdate}}"></vaadin-date-picker>
                    <vaadin-combo-box label="Estado civil" items="[[civilstatus]]" item-label-path="description" item-value-path="code" value="{{person.civilstatus}}" style="width: 240px;">
                        <template>
                            [[item.description]]
                        </template>
                    </vaadin-combo-box>
                </template>
                <vaadin-form-item></vaadin-form-item>
                <vaadin-horizontal-layout class="vaadin-button-container">
                    <template is="dom-if" if="[[checkMode('search')]]">
                        <vaadin-button theme="error" on-click="clean">Limpiar</vaadin-button>
                        <vaadin-button theme="error primary" on-click="search">Buscar</vaadin-button>
                    </template>
                    <template is="dom-if" if="[[checkMode('new')]]">
                        <vaadin-button on-click="close">Cancelar</vaadin-button>
                        <vaadin-button theme="primary" on-click="insert">Aceptar</vaadin-button>
                    </template>
                </vaadin-horizontal-layout>
            </vaadin-form-layout>

            <iron-meta id="metaform"></iron-meta>
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
        this.peopleservice = this.$.metaform.byKey('peopleservice');
    }

    emptyPerson() {
        return {
            firstname: '',
            document: '',
            firstsurname: '',
            secondsurname: '',
            birthdate: '',
            civilstatus: ''
        }
    }

    clean() {
        this.person = this.emptyPerson();
    }

    search() {
        this.peopleservice.select(this.person);
    }

    close() {
        this.fire('close-dialog');
        this.clean();
    }

    insert() {
        this.peopleservice.insert(this.person);
        this.fire('close-dialog');
        this.clean();
    }
}

customElements.define('form-people-component', FormPeopleComponent);