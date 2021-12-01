
let numList= [];
let sum = 0; 
let mean = 0;
 

//Function adds numbers to array
function addNums(){
    for(i = 0; i < 4; i++){
        numList[i] = parseInt(prompt("Insert number here: ")) 
    }
}

//add Array
function sumCompute(){
    for (i = 0; i  < numList.length; i ++){
        sum += numList[i];   
    }
}

//print sum
function sumAns(){
    sumCompute()
    alert(sum);

    //reset sum to 0
    sum = 0;
}

//find mean and print
function meanAns(){
    sumCompute();
    let mean = sum/numList.length;
    alert(mean);

    //reset sum & mean to 0
    mean = 0;
    sum = 0;
}


