import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '../my-icons.js';

/**
 * `array-item-component` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class ArrayItemComponent extends PolymerElement {
    static get properties() {
        return {
            item: String,
            id: String
        }
    }

    static get template() {
        return html`
            <style>
                paper-icon-button {
                    --paper-icon-button-hover: {
                        color: #ef5350;
                    }
                }

                .container {
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-start;
                    align-items: center;
                }

                .item {
                    width: 200px;
                }
            </style>

            <div class="container">
                <span class="item">[[item]]</span>
                <span><paper-icon-button icon="my-icons:delete" on-click="remove"></paper-icon-button></span>
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

    remove() {
        this.dispatchEvent(new CustomEvent('remove', {
            detail: {
                id: this.id
            }
        }));
    }
}

customElements.define('array-item-component', ArrayItemComponent);