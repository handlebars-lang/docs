/**
 * For clearer display of multiline strings in test cases.
 * Use this helper as template-literal function and start the actual string in the
 * next line.
 * The helper removes surrounding white-space and adds a newline at the end.
 *
 */
export function multilineBlock(strings, ...values) {
  let concatenated = String.raw(strings, ...values);
  return concatenated.trim() + "\n";
}
