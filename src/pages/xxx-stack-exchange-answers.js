import {html, PolymerElement} from '@polymer/polymer';
import '@polymer/app-route/app-location.js';
import '@polymer/iron-ajax/iron-ajax.js';
import '@polymer/iron-list/iron-list.js';
import '@polymer/paper-progress/paper-progress.js';
import '@polymer/polymer/lib/elements/dom-if.js';
import '../shared-styles.js';

/**
 * `xxx-stack-exchange-answers.js`
 * Get question id from url, do 1st xhr to get question using Stack Exchange api,
 * do 2nd xhr to get answers using Stack Exchange api,
 * display question and list of answers.
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class XxxStackExchangeAnswers extends PolymerElement {
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
    
    .xxx-answer-caption {
      font-size: .8rem;
      font-style: italic;
    }

    .xxx-answer-container {
      margin: .5rem;
      overflow: scroll;
      padding: .5rem;
    }

    .xxx-answer-accepted {
      background-color: $bg-color-accepted;
    }

    .xxx-answer-info {
      font-size: .8rem;
    }

    .xxx-answer-not-accepted {
      background-color: $bg-color-container;
    }

    .xxx-answer-question-container {
      background-color: $bg-color-container;
      margin: .5rem;
      padding: .5rem;
    }

    .xxx-answer-caption {
      font-size: .8rem;
      font-style: italic;
    }

    .xxx-back-to-questions {
      font-size: .8rem;
      margin: .5rem;
    }

    .xxx-question-caption {
      font-size: .8rem;
      font-style: italic;
    }

    .xxx-question-info {
      font-size: .8rem;
    }

    .xxx-question-title {
      font-size: 1.2rem;
      font-weight: bold;
    }

  </style>

  <app-location route="{{route}}"></app-location>

  <iron-ajax
    id="xxxAjax"
    url="[[_requestUrl]]"
    params="[[_requestParams]]"
    handle-as="json"
    on-response="_handleResponse"
    debounce-duration="300">
  </iron-ajax>
  
  <div class="xxx-page-title">Answers</div>

  <div class="xxx-main-card">
    <template is="dom-if" if="[[_isLoading]]">
      <paper-progress indeterminate="true"></paper-progress>
    </template>
    
    <div is="dom-if" if="[[!_isLoading]]">
  <!--<div is="dom-if" if="{{isQuestions}}" class="xxx-back-to-questions">-->
    <!--<a on-tap="onClickBackToQuestions()">Back to Questions</a>-->
  <!--</div>-->
    <div class="xxx-answer-question-container">
      <div class="xxx-question-title">[[decodeHtmlEntities(_question.title)]]</div>
      <div>
        <span class="xxx-question-caption">Number of Views: </span>
        <span class="xxx-question-info">[[_question.view_count]]</span>
      </div>
      <div>
        <span class="xxx-question-caption">Score: </span>
        <span class="xxx-question-info">[[_question.score]]</span>
      </div>
      <div><span class="xxx-question-caption">Tags: </span>
        <span class="xxx-question-info">[[_question.tags.join()]]</span>
      </div>
      <div>
        <span class="xxx-question-caption">Asked: </span>
        <span class="xxx-question-info">[[timeToShortDate(_question.creation_date)]]</span>
      </div>
      <div class="xxx-question-body" inner-h-t-m-l="[[_question.body]]"></div>
    </div>

    <iron-list items="[[_answers]]" as="answer">
      <template>
        <div class="xxx-answer-container">
         <!--[ngClass]="{'xxx-answer-accepted':answer.is_accepted,'xxx-answer-not-accepted':!answer.is_accepted}">-->
          <div>
            <span class="xxx-answer-caption">Score: </span>
            <span class="xxx-answer-info">[[answer.score]]</span>
          </div>
          <div><span class="xxx-answer-caption">Answered: </span>
            <span class="xxx-answer-info">[[timeToShortDate(answer.creation_date)]]</span>
          </div>
          <div class="xxx-answer-caption">Answer:</div>
          <div inner-h-t-m-l="[[answer.body]]" class="xxx-answer-body"></div>
        </div>
      </div>
      </template>
    </iron-list>
  </div>
`;
  }

  constructor() {
    super();
    // create the private properties
    this._answers = [];
    this._isLoading = true;
    this._questionId = '';
    this._question = {};
    this._requestUrl = '';
    this._requestParams = {};
  }

  static get observers() {
    return [
      '_routeChanged(route.*)'
    ];
  }

  _getQuestion() {
    this._requestUrl = 'https://api.stackexchange.com/2.2/questions/' + this._questionId;
    this._requestParams = {
      key: 'U4DMV*8nvpm3EOpvf69Rxw((',
      site: 'stackoverflow',
      filter: 'withbody',
      order: 'desc',
      sort: 'votes'
    };
    this.$.xxxAjax.generateRequest();
  }

  _getAnswers() {
    this._requestUrl += '/answers';
    this.$.xxxAjax.generateRequest();
  }

  // gets called after each xhr, first time for _question, second time for answers
  _handleResponse(event, request) {
    const response = request.response;
    if (this._requestUrl.includes('answers')) {
      this._handleAnswersResponse(response);
    } else {
      this._handleQuestionResponse(response);
    }
  }

  _handleQuestionResponse(response) {
    this._question = response.items[0];
    this._getAnswers();
  }

  _handleAnswersResponse(response) {
    this._isLoading = false;
    this._answers = response.items;
  }

  // read _question id from route query params
  _routeChanged(route) {
    const index = route.value.path.lastIndexOf('/');
    if (index > 0) {
      const id = route.value.path.substr(index);
      if (id.length > 0) {
        this._questionId = id;
        this._getQuestion();
      }
    }
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

  timeToShortDate(time) {
    const date = new Date(time);
    const options = {
      year: 'numeric', month: 'numeric', day: 'numeric',
    };
    return date.toLocaleDateString('en', options);
  }

}


window.customElements.define('xxx-stack-exchange-answers', XxxStackExchangeAnswers);
