
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
