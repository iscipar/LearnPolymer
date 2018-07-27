import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-checkbox/paper-checkbox.js';
import './shared-styles.js';

/**
 * `my-new-view` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class MyNewView extends PolymerElement {
    static get properties() {
        return {

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
                <div class="circle">4</div>
                <h1>Nueva página</h1>
                <paper-checkbox>¡Preparada para desplegar!</paper-checkbox>
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

customElements.define('my-new-view', MyNewView);