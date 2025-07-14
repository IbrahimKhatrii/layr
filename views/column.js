// views/column.js

export class LayrColumn extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    const wrapper = document.createElement('div');
    wrapper.style.display = 'flex';
    wrapper.style.flexDirection = 'column';
    wrapper.style.gap = '10px';

    const slot = document.createElement('slot');
    wrapper.appendChild(slot);

    const style = document.createElement('style');
    style.textContent = `
      :host {
        display: block;
        padding: 1rem;
        background: #f5f5f5;
        border: 1px solid #ccc;
        border-radius: 8px;
      }
    `;

    shadow.appendChild(style);
    shadow.appendChild(wrapper);
  }
}

// ✅ This is essential
customElements.define('layr-column', LayrColumn);
