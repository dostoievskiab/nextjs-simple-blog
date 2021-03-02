import Handler from "./[id]"

const db = require('../../../database/db')

export default async function handler(req,res){
    try {
        let respdb = await db.select('*').from('posts')
        res.status(200).json(respdb)
    } catch (e) {
        res.status(200).json({ error: 'not found'})
    }
}