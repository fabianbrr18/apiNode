// restaurant.controller.js

import Restaurant from '../models/restaurant.model.js';

export const createRestaurant = async (req, res) => {
  try {
    const { restaurant_name, restaurant_location, menu_FK, provider_FK } = req.body;
    const newRestaurant = await Restaurant.create({ 
      restaurant_name, 
      restaurant_location,
      menu_FK,
      provider_FK
    });

    res.status(201).json({
      ok: true,
      status: 201,
      message: 'Restaurant created successfully',
      id: newRestaurant.restaurant_id,
    });
  } catch (error) {
    console.error('Error creating restaurant:', error);
    res.status(500).json({
      message: `Something went wrong in the request ${error}`,
      status: 500,
    });
  }
};

export const showRestaurant = async(req,res)=>{
  try{
    await Restaurant.sync();
    const showRestaurant = await Restaurant.findAll();
    res.status(200).json({
      ok: true,
      status: 200,
      message: 'show Restaurant',
      body: showRestaurant
  });

  }catch (error){
    return res.status(500).json({
      message: `Something went wrong in the request: ${error}`,
      status: 500
    });
  }
}

export const showIdRestaurant = async (req, res) => {
  try {
      await Restaurant.sync();
      const idRestaurant = req.params.id;
      const showRestaurantId = await Restaurant.findOne({
          where: {
            restaurant_id: idRestaurant
          }
      });
      res.status(200).json({
          ok: true,
          status: 200,
          message: 'Show restaurant id',
          body: showRestaurantId
      });
  } catch (error) {
      return res.status(500).json({
          message: `Something went wrong in the request: ${error}`,
          status: 500
      });
  }
}

export const updateRestaurant = async (req, res) => {
  try {
      await Restaurant.sync();
      const {restaurant_name, restaurant_location, menu_FK,provider_FK} = req.body;
      const idRestaurant = req.params.id;
      const updateRestaurant = await Restaurant.update({
          restaurant_name, 
          restaurant_location, 
          menu_FK,
          provider_FK,  
      }, {
          where: {
            restaurant_id: idRestaurant
          }
      });
      res.status(200).json({
          ok: true,
          status: 200,
          message: 'Restaurant updated',
          body: updateRestaurant
      });
  } catch (error) {
      return res.status(500).json({
          message: `Something went wrong in the request: ${error}`,
          status: 500
      });
  }
}

export const deleteRestaurant = async (req, res) => {
  try {
      await Restaurant.sync();
      const idRestaurant = req.params.id;
      const deleteRestaurant = await Restaurant.destroy({
          where: {
            restaurant_id: idRestaurant
          }
      });
      res.status(200).json({
          ok: true,
          status: 204,
          message: 'Delete Restaurant',
          body: deleteRestaurant
      });
  } catch (error) {
      return res.status(500).json({
          message: `Something went wrong in the request: ${error}`,
          status: 500
      });
  }
}
// Implementa los controladores restantes para actualizar, eliminar y obtener un restaurante por ID según sea necesario
