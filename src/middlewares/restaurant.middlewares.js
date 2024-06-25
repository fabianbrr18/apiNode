// restaurant.middlewares.js

import Joi from '@hapi/joi';

export default {
  createRestaurant: Joi.object({
    name: Joi.string().required(),
    location: Joi.string().required(),
    // Otros campos necesarios para la creación de restaurantes
  }),
  // Implementa esquemas de validación para actualizar, eliminar y otras operaciones según sea necesario
};
