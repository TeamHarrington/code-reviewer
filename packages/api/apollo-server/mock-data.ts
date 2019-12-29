// take an array of criteria and return true if data
// matches at least one of them
export const match = (data: any, criteria: any[]) => {
  return criteria.some(criterion => {
    return Object.keys(criterion).every(key => data[key] === criterion[key])
  })
}

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
    reviewBy: []
  },
  {
    id: '002',
    author: users[1],
    assignment: assignments[0],
    files: [],
    reviewBy: []
  },
  {
    id: '003',
    author: users[2],
    assignment: assignments[0],
    files: [],
    reviewBy: []
  },
  {
    id: '004',
    author: users[3],
    assignment: assignments[0],
    files: [],
    reviewBy: []
  }
]
