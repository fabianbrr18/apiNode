// restaurant.controller.js

import Provider from '../models/provider.model.js';

export const createProvider = async (req, res) => {
  try {
    const { provider_name, provider_contact_name,} = req.body;
    const newProvider = await Provider.create({ 
        provider_name, 
        provider_contact_name,
    });

    res.status(201).json({
      ok: true,
      status: 201,
      message: 'Provider created successfully',
      id:newProvider.provider_id,
    });
  } catch (error) {
    console.error('Error creating Menu:', error);
    res.status(500).json({
      message: 'Something went wrong in the request',
      status: 500,
    });
  }
};

export const showProvider = async(req,res)=>{
  try{
    await Provider.sync();
    const showProvider = await Provider.findAll();
    res.status(200).json({
      ok: true,
      status: 200,
      message: 'show Provider',
      body: showProvider
  });

  }catch (error){
    return res.status(500).json({
      message: `Something went wrong in the request: ${error}`,
      status: 500
    });
  }
}

export const showIdProvider = async (req, res) => {
  try {
      await Provider.sync();
      const idProvider = req.params.id;
      const showProviderId = await Provider.findOne({
          where: {
            provider_id: idProvider
          }
      });
      res.status(200).json({
          ok: true,
          status: 200,
          message: 'Show Provider id',
          body: showProviderId
      });
  } catch (error) {
      return res.status(500).json({
          message: `Something went wrong in the request: ${error}`,
          status: 500
      });
  }
}

export const updateProvider = async (req, res) => {
  try {
      await Provider.sync();
      const {provider_name, provider_contact_name,} = req.body;
      const idProvider = req.params.id;
      const updateProvider = await Provider.update({
        provider_name, 
        provider_contact_name, 
      }, {
          where: {
            provider_id: idProvider
          }
      });
      res.status(200).json({
          ok: true,
          status: 200,
          message: 'Provider updated',
          body: updateProvider
      });
  } catch (error) {
      return res.status(500).json({
          message: `Something went wrong in the request: ${error}`,
          status: 500
      });
  }
}

export const deleteProvider = async (req, res) => {
  try {
      await Provider.sync();
      const idProvider = req.params.id;
      const deleteProvider = await Provider.destroy({
          where: {
            provider_id: idProvider
          }
      });
      res.status(200).json({
          ok: true,
          status: 204,
          message: 'Delete provider',
          body: deleteProvider
      });
  } catch (error) {
      return res.status(500).json({
          message: `Something went wrong in the request: ${error}`,
          status: 500
      });
  }
}
// Implementa los controladores restantes para actualizar, eliminar y obtener un restaurante por ID según sea necesario
