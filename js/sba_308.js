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
const assignmentName = AssignmentGroup.assignments[0].name;
const assignmentId = AssignmentGroup.assignments[0].id;
const assignmentPoints = AssignmentGroup.assignments[0].points_possible
//
console.log('assignmentName___=>', assignmentName);
console.log('assignmentId___=>', assignmentId);
console.log('assignment-Name-Id___=>',assignmentName,': ', assignmentId); // connecting a possible variable 
console.log('assignmentPoints___=>', assignmentPoints);
let assignmentInfo = assignmentName + ': ' + assignmentId;
console.log('assignmentInfo___=>', assignmentInfo);
// finding my variables for assignmentInfo
console.log(AssignmentGroup.assignments.length);
console.log(AssignmentGroup.name);
console.log(AssignmentGroup.course_id);
console.log(AssignmentGroup.assignments[0].due_at);
console.log(AssignmentGroup.assignments)
console.log(AssignmentGroup.assignments.points_possible)
console.log(AssignmentGroup.group_weight)
console.log(AssignmentGroup.assignments[0].name)
// creating a for loop assignmentInfo
for (let i = 0; i < AssignmentGroup.assignments.length; i++) {
	console.log(AssignmentGroup.assignments[i].id);
	console.log(AssignmentGroup.assignments[i].name);
	console.log(AssignmentGroup.assignments[i].points_possible);
	console.log(AssignmentGroup.assignments[i].due_at);

	// what if the assignment is not due yet?
	if (AssignmentGroup.assignments[i].due_at === '3156-11-15') {
		console.log('Assignment is not due yet');
	} else {
		console.log('Assignment is due');
	}

}

// The provided learner submission data.
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

console.log(LearnerSubmissions.length);
for (let i = 0; i < LearnerSubmissions.length; i++) {
	console.log(LearnerSubmissions[i].learner_id);
	console.log(LearnerSubmissions[i].submission.score);

	if (LearnerSubmissions[i].learner_id === 125) {
		console.log(LearnerSubmissions[i].learner_id);
		console.log(LearnerSubmissions[i].submission);

	}
}

console.log(LearnerSubmissions[0].submission);
console.log(LearnerSubmissions[0].learner_id);
const student125Avg = LearnerSubmissions[0].submission.score + LearnerSubmissions[1].submission.score;
console.log(student125Avg);
// const student125Avg2 = student125Avg / 2;
// console.log(student125Avg2);
const student132Avg = LearnerSubmissions[2].submission.score + LearnerSubmissions[3].submission.score;
console.log(student132Avg);
// const student132Avg2 = student132Avg / 2;
// console.log(student132Avg2);

// function getLearnerData(CourseInfo, AssignmentGroup, [LearnerSubmissions]) {
// 	// returns the formatted result, which should be an array of objects as described above.
// 	const result = []

// 	for (let i = 0; i < LearnerSubmissions.length; i++) {
// 		if (LearnerSubmissions[i].learner_id === 125) {
// 			result.push(LearnerSubmissions[i].learner_id)
// 			console.log(result);
// 		} 

// 	}
// 	// return result;
// }

   // const studentsData = {};
// const weightedAvg = [LearnerSubmissions[0].submission / points_possible]
// console.log(weightedAvg);

function getLearnerData(
	course,
	ag,
	submissions,
) {
	const studentsData = {};


}
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

// let studentsData = result
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

if (AssignmentGroup.course_id !== CourseInfo.id) {
    throw new Error('Invalid input: AssignmentGroup does not belong to its course');
}


/** You should also account for potential errors in the data that your program  receives. What if points_possible is 0? You cannot divide by zero. What if a value that you are expecting to be a number is instead a string? */

/**
Use try/catch and other logic to handle these types of errors gracefully. */

/**
If an assignment is not yet due, do not include it in the results or the average. Additionally, if the learner’s submission is late (submitted_at is past due_at), deduct 10 percent of the total points possible from their score for that assignment. */

if (LearnerSubmissions.submitted_at > LearnerSubmissions.due_at) {
    let latePenalty = LearnerSubmissions.points_possible * 0.1; // 10
    LearnerSubmissions.submission.score -= latePenalty; //
}


// set up variables for the weighted average calculation
let totalPointsPossible = 0
let totalScore = 0;
