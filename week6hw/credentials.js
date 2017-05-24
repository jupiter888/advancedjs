
module.exports = {
    mongo: {
        development:{
            connectionString:'mongodb://<jupiter888>:<password>@ds137281.mlab.com:37281/mongo_db_uno'
        }
    }
};

//then you call this instead of the line with your credentials, mongo.development.connectionString();
