import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-ajax/iron-ajax.js';
import '@polymer/iron-meta/iron-meta.js';
import {PropertiesMixin} from '../mixins/properties-mixin.js';
import {ConfigMixin} from '../mixins/config-mixin.js';
import {CommonsMixin} from '../mixins/commons-mixin.js';

/**
 * `people-service` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class PeopleService extends CommonsMixin(ConfigMixin(PropertiesMixin(PolymerElement))) {
    static get properties() {
        return {
            url: {
                type: String,
                value: function() {
                    return this.getUrl();
                }
            },
            people: {
                type: Array,
                notify: true
            },
            loading: {
                type: Boolean,
                value: false,
                notify: true
            },
            idUpdate: Number,
            idDelete: Number
        }
    }

    static get template() {
        return html`
            <iron-ajax
                id="ajaxselect"
                url="[[url]]"
                method="get"
                loading="{{loading}}"
                last-response="{{people}}"
                on-response="selectResponse"
            ></iron-ajax>

            <iron-ajax
                id="ajaxinsert"
                url="[[url]]"
                method="post"
                content-type="application/json"
                on-response="insertResponse"
                on-error="insertError"
            ></iron-ajax>

            <iron-ajax
                id="ajaxupdate"
                url="[[url]]/[[idUpdate]]"      
                content-type="application/json"
                method="put"
                on-response="updateResponse"
                on-error="updateError"
            ></iron-ajax>

            <iron-ajax
                id="ajaxdelete"
                url="[[url]]/[[idDelete]]"      
                method="delete"
                on-response="deleteResponse"
                on-error="deleteError"
            ></iron-ajax>

            <iron-meta id="metaservice" key="peopleservice"></iron-meta>
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
        this.$.metaservice.value = this;
    }

    getUrl() {
        return this.api.host + this.api.resources.people;
    }

    select(person) {
        this.$.ajaxselect.url = this.url;

        let url = '?';

        if (person.firstname != '') {
            url += 'firstname=' + person.firstname + '&';
        }
        if (person.document != '') {
            url += 'document=' + person.document + '&';
        }
        if (person.firstsurname != '') {
            url += 'firstsurname=' + person.firstsurname + '&';
        }
        if (person.secondsurname != '') {
            url += 'secondsurname=' + person.secondsurname + '&';
        }

        this.$.ajaxselect.url += url;
        this.$.ajaxselect.generateRequest();
    }

    selectResponse() {
        if (this.people.length == 0) {
            this.fire('show-dialog', { mode: 'info', message: this.message.withoutresults });
        }
    }

    insert(person) {
        this.$.ajaxinsert.body = person;
        this.$.ajaxinsert.generateRequest();
    }

    insertResponse() {
        this.fire('show-dialog', { mode: 'info', message: this.message.correctinsertion });
        this.$.ajaxselect.generateRequest();
    }

    insertError() {
        this.fire('show-dialog', { mode: 'error', message: this.message.incorrectinsertion });
    }

    update(person) {
        this.idUpdate = person.id;
        this.$.ajaxupdate.body = person;
        this.$.ajaxupdate.generateRequest();
    }

    updateResponse() {
        this.fire('show-dialog', { mode: 'info', message: this.message.correctupdate });
        this.$.ajaxselect.generateRequest();
    }

    updateError() {
        this.fire('show-dialog', { mode: 'error', message: this.message.incorrectupdate });
    }

    delete(id) {
        this.idDelete = id;
        this.$.ajaxdelete.generateRequest();
    }

    deleteResponse() {
        this.fire('show-dialog', { mode: 'info', message: this.message.correctdelete });
        this.$.ajaxselect.generateRequest();
    }

    deleteError() {
        this.fire('show-dialog', { mode: 'error', message: this.message.incorrectdelete });
    }
}

customElements.define('people-service', PeopleService);