<h1>Lab-2</h1>
<h3>Robert Thompson</h3>

//Brief intro to project
This project is a series of browser game that, mostly, allow the user to get to know me a bit better. The four games featured are as follows:
* A few questions about me
* Guessing my last name
* Guessing my favorite animal
* Rock paper scissors
These games may not be much, but I learned a lot making them. I am proud of them.

//Developer instructions
Most of these games are pretty straight forward. the most complex one is the rock paper scissors game, as it features a couple of js math methods that you make not have seen before, notably math.random and math.floor. math.random calculates a random number between 0 and .999, which is then multiplied by three. math.floor then rounds this number down, always giving a result of 0, 1, or 2. This number is then used in reference to what option to pull out of an array of three objects: rock, paper, and scissors. The user is then allowed to input rock, paper, or scissors and voila, you have a game of rock paper scissors!