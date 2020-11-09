import { defineModel } from './helpers';

import JobProductOutput from './JobProductOutput';

const Job = defineModel({
  id: {
    type: 'integer',
    primaryKey: true,
    autoIncrement: true
  }
});

export function resolveJob(id) {
  return Job.find({
    where: { id },
    include: [JobProductOutput]
  });
}

export default Job;
