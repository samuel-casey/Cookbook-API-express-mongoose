"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var express = require("express");
var router = express.Router();
var Cookbook = require('../models/Cookbook');
var ICookbook = require('../models/interfaces').ICookbook;
// MONGO ACTIONS (HELPER FUNCTIONS FOR ROUTES)
// find all cookbooks
var index = function () {
    return Cookbook.find();
};
// find cookbook by title
var show = function (cookbookTitle, yearPublished) {
    if (cookbookTitle && yearPublished) {
        return Cookbook.find({ title: cookbookTitle, yearPublished: yearPublished });
    }
    else if (cookbookTitle) {
        return Cookbook.find({ title: cookbookTitle });
    }
    else {
        return Cookbook.find({ yearPublished: yearPublished });
    }
};
// post a new cookbook to the DB 
var create = function (newCookbook) {
    return Cookbook.create({ title: newCookbook.title, yearPublished: newCookbook.yearPublished });
};
var update = function (title, newTitle) {
    return Cookbook.findOneAndUpdate({ title: title }, { $set: { title: newTitle } }, { "new": true, useFindAndModify: false });
};
var destroy = function (title) {
    return Cookbook.findOneAndDelete({ title: title }, { useFindAndModify: false });
};
// Write the route to list all cookbooks
router.get('/', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var allCookbooks, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, index()];
            case 1:
                allCookbooks = _a.sent();
                res.json({
                    status: 200,
                    message: "ok",
                    data: allCookbooks
                });
                console.log(allCookbooks);
                return [3 /*break*/, 3];
            case 2:
                err_1 = _a.sent();
                console.log(err_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
// Write the route to get cookbook by title
// Write the route to get cookbook by year published
// ** this route returns the cookbook based on title AND/OR year depending on what's passed in the request body **
router.get('/book/', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var cookbook, err_2, cookbook, err_3, cookbook, err_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!(req.body.title && req.body.yearPublished === undefined)) return [3 /*break*/, 5];
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, show(req.body.title.toLowerCase())];
            case 2:
                cookbook = _a.sent();
                res.json({
                    status: 200,
                    message: "ok",
                    data: cookbook
                });
                console.log(cookbook);
                return [3 /*break*/, 4];
            case 3:
                err_2 = _a.sent();
                console.log(err_2);
                return [3 /*break*/, 4];
            case 4: return [3 /*break*/, 13];
            case 5:
                if (!(req.body.title === undefined && req.body.yearPublished)) return [3 /*break*/, 10];
                _a.label = 6;
            case 6:
                _a.trys.push([6, 8, , 9]);
                return [4 /*yield*/, show(req.body.title, req.body.yearPublished)];
            case 7:
                cookbook = _a.sent();
                res.json({
                    status: 200,
                    message: "ok",
                    data: cookbook
                });
                console.log(cookbook);
                return [3 /*break*/, 9];
            case 8:
                err_3 = _a.sent();
                console.log(err_3);
                return [3 /*break*/, 9];
            case 9: return [3 /*break*/, 13];
            case 10:
                _a.trys.push([10, 12, , 13]);
                return [4 /*yield*/, show(undefined, req.body.yearPublished)];
            case 11:
                cookbook = _a.sent();
                res.json({
                    status: 200,
                    message: "ok",
                    data: cookbook
                });
                console.log(cookbook);
                return [3 /*break*/, 13];
            case 12:
                err_4 = _a.sent();
                console.log(err_4);
                return [3 /*break*/, 13];
            case 13: return [2 /*return*/];
        }
    });
}); });
// Write the route to create a cookbook
router.post('/', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var newCookbook, err_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                console.log(req.body);
                return [4 /*yield*/, create(req.body)];
            case 1:
                newCookbook = _a.sent();
                res.json({
                    status: 200,
                    message: "ok",
                    data: newCookbook
                });
                console.log(newCookbook);
                return [3 /*break*/, 3];
            case 2:
                err_5 = _a.sent();
                console.log(err_5);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
// Write the route to update a cookbook (find by title)
router.put('/books/:cookbookTitle', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var updatedCookbook, err_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, update(req.params.cookbookTitle, req.body.newTitle)];
            case 1:
                updatedCookbook = _a.sent();
                res.json({
                    status: 200,
                    message: "ok",
                    data: updatedCookbook
                });
                return [3 /*break*/, 3];
            case 2:
                err_6 = _a.sent();
                console.log(err_6);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
// Write the route to delete the cookbook by title
router["delete"]('/books/:cookbookTitle', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var deletedCookbook, err_7;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, destroy(req.params.cookbookTitle)];
            case 1:
                deletedCookbook = _a.sent();
                res.json({
                    status: 200,
                    message: "ok",
                    data: deletedCookbook
                });
                return [3 /*break*/, 3];
            case 2:
                err_7 = _a.sent();
                console.log(err_7);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
module.exports = router;
