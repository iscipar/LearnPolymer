import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import './question-component.js';

/**
 * `mediator-component` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class MediatorComponent extends PolymerElement {
    static get properties() {
        return {
            question: {
                type: Object,
                value: function() {
                    return {
                        text: '¿Qué opinas de Polymer?',
                        options: [
                            'Me parece la mejor librería frontend que he visto en mi vida',
                            'Es una buena librería pero existen otras alternativas también interesantes',
                            'Existen librerías mucho mejores así que no merece la pena',
                            'No entiendo la pregunta'
                        ]
                    }
                }
            }
        }
    }

    static get template() {
        return html`
            <p>[[question.text]]</p>
            <question-component question="[[question]]"></question-component>
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

customElements.define('mediator-component', MediatorComponent);