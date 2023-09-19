// express ライブラリをimport
const express = require('express');

// mysqlを使うためのコード
const mysql = require('mysql');

// expressクラスのインスタンスを作成・保持
const app = express();

// JSONでデータをやり取りしたい場合以下を記述
// app.use(express.json());

/* cssとか画像の入ったファイルの読み込み　cssの適用のために必要 */
app.use(express.static('public'));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'guit15sk',
  database: 'progate',
});

connection.connect((err) => {
  if (err) {
    console.log('error connecting:' + err.stack);
    return;
  }
  console.log('success');
});

app.get('/sql', (req, res) => {
  connection.query(
    'SELECT * FROM items',
    (error, results) => {
      console.log(results);
      res.render('hello.ejs');
    }
  );
});

/* ルーティング　urlにアクセスしたときに何するかの処理 */
app.get('/', (req, res) => {
    res.render('top.ejs');
});
  
app.get('/contact', (req, res) => {
  res.render('contact.ejs')
});

// サーバー起動(ポート3000)
app.listen(3000, () => console.log("ok"));


// get use とかのメソッドがあんまりわかんない
