import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-button/paper-button.js';
import {PropertiesMixin} from '../mixins/properties-mixin.js';
import {UtilsMixin} from '../mixins/utils-mixin.js';
import {EventsMixin} from '../mixins/events-mixin.js';

/**
 * `uppercase-converter-component` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class UppercaseConverterComponent extends EventsMixin(UtilsMixin(PropertiesMixin(PolymerElement))) {
    static get properties() {
        return {
            text: String
        }
    }

    static get template() {
        return html`
            <style>
                paper-input {
                    width: 200px;
                    margin-right: 20px;
                }

                .container {
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-start;
                    align-items: flex-end;
                }
            </style>

            <div class="container">
                <paper-input label="[[label.text]]" value="{{text}}"></paper-input>
                <paper-button raised on-click="convert">[[button.convert]]</paper-button>
            </div>
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

    convert() {
        this.fire('uppercase-convert', { uppercase: this.convertToUppercase(this.text) });
    }
}

customElements.define('uppercase-converter-component', UppercaseConverterComponent);