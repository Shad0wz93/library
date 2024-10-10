"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
require("../../assets/css/styleCard.css");
/**
 * Composant Card affichant une image avec un titre et un contenu
 * @param title - Titre du composant
 * @param content - Contenu texte du composant
 * @param srcImg - Lient de l'image à afficher
 * @param bkColor - Couleur fond de la Card
 * @returns
 */
var Card = function (_a) {
    var title = _a.title, content = _a.content, srcImg = _a.srcImg, bkColor = _a.bkColor;
    return (react_1.default.createElement("div", { className: "card ".concat(bkColor) },
        react_1.default.createElement("img", { src: srcImg }),
        react_1.default.createElement("h1", { className: "card-title ".concat(bkColor) }, title),
        react_1.default.createElement("p", { className: "card-description ".concat(bkColor) }, content)));
};
exports.default = Card;
