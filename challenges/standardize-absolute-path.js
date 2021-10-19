/**
 * #222
 * Quora
 * 
 * Given an absolute pathname that may have . or .. as part of it, return the shortest standardized path.
 * For example, given "/usr/bin/../bin/./scripts/../", return "/usr/bin/".
 */

function standardized(path) {
  let dirs = path.split('/');

  let standardDirs = [];

  dirs.forEach(dir => {
    if (dir === '..') {
      if (standardDirs.length > 1) {
        standardDirs.pop();
      } else if (dir !== '.') {
        standardDirs.push(dir);
      }
    }
  });

  return standardDirs.join('/');
}