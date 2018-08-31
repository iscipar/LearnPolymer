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
import { setPassiveTouchGestures, setRootPath } from '@polymer/polymer/lib/utils/settings.js';
import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-drawer-layout/app-drawer-layout.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-header-layout/app-header-layout.js';
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-pages/iron-pages.js';
import '@polymer/iron-selector/iron-selector.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/paper-spinner/paper-spinner.js';
import '@vaadin/vaadin-dialog/vaadin-dialog.js';
import '@vaadin/vaadin-button/vaadin-button.js';
import './services/combo-service.js';
import './services/people-service.js';
import './my-icons.js';

// Gesture events like tap and track generated from touch will not be
// preventable, allowing for better scrolling performance.
setPassiveTouchGestures(true);

// Set Polymer's root path to the same value we passed to our service worker
// in `index.html`.
setRootPath(MyAppGlobals.rootPath);

class MyApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          --app-primary-color: #4285f4;
          --app-secondary-color: black;

          display: block;
        }

        app-drawer-layout:not([narrow]) [drawer-toggle] {
          display: none;
        }

        app-header {
          color: #fff;
          background-color: var(--app-primary-color);
        }

        app-header paper-icon-button {
          --paper-icon-button-ink-color: white;
        }

        .drawer-list {
          margin: 0 20px;
        }

        .drawer-list a {
          display: block;
          padding: 0 16px;
          text-decoration: none;
          color: var(--app-secondary-color);
          line-height: 40px;
        }

        .drawer-list a.iron-selected {
          color: black;
          font-weight: bold;
        }

        .waiting-background {
          position: fixed;
          z-index: 999;
          height: 100%;
          width: 100%;
          top: 0;
          left: 0;
          background-color: Black;
          filter: alpha(opacity=60);
          opacity: 0.6;
          -moz-opacity: 0.8;
        }

        paper-spinner {
          --paper-spinner-stroke-width: 8px;
  
          width: 70px;
          height: 70px;
  
          position: fixed;
          z-index: 1000;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        vaadin-button {
          cursor: pointer;
        }

        .vaadin-dialog-container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .vaadin-dialog-container iron-icon.mode-info {
          --iron-icon-fill-color: #2196f3;
        }

        .vaadin-dialog-container iron-icon.mode-warning {
          --iron-icon-fill-color: #ffd600;
        }

        .vaadin-dialog-container iron-icon.mode-error {
          --iron-icon-fill-color: #ef5350;
        }
      </style>

      <app-location route="{{route}}" url-space-regex="^[[rootPath]]">
      </app-location>

      <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}">
      </app-route>

      <app-drawer-layout fullbleed="" narrow="{{narrow}}">
        <!-- Drawer content -->
        <app-drawer id="drawer" slot="drawer" swipe-open="[[narrow]]">
          <app-toolbar>Menu</app-toolbar>
          <iron-selector selected="[[page]]" attr-for-selected="name" class="drawer-list" role="navigation">
            <a name="view1" href="[[rootPath]]view1">Básico</a>
            <a name="view2" href="[[rootPath]]view2">Eventos</a>
            <a name="view3" href="[[rootPath]]view3">Binding</a>
            <a name="view4" href="[[rootPath]]view4">Observers</a>
            <a name="view5" href="[[rootPath]]view5">Estilos</a>
            <a name="view6" href="[[rootPath]]view6">Mixins</a>
            <a name="view7" href="[[rootPath]]view7">Servicios</a>
            <a name="new-view" href="[[rootPath]]new-view">Recursos</a>
          </iron-selector>
        </app-drawer>

        <!-- Main content -->
        <app-header-layout has-scrolling-region="">

          <app-header slot="header" condenses="" reveals="" effects="waterfall">
            <app-toolbar>
              <paper-icon-button icon="my-icons:menu" drawer-toggle=""></paper-icon-button>
              <div main-title="">Curso de Polymer 3</div>
            </app-toolbar>
          </app-header>

          <iron-pages selected="[[page]]" attr-for-selected="name" role="main">
            <my-view1 name="view1"></my-view1>
            <my-view2 name="view2"></my-view2>
            <my-view3 name="view3"></my-view3>
            <my-view4 name="view4"></my-view4>
            <my-view5 name="view5"></my-view5>
            <my-view6 name="view6"></my-view6>
            <my-view7 name="view7" civilstatus="[[civilstatus]]" people="[[people]]"></my-view7>
            <my-new-view name="new-view"></my-new-view>
            <my-view404 name="view404"></my-view404>
          </iron-pages>
        </app-header-layout>
      </app-drawer-layout>

      <template is="dom-if" if="[[loading]]">
        <div class="waiting-background"></div>
      </template>
      <paper-spinner active="[[loading]]"></paper-spinner>
      <vaadin-dialog id="dialog" no-close-on-esc no-close-on-outside-click>
        <template>
          <div class="vaadin-dialog-container">
            <iron-icon icon="[[dialogIcon]]" class$="[[dialogIconClass]]"></iron-icon>
            <br>
            <br>
            <div>[[dialogMessage]]</div>
            <br>
            <vaadin-button on-click="closeDialog">Cerrar</vaadin-button>
          </div>
        </template>
      </vaadin-dialog>

      <combo-service civilstatus="{{civilstatus}}"></combo-service>
      <people-service people="{{people}}" loading="{{loading}}" on-show-dialog="showDialog"></people-service>
    `;
  }

  static get properties() {
    return {
      page: {
        type: String,
        reflectToAttribute: true,
        observer: '_pageChanged'
      },
      routeData: Object,
      subroute: Object
    };
  }

  static get observers() {
    return [
      '_routePageChanged(routeData.page)'
    ];
  }

  _routePageChanged(page) {
     // Show the corresponding page according to the route.
     //
     // If no page was found in the route data, page will be an empty string.
     // Show 'view1' in that case. And if the page doesn't exist, show 'view404'.
    if (!page) {
      this.page = 'view1';
    } else if (['view1', 'view2', 'view3', 'view4', 'view5', 'view6', 'view7', 'new-view'].indexOf(page) !== -1) {
      this.page = page;
    } else {
      this.page = 'view404';
    }

    // Close a non-persistent drawer when the page & route are changed.
    if (!this.$.drawer.persistent) {
      this.$.drawer.close();
    }
  }

  _pageChanged(page) {
    // Import the page component on demand.
    //
    // Note: `polymer build` doesn't like string concatenation in the import
    // statement, so break it up.
    switch (page) {
      case 'view1':
        import('./my-view1.js');
        break;
      case 'view2':
        import('./my-view2.js');
        break;
      case 'view3':
        import('./my-view3.js');
        break;
      case 'view4':
        import('./my-view4.js');
        break;
      case 'view5':
        import('./my-view5.js');
        break;
      case 'view6':
        import('./my-view6.js');
        break;
      case 'view7':
        import('./my-view7.js');
        break;
      case 'new-view':
        import('./my-new-view.js');
        break;
      case 'view404':
        import('./my-view404.js');
        break;
    }
  }

  showDialog(e) {
    if (e.detail.mode == 'info') {
      this.dialogIcon = 'my-icons:info';
      this.dialogIconClass = 'mode-info';
    }
    if (e.detail.mode == 'warning') {
      this.dialogIcon = 'my-icons:warning';
      this.dialogIconClass = 'mode-warning';
    }
    if (e.detail.mode == 'error') {
      this.dialogIcon = 'my-icons:warning';
      this.dialogIconClass = 'mode-error';
    }
    this.dialogMessage = e.detail.message;
    this.$.dialog.opened = true;
  }

  closeDialog() {
    this.$.dialog.opened = false;
  }
}

window.customElements.define('my-app', MyApp);
