// ? 1. Prompt vasitesile daxil olunmush ededin faktorialini tapin.
// let eded=parseInt(prompt("eded daxil edin"))
// let faktorial=1
// for (let index = 2; index <= eded; index++) {
//     faktorial *= index
    
// }
// console.log(faktorial);

// ? 2.Verilmish arrayde en boyuk ededle,en kicik ededin yerini deyishen alqoritm yazin.
// let array = [3, 1, 5, 2, 4];
// if (array.length >= 2) {
//     let maxIndex = 0;
//     let minIndex = 0;
//     for (let i = 1; i < array.length; i++) {
//         if (array[i] > array[maxIndex]) {
//             maxIndex = i;
//         }
//         if (array[i] < array[minIndex]) {
//             minIndex = i;
//         }
       
//     }
//     let temp = array[maxIndex];
//     array[maxIndex] = array[minIndex];
//     array[minIndex] = temp;

//     console.log("Dəyişdirdikdən sonra array:", array);
// } else {
//     console.log("Array-in uzunluğu 2-dən kiçikdir. Dəyişiklik edilmədi.");
// }


// ? 3.Verilmiş Arraydə tək elementlerden ən böyüyünü tapan alqoritm yazin.

// let arr = [2, 4, 6, 17, 10, 12, 58, 9];
// let enBoyukTek = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 !== 0 && arr[i] > enBoyukTek) {
//         enBoyukTek = arr[i];
//     }
// }
// console.log(enBoyukTek);
 
// ?4. Bir ölçülü massivin minimum və maksimum elementlərinin ədədi ortasını tapin.

// let numbers = [124, 6, 50, 99];
// let min = numbers[0];
// let max = numbers[0];

// for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] < min) {
//         min = numbers[i];
//     }
//     if (numbers[i] > max) {
//         max = numbers[i];
//     }
// }

// let result = (min + max) / 2;
// console.log(result);

// ? 5. arrayin elementləri arasında minimum və maksimum elementi nəzərə almadan yerdə qalan elementlərin cəmini tapan function
// let arr = [5, 3, 8, 2, 1, 9, 4]; 
// let min = arr[0]; 
// let max = arr[0]; 
// let cem = 0; 

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < min) {
//         min = arr[i];
//     }
//     if (arr[i] > max) {
//         max = arr[i];
//     }
// }

// for (let j = 0; j < arr.length; j++) {
//     if (arr[j] !== min && arr[j] !== max) {
//         cem += arr[j];
//     }
// }
// console.log("Yerdə qalan elementlərin cəmi: " , cem);
