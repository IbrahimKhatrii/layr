class LayrColumn extends HTMLElement {
        constructor() {
            super();
            const shadow = this.attachShadow({ mode: 'open' });
            const wrapper = document.createElement('div');
            wrapper.className = 'column-wrapper';

            const slot = document.createElement('slot');
            wrapper.appendChild(slot);

            const style = document.createElement('style');
            style.textContent = `
        .column-wrapper {
          display: flex;
          flex-direction: column;
          gap: 10px;
          padding: 1em;
          background: #f9f9f9;
          border: 1px solid #ccc;
          border-radius: 6px;
          font-family: sans-serif;
        }
      `;
            shadow.appendChild(style);
            shadow.appendChild(wrapper);
        }
    }

    customElements.define('Column', LayrColumn);
