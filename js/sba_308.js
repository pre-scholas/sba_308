// The provided course information.
const CourseInfo = {
	id: 451,
	name: 'Introduction to JavaScript',
};

console.log(CourseInfo.id);


// The provided assignment group.
const AssignmentGroup = {
	id: 12345,
	name: 'Fundamentals of JavaScript',
	course_id: 451,
	group_weight: 25,
	assignments: [
		{
			id: 1,
			name: 'Declare a Variable',
			due_at: '2023-01-25',
			points_possible: 50,
		},
		{
			id: 2,
			name: 'Write a Function',
			due_at: '2023-02-27',
			points_possible: 150,
		},
		{
			id: 3,
			name: 'Code the World',
			due_at: '3156-11-15',
			points_possible: 500,
		},
	],
};
// my assignmentGroup variables
// const assignmentName = AssignmentGroup.assignments[0].name;
// const assignmentId = AssignmentGroup.assignments[0].id;
// const assignmentPoints1 = AssignmentGroup.assignments[0].points_possible
// const assignmentPoints2 = AssignmentGroup.assignments[1].points_possible
// const assignment1_DueAt = AssignmentGroup.assignments[0]['due_at'];
// const assignment2_DueAt = AssignmentGroup.assignments[1]['due_at'];

//
// console.log(AssignmentGroup.assignments[0]['due_at'])
// console.log(AssignmentGroup.assignments[1]['due_at'])
// console.log('assignmentName___=>', assignmentName);
// console.log('assignmentId___=>', assignmentId);
// console.log('assignment-Name-Id___=>',assignmentName,': ', assignmentId); // connecting a possible variable 
// console.log('assignmentPoints___=>', assignmentPoints1);
// let assignmentInfo = assignmentName + ': ' + assignmentId;
// console.log('assignmentInfo___=>', assignmentInfo);
// // finding my variables for assignmentInfo
// console.log(AssignmentGroup.assignments);
// console.log(AssignmentGroup.name);
// console.log(AssignmentGroup.course_id);
// console.log(AssignmentGroup.assignments[0].due_at);
// console.log(AssignmentGroup.assignments)
// console.log(AssignmentGroup.assignments[0]['points_possible'])
// console.log(AssignmentGroup.group_weight);
// console.log(AssignmentGroup.assignments[0].name)
// creating a for loop assignmentInfo
// for (let i = 0; i < AssignmentGroup.assignments.length; i++) {
// 	// console.log(AssignmentGroup.assignments[i].id);
// 	// console.log(AssignmentGroup.assignments[i].name);
// 	// console.log(AssignmentGroup.assignments[i].points_possible);
// 	// console.log(AssignmentGroup.assignments[i].due_at);
// 	const assignmentDue = []
// 	if (assignment1_DueAt  ) {}
// 	// what if the assignment is not due yet?
// 	if (AssignmentGroup.assignments[i].due_at === '3156-11-15') {
// 		console.log('Assignment is not due yet');
// 	} else {
// 		console.log(
// 			'Assignment is due',
// 		);
// 	}

// }

// let totalPointsPossible = 0; // initialize variable to 0

// // loop over each assignment object in the assignments array
// for (const assignment of AssignmentGroup.assignments) {
// 	// The value of 'points possible' for each assignment is added to the totalPointsPossible variable
// 	totalPointsPossible += assignment['points_possible'];
// 	console.log(typeof(assignment));
// }
// console.log(totalPointsPossible); 
// let totalScore = 0;

// function getAssignmentsPointsPossible(assign1, assign2) {
// 	const pointsPossibleResults = []
// 	return assign1 + assign2
// }
// console.log(getAssignmentsPointsPossible(assignmentPoints1,assignmentPoints2,));
// // The provided learner submission data.
const LearnerSubmissions = [
	{
		learner_id: 125,
		assignment_id: 1,
		submission: {
			submitted_at: '2023-01-25',
			score: 47,
		},
	},
	{
		learner_id: 125,
		assignment_id: 2,
		submission: {
			submitted_at: '2023-02-12',
			score: 150,
		},
	},
	{
		learner_id: 125,
		assignment_id: 3,
		submission: {
			submitted_at: '2023-01-25',
			score: 400,
		},
	},
	{
		learner_id: 132,
		assignment_id: 1,
		submission: {
			submitted_at: '2023-01-24',
			score: 39,
		},
	},
	{
		learner_id: 132,
		assignment_id: 2,
		submission: {
			submitted_at: '2023-03-07',
			score: 140,
		},
	},
];
// console.log(LearnerSubmissions.length);

