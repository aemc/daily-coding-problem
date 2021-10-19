/**
 * #222
 * Quora
 * 
 * Given an absolute pathname that may have . or .. as part of it, return the shortest standardized path.
 * For example, given "/usr/bin/../bin/./scripts/../", return "/usr/bin/".
 * 
 * Time Complexity: O(n)
 */

function standardized(path) {
  const stack = [];
  const dirs = path.split(/\//);

  dirs.forEach(dir => {
    if (dir === '..' && dirs.length > 1) {
      stack.pop();
    } else if (dir !== '.') {
      stack.push(dir);
    } 
  });

  return stack.join('/');
}

console.log(standardized("/usr/bin/../bin/./scripts/../../../../")); // '/a/b/c'
console.log(standardized('/a/./b/../../c/')); // '/c'
console.log(standardized('/usr/bin/../bin/./scripts/../')); // '/usr/bin/'