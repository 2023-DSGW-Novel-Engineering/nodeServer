const express = require("express");
const app = express();
const cors = require("cors");
const axios = require("axios");
app.use(express.json());
app.use(cors());

app.listen(8080, () => {
  console.log("서버 시작");
});

app.post("/translate", function (req, res) {
  const client_id = "NjfL_TVrQbeE4JovOYCh";
  const client_secret = "aUfTj1tgok";
  const api_url = "https://openapi.naver.com/v1/papago/n2mt";
  axios
    .post(
      api_url,
      {
        source: req.body.language,
        target: "ko",
        text: req.body.text,
      },
      {
        headers: {
          "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
          "X-Naver-Client-Id": client_id,
          "X-Naver-Client-Secret": client_secret,
        },
      }
    )
    .then((e) => {
      console.log(e.data.message.result.translatedText);
      let translateLanguage = e.data.message.result.translatedText;
      res.send({ translateLanguage });
    })
    .catch((e) => {
      console.log(e, "Error");
      res.send({ data: "error" });
    });
});

app.post("/translate/ko", function (req, res) {
  const client_id = "NjfL_TVrQbeE4JovOYCh";
  const client_secret = "aUfTj1tgok";
  const api_url = "https://openapi.naver.com/v1/papago/n2mt";
  axios
    .post(
      api_url,
      {
        source: "ko",
        target: req.body.language,
        text: req.body.text,
      },
      {
        headers: {
          "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
          "X-Naver-Client-Id": client_id,
          "X-Naver-Client-Secret": client_secret,
        },
      }
    )
    .then((e) => {
      console.log(e.data.message.result.translatedText);
      let translateLanguage = e.data.message.result.translatedText;
      res.send({ translateLanguage });
    })
    .catch((e) => {
      console.log(e, "Error");
      res.send({ data: "error" });
    });
});
