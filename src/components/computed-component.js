import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-icon/iron-icon.js';
import '../my-icons.js';

/**
 * `computed-component` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class ComputedComponent extends PolymerElement {
    static get properties() {
        return {
            text: {
                type: String,
                value: 'Soy una opción'
            },
            checked: {
                type: Boolean,
                value: false
            },
            icon: {
                type: String,
                computed: 'calculateIcon(checked)'
            },
            class: {
                type: String,
                computed: 'calculateClass(checked)'
            }
        }
    }

    static get template() {
        return html`
            <style>
                span {
                    display: inline-block;
                    position: relative;
                    left: 5px;
                    top: 1px;
                }

                .checked {
                    color: #66bb6a;
                }

                .unchecked {
                    color: #ef5350;
                }
            </style>

            <p class$="[[class]]"><iron-icon icon="[[icon]]" on-click="toggle"></iron-icon><span>[[text]]</span></p>
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

    calculateIcon(checked) {
        if (checked) {
            return 'my-icons:check-box';
        }
        return 'my-icons:check-box-outline-blank';
    }

    calculateClass(checked) {
        if (checked) {
            return 'checked';
        }
        return 'unchecked';
    }

    toggle() {
        this.checked = !this.checked;
    }
}

customElements.define('computed-component', ComputedComponent);