const db = require("../db")

class Autor {
  static async selecionar(){
    const connect = await db.connect();
    return await connect.query("SELECT * FROM autores");
    
  }
}

module.exports = Autor;


