var express = require('express');
var path = require('path');
const dbConfig = require('./config/db.config');
var app = express();
const db = require('./models');
const controller = require('./controllers/userController')

app.use(express.static(__dirname + '/public'));

db.mongoose
  .connect(dbConfig.URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
});

const authRoute = require('./routes/userRoute');
const galerieRoute = require('./routes/galerieRoute');
const prestationRoute =require('./routes/prestationRoute')
const planningRoute = require('./routes/planningRoute')
const { json } = require('body-parser');

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization, x-access-token"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

app.use(express.json())
app.use('/api', authRoute);
app.use('/api', galerieRoute);
app.use('/api', prestationRoute);
app.use('/api', planningRoute);

// app.get("/", (req, res) => {
//     res.json({ message: "bienvenue sur le serveur" });
// });

app.get('/', (req, res) =>{
  res.sendFile(path.join(__dirname + '/public/index.html'));
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});