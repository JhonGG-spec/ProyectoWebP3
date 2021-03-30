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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.brandsController = void 0;
const database_1 = __importDefault(require("../database"));
class BrandsController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const brands = yield database_1.default.query('SELECT * FROM marca');
            res.json(brands);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_mar } = req.params;
            const brands = yield database_1.default.query('SELECT * FROM marca WHERE id_mar = ?', [id_mar]);
            if (brands.length > 0) {
                return res.json(brands[0]);
            }
            res.status(404).json({ text: "The brand doesn't exists" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO marca set ?', [req.body]);
            res.json({ message: 'Brand Saved' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_mar } = req.params;
            yield database_1.default.query('DELETE FROM marca WHERE id_mar = ?', [id_mar]);
            res.json({ message: "Brand was Deleted" });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_mar } = req.params;
            yield database_1.default.query('UPDATE marca set ? WHERE id_mar = ?', [req.body, id_mar]);
            res.json({ message: "Brand was Updated" });
        });
    }
}
exports.brandsController = new BrandsController();
exports.default = exports.brandsController;
