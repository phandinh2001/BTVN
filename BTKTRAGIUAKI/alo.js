let arr = [3, 4, 6, -9, 10, -88, 2];
let number = Number(prompt("Enter number"));
let bool;
for(  let i = 0; i < arr.length; i++){
    if(number === arr[i]){
        
        bool = true;
        break;
    }

    if(bool === true){
        console.log(`${number} is  found my arr is index ${i}`);
    }

    
    else
        console.log(`${number} is not found my arr `);
}
