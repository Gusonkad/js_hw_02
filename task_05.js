// task_05.js
const checkForSpam = function (message) {
   let messageForCheck = message.toLowerCase();
   return messageForCheck.includes(`spam`) || messageForCheck.includes(`offers`);
}
console.log(checkForSpam('Latest technology news')); // false
console.log(checkForSpam('JavaScript weekly newsletter')); // false
console.log(checkForSpam('Get best sale offers now!')); // true
console.log(checkForSpam('[SPAM] How to earn fast money?')); // true