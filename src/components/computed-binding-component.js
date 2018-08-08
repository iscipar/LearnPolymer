import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';

/**
 * `computed-binding-component` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class ComputedBindingComponent extends PolymerElement {
    static get properties() {
        return {

        }
    }

    static get template() {
        return html`
            <style>
                .red {
                    background-color: #ef5350;
                    height: 20px;
                }

                .yellow {
                    background-color: #ffd600;
                    height: 20px;
                }

                .container {
                    width: 100px;
                }
            </style>

            <div>Bandera de España:</div>
            <br>
            <div class="container">
                <div class$="[[calculateColor(0)]]"></div>
                <div class$="[[calculateColor(1)]]"></div>
                <div class$="[[calculateColor(0)]]"></div>
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

    calculateColor(value) {
        if (value == 0) {
            return 'red';
        }
        if (value == 1) {
            return 'yellow';
        }
    }
}

customElements.define('computed-binding-component', ComputedBindingComponent);