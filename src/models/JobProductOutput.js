import Job from './Job';

import { defineModel } from './helpers';

const JobProductOutput = defineModel({
  id: {
    type: 'integer',
    primaryKey: true,
    autoIncrement: true
  },
  jobId: {
    field: 'job_id',
    type: 'integer',
    allowNull: false,
    references: {
      model: Job,
      key: 'id'
    },
    onUpdate: 'cascade',
    onDelete: 'cascade'
  }
})

export default JobProductOutput;
