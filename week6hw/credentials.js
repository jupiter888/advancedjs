var mongoose= require('mongoose');

mongo: {
    development:{
        connectionString:'mongodb://<dbuser>:<dbpassword>@ds137281.mlab.com:37281/mongo_db_uno'
    },
    production:{
        connectionString:'mongodb://<dbuser>:<dbpassword>@ds137281.mlab.com:37281/mongo_db_uno',
    },
},


listen var opts={
    server:{
        socketOptions:{keepAlive:1 }
    };

switch(app.get('env')){
    case 'development':
        mongoose.connect(credentials.mongo.development.connectionString,opts);
        break;
    case 'production':
        mongoose.connect(credenials.mongo.production.connectionString, opts);
        break;
    default: 
    throw new Error('Unknown execution enviroment: ' + app.get('env'));
}
    
    
    



