"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categoriesController_1 = __importDefault(require("../controllers/categoriesController"));
class CategoriesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', categoriesController_1.default.list);
        this.router.get('/:codigo_cat', categoriesController_1.default.getOne);
        this.router.post('/', categoriesController_1.default.create);
        this.router.put('/:codigo_cat', categoriesController_1.default.update);
        this.router.delete('/:codigo_cat', categoriesController_1.default.delete);
    }
}
const categoriesRoutes = new CategoriesRoutes();
exports.default = categoriesRoutes.router;
