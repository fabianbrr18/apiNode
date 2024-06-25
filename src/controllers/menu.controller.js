// restaurant.controller.js

import MenuItem from '../models/menu.model.js';

export const createMenu = async (req, res) => {
  try {
    const { menu_name, menu_price,} = req.body;
    const newMenu = await MenuItem.create({ 
        menu_name, 
        menu_price,
    });

    res.status(201).json({
      ok: true,
      status: 201,
      message: 'Menu created successfully',
      id: newMenu.menu_item_id,
    });
  } catch (error) {
    console.error('Error creating Menu:', error);
    res.status(500).json({
      message: 'Something went wrong in the request',
      status: 500,
    });
  }
};

export const showMenu = async(req,res)=>{
  try{
    await MenuItem.sync();
    const showMenu = await MenuItem.findAll();
    res.status(200).json({
      ok: true,
      status: 200,
      message: 'show Menu',
      body: showMenu
  });

  }catch (error){
    return res.status(500).json({
      message: `Something went wrong in the request: ${error}`,
      status: 500
    });
  }
}

export const showIdMenu = async (req, res) => {
  try {
      await MenuItem.sync();
      const idMenu = req.params.id;
      const showMenuId = await MenuItem.findOne({
          where: {
            menu_item_id: idMenu
          }
      });
      res.status(200).json({
          ok: true,
          status: 200,
          message: 'Show Menu id',
          body: showMenuId
      });
  } catch (error) {
      return res.status(500).json({
          message: `Something went wrong in the request: ${error}`,
          status: 500
      });
  }
}

export const updateMenu = async (req, res) => {
  try {
      await MenuItem.sync();
      const {menu_name, menu_price,} = req.body;
      const idMenu = req.params.id;
      const updateMenu = await MenuItem.update({
        menu_name, 
        menu_price, 
      }, {
          where: {
            menu_item_id: idMenu
          }
      });
      res.status(200).json({
          ok: true,
          status: 200,
          message: 'Menu updated',
          body: updateMenu
      });
  } catch (error) {
      return res.status(500).json({
          message: `Something went wrong in the request: ${error}`,
          status: 500
      });
  }
}

export const deleteMenu = async (req, res) => {
  try {
      await MenuItem.sync();
      const idMenu = req.params.id;
      const deleteMenu = await MenuItem.destroy({
          where: {
            menu_item_id: idMenu
          }
      });
      res.status(200).json({
          ok: true,
          status: 204,
          message: 'Delete Menu',
          body: deleteMenu
      });
  } catch (error) {
      return res.status(500).json({
          message: `Something went wrong in the request: ${error}`,
          status: 500
      });
  }
}
// Implementa los controladores restantes para actualizar, eliminar y obtener un restaurante por ID según sea necesario
