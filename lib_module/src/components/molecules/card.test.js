"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("@testing-library/jest-dom");
var react_1 = require("@testing-library/react");
var card_1 = __importDefault(require("./card"));
describe('Card Component', function () {
    test('renders Card with correct props', function () {
        var props = {
            title: 'Test Card Title',
            content: 'This is a description of the test card.',
            srcImg: 'test-image.jpg',
            bkColor: 'red',
        };
        (0, react_1.render)(React.createElement(card_1.default, __assign({}, props)));
        var imgElement = react_1.screen.getByRole('img');
        var titleElement = react_1.screen.getByText(props.title);
        var contentElement = react_1.screen.getByText(props.content);
        expect(imgElement).toHaveAttribute('src', props.srcImg);
        expect(titleElement).toBeInTheDocument();
        expect(contentElement).toBeInTheDocument();
        var cardElement = react_1.screen.getByRole('img').parentElement;
        expect(cardElement).toHaveClass('card');
        expect(cardElement).toHaveClass(props.bkColor);
    });
});
