const COLOR_MAIN = "#36454F"
const COLOR_SELECT = "tomato"


const quickHelper = async (arr) => {
  await quickSort(0, arr.length - 1, arr);
  return 1;
}

const quickSort = async (start, end, arr) => {
  if (start >= end){
    return;
  }

  let p = await partition(start, end, arr);

  await quickSort(start, p - 1, arr);
  await quickSort(p + 1, end, arr);

}


const partition = async (lo, hi, arr) => {
  const pHeight = arr[hi].style.height;
  let p = parseInt(pHeight.substring(0, pHeight.length - 2));
  let i = lo - 1;

  for (let j = lo; j < hi; j++){
    const currHeight = arr[j].style.height;
    const currVal = parseInt(currHeight.substring(0, currHeight.length - 2))
    if (currVal < p){
      i += 1;
      const iHeight = arr[i].style.height;
      const jHeight = arr[j].style.height;
      const iVal = parseInt(iHeight.substring(0, iHeight.length - 2));
      const jVal = parseInt(jHeight.substring(0, jHeight.length - 2));

      arr[i].style.height = `${jVal}px`;
      arr[j].style.height = `${iVal}px`;
    }
  }

  i += 1;
  const iHeight = arr[i].style.height;
  const iVal = parseInt(iHeight.substring(0, iHeight.length - 2));

  arr[hi].style.height = `${iVal}px`;
  arr[i].style.height = `${p}px`;
  return i;
}



function sleep(ms){
  return new Promise(resolve => setTimeout(resolve, ms))
}

export { quickHelper }
