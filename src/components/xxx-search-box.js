import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/iron-icons/iron-icons'
import '@polymer/iron-location/iron-location'

/**
 * `xxx-search-box.js`
 * Header bar with logo, title, and search box.
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class XxxSearchBox extends PolymerElement {

  constructor() {
    super();
    this.previousSearchText = null;
  }

  static get template() {
    return html`
      <style>
      
        :host {
          display: inline-block;
        }
        
        paper-icon-button {
          display: inline-block;
        }
        
        paper-input {
          display: inline-block;
        }
        
      </style>
      
      <iron-location id="xxxLocation"></iron-location>
      <paper-input aria-labelledby="enter search text" autofocus placeholder="Enter Search Text" type="search"
        value="{{searchText}}"></paper-input>
      <paper-icon-button disabled$="[[isSearchButtonDisabled]]" on-tap="onSearchButtonClick" icon="search" raised title="Search"></paper-icon-button>
    `;
  }

  static get properties() {
    return {
      searchText: {
        observer: 'onSearchTextChanged',
        type: String
      },
      isSearchButtonDisabled: {
        type: Boolean,
        value: true
      }
    };
  }

  onSearchTextChanged() {
    this.isSearchButtonDisabled = ((this.searchText.length === 0) || (this.searchText === this.previousSearchText));
  }

  onSearchButtonClick() {
    console.log('searchText=', this.searchText);
    this.previousSearchText = this.searchText;
    this.isSearchButtonDisabled = true;
    this.$.xxxLocation.query = 'title=' + encodeURIComponent(this.searchText);
    this.$.xxxLocation.path = '/questions';
  }

}

window.customElements.define('xxx-search-box', XxxSearchBox);
