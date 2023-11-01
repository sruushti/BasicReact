var React = require("react");
var ReactDOM = require("react-dom");

//embedded js
//ReactDOM.render(<h1>Hello World</h1>, document.getElementById("root"));
ReactDOM.render(
  <div>
    <h1>Hello World!</h1>
    <p>Im learning React js</p>
  </div>,
  document.getElementById("root")
);

//pure js
var h1 = document.createElement("h1");
h1.innerHTML = "Hello World!";
document.getElementById("root").appendChild(h1);
