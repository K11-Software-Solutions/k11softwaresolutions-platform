import Service from "../models/Service.js";

export const getServices = async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const createService = async (req, res) => {
  try {
    const { name, description, price } = req.body;
    const service = await Service.create({ name, description, price });
    res.status(201).json(service);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
