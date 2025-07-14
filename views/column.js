export class LayrColumn extends HTMLElement {
  static style = `
    :host {
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding: 1rem;
      background: #f5f5f5;
      border: 1px solid #ccc;
      border-radius: 8px;
      box-sizing: border-box;
    }
  `;

  constructor() {
    super();

    // Only attach Shadow DOM if needed (skip if not isolating)
    const shadow = this.attachShadow({ mode: 'open' });

    // Attach style only once per class (shared)
    if (!LayrColumn._styleInjected) {
      const style = document.createElement('style');
      style.textContent = LayrColumn.style;
      shadow.appendChild(style);
      LayrColumn._styleInjected = true;
    }

    // Simple slot passthrough
    const slot = document.createElement('slot');
    shadow.appendChild(slot);
  }
}

customElements.define('layr-column', LayrColumn);
