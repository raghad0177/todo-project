
var name = prompt("Please enter your name:");
var gender = prompt("Please enter your gender (male or female):");
var age = parseInt(prompt("Please enter your age:"));



    if (age <= 0) {
        alert("Invalid age!");
    } 
else{
    if (gender === 'male') {      
        var skipWelcome = confirm("Do you want to skip the welcoming message?");    
        if (!skipWelcome)
        {
            alert("Welcome, Mr. " + name + "!");

        }

    } 
    else if (gender === 'female') {
        var skipWelcome = confirm("Do you want to skip the welcoming message?");
        if (!skipWelcome)
        {
            alert("Welcome, Ms. " + name + "!");
        }
    }

    else {
        var skipWelcome = confirm("Do you want to skip the welcoming message?");
        if (!skipWelcome)
        {
            alert("Welcome, " + name + "!");
        }
    }
}
 

