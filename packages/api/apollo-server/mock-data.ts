export const users = [
  {
    id: '1',
    firstName: 'Alice',
    lastName: 'A',
    utorID: 'alice01',
    userType: 'STUDENT',
    lastLogin: '2019-12-16',
    isActive: true
  },
  {
    id: '2',
    firstName: 'Bob',
    lastName: 'B',
    utorID: 'bob01',
    userType: 'STUDENT',
    lastLogin: '2019-12-16',
    isActive: true
  },
  {
    id: '3',
    firstName: 'Charlie',
    lastName: 'C',
    utorID: 'charlie01',
    userType: 'STUDENT',
    lastLogin: '2019-12-16',
    isActive: true
  },
  {
    id: '4',
    firstName: 'David',
    lastName: 'D',
    utorID: 'david01',
    userType: 'STUDENT',
    lastLogin: '2019-12-16',
    isActive: true
  }
]

export const assignments = [
  {
    id: '1',
    name: 'Assignment 1',
    requiredFiles: ['a1.py'],
    feedbackQuestions: [],
    groupSize: 4,
    isActive: true
  },
  {
    id: '2',
    name: 'Assignment 2',
    requiredFiles: [],
    feedbackQuestions: ['a2.py', 'testing.py'],
    groupSize: 4,
    isActive: true
  }
]

export const files = [
  {
    id: '1',
    name: 'a1.py',
    content: `def myfunc():
    result = ["str", True, 1, []]
    return result
    `,
    annotations: []
  },
  {
    id: '2',
    name: 'a1.py',
    content: '',
    annotations: []
  },
  {
    id: '3',
    name: 'a1.py',
    content: '',
    annotations: []
  },
  {
    id: '4',
    name: 'a1.py',
    content: '',
    annotations: []
  }
]

export const submissions = [
  {
    id: '1',
    author: users[0],
    assignment: assignments[0],
    files: [files[0]],
    reviewBy: [users[1], users[2], users[3]]
  },
  {
    id: '2',
    author: users[1],
    assignment: assignments[0],
    files: [files[1]],
    reviewBy: [users[0], users[2], users[3]]
  },
  {
    id: '3',
    author: users[2],
    assignment: assignments[0],
    files: [files[2]],
    reviewBy: [users[0], users[1], users[3]]
  },
  {
    id: '4',
    author: users[3],
    assignment: assignments[0],
    files: [files[3]],
    reviewBy: [users[0], users[1], users[2]]
  }
]
