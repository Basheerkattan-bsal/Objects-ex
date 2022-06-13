# Objects-ex


/* EX 1 UPVOTES DOWNVOTES
Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed. This is calculated by subtracting the number of downvotes from upvotes.
Examples
getVoteCount({ upvotes: 13, downvotes: 0 }) ➞ 13
getVoteCount({ upvotes: 2, downvotes: 33 }) ➞ -31
getVoteCount({ upvotes: 132, downvotes: 132 }) ➞ 0
Notes
- You can expect only positive integers for vote counts.
<br>
<br>
EX 2 VOLUME OF A BOX --------------------------------------------------------------------
Create a function that takes an object argument sizes (contains width, length, height keys) and returns the volume of the box.
Examples
volumeOfBox({ width: 2, length: 5, height: 1 }) ➞ 10
volumeOfBox({ width: 4, length: 2, height: 2 }) ➞ 16
volumeOfBox({ width: 2, length: 3, height: 5 }) ➞ 30
Notes
- Don't forget to return the result.
- Remember that the values are in an object.
- Volume is length * width * height.
<br><br>
EX 3 LUKE I AM YOUR... --------------------------------------------------------------------
Luke Skywalker has family and friends. Help him remind them who is who. Given a string with a name, return the relation of that person to Luke.
| Person |  Relation |
| --- | ----------- |
| Darth Vader | father |
| Leia |    sister |
| Han | brother in law |
| R2D2  | droid |
Examples
relationToLuke("Darth Vader") ➞ "Luke, I am your father."
relationToLuke("Leia") ➞ "Luke, I am your sister."
relationToLuke("Han") ➞ "Luke, I am your brother in law."
<br><br>
EX 4 SPORTS PLAYER --------------------------------------------------------------------
Create an obj containing the following properties for a particular football player:
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
- name will be passed in as a string 
 */