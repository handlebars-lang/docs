(function () {
  var template = Handlebars.template,
    templates = (Handlebars.templates = Handlebars.templates || {});
  templates["example"] = template({
    compiler: [8, ">= 4.3.0"],
    main: function (container, depth0, helpers, partials, data) {
      var helper,
        alias1 = container.propertyIsEnumerable;

      return (
        "Handlebars <b>" +
        container.escapeExpression(
          ((helper =
            (helper = helpers.doesWhat || (depth0 != null ? depth0.doesWhat : depth0)) != null
              ? helper
              : container.hooks.helperMissing),
          typeof helper === "function"
            ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, {
                name: "doesWhat",
                hash: {},
                data: data,
              })
            : helper),
        ) +
        "</b> precompiled!"
      );
    },
    useData: true,
  });
})();
