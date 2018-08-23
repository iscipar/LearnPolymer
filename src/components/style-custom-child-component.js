import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-spinner/paper-spinner.js';
import '@polymer/paper-slider/paper-slider.js';
import '@webcomponents/shadycss/apply-shim.min.js';

/**
 * `style-custom-child-component` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class StyleCustomChildComponent extends PolymerElement {
    static get properties() {
        return {

        }
    }

    static get template() {
        return html`
            <style>
                paper-slider {
                    --paper-slider-height: var(--style-custom-child-slider-height);
                }

                .container {
                    border: 2px solid #212121;
                    padding: 10px;
                    @apply --style-custom-child-container;
                }
            </style>

            <p><b>Componentes que pertenecen al hijo</b></p>
            <div class="container">
                <paper-spinner active></paper-spinner>
                <paper-slider min="0" max="10" pin editable></paper-slider>
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
}

customElements.define('style-custom-child-component', StyleCustomChildComponent);