import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';

/**
 * `basic-component` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class BasicComponent extends PolymerElement {
    static get properties() {
        return {
            greeting: {
                type: String,
                value: 'Hola a todos'
            },
            invisible: {
                type: Boolean,
                value: false
            }
        }
    }

    static get template() {
        return html`
            <div hidden=[[invisible]]>[[greeting]]</div>
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

    manipulate(value) {
        this.greeting = value;
    }
}

customElements.define('basic-component', BasicComponent);