// const COLOR_MAIN = "#36454F"
const COLOR_SELECT = "tomato"
const COLOR_MAIN = "#212020"


const mergeHelper = async (arr) => {
  const cpA = arr.map((div) => {
    const divpx = div.style.height;
    return parseInt(divpx.substring(0, divpx.length - 2));
  })
  const cpB = cpA.slice();
  await mergeSort(0, arr.length - 1, arr, cpA, cpB);
  return arr;
}

const mergeSort = async (start, end, array, cpA, cpB) => {
  if (start >= end){
    return;
  }

  const mid = Math.floor((start + end) / 2);

  //**uncomment to run left + right merge
  // await Promise.all([
  //   mergeSort(start, mid, array, cpB, cpA),
  //   mergeSort(mid + 1, end, array, cpB, cpA)
  // ])


  //**comment to run left -> right merge
  await mergeSort(start, mid, array, cpB, cpA)
  await mergeSort(mid + 1, end, array, cpB, cpA)

  await merge(start, mid, end, array, cpA, cpB);
}


const merge = async (start, mid, end, array, cpA, cpB) => {
  let i = start
  let j = mid + 1;
  let k = start;


  while (i <= mid && j <= end){
    array[i].style.backgroundColor = COLOR_SELECT;
    array[j].style.backgroundColor = COLOR_SELECT;
    await sleep(0);
    if (cpB[i] <= cpB[j]){
      cpA[k] = cpB[i];
      // await sleep(0);
      swap(array[k], cpA[k++]);
      array[i].style.backgroundColor = COLOR_MAIN;
      array[j].style.backgroundColor = COLOR_MAIN;
      i++;
    }
    else{
      cpA[k] = cpB[j];
      // await sleep(0);
      swap(array[k], cpA[k++]);
      array[i].style.backgroundColor = COLOR_MAIN;
      array[j].style.backgroundColor = COLOR_MAIN;
      j++;
    }
  }

  while (i <= mid){
    cpA[k] = cpB[i++];
    await sleep(0);
    swap(array[k], cpA[k++]);
  }

  while(j <= end){
    cpA[k] = cpB[j++];
    await sleep(0);
    swap(array[k], cpA[k++]);
  }
}

const swap = (barVal, val) => {
  barVal.style.height = `${val}px`;
}

function sleep(ms){
  return new Promise(resolve => setTimeout(resolve, ms));
 }


export { mergeHelper }
