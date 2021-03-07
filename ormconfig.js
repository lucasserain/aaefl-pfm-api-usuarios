console.log('process.env.host', process.env.DB_HOST);
module.exports ={
  "type": "postgres",
  "host": process.env.DB_HOST,
  "port": process.env.DB_PORT,
  "username": process.env.DB_USER,
  "password": process.env.DB_PASS,
  "database": process.env.DB_NAME,
  "entities": [
    "./dist/src/models/*.js"
  ],
  "migrations": [
    "./dist/src/database/migrations/*.js"
  ],
  "cli":{
    "migrationsDir":"./src/database/migrations"
  },
  "autoSchemaSync": true
}
