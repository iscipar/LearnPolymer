import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-spinner/paper-spinner.js';
import '@polymer/paper-slider/paper-slider.js';
import '@polymer/gold-cc-input/gold-cc-input.js';
import './style-custom-child-component.js';

/**
 * `style-custom-parent-component` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class StyleCustomParentComponent extends PolymerElement {
    static get properties() {
        return {

        }
    }

    static get template() {
        return html`
            <style>
                :host {
                    --paper-spinner-layer-4-color: #795548;

                    --paper-slider-pin-start-color: #66bb6a;

                    --paper-slider-input: {
                        background-color: #ffd600;
                        padding: 20px;
                        width: 100px;
                    }

                    --style-custom-child-slider-height: 5px;

                    --style-custom-child-container: {
                        background-color: #ffebee;
                        height: 200px;
                        width: 500px;
                    }
                }

                paper-spinner {
                    --paper-spinner-stroke-width: 10px;
                }

                gold-cc-input {
                    width: 250px;
                }
            </style>

            <p><b>Componentes que pertenecen al padre</b></p>
            <paper-spinner active></paper-spinner>
            <paper-slider min="0" max="10" pin editable></paper-slider>
            <gold-cc-input label="Visa" auto-validate cardTypes="visa"></gold-cc-input>
            <style-custom-child-component></style-custom-child-component>
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

customElements.define('style-custom-parent-component', StyleCustomParentComponent);