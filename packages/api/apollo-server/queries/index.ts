import { getUser, getUsers } from './user'
import { getAssignment, getAssignments } from './assignment'
import {
  getSubmission,
  getSubmissions,
  getFiles,
  getAnnotations
} from './submission'

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
