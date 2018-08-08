import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';

/**
 * `native-input-component` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class NativeInputComponent extends PolymerElement {
    static get properties() {
        return {
            class: {
                type: String,
                value: 'green'
            },
            label: {
                type: String,
                value: ''
            },
            value: {
                type: String,
                value: '',
                notify: true
            }
        }
    }

    static get template() {
        return html`
            <style>
                .green {
                    color: #66bb6a;
                }
            </style>

            <span class$="[[class]]">[[label]]:</span>
            <input type="text" value="{{value::input}}">
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

customElements.define('native-input-component', NativeInputComponent);