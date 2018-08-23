import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-card/paper-card.js';
import '@polymer/paper-button/paper-button.js';

/**
 * `style-slot-component` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class StyleSlotComponent extends PolymerElement {
    static get properties() {
        return {

        }
    }

    static get template() {
        return html`
            <style>
                p ::slotted(.green) {
                    color: #66bb6a;
                }

                p ::slotted(.red) {
                    color: #ef5350;
                }

                paper-card {
                    --paper-card-content: {
                        font-size: small;
                    }
                }
            </style>

            <slot></slot>
            <p>
                <slot name='slot1'></slot>
            </p>
            <p>
                <slot name='slot2'></slot>
            </p>
            <p>
                <slot name='slot3'></slot>
            </p>
            <paper-card image="https://cdn2.foap.com/images/163a0a1c-533f-40e6-a85f-748ee377f7cb/w320.jpg?1505011751">
                <div class="card-content">
                    <slot name='slot4'></slot>
                </div>
                <div class="card-actions">
                    <slot name='slot5'></slot>
                </div>
            </paper-card>
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

customElements.define('style-slot-component', StyleSlotComponent);