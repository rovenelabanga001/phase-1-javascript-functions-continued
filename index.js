// code your solution here
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function (activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
};

function wrapAdjective (two ="*"){
    return function(one= "special"){
        return `You are ${two}${one}${two}!`
    }
}
wrapAdjective()("a hard worker");
wrapAdjective("||")("a hard worker");