"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const brandsController_1 = __importDefault(require("../controllers/brandsController"));
class BrandsRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', brandsController_1.default.list);
        this.router.get('/:id_mar', brandsController_1.default.getOne);
        this.router.post('/', brandsController_1.default.create);
        this.router.put('/:id_mar', brandsController_1.default.update);
        this.router.delete('/:id_mar', brandsController_1.default.delete);
    }
}
const brandsRoutes = new BrandsRoutes();
exports.default = brandsRoutes.router;
