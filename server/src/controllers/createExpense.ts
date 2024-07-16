export async function createExpensesController(req: any, res: any) {
    try {
        console.log(req.body);

        const {db} = req.app;
        const {emoji, description,date, price} = req.body;

       //tu mozna warunki dodac na obecnosc emoji i decription oraz na dlugosc

        if (!emoji) {
            return res.status(400).json({message: 'Emoji is required'});
        }

        if (!description) {
            return res.status(400).json({message: 'Description is required'});
        }
        if (!price) {
            return res.status(400).json({message: 'Price is required'});
        }
        if (!date) {
            return res.status(400).json({message: 'Date is required'});
        }

        const result = await db.collection('expenses').insertOne({
            emoji,
            description,
            price,
            date,
        });

        if (result.acknowledged) {
            res.status(200).json({message: 'Expense created'});
        } else {
            throw new Error('Expense not created');
        }
    } catch (error) {
        res.status(500).json({error: error.toString()});
    }
}
