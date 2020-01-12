export const users = [
  {
    id: '001',
    firstName: 'Alice',
    lastName: 'A',
    utorID: 'alice01',
    userType: 'STUDENT',
    lastLogin: '2019-12-16',
    isActive: true
  },
  {
    id: '002',
    firstName: 'Bob',
    lastName: 'B',
    utorID: 'bob01',
    userType: 'STUDENT',
    lastLogin: '2019-12-16',
    isActive: true
  },
  {
    id: '003',
    firstName: 'Charlie',
    lastName: 'C',
    utorID: 'charlie01',
    userType: 'STUDENT',
    lastLogin: '2019-12-16',
    isActive: true
  },
  {
    id: '004',
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
    id: '001',
    name: 'Assignment 1',
    requiredFiles: [],
    feedbackQuestions: [],
    groupSize: 4,
    isActive: true
  },
  {
    id: '002',
    name: 'Assignment 2',
    requiredFiles: [],
    feedbackQuestions: [],
    groupSize: 4,
    isActive: true
  }
]

export const submissions = [
  {
    id: '001',
    author: users[0],
    assignment: assignments[0],
    files: [],
    reviewBy: [users[1], users[2], users[3]]
  },
  {
    id: '002',
    author: users[1],
    assignment: assignments[0],
    files: [],
    reviewBy: [users[0], users[2], users[3]]
  },
  {
    id: '003',
    author: users[2],
    assignment: assignments[0],
    files: [],
    reviewBy: [users[0], users[1], users[3]]
  },
  {
    id: '004',
    author: users[3],
    assignment: assignments[0],
    files: [],
    reviewBy: [users[0], users[1], users[2]]
  }
]
