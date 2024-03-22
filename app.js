var answers = [];
function Questions() {
    let questions = ["Are you Student? (yes/no)", "Do you have a jop? (yes/no)", "Do you like working as developer? (yes/no)"]
    let question;
    for (let x=0; x < questions.length; x++) {
        question = prompt(questions[x]).trim().toLowerCase();
        while (question !== "yes" && question !== "no") {
            if (!question) {
                alert("Invalid input.enter Yes or No.");
            } else {
                alert("Invalid input.enter Yes or No.");
            }
            question = prompt(questions[x]).trim().toLowerCase();
        }
        answers.push(question);
    }
    return answers;
}

Questions();

function answerforqustions() {
    console.log("array of answers :" + answers)
}

answerforqustions();



var name1 = prompt("Please enter your name:");
var gender = prompt("Please enter your gender (male or female):");
var age = parseInt(prompt("Please enter your age:"));
if (age <= 0) {
    alert("Invalid age!");
}
else {
    if (gender === 'male') {
        var skipWelcome = confirm("Do you want to skip the welcoming message?");
        if (!skipWelcome) {
            alert("Welcome, Mr. " + name1 + "!");
        }
    }
    else if (gender === 'female') {
        var skipWelcome = confirm("Do you want to skip the welcoming message?");
        if (!skipWelcome) {
            alert("Welcome, Ms. " + name1 + "!");
        }
    }
    else {
        var skipWelcome = confirm("Do you want to skip the welcoming message?");
        if (!skipWelcome) {
            alert("Welcome, " + name1 + "!");
        }
    }
}

