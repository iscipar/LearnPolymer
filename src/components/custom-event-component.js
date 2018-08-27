import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/iron-icon/iron-icon.js';
import './event-button-component.js';
import '../my-icons.js';

/**
 * `custom-event-component` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class CustomEventComponent extends PolymerElement {
    static get properties() {
        return {
            mail: String
        }
    }

    static get template() {
        return html`
            <style>
                paper-input {
                    --paper-input-container: {
                        width: 300px;
                    }
                }

                .container {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: flex-end;
                }
            </style>

            <div class="container">
                <paper-input label="usuario" value="{{mail}}">
                    <iron-icon icon="my-icons:mail" slot="prefix"></iron-icon>
                    <div slot="suffix">@mail.com</div>
                </paper-input>

                <event-button-component mail="[[mail]]"></event-button-component>
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
}

customElements.define('custom-event-component', CustomEventComponent);