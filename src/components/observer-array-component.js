import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-input/paper-input.js';
import './array-item-component.js';

/**
 * `observer-array-component` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class ObserverArrayComponent extends PolymerElement {
    static get properties() {
        return {
            cities: {
                type: Array,
                value: function() {
                    return []
                }
            },
            city: String,
            maximum: {
                type: Boolean,
                value: false
            }
        }
    }

    static get observers() {
        return [
            'citiesChanged(cities.splices)'
        ];
    }

    static get template() {
        return html`
            <style>
                paper-input {
                    --paper-input-container: {
                        width: 200px;
                    }
                }

                .brown {
                    color: #8d6e63;
                }

                .red {
                    color: #ef5350;
                }
            </style>

            <template is="dom-if" if="[[!maximum]]">
                <div>
                    <span class="brown">Escribe una ciudad y pulsa Enter (máximo 3):</span>
                    <span><paper-input label="ciudad" value="{{city}}" on-keypress="detectEnter"></paper-input></span>
                </div>
            </template>
            <template is="dom-if" if="[[maximum]]">
                <div class="red">El máximo de ciudades son 3</div>
            </template>
            <br>
            <template is="dom-repeat" items="[[cities]]">
                <array-item-component item="[[item]]" id="[[index]]" on-remove="removeCity"></array-item-component>
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

    detectEnter(e) {
        if (e.charCode == 13 && !this.maximum) {
            this.push('cities', this.city);
            this.city = '';
        }
    }

    removeCity(e) {
        this.splice('cities', e.detail.id, 1);
    }

    citiesChanged(splices) {
        if (splices && splices.indexSplices) {
            console.log(splices);

            if (splices.indexSplices[0].object.length >=3) {
                this.maximum = true;
            }
            else {
                this.maximum = false;          
            }
        }
    }
}

customElements.define('observer-array-component', ObserverArrayComponent);