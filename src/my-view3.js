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
import '@polymer/paper-input/paper-input.js';
import './components/two-way-component.js';
import './components/native-input-component.js';
import './components/subproperty-component.js';
import './components/array-push-component.js';
import './components/computed-binding-component.js';
import './shared-styles.js';

class MyView3 extends PolymerElement {
  static get properties() {
    return {
      firstname: {
        type: String,
        value: ''
      }
    }
  }

  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }

        div.red {
          color: #ef5350;
        }
      </style>

      <div class="card">
        <div class="circle">3</div>
        <h1>One-way</h1>
        <p>Nombre: [[firstname]]</p>
        <paper-input label="nombre" value="[[firstname]]"></paper-input>
        <h1>Two-way</h1>
        <paper-input label="nombre" value="{{firstname}}"></paper-input>
        <br>
        <two-way-component firstname="{{firstname}}"></two-way-component>
        <h1>Elementos nativos</h1>
        <native-input-component label="Nombre" value="{{firstname}}"></native-input-component>
        <h1>Subpropiedades</h1>
        <subproperty-component></subproperty-component>
        <h1>Arrays</h1>
        <array-push-component></array-push-component>
        <h1>Computado</h1>
        <computed-binding-component></computed-binding-component>
      </div>
    `;
  }
}

window.customElements.define('my-view3', MyView3);
