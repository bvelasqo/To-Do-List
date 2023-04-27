import mongoose from 'mongoose';

const connectionString =
	'mongodb://c1091aba-0ee0-4-231-b9ee:kEx9JWuzV8UpWIBNmj9dYTjXztl5Qci6YqiN5s9BT4fLlajEgpstvhNefW5s639vbco3SLANFl9NACDbzRleFw==@c1091aba-0ee0-4-231-b9ee.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@c1091aba-0ee0-4-231-b9ee@';

mongoose.connect(connectionString, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const cosmosDBConnection = mongoose.connection;

cosmosDBConnection.on('error', (error) => {
	console.error('Error connecting to CosmosDB:', error);
});

cosmosDBConnection.once('open', () => {
	console.log('Connected to CosmosDB');
});

export default cosmosDBConnection;
