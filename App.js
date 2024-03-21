import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => <h1 id ='head'>Hello World {10*20}</h1>;
var para2 = (
    <span>This is paragraph 2</span>
);
var para = (
    <span>Abhijit {para2}</span>
);
const Heading = () => (
<div id ='container'>
    Hey {para}
    <Title />
    <Title> </Title>
    {Title()}
</div>);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render([<Heading />,<Title />]); 