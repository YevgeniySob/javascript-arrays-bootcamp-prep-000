chocolateBars = ["snickers","hundred grand","kitkat","skittles"]

function addElementToBeginningOfArray(array ,element){
  var arr2 = array 
  arr2.unshift(element)
  return arr2
}

function destructivelyAddElementToBeginningOfArray(array ,element){
  arr.unshift(element)
  return arr
}

function addElementToEndOfArray(array , element){
  var arr2 = arr
  arr2.push(element)
  return arr2
}

function destructivelyAddElementToEndOfArray(array ,element){
  return arr.push(element)
}

function destructivelyRemoveElementFromBeginningOfArray(array ){
  return arr.shift()
}

function removeElementFromBeginningOfArray(array ){
  return array .slice(1)
}