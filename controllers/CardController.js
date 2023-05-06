import CardModel from "../models/Card.js";

export const getAll = async (req, res) => {
  try {
    const cards = await CardModel.find().populate("createdBy").exec();

    res.json(cards);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Failed to get cards",
    });
  }
};

export const getOne = async (req, res) => {
  try {
    const cardId = req.params.id.replace(/:/, "");

    const doc = await CardModel.findById(cardId).exec();

    res.json(doc);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Failed to get card",
    });
  }
};

export const create = async (req, res) => {
  try {
    const doc = new CardModel({
      brand: req.body.brand,
      model: req.body.model,
      cost: req.body.cost,
      color: req.body.color,
      materials: req.body.materials,
      imageUrl: req.body.imageUrl,
      sex: req.body.sex,
      forKids: req.body.forKids,
      createdBy: req.userId,
    });

    const card = await doc.save();

    res.json(card);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Failed to create card",
    });
  }
};

export const remove = async (req, res) => {
  try {
    const cardId = req.params.id.replace(/:/, "");

    await CardModel.findOneAndDelete({
      _id: cardId,
    });

    res.json({
      message: "Card has been deleted",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Failed to delete card",
    });
  }
};

export const update = async (req, res) => {
  try {
    const cardId = req.params.id.replace(/:/, "");

    await CardModel.updateOne(
      {
        _id: cardId,
      },
      {
        brand: req.body.brand,
        model: req.body.model,
        cost: req.body.cost,
        color: req.body.color,
        materials: req.body.materials,
        imageUrl: req.body.imageUrl,
        sex: req.body.sex,
        forKids: req.body.forKids,
        createdBy: req.userId,
      }
    );

    res.json({
      message: "Card has been updated",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Failed to update card",
    });
  }
};