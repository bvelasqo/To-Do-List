import dynamoose from '../shared/db/dynamodb'

export interface TaskInterface {
  id: string;
  title: string;
  content: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}

const taskSchema = new dynamoose.Schema({
  // pk = user id
  pk: {
    type: String,
    hashKey: true
  },
  // sk = categoryid # taskid
  sk: {
    type: String,
    rangeKey: true
  },
  id: {
    type: String
  },
  categoryId: {
    type: String
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
  // index for user id
  createdAt: {
    type: Date,
    index: {
      type: 'global',
      name: 'createdAtIndex',
      project: true,
      rangeKey: 'sk'
    }
  },
  updatedAt: {
    type: Date
  }
});

const TaskModel = dynamoose.model("Task", taskSchema);

// Get by CategoyId (and UserId)
// TaskModel.query({
//   where: {
//     pk: 'user id',
//     sk: {
//       beginsWith: 'category id #'
//     }
//   }
// })

// Get by UserId (Get all)
// TaskModel.query({
//   where: {
//     pk: 'user id',
//   }
// })

// Get By createdAt
// TaskModel.query({
//   where: {
//     pk: 'user id',
//     createdAt: {
//       between: [new Date('2021-01-01'), new Date('2022-01-01')]
//     }
//   }
// })

export { TaskModel };
