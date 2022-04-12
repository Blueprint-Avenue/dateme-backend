import express from "express";
import mongoose from "mongoose";

//  App Config
const app = express();
const port = process.env.PORT || 8001;
const connection_url =
	"mongodb+srv://admin:Wolves22@cluster0.afoom.mongodb.net/datemedb?retryWrites=true&w=majority";

// Middlewares

// DB config
mongoose.connect(connection_url, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

// API Endpoints
app.get("/", (req, res) => res.status(200).send("Hello World"));

// Listener

app.listen(port, () => console.log(`listening on localhost: ${port}`));
