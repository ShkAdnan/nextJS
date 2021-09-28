const { createPool } = require('mysql');

const connection = createPool({
    host : 'localhost',
    database : 'next',
    user : 'root',
    password : '',
    port : 3306
});

connection.getConnection((err) => {
    if( err ){
        console.log("Some error");
        return;
    }
    console.log("Connected with database");
})

const executeQuery = ( query, arrayParams) => {
    return new Promise( (resolve , reject ) => {
        try{
            connection.query(query, arrayParams, (err , data) => {
                if(err){
                    console.log("Something went wrong");
                    reject(err);
                }
                resolve(data);
            });
        }catch (err){
            reject( err )
        }

    });
};

module.exports = { executeQuery };