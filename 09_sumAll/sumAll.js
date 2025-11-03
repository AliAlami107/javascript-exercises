const sumAll = function(start, end) {
    // Check if both parameters are numbers
    if (typeof start !== 'number' || typeof end !== 'number') return 'ERROR';
  
    // Check if both are integers
    if (!Number.isInteger(start) || !Number.isInteger(end)) return 'ERROR';
  
    // Check if both are non-negative
    if (start < 0 || end < 0) return 'ERROR';
  
    // Ensure start is less than end
    const min = Math.min(start, end);
    const max = Math.max(start, end);
  
    // Sum all numbers in range
    let sum = 0;
    for (let i = min; i <= max; i++) {
      sum += i;
    }
  
    return sum;
  };
  
  // Do not edit below this line
  module.exports = sumAll;
  