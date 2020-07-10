import { getUser, getUsers } from './user'
import { getAssignment, getAssignments } from './assignment'
import { getSubmission, getSubmissions, getAnnotations } from './submission'
import { getFiles } from './file'

export default {
  Query: {
    getUser,
    getUsers,
    getAssignment,
    getAssignments,
    getSubmission,
    getSubmissions,
    getFiles,
    getAnnotations
  }
}
