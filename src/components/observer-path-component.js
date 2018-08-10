import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-input/paper-input.js';

/**
 * `observer-path-component` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class ObserverPathComponent extends PolymerElement {
    static get properties() {
        return {
            person: {
                type: Array,
                value: function() {
                    return ['Francisco', 'Torres', 'Blanco']
                }
            }
        }
    }

    static get observers() {
        return [
            'personChanged(person.*)'
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
            </style>

            <div>
                <h4>Datos de la persona</h4>
                <p>
                    <paper-input label="nombre" value="{{person.0}}"></paper-input>
                </p>
                <p>
                    <paper-input label="primer apellido" value="{{person.1}}"></paper-input>
                </p>
                <p>
                    <paper-input label="segundo apellido" value="{{person.2}}"></paper-input>
                </p>
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

    personChanged(changeRecord) {
        console.log('changeRecord:', changeRecord);
    }
}

customElements.define('observer-path-component', ObserverPathComponent);