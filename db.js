let connect = function(){
  if (global.connection){
    return global.connection.connect();
  }

  const { Pool } = require("pg");
  const pool = new Pool({
    connectionString: "postgres://rctxpwtk:rGcWaX61OXDL3THS2HDAuTC9OJ4WOFeJ@kesavan.db.elephantsql.com/rctxpwtk"
  });

  global.connection = pool;
  return pool.connect();
}

module.exports = { connect }