// Importing the modules
import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

// Defining the defaults
const app = express();
const port = 3000;

//url compatibility
app.use(bodyParser.urlencoded({extended: true}));
//linking static files to javascript
app.use(express.static("public"));
//homepage requests
app.get("/", async (req, res) => {
    try {
        const result = await axios.get("https://v2.jokeapi.dev/joke/Any?amount=3");
        const data = result.data.jokes;
        console.log(data);
        res.render("index.ejs", {jokes: data});
    } catch (error) {
        console.error(error);
        res.status(500).render("Failed to fetch jokes");
    }
})

//Jokes according to category requests
app.get("/Programming", async (req,res) => {
    try {
        const result = await axios.get("https://v2.jokeapi.dev/joke/Programming?amount=3");
        const data = result.data.jokes;
        console.log(data);
        res.render("index.ejs",{jokes:data});
    } catch (error) {
        console.log(error);
        res.status(500).render("Failed to fetch Programming jokes");
    }
});

app.get("/Misc", async (req, res) => {
    try {
        const result = await axios.get("https://v2.jokeapi.dev/joke/Misc?amount=3");
        const data = result.data.jokes;
        console.log(data);
        res.render("index.ejs",{jokes: data});
    } catch (error) {
        console.log(error);
        res.status(500).render("Failed to fetch Misc jokes");
        
    }
});

app.get("/Any", async (req,res) => {
    try {
        const result = await axios.get("https://v2.jokeapi.dev/joke/Any?amount=3");
        const data = result.data.jokes;
        console.log(data);
        res.render("index.ejs", {jokes: data});
    } catch (error) {
        console.error(error);
        res.status(500).render("Failed to fetch Any jokes");
        
    }
});

app.get("/Dark", async (req, res) => {
    try {
        const result = await axios.get("https://v2.jokeapi.dev/joke/Dark?amount=3");
        const data  = result.data.jokes;
        console.log(data);
        res.render("index.ejs", {jokes: data});
    } catch (error) {
        console.error(error);
        res.sendStatus(500).render("Failed to fetch Any jokes");
        
    }
});

app.get("/Pun", async (req, res) => {
    try {
        const result = await axios.get("https://v2.jokeapi.dev/joke/Pun?amount=3");
        const data  = result.data.jokes;
        console.log(data);
        res.render("index.ejs", {jokes: data});
    } catch (error) {
        console.error(error);
        res.sendStatus(500).render("Failed to fetch Any jokes");
        
    }
});


app.get("/Spooky", async (req, res) => {
    try {
        const result = await axios.get("https://v2.jokeapi.dev/joke/Spooky?amount=3");
        const data  = result.data.jokes;
        console.log(data);
        res.render("index.ejs", {jokes: data});
    } catch (error) {
        console.error(error);
        res.sendStatus(500).render("Failed to fetch Any jokes");
        
    }
});


app.get("/Christmas", async (req, res) => {
    try {
        const result = await axios.get("https://v2.jokeapi.dev/joke/Christmas?amount=3");
        const data  = result.data.jokes;
        console.log(data);
        res.render("index.ejs", {jokes: data});
    } catch (error) {
        console.error(error);
        res.sendStatus(500).render("Failed to fetch Any jokes");
        
    }
});





app.listen(port, () => {
    console.log('listening on port ' + port);
});