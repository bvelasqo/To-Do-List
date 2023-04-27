// CloudSQL Connection. If is possible create a clase for this to connect to the database and display a client to manage the database.
// No create class if exists any orm for cloudsql. Just connect the database.
import { DataSource } from 'typeorm'
import { UserModel } from 'models/user.model'
import { config } from 'dotenv'
config()

const client = new DataSource({
	type: 'postgres',
	host: process.env.HOST_CLOUDSQL,
	port: Number(process.env.PORT_CLOUDSQL),
	username: process.env.USERNAME_CLOUDSQL,
	password: process.env.PASSWORD_CLOUDSQL,
	database: process.env.DATABASE_CLOUDSQL,
	entities: [UserModel],
	synchronize: true,
	logging: false,
})

client
	.initialize()
	.then(() => {})
	.catch((err) => {
		console.log(err)
	})

export default client
