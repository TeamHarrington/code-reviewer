import { editUser } from './user'
import { addAssignment, editAssignment } from './assignment'
import {
  editSubmissions,
  addAnnotation,
  editAnnotation,
  deleteAnnotation
} from './submission'

export default {
  Mutation: {
    editUser,
    addAssignment,
    editAssignment,
    editSubmissions,
    addAnnotation,
    editAnnotation,
    deleteAnnotation
  }
}
