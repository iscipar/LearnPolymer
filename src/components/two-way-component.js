import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-button/paper-button.js';

/**
 * `two-way-component` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class TwoWayComponent extends PolymerElement {
    static get properties() {
        return {
            firstname: {
                type: String,
                notify: true
            }
        }
    }

    static get template() {
        return html`
            <paper-button id="delete" raised on-click="delete">Borrar</paper-button>
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

    delete() {
        this.firstname = '';
    }
}

customElements.define('two-way-component', TwoWayComponent);