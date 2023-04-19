// DynamoDb Connection. If is possible create a clase for this to connect to the database and display a client to manage the database.
// No create class if exists any orm for dynamodb. Just connect the database.
import * as dynamoose from 'dynamoose'

if (process.env.NODE_ENV === 'production') {
	console.log("We'll add the production config after we're done testing locally ...")
} else {
	dynamoose.aws.sdk.config.update({
		accessKeyId: 'AKIAIOSFODNN7EXAMPLE',
		secretAccessKey: 'wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY',
		region: 'us-east-1',
	})

	dynamoose.aws.ddb.local()
}
export default dynamoose
