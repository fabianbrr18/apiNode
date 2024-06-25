// restaurant.router.js

import { Router } from 'express';
import { createRestaurant, showRestaurant, showIdRestaurant, updateRestaurant, deleteRestaurant} from '../controllers/restaurant.controller.js';
import  verifyToken  from "../middlewares/jwt.middleware.js";

const router = Router();

router.post('/restaurant', verifyToken, createRestaurant);
router.get('/restaurant',verifyToken, showRestaurant);
router.get('/restaurant/:id',verifyToken, showIdRestaurant);
router.put('/restaurant/:id',verifyToken, updateRestaurant);
router.delete('/restaurant/:id',verifyToken, deleteRestaurant);

// Implementa rutas para actualizar, eliminar y obtener un restaurante por ID según sea necesario

export default router;
