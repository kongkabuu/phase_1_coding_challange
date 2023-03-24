# phase_1_coding_challange

# grader(num)
defined a function grader that grades marks input into the function.
grader takes in one argument
 <li>A > 79<li>
 <li>B - 60 to 79</li> 
 <li>C -  59 to 49</li> 
 <li>D - 40 to 49</li>
 <li> E - less 40<li>
then depending on your grade it return the respective grade.
for grader to work properly, whe make sure the num put into the function is a number between 0-100.
grader takes a single argumnet and return the grade according to the grading conditon.makes sure marks are between 0-100.

# speedDetector(num)
next we define a  funtion speedDetector, it takes in a speed. we define a const speedLimit  which is equal to 70;
if the speed is less that that the the function logs out "ok". then if its above 70, we add one point for evry 5kph you go above 70, 

we achive this by: Math.floor((speed-speedLimit)/5) we pass the result of this to points.
if you have more than twelve point you get your lisenced revoked;

# netSalaryCalculator

declared the last function that calculates the net salary given salary and benfits(they default to zero incase none are put).
i further declared two more const variables that i assingedt to funtions, namley nhif and, nssf
 then removed the sum of both the two variables from the gross salary to get the netSalary, which is what we want.