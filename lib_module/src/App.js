"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./App.css");
var react_router_dom_1 = require("react-router-dom");
var card_1 = __importDefault(require("./components/molecules/card"));
var link = 'https://static1.cbrimages.com/wordpress/wp-content/uploads/2019/09/Pokemon-Ash-Feature-Image-1.jpg?q=50&fit=crop&w=1140&h=&dpr=1.5';
function App() {
    return (React.createElement(react_router_dom_1.BrowserRouter, null,
        React.createElement(react_router_dom_1.Routes, null,
            React.createElement(react_router_dom_1.Route, { path: '/', element: React.createElement(card_1.default, { title: 'Mon titre', content: "Ca c'est moi", srcImg: link, bkColor: 'green' }) }))));
}
exports.default = App;
