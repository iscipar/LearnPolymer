import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-icon/iron-icon.js';
import '../my-icons.js';

/**
 * `answer-component` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class AnswerComponent extends PolymerElement {
    static get properties() {
        return {
            answer: String,
            id: Number,
            idchecked: Number,
            icon: {
                type: String,
                computed: 'calculateIcon(idchecked)'
            }
        }
    }

    static get template() {
        return html`
            <style>
                iron-icon {
                    --iron-icon: {
                        cursor: pointer;
                    }
                }
            </style>

            <div>
                <iron-icon icon="[[icon]]" on-click="toggle"></iron-icon>
                <span>[[answer]]</span>
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

    calculateIcon(idchecked) {
        if (idchecked == this.id) {
            return 'my-icons:radio-button-checked';
        }
        return 'my-icons:radio-button-unchecked';
    }

    toggle() {
        this.dispatchEvent(new CustomEvent('option-checked', {
            detail: {
                id: this.id
            }
        }))
    }
}

customElements.define('answer-component', AnswerComponent);