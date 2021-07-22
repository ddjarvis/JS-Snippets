function styleDatabox() {
    /* 
    Dependency/ies:
    - addCSS.js [https://cdn.jsdelivr.net/gh/ddjarvis/JS-Snippets/js-functions/addCss.js]
    */
    
    var css = `
.databox-container {
     background-color: #000;
     background-color: rgba(0,0,0,0.4);
     position: fixed;
     top: 10px;
     right: 10px;
     z-index: 999;
}
 .databox-container-visible .databox-textbox {
     resize: none;
     color: black;
     height: 40px;
}
 .databox-container-visible .databox-textbox-input {
     display: block;
     margin: 10px 5px 10px 5px;
     min-width: 300px;
     min-height: 25px;
     font-size: 11px;
}
 .databox-container-visible .databox-textbox-input:focus {
     background-color: #FFF9C4;
}
 .databox-container-visible .databox-textbox-output {
    display: inline-block;
    color: black;
    margin: 0px 0px 3px 5px;
    width: 230px;
    height: 40px;
    font-size: 8.5px;
}
 .databox-container-visible .databox-button-trigger {
    height: 40px;
    width: 54px;
    display: inline-block;
    float: right;
    margin: 0px 9px 0px 11px;
    color: white;
    font-size: 11px;
    box-shadow: 0 0 5px 2px red;
    border-radius: 6px;
    font-weight: bold;
    background-color: red;
    -webkit-text-stroke: 0.1px #c00;
    transition: all 0.3s;
}
.databox-container-visible .databox-button-trigger:hover {
    background-color: rgb(170,0,0);
}
.databox-button-toggle {
  width: 25px;
  height: 10px;
  background-color: #f00;
  border: 0;
  border-radius: 3px;
  box-shadow: 0 0 0 1px #900,
    0 0 0 2px #B71C1C,
    0 0 3px 3px #C62828,
    1px 1px 2px 1px inset #E57373;
  transition: all 0.2s;
  position: absolute;
  right: 3px;

}
.databox-button-toggle:hover {
  background-color: #f33;
  box-shadow: 0 0 0 1px #900,
    0 0 0 2px #B71C1C,
    0 0 3px 3px #C62828,
    1px 1px 2px 1px inset #EF9A9A;
}
.databox-container-hidden .databox-child {
  display: none;
}
`;
    addCss(css);
}
