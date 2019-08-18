import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import {setPassiveTouchGestures, setRootPath} from '@polymer/polymer/lib/utils/settings.js';
import '@polymer/app-layout/app-header-layout/app-header-layout.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-pages/iron-pages.js';
import './components/xxx-header'

// Gesture events like tap and track generated from touch will not be
// preventable, allowing for better scrolling performance.
setPassiveTouchGestures(true);

// Set Polymer's root path to the same value we passed to our service worker
// in `index.html`.
setRootPath(XxxAppGlobals.rootPath);

class XxxApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          --app-primary-color: #4285f4;
          --app-secondary-color: black;
          display: block;
        }
      </style>

      <app-location route="{{route}}" url-space-regex="^[[rootPath]]">
      </app-location>

      <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}">
      </app-route>

      <app-header-layout has-scrolling-region="" fullbleed="">

        <xxx-header></xxx-header>

        <iron-pages selected="[[page]]" attr-for-selected="name" role="main">
          <xxx-home-page name="home"></xxx-home-page>
          <xxx-stack-exchange-questions name="questions"></xxx-stack-exchange-questions>
          <xxx-stack-exchange-answers name="answers"></xxx-stack-exchange-answers>
          <xxx-page-not-found name="page-not-found"></xxx-page-not-found>
        </iron-pages>

      </app-header-layout>
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
    if (!page) {
      this.page = 'home';
    } else if (['home', 'questions', 'answers'].indexOf(page) !== -1) {
      this.page = page;
    } else {
      this.page = 'page-not-found';
    }
  }

  _pageChanged(page) {
    // Import the page component on demand.
    switch (page) {
      case 'home':
        import('./pages/xxx-home-page.js');
        break;
      case 'questions':
        import('./pages/xxx-stack-exchange-questions.js');
        break;
      case 'answers':
        import('./pages/xxx-stack-exchange-answers.js');
        break;
      case 'page-not-found':
        import('./pages/xxx-page-not-found.js');
        break;
    }
  }
}

window.customElements.define('xxx-app', XxxApp);
