import pg from 'pg'

const pool = new pg.Pool()

const query = async function(queryText, params) {
  const start = Date.now()
  const result = await pool.query(queryText, params)
  const duration = Date.now() - start
  console.log(`Query executed in ${duration} ms`)
  return result
}


export {query, pool}