// 템플릿
const express = require("express");
const app = express();

//body-parser 사용설정
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
// mongoDB 템플릿
const MongoClient = require("mongodb").MongoClient;

// 최조 경로설정
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
// 서브경로
app.get("/sol", function (req, res) {
  res.sendFile(__dirname + "/sol.html");
});
// 서브경로
app.get("/bum", function (req, res) {
  res.sendFile(__dirname + "/bum.html");
});
// post(데이터를서버에 요청하는 코드작성)
app.post("/add", function (req, res) {
  console.log(req.body);
  // res.send("전송완료");
});

let db;

MongoClient.connect(
  "mongodb+srv://EUNSOLY:Meunsol9632!!@cluster0.nkbdelr.mongodb.net/?retryWrites=true&w=majority",
  function (err, client) {
    // 만약에 에러가 있다면 log로 알려줘
    if (err) return console.log(err);

    db = client.db("self_todo");

    db.collection("list").insertOne(
      { name: "은솔", age: 30 },
      function (err, rsp) {
        console.log("저장완료");
      }
    );
  }
);

// 서버를 만들고 좌표를 연결해
app.listen(8080, function () {
  console.log("서버가 실행중입니다.");
});
