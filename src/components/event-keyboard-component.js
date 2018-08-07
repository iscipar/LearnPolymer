import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-progress/paper-progress.js';

/**
 * `event-keyboard-component` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class EventKeyboardComponent extends PolymerElement {
    static get properties() {
        return {
            strength: {
                type: Number,
                value: 0
            },
            class: String
        }
    }

    static get template() {
        return html`
            <style>
                paper-input {
                    width: 250px;
                }

                paper-progress {
                    --paper-progress-container: {
                        margin-left: 20px;
                    }
                }

                paper-progress.red {
                    --paper-progress-active-color: #ef5350;
                }

                paper-progress.yellow {
                    --paper-progress-active-color: #ffd600;
                }

                paper-progress.green {
                    --paper-progress-active-color: #66bb6a;
                }

                .container {
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-start;
                    align-items: center;
                }
            </style>

            <div>
                <span><paper-input id="password" always-float-label label="contraseña (sin caracteres extraños)"></paper-input></span>
            </div>
            <br>
            <div class="container">
                <span>Nivel de seguridad:</span>
                <span><paper-progress id="strength" value="[[strength]]" min="0" max="15" class$="[[class]]"></paper-progress></span>
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
        this.$.password.addEventListener('keydown', this.calculateStrength.bind(this));
    }

    calculateStrength(e) {
        if (e.key.replace(/[^\w\-.]/g,'')=='') {
            e.preventDefault();
        }
        else {
            this.strength = this.$.password.value.length + 1;

            if (e.key == 'Backspace') {
                this.strength = this.strength - 2;
            }

            if (this.strength < 5) {
                this.class = 'red';
            }
            if (this.strength >= 5 && this.strength < 10) {
                this.class = 'yellow';
            }
            if (this.strength >= 10) {
                this.class = 'green';
            }
        }
    }
}

customElements.define('event-keyboard-component', EventKeyboardComponent);