import { Router } from 'express';

import categoriesController from '../controllers/categoriesController';

class CategoriesRoutes {

    public  router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', categoriesController.list);
        this.router.get('/:codigo_cat', categoriesController.getOne);
        this.router.post('/', categoriesController.create);
        this.router.put('/:codigo_cat', categoriesController.update);
        this.router.delete('/:codigo_cat', categoriesController.delete);
    }
}

const categoriesRoutes = new CategoriesRoutes();
export default categoriesRoutes.router;