// for loop to get learners submission info
// const submittedAt = []
// for (let i = 0; i < LearnerSubmissions.length; i++) {
// 	console.log(LearnerSubmissions[i].learner_id);
// 	console.log(LearnerSubmissions[i].submission.score);
// 	console.log(LearnerSubmissions[i].submission.submitted_at);
// 	console.log(LearnerSubmissions[i].assignment_id);


// 	// if ()

// 	if (LearnerSubmissions.learner_id === 125) {
// 		console.log(LearnerSubmissions[i].submission);
		
// 	}
// 	console.log(LearnerSubmissions[i].learner_id);
	
// }

// for (let i = 0; i < LearnerSubmissions[i]; i++) { 
// 	for (let j = 0; j < AssignmentGroup.assignments[i]; i++) {
// 		if ( )
// 	}
// }
// console.log(LearnerSubmissions);


// console.log(LearnerSubmissions[0].submission);
// console.log(LearnerSubmissions[0].learner_id);
// const student125Avg = LearnerSubmissions[0].submission.score + LearnerSubmissions[1].submission.score;
// console.log(student125Avg);
// const student132Avg = LearnerSubmissions[2].submission.score + LearnerSubmissions[3].submission.score;
// console.log(student132Avg);


// function getLearnerData(CourseInfo, AssignmentGroup, [LearnerSubmissions]) {
// 	// returns the formatted result, which should be an array of objects as described above.
// 	const result  = []

// 	for (let i = 0; i < LearnerSubmissions.length; i++) {
// 		if (LearnerSubmissions[i].learner_id === 125) {
// 			result.push(LearnerSubmissions[i].learner_id)
// 			console.log(' ',  result);
// 		}
		
// 	}
// 	//  return result;
// 	}
	
   // const studentsData = {};
// const weightedAvg = [LearnerSubmissions[0].submission / points_possible]
// console.log(weightedAvg);

// function getLearnerData(
// 	course,
// 	ag,
// 	submissions,
// ) {
// 	const studentsData = {};


// }
// ) {
// 	// here, we would process this data to achieve the desired result.
// 	const result = [
// 		{
// 			id: 125,
// 			avg: 0.985, // (47 + 150) / (50 + 150)
// 			1: 0.94, // 47 / 50
// 			2: 1.0, // 150 / 150
// 		},
// 		{
// 			id: 132,
// 			avg: 0.82, // (39 + 125) / (50 + 150)
// 			1: 0.78, // 39 / 50
// 			2: 0.833, // late: (140 - 15) / 150
// 		},
// 	];

// 	return result;
// }

// const result = getLearnerData(
// 	CourseInfo,
// 	AssignmentGroup,
// 	LearnerSubmissions,
// );

// console.log(result);

/**
Your goal is to analyze and transform this data such that the output of your program is an array of objects, each containing the following information in the following format:
*/


// {
// the ID of the learner for which this data has been collected

// "id": number,


    // the learner’s total, weighted average, in which assignments
    // with more points_possible should be counted for more
    // e.g. a learner with 50/100 on one assignment and 190/200 on another
// would have a weighted average score of 240/300 = 80%.

// "avg": number,

    // each assignment should have a key with its ID,
    // and the value associated with it should be the percentage that
// the learner scored on the assignment (submission.score / points_possible)

// <assignment_id>: number,

    // if an assignment is not yet due, it should not be included in either
    // the average or the keyed dictionary of scores
// }

//  let studentsData = result
// for loop to retrieve studentsData ID, AVG
// for (let i = 0; i < studentsData.length; i++) {
//     let studentId = studentsData[i].id
//     console.log(studentId);
//     let studentAvg = studentsData[i].avg
//     console.log(studentAvg);

// }

// console.log(studentsData);
// console.log(studentsData[1][2]); // retrieves
// console.log(studentsData[1].avg);

