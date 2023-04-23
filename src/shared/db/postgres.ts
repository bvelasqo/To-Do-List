// CloudSQL Connection. If is possible create a clase for this to connect to the database and display a client to manage the database.
// No create class if exists any orm for cloudsql. Just connect the database.
import { DataSource } from "typeorm"

const client = new DataSource({
  "type": "postgres",
  "host": "localhost",
  "port": 5433,
  "username": "dev",
  "password": "admin123",
  "database": "usersDB",
  entities: ["models/user.model{.ts,.js}"],
  "synchronize": true,
  "logging": false,
})

export default client
