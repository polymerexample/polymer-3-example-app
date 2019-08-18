import { PolymerElement, html } from '@polymer/polymer/polymer-element';
import '../shared-styles';

class XxxHomePage extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;
          padding: 10px;
        }
      </style>

      <div class="xxx-page-title">Stack Exchange Search</div>
      <div class="xxx-main-card">
        <p>This will search Stack Exchange questions for given title text.</p>
        <p>Enter your search text and click the icon or press the Enter key. A list of matching questions will be shown.</p>
        <p>After that, you can click on a question to see the answers.</p>
        <p>Full source available at <a href="https://github.com/polymerexample/polymer-3-example-app">https://github.com/polymerexample/polymer-3-example-app</a></p>
        <h3>Written in Polymer 3</h3>
        <h4>By JC Lango</h4>
      </div>
    `;
  }
}

window.customElements.define('xxx-home-page', XxxHomePage);