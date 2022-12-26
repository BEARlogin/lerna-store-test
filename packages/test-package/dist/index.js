var React = require('react');
var storeModule = require('store-module');

var styles = {"test":"_3ybTi"};

var ExampleComponent = function ExampleComponent(_ref) {
  var text = _ref.text;
  return React.createElement("div", {
    className: styles.test
  }, text, React.createElement("button", {
    onClick: storeModule.counterStore.add
  }, "Add from test"));
};

exports.ExampleComponent = ExampleComponent;
//# sourceMappingURL=index.js.map
