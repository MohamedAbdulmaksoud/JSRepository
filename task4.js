// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
// A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!
// Your tasks:
// 1. Createanarrowfunction'calcAverage'tocalculatetheaverageof3scores
// 2. Usethefunctiontocalculatetheaverageforbothteams
// 3. Createafunction'checkWinner'thattakestheaveragescoreofeachteam
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)"
// 4. Usethe'checkWinner'functiontodeterminethewinnerforbothData1and Data 2
// 5. Ignoredrawsthistime
'use strict'

const calcAverage = (score_1,score_2,score_3) => (score_1 + score_2 + score_3)/3;
const checkWinner = function (avgDolhins,avgKoalas) {
    if(avgDolhins > 2*avgKoalas){
        return `Dolphins win (${avgDolhins} vs. ${avgKoalas})`
    }else if(avgKoalas > 2*avgDolhins){
        return `Koalas win (${avgKoalas} vs. ${avgDolhins})`
    }else{
        return "No Winner"
    }

}
let averageDolphins = calcAverage(44,23,71);
let averageKoalas = calcAverage(65,54,49);
console.log(checkWinner(averageDolphins,averageKoalas));

averageDolphins = calcAverage(85,54,41);
averageKoalas = calcAverage(23,34,27);
console.log(checkWinner(averageDolphins,averageKoalas));
