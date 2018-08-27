import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-input/paper-input.js';

/**
 * `observer-multiple-component` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class ObserverMultipleComponent extends PolymerElement {
    static get properties() {
        return {
            password1: {
                type: String,
                value: ''
            },
            password2: {
                type: String,
                value: ''
            }
        }
    }

    static get observers() {
        return [
            'passwordChanged(password1, password2)'
        ];
    }

    static get template() {
        return html`
            <style>
                paper-input {
                    --paper-input-container: {
                        width: 250px;
                    }
                }

                #message {
                    color: #ef5350;
                    font-size: small;
                }
            </style>

            <div><paper-input type="password" value="{{password1}}" always-float-label label="contraseña"></paper-input></div>
            <div><paper-input type="password" value="{{password2}}" always-float-label label="repita la contraseña"></paper-input></div>
            <div id="message">[[message]]</div>
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

    passwordChanged(password1, password2) {
        console.log(`contraseñas: ${password1} ${password2}`);

        if (password1 == password2 || password1.length == 0 || password2.length == 0) {
          this.message = '';
        }
        else {
          this.message = 'Las contraseñas no son iguales';
        }
    }
}

customElements.define('observer-multiple-component', ObserverMultipleComponent);