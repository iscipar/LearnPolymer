import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import './components/form-people-component.js';
import './components/grid-people-component.js';
import './shared-styles.js';

/**
 * `my-view7` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class MyView7 extends PolymerElement {
    static get properties() {
        return {
            civilstatus: {
                type: Array
            },
            people: {
                type: Array
            }
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
                <div class="circle">7</div>
                <h1>Gestión de Personas</h1>
                <form-people-component mode="search"></form-people-component>
                <grid-people-component civilstatus="[[civilstatus]]" people="[[people]]"></grid-people-component>
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

customElements.define('my-view7', MyView7);