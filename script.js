var hobbies = ["reading", "crocheting", "playing video games", "watching tv", "journalling", "listening to music"];

console.log(hobbies.length);
hobbies.push("going out for walks");
console.log(hobbies[2]);
hobbies.pop();
hobbies.splice(2, 0, "knitting", "painting");
console.log(hobbies);
hobbies.shift();
hobbies.unshift("cooking");
console.log(hobbies);

var goals = ["becoming a front end developer", "earning enough money to support myself", "having my own space"];

var allTheThings = [...hobbies, ...goals];
console.log(allTheThings);
console.log(allTheThings.indexOf("painting"));
allTheThings.splice(3, 1);
console.log(allTheThings);

var plans = allTheThings.map(function (item) {
    return `I can't wait to start ${item}!`;
});

console.log(plans);