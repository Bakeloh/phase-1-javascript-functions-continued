// code your solution here

function saturdayFun(activity = "This Saturday,", target = "roller-skate!") {
    return `${activity} I want to ${target}`;
}
console.log


function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(obj = "*") {
    if (obj === "||") {
        return function (adjective = "a dedicated programmer") { return `You are ${obj}${adjective}${obj}!` };
    }
    else {
        return function (adjective = "a hard worker") { return `You are ${obj}${adjective}${obj}!` };
    }
};

wrapAdjective();


