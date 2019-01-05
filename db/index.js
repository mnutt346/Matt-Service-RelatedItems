const { Pool } = require('pg')
require('dotenv').config()

const pool = new Pool({
    database: 'projects',
    host: process.env.DB_HOST || '127.0.0.1',
    user: process.env.DB_USER || 'student',
    password: process.env.DB_PASSWORD || 'student'
})

module.exports = {
    query: (text, params, callback) => {
        return pool.query(text, params, callback)
    }
}