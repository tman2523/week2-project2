// JavaScript Looping Exercise

// 1. Output each item in the following Array to your console:
var livingRoom = ['couch', 'lamp', 'rug', 'shelf'];

console.log("Question 1");

var livingRoom = ['couch', 'lamp', 'rug', 'shelf'];

for (i=0; i<livingRoom.length; i++)
{
	console.log(livingRoom[i]);
}

//couch
//lamp
//rug
//shelf


// 2. Using a loop, log numbers 22-33 in the console.

console.log("Question 2");

for (i=22; i<=33; i++)
{
	console.log(i);
}

//22
//23
//24
//25
//26
//27
//28
//29
//30
//31
//32
//33


// 3. Using a similar loop, log numbers 75 to 100, only in increments of five.

console.log("Question 3");

for (i=75; i<=100; i+=5)
{
	
	console.log(i);
}

//75
//80
//85
//90
//95
//100


// 4. Write a while loop that logs "This is how a professional loops." to the console 5 times.
//     Use this as an example:
//        var counter = 0;
//        var num = 2;

//        while (num < 1000) {
//        num += num;
//        counter++;
//        }

//        console.log(counter);

console.log("Question 4");

var number = 1;

while (number <= 5) 
{
	number += 1; //increases value of number by 1 each time it loops
	
	console.log("This is how a professional loops.");
}

//This is how a professional loops.
//This is how a professional loops.
//This is how a professional loops.
//This is how a professional loops.
//This is how a professional loops.


// 5. Write a conditional statement to find the largest of the numbers in the array provided.

console.log("Question 5");

var largestNum = [5, -2, -6, 0, -1]

var bignum = 0;

for (i=0; i<=largestNum.length; i++) 
{
	if (largestNum[i] > bignum)
	{
		bignum = largestNum[i];
	}
				
}

console.log(bignum);


// 6. Separately, use both a for loop and while loop to do the same thing.
//     Print out the sentence "At home, I have _____ cats." Use the number from your counter to fill in the number.
//     The numbers should range from 10 to 100, in increments of 25.

console.log("Question 6");

for (i=10; i<=100; i+=25) 
{
	console.log("At home, I have " + i + " cats.");
}



var increment = 10;

while (increment <= 100) 
{
	console.log("At home, I have " + increment + " cats.");
	
	increment += 25;
}

//At home, I have 10 cats.
//At home, I have 35 cats.
//At home, I have 60 cats.
//At home, I have 85 cats.
//At home, I have 10 cats.
//At home, I have 35 cats.
//At home, I have 60 cats.
//At home, I have 85 cats.

// 7. Given the following Array, console log 'Even' if the number is even, 'Even and greater than 10' if the
//    number is even and greater than 10, and 'Odd' if the number is odd.
//    HINT: Google 'remainder operator'
var numArray = [2, 17, 9, 24, 8];

console.log("Question 7");

var numArray = [2, 17, 9, 24, 8];

for (i=0; i < numArray.length; i++) 
{
	if (numArray[i] % 2 === 0 && numArray[i] > 10)
	{
		console.log("Even and greater then ten");
	}
	else if (numArray[i] % 2 === 0) 
	{
		console.log("Even");
	}

	else 
	{
		console.log("Odd");
	}
}

//Even
//Odd
//Odd
//Even and greater then ten
//Even

// 8. Given the following Array, create variable primeArray with the value [2, 7, 17, 29, 41, 53, 67, 79, 97]
var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97,];
var primeArray = [];

console.log("Question 8");

var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97,];
var primeArray = [];

for (i=0; i<primes.length; i+=3)
{
	primeArray.push(primes[i])
}
console.log(primeArray);

//[ 2, 7, 17, 29, 41, 53, 67, 79, 97 ]

// 9. Prompt a user to pick either a number or a word. Create a script that alerts the user whether they chose a number or a word.
// Hint: Google 'typeof'

confirm("Question 9");

var choice = prompt("Enter a number or a word");

if (isNaN(choice) === false) 
{
	confirm("You entered a number, " + choice);
}

else if (typeof(choice) === "string") 
{
	confirm("You entered a word, "  + choice);
}

else 
{
	confirm("Please enter a number or a word");
}

// 10. Write a loop that outputs the following to the console:
// #
// ##
// ###
// ####
// #####
// ######
// #######

console.log("Question 10");

var count = 0;

var pound = "#";

while (count <= 7) 
{
	console.log(pound);
	pound = pound + "#";
	count++;
}

var triangle = "";

for (i=0; i<=7; i++)
{
	triangle += "#";
	console.log(triangle);
}

//#
//##
//###
//####
//#####
//######
//#######

//#
//##
//###
//####
//#####
//######
//#######


// RO SHAM BO!
// We're going to create a paper, rock, scissors game that prompts you for your choice and allows the computer to
// randomly choose. You will use an alert to define the winner.

// 11. Use a variable called "human" to prompt the user to type their choice.

confirm("Question 11");

