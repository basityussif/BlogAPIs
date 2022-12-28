import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import jsonwebtoken from "jsonwebtoken";
import routes from "./BLM/blmRoutes/blogRoute.js";

const app = express();

const PORT = 8080;


// MOngoose
mongoose.set('strictQuery', true);
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/BLdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//body-parser
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

//Jwt
app.use((req, res, next) => {
    if(req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT'){
        const decoded = jsonwebtoken.verify(req.headers.authorization.split(' ')[1], 'JhayCodes');
        req.user = decoded;
        next();
    }else{
        req.user = undefined;
        next();
    }
});

//routes
routes(app);

app.get('/', (req, res) =>
 res.send(`Node and express server running on port${PORT}`)
);

app.listen(PORT, () => {
    console.log(`Your server is running on Port${PORT}`)
});

