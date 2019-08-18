import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import './xxx-search-box';

/**
 * `xxx-header.js`
 * Header bar with logo, title, and search box.
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class XxxHeader extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
        
        app-header {
          color: #fff;
          background-color: var(--app-primary-color);
        }

        .xxx-logo-container {
          background-color: white;
          max-height: 58px;
          max-width: 58px;
          min-height: 50px;
          min-width: 50px;
          height: 10vw;
          width: 10vw;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;  
        }

        .xxx-header-logo {
          width: 95%;
        }
        
        .xxx-header-title {
          padding-left: .5rem;
        }
        
      </style>
      
      <app-header slot="header" condenses="" reveals="" effects="waterfall">
        <app-toolbar>
          <div class="xxx-logo-container">
            <img class="xxx-header-logo" src="/images/polymerexample-logo.svg">
          </div>
          <div class="xxx-header-title" main-title="">Stack Exchange Search</div>
          <xxx-search-box></xxx-search-box>
        </app-toolbar>
      </app-header>
    `;
  }

  static get properties() {
    return {
      prop1: {
        type: String,
        value: ''
      },
    };
  }

}

window.customElements.define('xxx-header', XxxHeader);
