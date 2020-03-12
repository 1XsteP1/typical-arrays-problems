exports.min = function min (array) {
  if (array == undefined || array.length == 0) {
   return 0
  } else {
   return Math.min(...array)
  }
}

exports.max = function max (array) {
  if (array == undefined || array.length == 0) {
   return 0
  } else {
   return Math.max(...array)
  }
}

 exports.avg = function avg (array) {
  if (array == undefined || array.length == 0) {
   return 0
  }

  let average = 0;

   let comp = (a,b) => {
   if (a > b) return 1
   if (a == b) return 0
   if (a < b) return -1
  }

   array.sort(comp)

   for (let i in array) {
   average += array[i]
  }

   return average / array.length
}
