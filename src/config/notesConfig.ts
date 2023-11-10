require('dotenv').config();

export const notesSqlConfig = {
    user:"sa",
    password:"root",
    database:"Mill",
    server:'localhost',
    pool:{
        max:10,
        min:0,
        idleTimeoutMillis:30000
    },
    options:{
        encrypt:false,
        trustServerCertificate: true,
    }

}