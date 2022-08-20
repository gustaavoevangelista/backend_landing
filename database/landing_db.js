const mysql = require('mysql2')


//connecting to database
const connect_MySql = async () => {
    const connection =  mysql.createConnection({
    host: 'r98du2bxwqkq3shg.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'lloqmph497lkvjcf',
    password: 'qjtjddgw22zttz8a',
    database: 'rm2afmh6eccniz58'
    })

    return connection
}

connect_MySql()


module.exports = {connect_MySql}