import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import './components/observer-simple-component.js';
import './components/observer-multiple-component.js';
import './components/observer-subproperty-component.js';
import './components/observer-array-component.js';
import './components/observer-path-component.js';
import './shared-styles.js';

/**
 * `my-view4` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class MyView4 extends PolymerElement {
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
                <h1>Simple</h1>
                <observer-simple-component></observer-simple-component>
                <h1>Múltiples propiedades</h1>
                <observer-multiple-component></observer-multiple-component>
                <h1>Subpropiedades</h1>
                <observer-subproperty-component></observer-subproperty-component>
                <h1>Arrays</h1>
                <observer-array-component></observer-array-component>
                <h1>Paths</h1>
                <observer-path-component></observer-path-component>
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

customElements.define('my-view4', MyView4);