/** If an AssignmentGroup does not belong to its course (mismatching course_id), your program should throw an error, letting the user know that the input was invalid. Similar data validation should occur elsewhere within the program. */
// function isInValidAssignmentInput(assignmentId, courseId) {
// 	for (let i = 0; i < AssignmentGroup.course_id.length; i++) {

// 		if (AssignmentGroup.course_id !== CourseInfo.id) {
// 			throw new Error('Invalid input: AssignmentGroup does not belong to its course');
// 		}
// 	}
// }

/** You should also account for potential errors in the data that your program  receives. What if points_possible is 0? You cannot divide by zero. What if a value that you are expecting to be a number is instead a string? */

/**
Use try/catch and other logic to handle these types of errors gracefully. */

/**
If an assignment is not yet due, do not include it in the results or the average. Additionally, if the learner’s submission is late (submitted_at is past due_at), deduct 10 percent of the total points possible from their score for that assignment. */

// if (LearnerSubmissions.submitted_at > LearnerSubmissions.due_at) {
//     let latePenalty = LearnerSubmissions.points_possible * 0.1; // 10
//     LearnerSubmissions.submission.score -= latePenalty; //
// }
// console.log()


// Check if the assignment group belongs to the course.
function isValidCourseAssignmentGroup(CourseInfo, AssignmentGroup) {
	return CourseInfo.id === AssignmentGroup.course_id;
  }
  
  // Check if a learner's submission is valid.
  function isValidSubmission(submission, assignment) {
	const score = submission.submission.score;
	const pointsPossible = assignment.points_possible;
  
	if (pointsPossible === 0 || typeof score !== "number" || isNaN(score)) {
	  return false;
	} else { 
	  return true;
	}
  }
  
  // Calculate the weighted average of a learner's scores.
  function calculateWeightedAverage(learnerData) {
	return (learnerData.totalScore / learnerData.totalWeight) * 100;
  }
  
  // Process learner data, calculate scores, and return the results.
  function processLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions) {
	if (!isValidCourseAssignmentGroup(CourseInfo, AssignmentGroup)) {
	  throw new Error("Invalid input: AssignmentGroup does not belong to the course.");
	}
  
	const assignments = AssignmentGroup.assignments;
	const assignmentScores = {};
	const learnerData = {};
  
	for (const submission of LearnerSubmissions) {
	  const learnerID = submission.learner_id;
	  const assignmentID = submission.assignment_id;
	  const assignment = assignments.find((a) => a.id === assignmentID);
  
	  if (!assignment || new Date(submission.submission.submitted_at) > new Date(assignment.due_at)) {
		continue;
	  }
  
	  if (isValidSubmission(submission, assignment)) {
		if (!learnerData[learnerID]) {
		  learnerData[learnerID] = {
			id: learnerID,
			totalScore: 0,
			totalWeight: 0,
		  };
		}
  
		const score = submission.submission.score;
		const pointsPossible = assignment.points_possible;
		learnerData[learnerID].totalScore += (score / pointsPossible) * pointsPossible;
		learnerData[learnerID].totalWeight += pointsPossible;
		assignmentScores[assignmentID] = (score / pointsPossible) * 100;
	  }
	}
  
	return { learnerData, assignmentScores };
  }
  
  // Get and format learner data, including scores and averages.
  function getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions) {
	try {
	  const { learnerData, assignmentScores } = processLearnerData(
		CourseInfo,
		AssignmentGroup,
		LearnerSubmissions
	  );
	
	  const results = [];
	
	  for (const learnerID in learnerData) {
		const learner = learnerData[learnerID];
		const weightedAverage = calculateWeightedAverage(learner);
	
		const learnerResult = {
		  id: learner.id,
		  avg: weightedAverage,
		};
	
		for (const assignmentID in assignmentScores) {
		  learnerResult[assignmentID] = assignmentScores[assignmentID];
		}
	
		results.push(learnerResult);
	  }
	
	  return results;
	  
	} catch(error) {
	  console.error(error.message);
	}
   
  }
  
  // Get learner data and handle potential errors.
  const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
  console.log(result);
// after crashing my browser and creating a hot bowl of mess i think i finish so tired so tired, wow
