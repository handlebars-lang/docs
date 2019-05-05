// Avoid loading "selection-range" during module loading because it prevents server-side prerendering
let delegate = null;

/**
 * Update the selection in an element
 * @param {HTMLElement} element
 * @param {{start: number, end: number, atStart: boolean}=} range
 */
export function setSelection(element, range) {
  if (!delegate) {
    delegate = require("selection-range");
  }
  delegate(element, range);
}

/**
 * Get the selection in an element
 * @param {HTMLElement} element
 * @return {{start: number, end: number, atStart: boolean}|null|undefined}
 */
export function getSelection(element) {
  if (!delegate) {
    delegate = require("selection-range");
  }
  return delegate(element);
}
