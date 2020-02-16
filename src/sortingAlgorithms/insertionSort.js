const COLOR_MAIN = "#36454F"
const COLOR_SELECT = "tomato"


const insertionHelper = async (arr) => {
  await insertionSort(arr);
  return 1;
}

const insertionSort = async (arr) => {
  for (let i = 1; i < arr.length; i++){
    const curr = arr[i];
    const currVal = parseInt(arr[i].style.height.substring(0, arr[i].style.height.length -2))
    let j = i;
    let prevVal = parseInt(arr[j - 1].style.height.substring(0, arr[j - 1].style.height.length - 2));

    while (j > 0 && currVal <= prevVal){
      arr[j].style.height = `${prevVal}px`;
      j -= 1;
      if (j > 0){
        prevVal = parseInt(arr[j - 1].style.height.substring(0, arr[j - 1].style.height.length - 2));
      }
    }

    arr[j].style.height = `${currVal}px`;
  }

}

export { insertionHelper }
