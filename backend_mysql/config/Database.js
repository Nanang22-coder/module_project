import { Sequelize } from "sequelize";

const db = new Sequelize('dbname','dbuser','password',{host: 'localhost',dialect: 'mysql'
})

export default db