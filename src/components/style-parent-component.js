import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import './style-child-component.js';

/**
 * `style-parent-component` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class StyleParentComponent extends PolymerElement {
    static get properties() {
        return {

        }
    }

    static get template() {
        return html`
            <style>
                .myclass {
                    color: #42a5f5;
                }
            </style>

            <p class="myclass">Soy un texto de color azul que pertenece al componente padre</p>
            <style-child-component></style-child-component>
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

customElements.define('style-parent-component', StyleParentComponent);