import { LitElement, html, css } from "lit";

export class Characters extends LitElement{

  static properties = {
    
  }

  constructor() {
    
  }

  render() {
    return html`<p>Hello!</p>`;
  }

}

customElements.define("characters-components", Characters);