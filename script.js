const printOut = (content) => {
	console.log(content);
	document.write("<p>" + content + "</p>");
};

const roundRandom = (number) => Math.round(Math.random() * number);

// let it be enum :D
const mthRnd = "Math Round";
const mthFlr = "Math Floor";
const mthCl = "Math Ceil";
const mthPow = "Math Pow";
const mthSqrt = "Math Sqrt";

// use num 2 if the math function requires 2 numbers
const doTheMath = (num1, num2, curIndex) => {
    if(curIndex == 0) {
        return Math.round(num1);
    }

    if(curIndex == 1) {
        return Math.floor(num1);
    }
    
    if(curIndex == 2) {
        return Math.ceil(num1);
    }

    if(curIndex == 3) {
        return Math.pow(num1, num2);
    }

    if(curIndex == 4) {
        return Math.sqrt(num1);
    }

    return 0;
}

const getMathType = (index) => {
    if(index == 0) {
        return mthRnd;
    }

    if(index == 1) {
        return mthFlr;
    }
    
    if(index == 2) {
        return mthCl;
    }

    if(index == 3) {
        return mthPow;
    }

    if(index == 4) {
        return mthSqrt;
    }

    return "";
}

const results = [];
for(let mathTypeIndex = 0; mathTypeIndex < 5; mathTypeIndex++) {
    for(let i = 0; i < 3; i++) {
        const num1 = Math.random() * 100;
        let num2 = 0;

        if(mathTypeIndex == 3) {
            num2 = Math.max(2, roundRandom(10));
        }

        const mathResult = doTheMath(num1, num2, mathTypeIndex);
        const result = [num1, num2, mathResult, mathTypeIndex, i];

        results.push(result);
    }
}

results.forEach((result) => {
    printOut("#" + result[4] + " - " + getMathType(result[3])  + " - Value 1: " + result[0] + " - Value 2: " + result[1] + " - Result: " + result[2]);
});
