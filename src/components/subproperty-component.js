import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-button/paper-button.js';

/**
 * `subproperty-component` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class SubpropertyComponent extends PolymerElement {
    static get properties() {
        return {
            question: {
                type: Object,
                value: function() {
                    return {
                        text: '¿De qué color es el caballo blanco de Santiago?',
                        answer: ''
                    }
                }
            }
        }
    }

    static get template() {
        return html`
            <div>
                <span style="color: #8d6e63;">[[question.text]]</span>
                <span><paper-button id="show" raised on-click="show">Responder</paper-button></span>
            </div>
            <p>[[question.answer]]</p>
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

    show() {
        this.set('question.answer', 'Blanco');
    }
}

customElements.define('subproperty-component', SubpropertyComponent);