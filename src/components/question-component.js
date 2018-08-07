import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import './answer-component.js';

/**
 * `question-component` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class QuestionComponent extends PolymerElement {
    static get properties() {
        return {
            question: Object,
            idchecked: {
                type: Number,
                value: null
            }
        }
    }

    static get template() {
        return html`
            <template is="dom-repeat" items="[[question.options]]" as="option">
                <answer-component answer="[[option]]" id="[[index]]" idchecked="[[idchecked]]" on-option-checked="registerCheckedOption"></answer-component>
            </template>
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

    registerCheckedOption(e) {
        this.idchecked = e.detail.id;
    }
}

customElements.define('question-component', QuestionComponent);