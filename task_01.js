// task_01.js
const logItems = function (array) {
   array.forEach(function (item, index) {
      console.log('[' + ++index + ']', '-', '[' + item + ']');
   });
};
logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

