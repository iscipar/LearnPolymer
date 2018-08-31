/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import '@polymer/polymer/polymer-element.js';

const $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = `<dom-module id="shared-styles">
  <template>
    <style>
      .card {
        margin: 24px;
        padding: 16px;
        color: #757575;
        border-radius: 5px;
        background-color: #fff;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
      }

      .circle {
        display: inline-block;
        width: 64px;
        height: 64px;
        text-align: center;
        color: #555;
        border-radius: 50%;
        background: #ddd;
        font-size: 30px;
        line-height: 64px;
      }

      h1 {
        margin: 16px 0;
        color: #212121;
        font-size: 22px;
      }

      paper-toast {
        width: 400px;
        margin-left: 290px;
      }

      vaadin-form-layout {
        --vaadin-form-layout-column-spacing: 250px;

        padding: 0px 100px 0px 100px;

        background: #ffffff;
        background: -webkit-linear-gradient(to bottom, #ffffff, #f5f5f5);
        background: linear-gradient(to bottom, #ffffff, #f5f5f5);

        border-style: solid;
        border-width: 1px;
        border-color: hsla(214, 64%, 82%, 0.23);
      }

      .vaadin-button-container {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 5px;
        margin-top: 10px;
      }

      vaadin-button {
        cursor: pointer;
        margin-left: 5px;
      }

      vaadin-grid { 
        height: 300px;
      }

      vaadin-grid vaadin-text-field {
        width: 100%;
      }

      .vaadin-grid-title-container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-end;
      }

      .vaadin-item-title {
        margin-left: -15px;
        font-weight: bold;
      }
    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
