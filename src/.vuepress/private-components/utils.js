export function deindent(string, ...values) {
  const result = String.raw(string, ...values);
  return result.replace(/^\s*/gm, "");
}
