chocolateBars = ["snickers","hundred grand","kitkat","skittles"]

function addElementToBeginningOfArray(array,element){
  var arr2 = array 
  arr2.unshift(element)
  return arr2
}

function addElementToEndOfArray(array, element){
  var arr2 = array 
  arr2.push(element)
  return arr2
}

function destructivelyAddElementToBeginningOfArray(array,element){
  array.unshift(element)
  return array 
}

function destructivelyRemoveElementFromEndOfArray(array){
  return array.pop()
}

function destructivelyAddElementToEndOfArray(array ,element){
  return array.push(element)
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  return array.shift()
}

function removeElementFromBeginningOfArray(array){
  return array.slice(0)
}

function removeElementFromEndOfArray(array){
  return array.slice(0, array.length - 1)
}

