import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-button/paper-button.js';

/**
 * `array-push-component` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class ArrayPushComponent extends PolymerElement {
    static get properties() {
        return {
            colors: {
                type: Array,
                value: function() {
                    return [
                        'Azul',
                        'Verde',
                        'Negro'
                    ]
                }
            },
            color: String
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

            <p style="color: #5e35b1;">Lista de colores:</p>
            <ul>
            <template is="dom-repeat" items="[[colors]]" as="color">
                <li>[[color]]</li>
            </template>
            </ul>

            <div class="container">
                <paper-input label="color" value="{{color}}"></paper-input>
                <paper-button id="add" raised on-click="add">Añadir</paper-button>
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

    add() {
        this.push('colors', this.color);
    }
}

customElements.define('array-push-component', ArrayPushComponent);