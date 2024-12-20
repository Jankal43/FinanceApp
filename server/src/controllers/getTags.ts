const Tag = require('../models/tag')
export async function getTagsController(req: any, res: any) {
    try {
        const result = await Tag.find()
        console.log(result)

        res.status(200).json({
            message: "Tags retrieved",
            tags: result
        });

    } catch (error) {
        res.status(500).json({error: error.toString()});
    }
}