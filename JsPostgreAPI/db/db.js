import pkg from 'pg';
const { Pool } = pkg;

// const pool = new Pool({
//     user: process.env.dbUSERNAME,
//     host: process.env.dbHOSTNAME,
//     database: process.env.dbDATABASE,
//     password: process.env.dbPASSWORD,
//     port: process.env.dbPORT
// })

const connectionString = process.env.dbURL
const pool = new Pool({
    connectionString
})

export default pool