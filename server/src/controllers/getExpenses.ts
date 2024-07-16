export async function getExpensesController(req: any, res: any) {
    try {
        const { db } = req.app;

        const result = await db.collection('expenses').find().toArray();
    

        res.status(200).json({
            message: "expenses retrieved",
            expenses: result
        });

    } catch (error) {
        res.status(500).json({ error: error.toString() });
    }
}