var human = prompt("Rock, Paper, or Scissors?");

//Rock, Paper, or Scissors?

// 12. Define an array called "choices" that consists of "paper", "rock", and "scissors".

confirm("Question 12");

var choices = ["paper", "rock", "scissors"];

// 13. Define a variable called "computer" and use Math.random to allow the computer to randomly select a number.
//    For reference:
//    Math.random gives you a random number between 0 and 1, which is different each time you call it.

confirm("Question 13");

var computer = Math.random();

// 14. Let's start our conditional statement. Start by reassigning the computer variable to "rock" if the random number
//    falls between 0 and .33. Run the code until the console prints out "rock" instead of the number.
//    In English, it will look like this:
//      var computer = my Math.random code here
//       if the number is between 0 and 33
//          computer = "rock"
//       log computer to the console

confirm("Question 14");

if (computer >= 0 && computer <= .33) 
{
	computer = "rock";
	confirm(computer);
}

// 15. Now add the following conditionals to the same statement:
//    If the random number is between .34 and .66, set the computer variable to "paper".
//    If the random number is between .67 and 1, set the computer variable to "scissors". (Who the hell seriously chooses scissors first?)

confirm("Question 15");

if (computer >= .34 && computer <= .66)
{
	computer = "paper";
	confirm(computer);
}

if (computer >= .67 && computer <= 1) 
{
	computer = "scissors";
	confirm(computer);
}


// 16. Using both "human", begin another conditional statement. At this time, leave the statements blank.
//    In English, it will look like this:
//      if human is "rock"
//        leave this blank
//      if human is "paper"
//        leave this blank
//      else
//        leave this blank

confirm("Question 16");

if (human == "rock")
{
	
}

if (human == "paper")
{
	
}

if (human == "scissors")
{
	
}




// 17. Now inside of each condition, we need to compare the "human" variable to the "computer" variable,
//    then print to the console who won the game.

if (human == "rock")
{
	human = choices[1];//rock
	confirm("You chose " + human);
	
	if (computer == choices[0])//paper
	{
		confirm(computer + " beats " + human + ", Computer wins!");
	}
	
	if (computer == choices[1])//rock
	{
		confirm(human + " ties " + computer + ", No one wins, no one loses!");
	}
	
	if (computer == choices[2])//scissors
	{
		confirm(human + " beats " + computer + ", You win!");
	}
}

if (human == "paper")
{
	human = choices[0]
	confirm("You chose " + human);
	
	if (computer == choices[0])//paper
	{
		confirm(human + " ties " + computer + ", No one wins, no one loses!");
	}
	
	if (computer == choices[1])//rock
	{
		confirm(human + " beats " + computer + ", You win!");
	}
	
	if (computer == choices[2])//scissors
	{
		confirm(computer + " beats " + human + ", Computer wins!");
	}
}

if (human == "scissors")
{
	human = choices[2]
	confirm("You chose " + human);
	
	if (computer == choices[0])//paper
	{
		confirm(human + " beats " + computer + ", You Win!");
	}
	
	if (computer == choices[1])//rock
	{
		confirm(computer + " beats " + human + ", Computer wins!");
	}
	
	if (computer == choices[2])//scissors
	{
		confirm(human + " ties " + computer + ", No one wins, no one loses!");
	}
}


// 18. Give yourself a high five for completing your first javascript game!

confirm("Question 18");

confirm("High 5! You made your first JS Game!");

//High 5! You made your first JS Game!

// 19. Use the game you made above and rework it using a switch statement.

switch (human) 
{
	case "rock":
	switch (computer) 
		{
		case "rock":
			confirm("Tie");
			break;
		case "paper":
			confirm("Paper Wins");
			break;
		case "scissors":
			confirm("Rock Wins")
			break;
		default:
		confirm("User Error");
		break;
		}
	break;
	case "paper":
	switch (computer)
		{
		case "paper":
			confirm("Tie");
			break;
			
		case "rock":
			confirm("Paper Wins");
			break;
		
		case "scissors":
			confirm("Scissors Wins");
			break;
		default:
		confirm("User Error");
		break;
		}
	break;
	case "scissors":
	switch (computer)
		{
		case "scissors":
			confirm("Tie");
			break;
		case "rock":
			confirm("Rock Wins");
			break;
		case "paper":
			confirm("Scissors Wins");
			break;
		default:
		confirm("User Error");
		break;
		}
	break;
}

// 20. What happens if your user enters something other than "rock", "paper", or "scissors?". Change your default case
//     to print a snarky message to the console if the input doesn't match any of the options.

//User Error

// HEDS ER TALES?
// 21. Use the following variable for your coin flip action:
       var coin = Math.floor(Math.random() * 2);
//     We're using Math.random again, along with Math.floor.
//     Remember, Math.random gives you a random number between 0 and 1.
//     Calling Math.floor on that number will truncate the decimal, and give you a
//     random number within the bounds of your array. (In this case, our array will only contain two items.)

console.log("Question 21");

