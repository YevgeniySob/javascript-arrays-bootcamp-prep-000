chocolateBars = ["snickers","hundred grand","kitkat","skittles"]

function addElementToBeginningOfArray(arr,element){
  arr.unshift(element)
  return arr
}

function destructivelyAddElementToBeginningOfArray(arr,element){
  arr2 = arr
  arr2.unshift(element)
  return arr2
  
}

function addElementToEndOfArray(arr, element){
  arr2 = arr
  arr2.push(element)
  return arr2
}

function destructivelyAddElementToEndOfArray(arr,element){
  return arr.push(element)
}

function destructivelyRemoveElementFromBeginningOfArray(arr){
  return arr.shift()
}

function removeElementFromBeginningOfArray(arr){
  return arr.slice(1)
}