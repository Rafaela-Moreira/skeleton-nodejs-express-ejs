let connect = function(){
  if (global.connection){
    return global.connection.connect();
  }

  const { Pool } = require("pg");
  const pool = new Pool({
    connectionString: "postgres://iwdljnjk:t_9IvjCPiosu1PmLIsaTWdvau_m3lKdH@kesavan.db.elephantsql.com/iwdljnjk"
  });

  global.connection = pool;
  return pool.connect();
}

module.exports = { connect }