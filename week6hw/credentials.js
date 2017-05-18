
module.exports = {
    mongo: {
        development:{
            connectionString:'mongodb://<dbuser>:<dbpassword>@ds137281.mlab.com:37281/mongo_db_uno'
        },
        production:{
            connectionString:'mongodb://<dbuser>:<dbpassword>@ds137281.mlab.com:37281/mongo_db_uno',
        }
    }
};
//make both of those the same
//usually differentiated to serparate the project being worked on , and the live version
//then you call this instead of the line with your credentials, mongo.development.connectionString();
//then you call this instead of the line with your credentials, mongo.production.connectionString();
