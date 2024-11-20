

let arr =[1,2,3,4,5,6]; 
// let sum =0; 
// const getAverag =(arr) => {
//      for (let i= 0;i<arr.length;i++){
//          sum += arr[i]; 

//      }  
//      return sum/arr.length; 
// }


//  task 2 
const getAverag =arr.reduce((acc ,currentvalue)=>{
       const sum = acc +currentvalue; 
       return sum/arr.length; 
},0);
console.log(getAverag);  

