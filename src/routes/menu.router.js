// restaurant.router.js

import { Router } from 'express';
import { createMenu, showMenu, showIdMenu, updateMenu, deleteMenu} from '../controllers/menu.controller.js';
import  verifyToken  from "../middlewares/jwt.middleware.js";

const router = Router();

router.post('/menu',verifyToken, createMenu);
router.get('/menu',verifyToken, showMenu);
router.get('/menu/:id',verifyToken, showIdMenu);
router.put('/menu/:id',verifyToken, updateMenu);
router.delete('/menu/:id',verifyToken, deleteMenu);

// Implementa rutas para actualizar, eliminar y obtener un restaurante por ID según sea necesario

export default router;
