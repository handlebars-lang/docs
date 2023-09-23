# 助手代码

## `options` 参数

除了在助手代码调用中运行的参数，`options` 也被作为一个额外的参数传递给助手代码。

- `lookupProperty(object, propertyName)`: 可以返回对象自身属性的函数。本函数对 `allowedProtoProperties` 与
  `allowedProtoMethods` 内的白名单进行参考。例如：

  <Example examplePage="/zh/examples/helper-lookup-property.md" show="preparationScript" />

- TODO：对所有传递给助手代码的选项进行解释。
