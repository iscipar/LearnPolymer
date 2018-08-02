import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';

/**
 * `life-cycle-component` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class LifeCycleComponent extends PolymerElement {
    static get properties() {
        return {
            seconds: {
                type: Number,
                value: 0,
                readOnly: true
            },
            timeout: Object
        }
    }

    static get template() {
        return html`
            Tiempo transcurrido (segundos): [[seconds]]
        `;
    }

    /**
     * Instance of the element is created/upgraded. Use: initializing state,
     * set up event listeners, create shadow dom.
     * @constructor
     */
    constructor() {
        super();
        console.log('constructor');
    }

    /**
     * Use for one-time configuration of your component after local
     * DOM is initialized.
     */
    ready() {
        super.ready();
        console.log('ready');
        this.countSeconds();
    }

    connectedCallback() {
        super.connectedCallback();
        console.log('connectedCallback');
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        console.log('disconnectedCallback');
        clearTimeout(this.timeout);
    }

    countSeconds() {
        this._setSeconds(this.seconds + 1);
        this.timeout = setTimeout(() => {
            console.log(this.seconds);
            this.countSeconds();
        }, 1000);
    }
}

customElements.define('life-cycle-component', LifeCycleComponent);