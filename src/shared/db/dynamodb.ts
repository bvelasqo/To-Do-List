// DynamoDb Connection. If is possible create a clase for this to connect to the database and display a client to manage the database.
// No create class if exists any orm for dynamodb. Just connect the database.
import * as dynamoose from 'dynamoose'

if (process.env.NODE_ENV === 'production') {
	console.log("We'll add the production config after we're done testing locally ...")
} else {
	const ddb = new dynamoose.aws.ddb.DynamoDB({
		"credentials": {
			"accessKeyId": "foo",
			"secretAccessKey": "bar"
		},
		"region": "us-east-1",
		"endpoint": "http://localhost:8000"
	});
	dynamoose.aws.ddb.set(ddb);
	console.log("DynamoDB is running locally")
	
}

export default dynamoose