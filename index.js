const express = require("express");
var bodyParser = require("body-parser");
const app = express();
const port = 9000;
app.use(bodyParser.json());
// app.get("/cal1", sendcalculation);
app.post("/cal2", postcal);
// app.put("/cal3", putcal);
// app.delete("/cal4", delcal);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

//app.use(middleware);

// let numeroftimescalled = 0;
// function middleware(req, res, next) {
//   numeroftimescalled = numeroftimescalled + 1;
//   console.log(numeroftimescalled);
//   next();
// }

function calSum(n) {
  var sum = 0;
  for (var i = 0; i < n; i++) {
    sum += i;
  }
  return sum;
}

// function sendcalculation(req, res) {
//   var ans = calSum(10);

//   res.send("The sum is" + ans);
// }
function postcal(req, res) {
  console.log(req.body.name);
  var ans = calSum(20);
  res.send("POST" + ans);
}
// function putcal(req, res) {
//   var ans = calSum(30);

//   res.send("The sum is" + ans);
// }
// function delcal(req, res) {
//   var ans = calSum(40);

//   res.send("The sum is" + ans);
// }
