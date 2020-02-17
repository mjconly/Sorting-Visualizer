//const COLOR_MAIN = "#36454F"
const COLOR_SELECT = "tomato"
const COLOR_MAIN = "#212020"


const bubbleHelper = async (arr) => {
  await bubbleSort(arr);
  console.log(arr);
  return 1;
}

const bubbleSort = async (arr) => {
  for (let i = arr.length - 1; i > 0; i--){

      for (let j = 0; j < i; j ++){
        let curr = arr[j];
        let next = arr[j + 1];
        let currVal = parseInt(curr.style.height.substring(0, curr.style.height.length - 2));
        let nextVal = parseInt(next.style.height.substring(0, next.style.height.length - 2));

        curr.style.backgroundColor = COLOR_SELECT;
        next.stylebackgroundColor= COLOR_SELECT;
        await sleep(0);

        if (currVal >= nextVal){
          let tmp = currVal;
          curr.style.height = `${nextVal}px`;
          next.style.height  = `${tmp}px`;
        }

        curr.style.backgroundColor = COLOR_MAIN;
        next.style.backgroundColor= COLOR_MAIN;
      }
  }
}

function sleep(ms){
  return new Promise(resolve => setTimeout(resolve, ms));
}



export { bubbleHelper }
