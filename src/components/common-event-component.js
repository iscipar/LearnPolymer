import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-toolbar/paper-toolbar.js';
import '@polymer/paper-card/paper-card.js';

/**
 * `common-event-component` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class CommonEventComponent extends PolymerElement {
    static get properties() {
        return {
            clientX: Number,
            clientY: Number
        }
    }

    static get template() {
        return html`
            <style>
                paper-toolbar {
                    --paper-toolbar: {
                        width: 300px;
                        margin-bottom: 10px;
                    }

                    --paper-toolbar-background: #66bb6a;

                    --paper-toolbar-title: {
                        font-weight: bold;
                    }
                }

                paper-card {
                    --paper-card: {
                        width: 300px;
                    }

                    --paper-card-content: {
                        font-size: small;
                        text-align: justify;
                    }
                }
            </style>

            <paper-toolbar>
                <span slot="top" class="title">mousemove</span>
            </paper-toolbar>

            <paper-card heading="Coordenadas">
                <div class="card-content">
                    <p>X: [[clientX]]</p>
                    <p>Y: [[clientY]]</p>
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
        this.addEventListener('click', this.processClick);
        this.addEventListener('mousemove', this.showCoordinates);
    }

    processClick() {
        console.log('click producido');
    }

    showCoordinates(e) {
        this.clientX = e.clientX;
        this.clientY = e.clientY;
    }
}

customElements.define('common-event-component', CommonEventComponent);