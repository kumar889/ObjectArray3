const arrayList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];


function fizzbuzz(list){
    for(let i = 0; i<list.length;i++){
        if(i%3==0){
            console.log("Fizz");
        }

        if(i%5==0){
            console.log("Buzz");
        }
        
        if(i%3!==0 && i%5!==0){
            console.log(i);
        }
    }
}
fizzbuzz(arrayList)