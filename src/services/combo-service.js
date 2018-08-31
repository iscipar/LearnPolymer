import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-ajax/iron-ajax.js';
import {ConfigMixin} from '../mixins/config-mixin.js';

/**
 * `combo-service` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class ComboService extends ConfigMixin(PolymerElement) {
    static get properties() {
        return {
            urlCivilStatus: {
                type: String,
                value: function() {
                    return this.getUrlCivilStatus();
                }
            },
            civilstatus: {
                type: Array,
                notify: true
            }
        }
    }

    static get template() {
        return html`
            <iron-ajax
                id="civilstatus"
                url="[[urlCivilStatus]]"
                method="get"
                last-response="{{civilstatus}}"
                auto
            ></iron-ajax>
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
    }

    getUrlCivilStatus() {
        return this.api.host + this.api.resources.civilstatus;
    }
}

customElements.define('combo-service', ComboService);