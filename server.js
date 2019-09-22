const express = require('express');
const mongoose = require('mongoose');
const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');
const bodyParser = require('body-parser');
const passport = require('passport');


const app = express();
// Body parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//DB config
const db = require('./config/keys').mongoURI;

//Passport config
app.use(passport.initialize());
require('./config/passport')(passport);

//connect to mongoDB
mongoose.connect(db).then(() => console.log('MongoDB connected')).catch(err => console.log(err));

//First Route
app.get('/', (req,res) => res.send('Hello!'));

app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

const port = 7000;
app.listen(port, ()=> console.log(`Server running on port ${port} `));
