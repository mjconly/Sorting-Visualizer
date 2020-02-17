const COLOR_MAIN = "#36454F"
const COLOR_SELECT = "tomato"


const quickHelper = async (arr) => {
  await quickSort(arr);
  return 1;
}

const quickSort = async (arr) => {
  await sleep(500)
}

function sleep(ms){
  return new Promise(resolve => setTimeout(resolve, ms))
}

export { quickHelper }
