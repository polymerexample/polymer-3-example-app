import {html, PolymerElement} from '@polymer/polymer';
import '@polymer/app-route/app-location.js';
import '@polymer/iron-ajax/iron-ajax.js';
import '@polymer/iron-list/iron-list.js';
import '@polymer/paper-progress/paper-progress.js';
import '@polymer/polymer/lib/elements/dom-if.js';
import '../shared-styles.js';

/**
 * `xxx-stack-exchange-questions.js`
 * Search by given title text using Stack Exchange api and show list of questions.
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class XxxStackExchangeQuestions extends PolymerElement {
  static get template() {
    return html`
  <style include="shared-styles">
  <style>
    :host {
      height: 100%;
      display: flex;
      flex-direction: column;
    }

    iron-list {
      flex: 1 1 auto;
    }
  
    paper-progress {
      margin-top: 1rem;
      width: 100%;
    }
  </style>

  <app-location query-params="{{queryParams}}"></app-location>
  
  <iron-location id="xxxLocation"></iron-location>

  <iron-ajax
    auto
    url="https://api.stackexchange.com/2.2/search/advanced"
    params="[[requestParams]]"
    handle-as="json"
    on-response="handleResponse"
    debounce-duration="300">
  </iron-ajax>
  
  <div class="xxx-page-title">Questions</div>

  <div class="xxx-main-card">
    <template is="dom-if" if="[[isLoading]]">
      <paper-progress indeterminate="true"></paper-progress>
    </template>
    <iron-list items="[[responseData]]" as="item">
      <template>
        <div>
          <a href="/answers/[[item.question_id]]">[[decodeHtmlEntities(item.title)]]</a>
        </div>
      </template>
    </iron-list>
  </div>
`;
  }

  static get properties() {
    return {
      requestParams: {
        type: Object
      },
      isLoading: {
        type: Boolean,
        value: true
      }
    };
  }

  static get observers() {
    return [
      '_routeQueryParamsChanged(queryParams)'
    ];
  }

  _routeQueryParamsChanged(queryParams) {
    this.requestParams = {
      key: 'U4DMV*8nvpm3EOpvf69Rxw((',
      title: this.queryParams.title || '',
      answers: '1',
      site: 'stackoverflow',
      filter: 'withbody',
      page: '1',
      order: 'desc',
      sort: 'votes'
    };
  }

  handleResponse(event, request) {
    const response = request.response;
    this.isLoading = false;
    this.responseData = response.items;
  }

  decodeHtmlEntities(text) {
    if ((text === undefined) || (text === '')) {
      return '';
    }
    const doc = new DOMParser().parseFromString(text, 'text/html');
    let newText = doc.documentElement.textContent;
    newText = newText.replace('&quot;', '"');
    return newText;
  }

}

window.customElements.define('xxx-stack-exchange-questions', XxxStackExchangeQuestions);
