//const COLOR_MAIN = "#36454F"
const COLOR_SELECT = "tomato"
const COLOR_MAIN = "black"

const insertionHelper = async (arr) => {
  await insertionSort(arr);
  return 1;
}

const insertionSort = async (arr) => {
  for (let i = 1; i < arr.length; i++){
    const curr = arr[i];
    let j = i;
    const currVal = parseInt(arr[i].style.height.substring(0, arr[i].style.height.length -2))
    let prevVal = parseInt(arr[j - 1].style.height.substring(0, arr[j - 1].style.height.length - 2));


    while (j > 0 && currVal <= prevVal){
      arr[j].style.backgroundColor = COLOR_SELECT;
      arr[j - 1].style.backgroundColor = COLOR_SELECT;
      arr[j].style.height = `${prevVal}px`;
      await sleep(1);
      arr[j].style.backgroundColor = COLOR_MAIN;
      arr[j - 1].style.backgroundColor = COLOR_MAIN;
      j -= 1;
      if (j > 0){
        prevVal = parseInt(arr[j - 1].style.height.substring(0, arr[j - 1].style.height.length - 2));
      }

    }

    arr[j].style.backgroundColor = COLOR_SELECT;
    curr.style.backgroundColor = COLOR_SELECT
    await sleep(1 );
    arr[j].style.height = `${currVal}px`;
    arr[j].style.backgroundColor = COLOR_MAIN;
    curr.style.backgroundColor = COLOR_MAIN;
  }
}

function sleep(ms){
  return new Promise(resolve => setTimeout(resolve, ms))
}

export { insertionHelper }
