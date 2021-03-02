const db = require('../../../database/db')

export default async function Handler(req, res) {
    try {
        let response = await db.select('*').from('posts').where('id',req.query.id)
        if (response.length == 0 ) throw new Error('not found')
        res.status(200).json(response)
    } catch (e) {
        console.log(e)
        res.status(400).json({error: e.message})
    }
}