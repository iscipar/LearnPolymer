import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-image/iron-image.js';
import '@polymer/iron-icon/iron-icon.js';
import '../my-icons.js';

/**
 * `gesture-event-component` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class GestureEventComponent extends PolymerElement {
    static get properties() {
        return {
            danger: {
                type: Number,
                value: 0
            },
            icon: {
                type: String,
                computed: 'calculateIcon(danger)'
            },
            class: {
                type: String,
                computed: 'calculateClass(danger)'
            }
        }
    }

    static get template() {
        return html`
            <style>
                iron-icon {
                    --iron-icon: {
                        margin-left: 10px;
                    }

                    --iron-icon-width: 40px;
                    --iron-icon-height: 40px;
                }

                iron-icon.green {
                    --iron-icon-fill-color: #66bb6a;
                }

                iron-icon.yellow {
                    --iron-icon-fill-color: #ffd600;
                }

                iron-icon.red {
                    --iron-icon-fill-color: #ef5350;
                }

                iron-image {
                    cursor: pointer;
                }

                .container {
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-start;
                    align-items: flex-end;
                }
            </style>
            
            <div class="container">
                <span>Peligrosidad:</span>
                <span><iron-icon icon="[[icon]]" class$="[[class]]"></iron-icon></span>
            </div>
            <br>
            <iron-image src="https://static10.habimg.com/imgh/9518-2672781/imgv2-gmaps-2672781_9393.gif"></iron-image>
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

    calculateIcon(danger) {
        if (danger == 0) {
            return 'my-icons:signal-cellular-0-bar';
        }
        if (danger == 1) {
            return 'my-icons:signal-cellular-2-bar';
        }
        if (danger == 2) {
            return 'my-icons:signal-cellular-4-bar';
        }
    }

    calculateClass(danger) {
        if (danger == 0) {
            return 'green';
        }
        if (danger == 1) {
            return 'yellow';
        }
        if (danger == 2) {
            return 'red';
        }
    }
}

customElements.define('gesture-event-component', GestureEventComponent);