var choice = "Heads"
var coinflip = ["Heads", "Tails"]

// 22. Use a while loop to keep flipping the coin until you get tails.

console.log("Question 22");

while (choice == "Heads")
{
	var coin = Math.floor(Math.random() * 2);
	var choice = coinflip[coin];
	if (choice == "Heads")
	{
		console.log("heads. damn.")
	}

	else if (choice == "Tails")
	{
		console.log("tails! great!");
	}
}

// 23. FIZZ BUZZ
// Write a program that uses console.log to print each number up to 100, with a couple exceptions...
// If the number is divisible by 3, print "Fizz" instead of the number.
// If the number is divisible by 5, print "Buzz" instead of the number.
// If the number is divisible by both 3 and 5, print "FizzBuzz" instead of the number.

console.log("Question 23");

for (i=0; i<=100; i++) 
{
	
	if (i % 3 == 0 && i % 5 == 0) 
	{
		console.log("FizzBuzz");
	}
	
	else if (i % 3 == 0) 
	{
		console.log("Fizz");
	}
	
	else if (i % 5 == 0)
	{
		console.log("Buzz");
	}
	
	else
	{
	console.log(i);
	}
}

//FizzBuzz
//1
//2
//Fizz
//4
//Buzz
//Fizz
//7
//8
//Fizz
//Buzz
//11
//Fizz
//13
//14
//FizzBuzz
//16
//17
//Fizz
//19
//Buzz
//Fizz
//22
//23
//Fizz
//Buzz
//26
//Fizz
//28
//29
//FizzBuzz
//31
//32
//Fizz
//34
//Buzz
//Fizz
//37
//38
//Fizz
//Buzz
//41
//Fizz
//43
//44
//FizzBuzz
//46
//47
//Fizz
//49
//Buzz
//Fizz
//52
//53
//Fizz
//Buzz
//56
//Fizz
//58
//59
//FizzBuzz
//61
//62
//Fizz
//64
//Buzz
//Fizz
//67
//68
//Fizz
//Buzz
//71
//Fizz
//73
//74
//FizzBuzz
//76
//77
//Fizz
//79
//Buzz
//Fizz
//82
//83
//Fizz
//Buzz
//86
//Fizz
//88
//89
//FizzBuzz
//91
//92
//Fizz
//94
//Buzz
//Fizz
//97
//98
//Fizz
//Buzz



// CHESS BOARD
// 24. Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines.
// At each position of the grid there is either a space or a “#” character. The characters should form a chess board.

//Passing this string to console.log should show something like this:

//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #

var board = "";

for (y=0; y<8; y++) 
{
	for (x=0; x<8; x++) 
	{
		if ((x+y) % 2 == 0) 
		{
			board += " ";
		}
		else 
		{
			board += "#";
		}
	}
	board += "\n";
}
console.log(board);

// # # # #
//# # # # 
// # # # #
//# # # # 
// # # # #
//# # # # 
// # # # #
//# # # # 


// When you have a program that generates this pattern, define a variable size = 8 and change the program
// sso that it works for any size, outputting a grid of the given width and height.

var size = 10;

var board = "";

for (y=0; y<size; y++) 
{
	for (x=0; x<size; x++) 
	{
		if ((x+y) % 2 == 0) 
		{
			board += " ";
		}
		else 
		{
			board += "#";
		}
	}
	board += "\n";
}
console.log(board);

// THAR BE DACHSHUNDS
// We're going to slay some badass dachshunds.
// 25. Start by using the following variables:
var slaying = true;
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random()*5 + 1);
var totalDamage = 0;

// 26. Create a while loop that runs as long as "slaying" is equal to true. For now, set "slaying" to false
//     inside of the body of the loop so we don't break stuff with an infinite loop.

console.log("Question 26");

while (slaying == true) 
{
	console.log("Question 27 - 30");
	
	if (youHit == 1)
	{
		console.log("Yay, you hit the dog!");
		
		totalDamage = totalDamage + damageThisRound;
	}
		
	if (totalDamage >= 4) 
	{
		console.log("You won!");
	}
	
	if (totalDamage < 4)
	{
		youHit = Math.floor(Math.random() * 2);
	}
	
	
	if (youHit == 0) 
	{
		console.log("No, stop beating me!");
	}
	slaying = false;
}

// 27. Inside of your while loop, create a conditional statement. If "youHit" is 1 (which is true),
//     log to the console a congratulatory message about injuring the poor dog.
//     If "youHit" is 0 (which is false), log to the console a message about that bastard beating you.
//     The "slaying" variable should be set to false here to end the loop.
// 28. Inside of the first branch of our conditional statement, after the console.log statement,
//     set "totalDamage" to totalDamage plus damageThisRound.
// 29. Below that, begin a new conditional statement. If you hit the dachshund 4 times, you killed him! Log a success message to the console.
//     If the totalDamage is less than 4, set the youHit variable to the same expression we used at the top.
//     This will begin the loop again.
// 30. Play until you win!
