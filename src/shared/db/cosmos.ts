import mongoose from 'mongoose';
import { config } from 'dotenv'
config()

const connectionString = process.env.COSMODB_URI;

mongoose.connect(connectionString);

const cosmosDBConnection = mongoose.connection;



export default cosmosDBConnection;
