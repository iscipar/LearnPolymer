import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-button/paper-button.js';

/**
 * `event-button-component` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class EventButtonComponent extends PolymerElement {
    static get properties() {
        return {
            mail: String
        }
    }

    static get template() {
        return html`
            <paper-button id="send" raised on-click="send">Enviar</paper-button>
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

    send() {
        this.dispatchEvent(new CustomEvent('send-mail', {
            detail: {
                mail: this.mail
            },
            bubbles: true,
            composed: true
        }));
    }
}

customElements.define('event-button-component', EventButtonComponent);