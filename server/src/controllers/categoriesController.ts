import { Request, Response } from 'express';

import pool from '../database';

class CategoriesController {

    public async list (req: Request, res: Response) {
        const categories = await pool.query('SELECT * FROM categoria');
        res.json(categories);
    }

    public async getOne (req: Request, res: Response): Promise<any>{
        const { codigo_cat } = req.params;
        const categories = await pool.query('SELECT * FROM categoria WHERE codigo_cat = ?', [codigo_cat]);
        if(categories.length > 0){
            return res.json(categories[0]);
        }
        res.status(404).json({text: "The category doesn't exists"});
    }

    public async create(req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO categoria set ?', [req.body]);
        res.json({message: 'Category Saved'});
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const {codigo_cat} = req.params;
        await pool.query('DELETE FROM categoria WHERE codigo_cat = ?', [codigo_cat]);
        res.json({message: "Category was Deleted"});
    }

    public async update(req: Request, res: Response): Promise<void> {
        const {codigo_cat} = req.params;
        await pool.query('UPDATE categoria set ? WHERE codigo_cat = ?', [req.body, codigo_cat]);
        res.json({message: "Category was Updated"});
    }

}

export const categoriesController = new CategoriesController();
export default categoriesController;