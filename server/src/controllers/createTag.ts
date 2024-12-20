const Tag = require('../models/tag')

export async function createTagController(req: any, res: any) {
    try {
        const {emoji, description} = req.body;

        if (!emoji || emoji.length === 0) {
            return res.status(400).json({message: 'Emoji is required'});
        }
        if (!description || description.length === 0) {
            return res.status(400).json({message: 'Description is required'});
        }

        const tag = new Tag({
            emoji: req.body.emoji,
            description: req.body.description,
        })

        const newTag = await tag.save();
        res.status(201).json(newTag);

    } catch (error) {
        res.status(500).json({error: error.toString()});
    }
}
