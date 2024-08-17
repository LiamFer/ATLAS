var request = require("request");
const API = "http://localhost:8090/api/readers";
let user = {
  name: "usuario1",
  email: "response",
  password: "345",
};

request.post(API, { json: user }, function (error, response, body) {
  if (!error && response.statusCode == 201) {
    console.log(body);
  }
});
