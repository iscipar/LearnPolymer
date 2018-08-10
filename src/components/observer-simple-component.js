import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-input/paper-input.js';

/**
 * `observer-simple-component` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class ObserverSimpleComponent extends PolymerElement {
    static get properties() {
        return {
            age: {
                type: Number,
                observer: 'validateAge'
            }
        }
    }

    static get template() {
        return html`
            <style>
                paper-input {
                    --paper-input-container: {
                        width: 100px;
                    }

                    --paper-input-container-input: {
                        text-align: right;
                    }
                }

                #message {
                    color: #ef5350;
                    font-size: small;
                }
            </style>

            <paper-input label="edad" value="{{age}}" prevent-invalid-input allowed-pattern="[0-9]+" maxlength="3"></paper-input>
            <div id="message"></div>
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

    validateAge(newage, oldage) {
        console.log(`observer: ${newage} ${oldage}`);

        if (newage != '' && newage < 18) {
            this.shadowRoot.querySelector('#message').innerHTML = 'La edad introducida ha de ser mayor que 18';
        }
        else {
            this.shadowRoot.querySelector('#message').innerHTML = '';
        }
    }
}

customElements.define('observer-simple-component', ObserverSimpleComponent);