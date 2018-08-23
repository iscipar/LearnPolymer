import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';

/**
 * `style-host-child-component` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class StyleHostChildComponent extends PolymerElement {
    static get properties() {
        return {

        }
    }

    static get template() {
        return html`
            <style>
                :host { 
                    cursor: pointer;
                }

                :host(.blue) {
                    color: #42a5f5;
                }

                :host(.red) {
                    color: #ef5350;
                }

                :host(:hover) {
                    color: #66bb6a;
                }
            </style>

            <p>Soy un componente estilizado a partir del selector :host</p>
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

customElements.define('style-host-child-component', StyleHostChildComponent);