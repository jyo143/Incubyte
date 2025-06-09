function add(numbers) {
    if (!numbers) return 0;
  
    let delimiter = /,|\n/;
    if (numbers.startsWith('//')) {
      const match = numbers.match(/^\/\/(.+)\n(.*)/);
      if (!match) throw new Error('Invalid custom delimiter format');
      delimiter = new RegExp(escapeRegExp(match[1]));
      numbers = match[2];
    }
  
    const parts = numbers.split(delimiter).filter(n => n !== '');
    const nums = parts.map(p => Number(p.trim()));
  
    const negatives = nums.filter(n => n < 0);
    if (negatives.length > 0) {
      throw new Error(`negative numbers not allowed ${negatives.join(',')}`);
    }
  
    return nums.reduce((sum, num) => sum + num, 0);
  }
  
  function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
  
  module.exports = { add };
  