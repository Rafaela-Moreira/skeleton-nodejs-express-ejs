const db = require("../db")

class Livro {
  static async selecionarLivro(){
    const connect = await db.connect();
    return await connect.query("select * from livros");
  }
  
 static async inserirLivro(data){
    const connect = await db.connect();
    const sql = "insert into livros (titulo, autor, editora, data_publicacao, preco) values ($1, $2, $3, $4, $5)";
    const values = [data.titulo, data.autor, data.editora, data.data_publicacao, data.preco]
    return await connect.query(sql, values);
  }

 static async atualizarLivro(data, id){
    const connect = await db.connect();
    const sql = "update livros set titulo=$1, autor=$2, editora=$3, data_publicacao=$4, preco=$5 where id = $6";
    const values = [data.titulo, data.autor, data.editora, data.data_publicacao, data.preco, data.id]
    return await connect.query(sql, values);
  }
  
 static async deletarLivro(id){
    const connect = await db.connect();
    const sql = "delete from livros where id = $1";
    const values = [id]
    return await connect.query(sql, values);
  }

}

module.exports = Livro;