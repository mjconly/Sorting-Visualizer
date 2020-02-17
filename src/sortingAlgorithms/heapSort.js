const COLOR_SELECT = "tomato"
const COLOR_MAIN = "#212020"

const heapHelper = async (arr) => {
  await heapSort(arr);
  return 1;
}


const heapSort = async (arr) => {
  const n = arr.length;

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--){
    await heapify(arr, n, i);
  }

  for (let i = n - 1; i >= 0; i--){
    const rootHeight = arr[0].style.height;
    const iHeight = arr[i].style.height;
    const rootVal = parseInt(rootHeight.substring(0, rootHeight.length - 2));
    const iVal = parseInt(iHeight.substring(0, iHeight.length - 2));

    arr[0].style.backgroundColor = COLOR_SELECT;
    arr[i].style.backgroundColor = COLOR_SELECT;
    await sleep(0)

    arr[0].style.height = `${iVal}px`;
    arr[i].style.height = `${rootVal}px`;

    arr[0].style.backgroundColor = COLOR_MAIN;
    arr[i].style.backgroundColor = COLOR_MAIN;

    await heapify(arr, i, 0);
  }
}


const heapify = async (arr, n, i) => {
  let max = i;
  let left = (2 * i) + 1;
  let right = (2 * i) + 2;

  let maxHeight = arr[max].style.height;
  let mVal = parseInt(maxHeight.substring(0, maxHeight.length - 2));

  if (left < n){
    arr[left].style.backgroundColor = COLOR_SELECT;
    arr[max].style.backgroundColor = COLOR_SELECT;
    // await sleep(0);
    const leftHeight = arr[left].style.height;
    const lVal = parseInt(leftHeight.substring(0, leftHeight.length - 2));
    arr[left].style.backgroundColor = COLOR_MAIN;
    arr[max].style.backgroundColor = COLOR_MAIN;
    if (lVal > mVal){
      max = left;
    }
  }


  if (right < n){
      arr[right].style.backgroundColor = COLOR_SELECT;
      arr[max].style.backgroundColor = COLOR_SELECT;
      // await sleep(0);
      const rightHeight = arr[right].style.height;
      const rVal = parseInt(rightHeight.substring(0, rightHeight.length - 2));
      maxHeight = arr[max].style.height;
      mVal = parseInt(maxHeight.substring(0, maxHeight.length - 2));
      arr[right].style.backgroundColor = COLOR_MAIN;
      arr[max].style.backgroundColor = COLOR_MAIN;
      if (rVal > mVal){
        max = right;
      }
  }

  if (max != i){
    const iHeight = arr[i].style.height;
    const iVal = parseInt(iHeight.substring(0, iHeight.length - 2))
    maxHeight = arr[max].style.height;
    mVal = parseInt(maxHeight.substring(0, maxHeight.length - 2));

    arr[i].style.backgroundColor = COLOR_SELECT
    arr[max].style.backgroundColor = COLOR_SELECT;
    await sleep(0);

    arr[i].style.height = `${mVal}px`;
    arr[max].style.height = `${iVal}px`;

    arr[i].style.backgroundColor = COLOR_MAIN;
    arr[max].style.backgroundColor = COLOR_MAIN;

    await heapify(arr, n, max);
  }
}


function sleep(ms){
  return new Promise(resolve => setTimeout(resolve, ms));
}


export { heapHelper }
