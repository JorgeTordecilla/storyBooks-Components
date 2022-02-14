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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomBackgroundColor = exports.CustomFontColor = exports.Tertiary = exports.Secondary = exports.AllCaps = exports.Basic = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Mylabel_1 = require("../../components/Mylabel");
exports.default = {
    title: "UI/MyLabel",
    component: Mylabel_1.Mylabel,
    argTypes: {
        color: { control: "select" },
        size: { control: "select" },
        fontColor: { control: "color" },
    },
};
var Template = function (args) { return ((0, jsx_runtime_1.jsx)(Mylabel_1.Mylabel, __assign({}, args), void 0)); };
exports.Basic = Template.bind({});
exports.Basic.args = {
    label: "Basic",
    size: "normal",
};
exports.AllCaps = Template.bind({});
exports.AllCaps.args = {
    allCaps: true,
    label: "Basic",
    size: "h3",
};
exports.Secondary = Template.bind({});
exports.Secondary.args = {
    color: "secondary",
    label: "Basic",
    size: "h2",
};
exports.Tertiary = Template.bind({});
exports.Tertiary.args = {
    color: "tertiary",
    label: "Basic",
    size: "h1",
};
exports.CustomFontColor = Template.bind({});
exports.CustomFontColor.args = {
    fontColor: "firebrick",
    size: "h1",
};
exports.CustomBackgroundColor = Template.bind({});
exports.CustomBackgroundColor.args = {
    fontColor: "white",
    size: "h1",
    backgroundColor: "black",
};
