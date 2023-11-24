const printOut = (content) => {
	console.log(content);
	document.write("<p>" + content + "</p>");
};

const roundRandom = (number) => Math.round(Math.random() * number);

const mathRound1 = Math.round(Math.random() * 10);
const mathRound2 = Math.round(Math.random() * 90);
const mathRound3 = Math.round(Math.random() * 20);

const mathFloor1 = Math.floor(Math.random() * 20);
const mathFloor2 = Math.floor(Math.random() * 30);
const mathFloor3 = Math.floor(Math.random() * 50);

const mathCeil1 = Math.ceil(Math.random() * 100);
const mathCeil2 = Math.ceil(Math.random() * 70);
const mathCeil3 = Math.ceil(Math.random() * 80);

// results can be doubles or decimal, using Math.round is possible to get a round number although the chance is not high
const mathPow1 = Math.pow(roundRandom(10), 2);
const mathPow2 = Math.pow(roundRandom(20), 2);
const mathPow3 = Math.pow(roundRandom(30), 2);

// results can be doubles or decimal, using Math.round is possible to get a round number although the chance is not high
const mathSqrt1 = Math.sqrt(roundRandom(1000));
const mathSqrt2 = Math.sqrt(roundRandom(2000));
const mathSqrt3 = Math.sqrt(roundRandom(3000));

const mthRnd = "Math Round";
const mthFlr = "Math Floor";
const mthCl = "Math Ceil";
const mthPow = "Math Pow";
const mthSqrt = "Math Sqrt";

const resultsRnd = [[mthRnd, mathRound1], [mthRnd, mathRound2], [mthRnd, mathRound3]];
const resultsFlr = [[mthFlr, mathFloor1], [mthFlr, mathFloor2], [mthFlr, mathFloor3]];
const resultsCl = [[mthCl, mathCeil1], [mthCl, mathCeil2], [mthCl, mathCeil3]];
const resultsPow = [[mthPow, mathPow1], [mthPow, mathPow2], [mthPow, mathPow3]];
const resultsSqrt = [[mthSqrt, mathSqrt1], [mthSqrt, mathSqrt2], [mthSqrt, mathSqrt3]];
const resultList = [resultsRnd, resultsFlr, resultsCl, resultsPow, resultsSqrt];

// a better way to print out the results in a clean way
resultList.forEach((result,) => {
    result.forEach((item, index) => {
        printOut(item[0] + " (#" + (index + 1) + "): " + item[1]);
    });
});