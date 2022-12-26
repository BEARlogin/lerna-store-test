import { createElement } from 'react';
import { counterStore } from 'store-module';

var styles = {"test":"_3ybTi"};

var ExampleComponent = function ExampleComponent(_ref) {
  var text = _ref.text;
  return createElement("div", {
    className: styles.test
  }, text, createElement("button", {
    onClick: counterStore.add
  }, "Add from test"));
};

export { ExampleComponent };
//# sourceMappingURL=index.modern.js.map
