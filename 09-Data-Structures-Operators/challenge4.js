///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.
THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure
SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅
HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!
Afterwards, test with your own test data!
GOOD LUCK 😀
*/

//add TextArea and Button
document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));
//add camelCase conveter to the button
document.querySelector("button").addEventListener("click", function () {
  //1. Get Text 2.switch to lowercase 3.Split on new line (5 entries)
  const query = document
    .querySelector("textarea") //"underscore_case\n first_name\nSome_Variable\n  calculate_AGE\ndelayed_departure"
    .value.toLowerCase()
    .split("\n");
  //split on underscore character (2 strings per entry)
  let index = 1;
  for (const input of query) {
    const [first, second] = input.trim().split("_");
    console.log(
      [first, second.replace(second[0], second[0].toUpperCase())]
        .join("")
        .padEnd(20, " ")
        .padEnd(20 + index, "✅")
    );
    index++;
  }

  //Alternative Solution
  /*
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');
  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});
*/
});
