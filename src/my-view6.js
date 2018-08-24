import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import './components/uppercase-converter-component.js';
import './shared-styles.js';

/**
 * `my-view6` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class MyView6 extends PolymerElement {
    static get properties() {
        return {
            text: String
        }
    }

    static get template() {
        return html`
            <style include="shared-styles">
                :host {
                    display: block;

                    padding: 10px;
                }
            </style>

            <div class="card">
                <div class="circle">6</div>
                <h1>Creación y utilización</h1>
                <uppercase-converter-component on-uppercase-convert="showUppercase"></uppercase-converter-component>
                <p>Texto convertido a mayúsculas: [[text]]</p>
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

    showUppercase(e) {
        this.text = e.detail.uppercase;
    }
}

customElements.define('my-view6', MyView6);