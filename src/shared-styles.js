import '@polymer/polymer/polymer-element.js';

const $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = `<dom-module id="shared-styles">
  <template>
    <style>
      .xxx-main-card {
        margin-bottom: 1.5rem;
        margin-left: 1.5rem;
        margin-right: 1.5rem;
        margin-top: .2rem;
        padding: 1rem;
        color: #757575;
        border-radius: .3125rem;
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

      .xxx-page-title {
        color: darkgrey;
        font-size: 1.4rem;
        font-weight: bold;
        margin-left: 2.4rem;
        margin-top: .2rem;
      }
    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
