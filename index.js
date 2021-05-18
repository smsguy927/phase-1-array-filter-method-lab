// Code your solution here
function findMatching(arr, name) {
  name = name.toLowerCase();
  return arr.filter(x => x.toLowerCase() === name)
}

function fuzzyMatch(arr, chars) {
  return arr.filter(x => x.slice(0, chars.length) === chars)
}

function matchName (arr, firstName) {
  return arr.filter(x => x.name === firstName)
}