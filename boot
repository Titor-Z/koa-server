#! /usr/local/bin/node
const { argv } = require("process")
const fetch = require("got")

//  Template
//  node boot get::/a/b/c  post::/user  --data=a:1,b,2

// fetch("http://localhost:3000/")
//   .then((res) => console.log(res.body))
//   .catch((err) => console.log("Error:", err))
if (argv.length < 3) return console.log("你未请求任何数据")

const newArgv = argv.splice(2)[0].split("::")
let [method, url] = newArgv

const methodType = ["get", "post"]

switch (method) {
  case "get":
    console.log("get")
    break
  case "post":
    console.log("post")
    break
}
