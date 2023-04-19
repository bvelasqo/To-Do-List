import {Document} from "dynamoose/dist/Document";
import dynamoose from '../shared/db/dynamodb'

export interface TaskInterface {
	id: string;
	title: string;
	content: string;
	userId: string;
	createdAt: Date;
	updatedAt: Date;
}
class Task extends Document {
    id!: string;
	title!: string;
	content!: string;
	userId!: string;
	createdAt!: Date;
	updatedAt!: Date;
}

const taskSchema = new dynamoose.Schema({
    id: {
      type: String,
      hashKey: true
    },
    title: {
      type: String
    },
    content: {
      type: String
    },
    userId: {
      type: String
    },
    createdAt: {
      type: Date
    },
    updatedAt: {
      type: Date
    }
  });

const TaskModel = dynamoose.model("Task", taskSchema);

export { Task, TaskModel };
