import { Router } from 'express';

import brandsController from '../controllers/brandsController';

class BrandsRoutes {

    public  router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', brandsController.list);
        this.router.get('/:id_mar', brandsController.getOne);
        this.router.post('/', brandsController.create);
        this.router.put('/:id_mar', brandsController.update);
        this.router.delete('/:id_mar', brandsController.delete);
    }
}

const brandsRoutes = new BrandsRoutes();
export default brandsRoutes.router;