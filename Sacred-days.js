/*
In the United States, one of the most important days of the year is colloquially known as "Black Friday". 
On this day, millions of pilgrims sojourn to their local centers of capitalism 
to stand in long lines and trade currency for flat-screen TVs and two-dollar DVDs.

Black Friday—so-called because on this day some retailers' accounting books move from 
"the red" (having net losses) to "the black" (having net profits)—is traditionally 
celebrated on the day immediately following the American Thanksgiving holiday, 
which always falls on the fourth Thursday in November.

You have recently been hired by a large boat retailer, 
Beast Bouy, who wants to know exactly what date they can expect shoppers 
to crowd their store and purchase their stocks of moderately discounted jet-skis. 

Your first task at this job is create a blackFriday function which accepts an integer year, 
and returns the day of the month of November that Black Friday falls on in that year. 
Your function only needs to support years after 1752*.
*/


// Solution

function blackFriday(year) {
  const lastDayOfNov = new Date(year, 10, 30).getDay();
  const blackFriday = (lastDayOfNov > 5 ? 35 : 28) - lastDayOfNov;
  return blackFriday;
}

// or

function blackFriday(year){
  let fridays = [];
  for(let i = 0; i < 30; i++){
    let c = new Date(year,10,i+1);
    if(c.getDay() === 4){
        fridays.push(c);
    }
  }
  return fridays[3].getDate() +1;
  }