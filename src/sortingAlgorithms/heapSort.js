const COLOR_SELECT = "tomato"
const COLOR_MAIN = "#212020"

const heapHelper = async (arr) => {
  await heapSort(arr);
  return 1;
}


const heapSort = async (arr) => {
  await sleep(500);
}


function sleep(ms){
  return new Promise(resolve => setTimeout(resolve, ms));
}


export { heapHelper }
