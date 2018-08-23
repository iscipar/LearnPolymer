import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-toast/paper-toast.js';
import './components/style-parent-component.js';
import './components/style-host-parent-component.js';
import './components/style-slot-component.js';
import './components/style-custom-parent-component.js';
import './shared-styles.js';

/**
 * `my-view5` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class MyView5 extends PolymerElement {
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
                <div class="circle">5</div>
                <h1>Conceptos básicos</h1>
                <h3>Encapsulación</h3>
                <style-parent-component></style-parent-component>
                <h3>Selector :host</h3>
                <style-host-parent-component></style-host-parent-component>
                <h1>Slots</h1>
                <style-slot-component>
                    <div><b>Ejemplos:</b></div>
                    <div slot="slot1" class="green">Soy un slot de color verde</div>
                    <div slot="slot2" class="red">Soy un slot de color rojo</div>
                    <div slot="slot3">Soy un slot que no tiene color</div>
                    <div slot="slot4">Soy un slot usado como contenido de una paper-card</div>
                    <div slot="slot5">
                        <paper-button>Compartir</paper-button>
                        <paper-button>Explorar</paper-button>
                    </div>
                </style-slot-component>
                <h1>Estilos compartidos</h1>
                <paper-button raised on-click="openToast">Mostrar</paper-button>
                <paper-toast id="toast"></paper-toast>
                <h1>Estilos personalizados</h1>
                <style-custom-parent-component></style-custom-parent-component>
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

    openToast() {
        this.$.toast.text = 'Texto mostrado a través de un paper-toast';
        this.$.toast.open();
    }
}

customElements.define('my-view5', MyView5);