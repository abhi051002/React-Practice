const heading = React.createElement("div", {id:"heading"}, React.createElement('p',{},'Hello'));
const heading2 = React.createElement("div", {id:"heading"}, React.createElement('p',{},'Hello'));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render([heading,heading2]);
