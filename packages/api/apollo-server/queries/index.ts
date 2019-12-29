import { getUser, getUsers } from './user'
import { getAssignment, getAssignments } from './assignment'
import { getSubmission, getSubmissions } from './submission'

export default {
  Query: {
    getUser,
    getUsers,
    getAssignment,
    getAssignments,
    getSubmission,
    getSubmissions
  }
}
