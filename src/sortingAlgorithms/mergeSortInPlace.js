const COLOR_MAIN = "#36454F"
const COLOR_SELECT = "tomato"

const inPlaceHelper = async (arr) => {
  await mergeSortInPlace(arr);
  return arr;
}

const mergeSortInPlace = async (array) => {
  if (array.length <= 1){
    return array;
  }

  let s1 = array.slice(0, array.length / 2);
  let s2 = array.slice(array.length / 2);

  //uncomment to merge left + right merge
  // await Promise.all([mergeSortInPlace(s1), mergeSortInPlace(s2)])
  //   .then((values) => {[s1, s2] = values});

  //comment to run left -> right merge
  s1 = await mergeSortInPlace(s1);
  s2 = await mergeSortInPlace(s2);

  let s = await merge(s1, s2);

  return s;
}


const merge = async (a1, a2) => {
  const a = a1.concat(a2);
  let p1 = 0;
  let mid = Math.floor(a.length / 2);
  let p2 = mid;

  while (p1 < mid && p2 < a.length){
    let a1Val = parseInt(a[p1].style.height.substring(0, a[p1].style.height.length - 2));
    let a2Val = parseInt(a[p2].style.height.substring(0, a[p2].style.height.length - 2));


    if (a1Val <= a2Val){
      a[p1].style.backgroundColor = COLOR_SELECT;
      a[p2].style.backgroundColor = COLOR_SELECT;
      await sleep(0);
      a[p1].style.backgroundColor = COLOR_MAIN;
      a[p2].style.backgroundColor = COLOR_MAIN;
      p1 += 1;
    }
    else{
      let idx = p2;
      let tmp = parseInt(a[idx].style.height.substring(0, a[idx].style.height.length - 2));


      while (idx !== p1){
        a[p1].style.backgroundColor = COLOR_SELECT;
        a[idx].style.backgroundColor = COLOR_SELECT;
        await sleep(0);
        let newHeight = parseInt(a[idx - 1].style.height.substring(0, a[idx - 1].style.height.length - 2));
        a[idx].style.height = `${newHeight}px`;
        a[idx].style.backgroundColor = COLOR_MAIN;
        a[idx - 1].style.backgroundColor = COLOR_MAIN;
        idx -= 1;
      }

      a[p1].style.height = `${tmp}px`;


      p1 += 1;
      mid += 1;
      p2 += 1;
    }
  }
  return a;
}

function sleep(ms){
  return new Promise(resolve => setTimeout(resolve, ms));
}


export { inPlaceHelper }
