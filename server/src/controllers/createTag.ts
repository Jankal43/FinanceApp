export async function createTagController(req: any, res: any) {
    try {
        console.log(req.body);

        const {db} = req.app;
        const {emoji, description} = req.body;

       //tu mozna warunki dodac na obecnosc emoji i decription oraz na dlugosc

        if (!emoji) {
            return res.status(400).json({message: 'Emoji is required'});
        }

        if (!description) {
            return res.status(400).json({message: 'Description is required'});
        }

        const result = await db.collection('tags').insertOne({
            emoji,
            description
        });

        if (result.acknowledged) {
            res.status(200).json({message: 'Tag created'});
        } else {
            throw new Error('Tag not created');
        }
    } catch (error) {
        res.status(500).json({error: error.toString()});
    }
}
