import { addAssignment, editAssignment } from './assignment'
import {
  editSubmissions,
  addAnnotation,
  editAnnotation,
  deleteAnnotation
} from './submission'
import {
  addStudent,
  addTA,
  addInstructor,
  editStudent,
  editTA,
  editInstructor,
  deactivateUser
} from './user'

export default {
  Mutation: {
    addStudent,
    addTA,
    addInstructor,
    editStudent,
    editTA,
    editInstructor,
    deactivateUser,
    addAssignment,
    editAssignment,
    editSubmissions,
    addAnnotation,
    editAnnotation,
    deleteAnnotation
  }
}
