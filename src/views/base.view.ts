export default class BaseView {
  static clear(): void {
    const mainBodyEl = document.querySelector('.main__body');
    mainBodyEl.innerHTML = '';
  }

  static buildNode(
    tag: string,
    className: string,
    parent: Element,
  ): HTMLElement {
    const node = document.createElement(tag);
    if (className) node.className = className;
    parent?.appendChild(node);
    return node;
  }
}
