export function createElement(tagName, options = {}) {
  const element = document.createElement(tagName);
  const { className, text, attributes = {} } = options;

  if (className) {
    element.className = className;
  }
  if (text !== undefined) {
    element.textContent = String(text);
  }
  for (const [name, value] of Object.entries(attributes)) {
    element.setAttribute(name, String(value));
  }

  return element;
}

export function replaceChildren(target, children) {
  target.replaceChildren(...children);
  return target;
}

export function requireElement(root, selector) {
  const element = root.querySelector(selector);
  if (!element) {
    throw new Error(`Required dashboard element not found: ${selector}`);
  }
  return element;
}
