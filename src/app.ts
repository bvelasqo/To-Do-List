import koa from 'koa'
import bodyparser from 'koa-bodyparser'
import loggerKoa from 'koa-logger'
import cors from 'koa2-cors'
import mount from 'koa-mount'
import auth from 'koa-basic-auth'
import health from './routes/health.routes'
import taskRouter from './routes/tasks.routes'
import 'database/dynamodb' // para que dynamo corra XD
import client from './shared/db/postgres'
import userRouter from './routes/users.routes'
import categoryRouter from './routes/category.routes'
import labelRouter from './routes/label.routes'
import cosmosDBConnection from 'database/cosmos'

// establish database connection and initialize data source FOR POSTGRES
client
	.initialize()
	.then(() => {
		console.log('Connected to postgres')
	})
	.catch((err) => {
		console.error('Error during Data Source initialization:', err)
	})

// cosmodb connection
cosmosDBConnection.on('error', (error) => {
	console.error('Error connecting to CosmosDB:', error)
})

cosmosDBConnection.once('open', () => {
	console.log('Connected to CosmosDB')
})
//init
const app = new koa()
//middlewares
app.use(cors())
app.use(loggerKoa())
app.use(bodyparser())
app.use(
	mount(
		'/health',
		auth({
			name: 'user',
			pass: 'password',
		})
	)
)

// Routes

// app.use(health.routes());
// router.use(mount('/login', login.routes()))
// Hay que modularizar las rutas en index
app.use(mount('/api/v1/task', taskRouter.routes()))
app.use(mount('/api/v1/user', userRouter.routes()))
app.use(mount('/api/v1/category', categoryRouter.routes()))
app.use(mount('/api/v1/label', labelRouter.routes()))
// router.use(mount('/label', labelRouter.routes()))

//export server
export default app
