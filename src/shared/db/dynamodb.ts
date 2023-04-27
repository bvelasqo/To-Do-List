// DynamoDb Connection. If is possible create a clase for this to connect to the database and display a client to manage the database.
// No create class if exists any orm for dynamodb. Just connect the database.
import * as dynamoose from 'dynamoose'

const ddb = new dynamoose.aws.ddb.DynamoDB({
	"credentials": {
		"accessKeyId": process.env.AWS_ACCESS_KEY_ID,
		"secretAccessKey": process.env.AWS_SECRET_ACCESS_KEY
	},
	"region": "us-east-1",
});
dynamoose.aws.ddb.set(ddb);
console.log("Connected to DynamoDB")
// if (process.env.NODE_ENV === 'production') {
// 	const ddb = new dynamoose.aws.ddb.DynamoDB({
// 		"credentials": {
// 			"accessKeyId": "AKIATEHRRWGCCUULPWOR",
// 			"secretAccessKey": "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"
// 		},
// 		"region": "us-east-1",
// 		"endpoint": "http://localhost:8000"
// 	});
// 	dynamoose.aws.ddb.set(ddb);
// 	console.log("Connected to DynamoDB")
// } else {
// 	const ddb = new dynamoose.aws.ddb.DynamoDB({
// 		"credentials": {
// 			"accessKeyId": "foo",
// 			"secretAccessKey": "bar"
// 		},
// 		"region": "us-east-1",
// 		"endpoint": "http://localhost:8000"
// 	});
// 	dynamoose.aws.ddb.set(ddb);
// 	console.log("DynamoDB is running locally")
// }

export default dynamoose