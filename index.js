/* /* EX 1 UPVOTES DOWNVOTES
Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed. This is calculated by subtracting the number of downvotes from upvotes.
Examples
getVoteCount({ upvotes: 13, downvotes: 0 }) ➞ 13
getVoteCount({ upvotes: 2, downvotes: 33 }) ➞ -31
getVoteCount({ upvotes: 132, downvotes: 132 }) ➞ 0
Notes
- You can expect only positive integers for vote counts.
<br>
<br> */



/* const votes = {
    upvotes: 10,
    downvotes: 2,
    calcVotes:function countVotes (num1, num2){
        num1 = this.upvotes;
        num2 = this.downvotes;
        let result = num1 - num2 ;
        console.log(`upvotes: ${this.upvotes} , downvotes: ${this.downvotes} the result is: ${result}`)
    }
    

}

votes.calcVotes(  )
 */
//OR

/* const votes = {
    upvotes: 10,
    downvotes: 2,
}


function countVotes(num1, num2) {
    votes.upvotes = num1;
    votes.downvotes = num2;
    let result = num1 - num2;

    console.log(result)
}


 countVotes();

 */
 console.log("Q1  UPVOTES DOWNVOTES");
 function getVoteCount(obj) {
    let result = obj.upvotes - obj.downvotes;
    console.log(result);
 }
 getVoteCount({ upvotes: 5, downvotes: 1 });



 /* Create a function that takes an object argument sizes (contains width, length, height keys) and returns the volume of the box.
Examples
volumeOfBox({ width: 2, length: 5, height: 1 }) ➞ 10
volumeOfBox({ width: 4, length: 2, height: 2 }) ➞ 16
volumeOfBox({ width: 2, length: 3, height: 5 }) ➞ 30
Notes
- Don't forget to return the result.
- Remember that the values are in an object.
- Volume is length * width * height. */


console.log("Q2 volumeBox");
function volumeBox(obj){
    boxSize = obj.width * obj.length * obj.height;
    console.log(boxSize);
}

volumeBox({width: 2, length: 5, height: 1});


/* Luke Skywalker has family and friends. Help him remind them who is who. Given a string with a name, return the relation of that person to Luke.
| Person |  Relation |
| --- | ----------- |
| Darth Vader | father |
| Leia |    sister |
| Han | brother in law |
| R2D2  | droid |
Examples
relationToLuke("Darth Vader") ➞ "Luke, I am your father."
relationToLuke("Leia") ➞ "Luke, I am your sister."
relationToLuke("Han") ➞ "Luke, I am your brother in law." */


console.log("Q3 Skywalker");

person = {
    father : "Darth Vader",
    sister : "Leia ",
    BrotherInLaw : "Han",
    R2D2 : "droid",
};

function whoIsWho(string){
    if(string === person.father){
        console.log("Luke, I am your Father!");
    }else if(string === person.sister){
        console.log("Luke, I am your sister.");
    }else if(string === person.BrotherInLaw){
        console.log("Luke, I am your brother in law.");
    }else{
        console.log("I am a robot");
    }
}

whoIsWho("Darth Vader");



/* Create an obj containing the following properties for a particular football player:
name\
age\
height\
weight\
<br>
Also, create three methods that returns the following strings:
getAge() returns "name is age 25" \
getHeight() returns "name is 175 cm" \
getWeight() returns "name weighs 75 kg" \
<br>
Notes
- name will be passed in as a string  */

console.log("Q4 football player");

footBallPlyer = {
    name : "Cristiano Ronaldo",
    age : 35,
    height : 180,
    weight : 79,

};

function getAge(string){
    string = `${footBallPlyer.name} is age ${footBallPlyer.age}`;
    console.log(string);
}

getAge(footBallPlyer.name);


function getHeight(string){
    string = `${footBallPlyer.name} is ${footBallPlyer.height} cm `;
    console.log(string);
}

getHeight();



function getWeight(string){
    string = `${footBallPlyer.name} is ${footBallPlyer.weight} kg `;
    console.log(string);
}

getWeight();


/* 😒 */