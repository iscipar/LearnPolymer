import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-card/paper-card.js';

/**
 * `array-component` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class ArrayComponent extends PolymerElement {
    static get properties() {
        return {
            series: {
                type: Array,
                value: function() {
                    return [
                        {
                            name: 'Stranger Things',
                            image: 'https://cdnb.20m.es/sites/151/2017/02/20332-300x150.jpg',
                            description: 'Stranger Things es una serie thriller estadounidense de televisión de horror de ciencia ficción creada por los hermanos Duffer para Netflix.'
                        },
                        {
                            name: 'Westworld',
                            image: 'https://i1.wp.com/www.badtv.it/wp/wp-content/uploads-badtv/2018/06/westworld.jpg?fit=300%2C150&quality=85&strip=all&ssl=1',
                            description: 'Westworld es una serie de televisión de ciencia ficción creada por Jonathan Nolan y Lisa Joy para HBO. Se basa en la película de 1973 del mismo nombre.'
                        },
                        {
                            name: 'Juego de Tronos',
                            image: 'http://columnazero.com/wp-content/uploads/2015/10/jonsnow2-300x150.jpg',
                            description: 'Juego de Tronos es una serie de televisión estadounidense de fantasía medieval creada por David Benioff y D. B. Weiss para la cadena HBO.'
                        },
                        {
                            name: 'The Walking Dead',
                            image: 'https://t00.deviantart.net/zc4eGdOTb-wXxx4HQrDqCjArm7s=/fit-in/300x900/filters:no_upscale():origin()/pre00/e291/th/pre/f/2015/111/2/5/new_home___the_walking_dead_x_reader_by_primealpha02-d8ql4nh.jpg',
                            description: 'The Walking Dead es una serie de televisión postapocalíptica creada y producida por Robert Kirkman y Frank Darabont. Está basada en el cómic homónimo.'
                        }
                    ]
                }
            }
        }
    }

    static get template() {
        return html`
            <style>
                paper-card {
                    --paper-card: {
                        width: 300px;
                    }

                    --paper-card-header-image-text: {
                        color: #ffd600;
                    }

                    --paper-card-content: {
                        font-size: small;
                        text-align: justify;
                    }
                }
            </style>

            <template is="dom-repeat" items="[[series]]" as="serie">
                <paper-card heading="[[serie.name]]" image="[[serie.image]]">
                    <div class="card-content">
                        [[serie.description]]
                    </div>
                </paper-card>
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
}

customElements.define('array-component', ArrayComponent);