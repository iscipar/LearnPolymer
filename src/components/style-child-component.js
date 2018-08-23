import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';

/**
 * `style-child-component` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class StyleChildComponent extends PolymerElement {
    static get properties() {
        return {

        }
    }

    static get template() {
        return html`
            <style>
                p {
                    color: #66bb6a;
                }

                .myclass {
                    color: #ef5350;
                }
            </style>

            <p>Soy un texto de color verde que pertenece al componente hijo</p>
            <p class="myclass">Soy un texto de color rojo que pertenece al componente hijo</p>
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

customElements.define('style-child-component', StyleChildComponent);