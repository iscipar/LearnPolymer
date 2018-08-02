/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-button/paper-button.js';
import './components/basic-component.js';
import './components/computed-component.js';
import './components/array-component.js';
import './components/life-cycle-component.js';
import './shared-styles.js';

class MyView1 extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>

      <div class="card">
        <div class="circle">1</div>
        <h1>Componente básico</h1>
        <basic-component id="basic"></basic-component>
        <h1>Propiedades de un componente</h1>
        <h3>Manipulación</h3>
        <paper-button raised on-click="manipulateFromOutside">Desde fuera</paper-button>
        <paper-button raised on-click="manipulateFromWithin">Desde dentro</paper-button>
        <paper-button raised on-click="hide">Ocultar</paper-button>
        <h3>Propiedades computadas</h3>
        <computed-component></computed-component>
        <h3>Propiedades de arrays</h3>
        <array-component></array-component>
        <h1>Ciclo de vida</h1>
        <span id="container">
          <life-cycle-component></life-cycle-component>
        </span>
        <paper-button raised on-click="restart">Reiniciar</paper-button>
        </div>
      </div>
    `;
  }

  manipulateFromOutside() {
    this.$.basic.greeting = 'He sido modificado desde fuera';
  }

  manipulateFromWithin() {
    this.$.basic.manipulate('He sido modificado desde dentro');
  }

  hide() {
    this.$.basic.invisible = true;
  }

  restart() {
    this.shadowRoot.querySelector('#container').innerHTML = '';
    this.shadowRoot.querySelector('#container').innerHTML = '<life-cycle-component></life-cycle-component>';
  }
}

window.customElements.define('my-view1', MyView1);
