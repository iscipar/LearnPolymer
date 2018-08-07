import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-checkbox/paper-checkbox.js';
import './shared-styles.js';

/**
 * `my-new-view` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class MyNewView extends PolymerElement {
    static get properties() {
        return {

        }
    }

    static get template() {
        return html`
            <style include="shared-styles">
                :host {
                    display: block;

                    padding: 10px;
                }
            </style>

            <div class="card">
                <div class="circle">4</div>
                <h1>Recursos</h1>
                <a target="_blank" href="https://www.polymer-project.org">Polymer Project</a>
                <br>
                <br>
                <a target="_blank" href="https://www.webcomponents.org">Web Components</a>
                <br>
                <br>
                <a target="_blank" href="https://www.npmjs.com/">npm</a>
                <br>
                <br>
                <a target="_blank" href="https://www.materialpalette.com/">Material Palette</a>
                <br>
                <br>
                <a target="_blank" href="https://carlosazaustre.com/ecmascript-6-el-nuevo-estandar-de-javascript/">ECMAScript 6</a>
                <br>
                <br>
                <a target="_blank" href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">Flexbox</a>
                <br>
                <br>
                <paper-checkbox>¡Preparado para aprender!</paper-checkbox>
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
}

customElements.define('my-new-view', MyNewView);