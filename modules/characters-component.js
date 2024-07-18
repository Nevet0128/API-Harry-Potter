import { LitElement, html, css } from "lit";

export class Characters extends LitElement{

  static styles = css`
    :host {
      display: block;
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      height: 100px;
      width: 100px;
      background-color: black;
    }
  `;

  static properties = {
    
  }

  constructor() {
    
  }

  render() {
    return html`<h1>Hello!</h1>`;
  }

}

customElements.define("characters-component", Characters);