express = require("express");

app = express();

app.get("/", (req, res)=>{
	res.send("OK");
});

app.listen(3000, ()=>{
	console.log("Listening...");
});
