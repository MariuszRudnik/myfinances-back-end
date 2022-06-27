const oremTypes = {
    "type": "mysql",
    "host": "localhost",
    "port": 8889,
    "username": "root",
    "password": "root",
    "database": "myfinances",
    "entities": ["dist/**/**.entity{.ts,.js}"],
    "bigNumberStrings": false,
    "logging": true,
    "synchronize": true
}
module.exports ={
    oremTypes
}