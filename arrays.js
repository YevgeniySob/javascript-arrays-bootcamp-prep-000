chocolateBars = ["snickers","hundred grand","kitkat","skittles"]

function addElementToBeginningOfArray(arr,element){
  arr2 = []
  arr2.unshift(element)
  return arr2
}

function destructivelyAddElementToBeginningOfArray(arr,element){
  arr.unshift(element)
  return arr
}