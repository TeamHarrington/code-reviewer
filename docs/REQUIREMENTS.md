# Initial Requirements for Code Reviewer
 (Taken from code-reviewer-2.0)

##### There are three types of users
- TA
- Admin
- Student

## As a User
### I must be able to:
- Login and authenticate myself
- Log out
## As a Admin
### I must be able to:
- Create a student with
	- First Name
	- Last Name
	- UtorID
	- Student Number
	- Email
- Create a TA with
	- First Name
	- Last Name
	- UtorID
	- Email
	- Contract Number - # of contracts this TA has for this course
- Create Assignments with
	- Name
	- Required Files (Folder Structure?)
	- a list of feedback questions - these are questions students answer when they review someone's code
	- Number of peer reviewers
	- Peer Review
	- Self Review
	- Mark Review?
	- Deadlines
		- Peer Review Deadline
- View list of TA
- View list of Students
- Remove a student
- Remove a TA
- Remove an assignment
- Get all assignments that are created by me

### I should be able to:
- Create a course with
	- Course ID
	- Name
	- Start/End Date?
- Add a student to a course
- Add a TA to a course
- Add an assignment to a course
- Remove a student from a course
- Remove a TA from a course
- Remove an assignment from a course
- Batch upload students into courses (uploading file)
- Batch upload TAs into a course (upload file)
- Query list of Students (eg. by course)
- Query list of TAs (eg. by course)
- Query list of assignments (eg. by date created)
- Remove a student from a course
- Batch create TAs (upload file)
- Batch create students (uploading file)

### It would be nice to be able to:
- 

## As a TA

### I must be able to:

- Get a list of all the assignments that I have access to
- Get a list of all students that I have access to
- Review assignments that I am assigned to
- Review designated review submission  
- Add annotation to a review  

### I should be able to:
- Add a grade to an assignment?
- Get a list of all the courses?  
- Enroll in a course?

## As a student

### I must be able to:
- Get a list of all the assignments  
- Submit a submission to an assignments  
- Resubmit a submission to an assignment  
- View submission mark  
- Review designated review submission  
- Add annotation to a review  

### I should be able to:
- Get a list of all the courses?  
- Enroll in a course?