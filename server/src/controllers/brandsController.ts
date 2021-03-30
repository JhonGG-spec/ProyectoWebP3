import { Request, Response } from 'express';

import pool from '../database';

class BrandsController {

    public async list (req: Request, res: Response) {
        const brands = await pool.query('SELECT * FROM marca');
        res.json(brands);
    }

    public async getOne (req: Request, res: Response): Promise<any>{
        const { id_mar } = req.params;
        const brands = await pool.query('SELECT * FROM marca WHERE id_mar = ?', [id_mar]);
        if(brands.length > 0){
            return res.json(brands[0]);
        }
        res.status(404).json({text: "The brand doesn't exists"});
    }

    public async create(req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO marca set ?', [req.body]);
        res.json({message: 'Brand Saved'});
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const {id_mar} = req.params;
        await pool.query('DELETE FROM marca WHERE id_mar = ?', [id_mar]);
        res.json({message: "Brand was Deleted"});
    }

    public async update(req: Request, res: Response): Promise<void> {
        const {id_mar} = req.params;
        await pool.query('UPDATE marca set ? WHERE id_mar = ?', [req.body, id_mar]);
        res.json({message: "Brand was Updated"});
    }

}

export const brandsController = new BrandsController();
export default brandsController;