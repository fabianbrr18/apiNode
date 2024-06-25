// restaurant.router.js

import { Router } from 'express';
import { createProvider, showProvider, showIdProvider, updateProvider, deleteProvider} from '../controllers/provider.controller.js';
import  verifyToken  from "../middlewares/jwt.middleware.js";

const router = Router();

router.post('/provider',verifyToken, createProvider);
router.get('/provider',verifyToken, showProvider);
router.get('/provider/:id',verifyToken, showIdProvider);
router.put('/provider/:id',verifyToken, updateProvider);
router.delete('/provider/:id',verifyToken, deleteProvider);

// Implementa rutas para actualizar, eliminar y obtener un restaurante por ID según sea necesario

export default router;
