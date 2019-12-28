import { getUser, getUsers } from './user'
import { getAssignment, getAssignments } from './assignment'
import { getSubmission } from './submission'

export default {
  Query: {
    getUser,
    getUsers,
    getAssignment,
    getAssignments,
    getSubmission
  }
}
