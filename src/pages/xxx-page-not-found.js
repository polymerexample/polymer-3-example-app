import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '../shared-styles.js';

class XxxPageNotFound extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
      <style>
      </style>

      <div class="xxx-page-title">Page Not Found</div>
      <div class="xxx-main-card">
        <p>The requested page at this address is not found. <a href="[[rootPath]]">Home Page</a></p>
      </div>
    `;
  }
}

window.customElements.define('xxx-page-not-found', XxxPageNotFound);
