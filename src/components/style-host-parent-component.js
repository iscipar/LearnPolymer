import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import './style-host-child-component.js';

/**
 * `style-host-parent-component` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class StyleHostParentComponent extends PolymerElement {
    static get properties() {
        return {

        }
    }

    static get template() {
        return html`
            <style>
                :host { 
                    font-size: 24px;
                }
            </style>

            <style-host-child-component class="blue"></style-host-child-component>
            <style-host-child-component class="red"></style-host-child-component>
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

customElements.define('style-host-parent-component', StyleHostParentComponent);