//if you have sepecial character use different as below:
//mongoURI: `mongodb+srv://Devadmin:${encode}713098sally@devconnector-r5quk.mongodb.net/test?retryWrites=true&w=majority`

if (process.env.NODE_ENV === 'production'){
    module.exports = require('./keys_prod');

} else{
    module.exports = require('./key_dev');
}

// module.exports = {
//     mongoURI: 'mongodb+srv://Devadmin:Password123@devconnector-r5quk.mongodb.net/test?retryWrites=true&w=majority',
//     secretOrKey: 'secret'
// }



