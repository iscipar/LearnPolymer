import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-input/paper-input.js';

/**
 * `observer-subproperty-component` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class ObserverSubpropertyComponent extends PolymerElement {
    static get properties() {
        return {
            user: {
                type: Object,
                value: function() {
                    return {
                        firstname: '',
                        email: ''
                    }
                }
            }
        }
    }

    static get observers() {
        return [
            'emailChanged(user.email)'
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

            <div>
                <h4>Datos del formulario</h4>
                <p>
                    <paper-input label="nombre" value="{{user.firstname}}"></paper-input>
                </p>
                <p>
                    <paper-input label="correo" value="{{user.email}}"></paper-input>
                </p>
            </div>
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

    emailChanged(email) {
        console.log(`correo: ${email}`);

        if (email.length > 0 && !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            this.message = 'El correo introducido presenta un formato incorrecto';
        }
        else {
            this.message = '';
        }
    }
}

customElements.define('observer-subproperty-component', ObserverSubpropertyComponent);