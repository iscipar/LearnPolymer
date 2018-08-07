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
import { GestureEventListeners } from '@polymer/polymer/lib/mixins/gesture-event-listeners.js';
import '@polymer/paper-toast/paper-toast.js';
import './components/common-event-component.js';
import './components/custom-event-component.js';
import './components/mediator-component.js';
import './components/event-keyboard-component.js';
import './components/gesture-event-component.js';
import './shared-styles.js';

class MyView2 extends GestureEventListeners(PolymerElement) {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>

      <div class="card">
        <div class="circle">2</div>
        <h1>Eventos comunes</h1>
        <common-event-component></common-event-component>
        <h1>Eventos personalizados</h1>
        <custom-event-component on-send-mail="openToast"></custom-event-component>
        <paper-toast id="toast"></paper-toast>
        <h1>Patrón mediador</h1>
        <mediator-component></mediator-component>
        <h1>Eventos de teclado</h1>
        <event-keyboard-component></event-keyboard-component>
        <h1>Eventos de gestos</h1>
        <gesture-event-component danger="[[danger]]" on-tap="calculateDanger"></gesture-event-component>
      </div>
    `;
  }

  openToast(e) {
    let mail = e.detail.mail;
    this.$.toast.text = `Se ha enviado un correo al usuario ${mail}`;
    this.$.toast.open();
  }

  calculateDanger(e) {
    let x = e.detail.x;
    let y = e.detail.y;

    if (x >= 310 && x <= 410 && y >= 570 && y <= 670) {
      this.danger = 1;
    }
    else if (x >= 700 && x <= 800 && y >= 650 && y <= 750) {
      this.danger = 2;
    }
    else {
      this.danger = 0;
    }
  }
}

window.customElements.define('my-view2', MyView2);
