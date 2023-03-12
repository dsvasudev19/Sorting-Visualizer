function sleep(milliseconds) {  
    return new Promise(resolve => setTimeout(resolve, milliseconds));  
 }  


var numberOfElements;
var randomArray=[];
var max=150;
var min=1;
var speed;
var bars_container=document.getElementById("bars_container");

var arr=[10,40,58,88,100,143,132,76];
window.onload=function(){
    createBars(arr);
    $("#bubbleSortDescription").hide();
    $("#aboutalgorithms").show();
    $("#selectionSortDescription").hide();
    $("#insertionSortDescription").hide();
    speed=$("#speedrangebar").value;

}


function createBars(randomArray){
    const myNode = document.getElementById("bars_container");
  while (myNode.firstChild) {
    myNode.removeChild(myNode.lastChild);
  }

    w=window.innerWidth/randomArray.length;
    for(let i=0;i<randomArray.length;i++){
        var bar=document.createElement("div");
        bar.classList.add("bar");
        bar.style.height=randomArray[i]*1.5*2+"px";
        bar.style.width=w+"px";
        bar.style.backgroundColor="yellow";   
        bars_container.appendChild(bar);
    }
}
speed=$("#speedrangebar").value;
function generateRandomArray(numberOfRows){
    randomArray=[];
    for(i=0;i<numberOfRows;i++){
        var x=Math.round((Math.random() * (max - min)) + min);
        randomArray.push(x);
    }
   
}

speed=$("#speedrangebar").value;
var bars=document.getElementsByClassName("bar");
async function sortFunction(array){
    speed=$("#speedrangebar").value;
     for(let i=0;i<array.length;i++){
         speed=$("#speedrangebar").value;
        for(let j=0;j<array.length;j++){
            speed=$("#speedrangebar").value;
            if(array[j+1]<array[j]){
                for(let k=0;k<bars.length;k++){
                    if(k!== j && k!== j+1){
                        bars[k].style.backgroundColor="white";
                    }
                }
                var temp=array[j+1];
                array[j+1]=array[j];
                array[j]=temp;
                bars[j+1].style.height=array[j+1]*1.5*2+"px";
                bars[j+1].style.backgroundColor="green";
                //bars[j].innerHTML=bars[j];
              
                bars[j].style.height=array[j]*1.5*2+"px";
                bars[j].style.backgroundColor="green";
                
            
                
                await sleep(100);
            }
        }
        await sleep(10);
     }
     
}

speed=$("#speedrangebar").value;
async function selectionSortFunction(array){
    speed=$("#speedrangebar").value;
    for(let i=0;i<array.length;i++){
        speed=$("#speedrangebar").value;
        for(let j=i+1;j<array.length;j++){
            if(array[j]<array[i]){
                var temp=array[j];
                array[j]=array[i];
                array[i]=temp;
                bars[j].style.height=array[j]*1.5*2+"px";
               bars[j].style.backgroundColor="green";
             
               bars[i].style.height=array[i]*1.5*2+"px";
               bars[i].style.backgroundColor="white";
               await sleep(100);
            }
        }
        await sleep(9);
    }

}
function updateBars(array){
    for(var i=0;i<array.length;i++){
        bars[i].style.height=array[i]*3+"px";
    }
}

speed=$("#speedrangebar").value;
async function insertionSortFunction(arr) {
    speed=$("#speedrangebar").value;
    for (let i = 1; i < arr.length; i++) {
        speed=$("#speedrangebar").value;
      let currentValue = arr[i]
      bars[i].style.backgroundColor="red";
      let j
      for (j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
        bars[j].style.height=arr[j+1]*3+"px";
        arr[j + 1] = arr[j]
        bars[j+1].style.height=arr[j]*3+"px";
      }
      arr[j + 1] = currentValue
    //   bars[j+1].style.backgroundColor="red";
      bars[j+1].style.height=currentValue*3+"px";
      bars[j+1].style.backgroundColor="white";
      await sleep(100);
    }
    // insertionSortFunction(arr);
    return arr
}





document.getElementById("randomizebtn").addEventListener("click",function(){
    numberOfElements=document.getElementById("rangebar").value;
    speed=$("#speedrangebar").value;
    generateRandomArray(numberOfElements);
    createBars(randomArray);
});

$("#speedrangebar").on("change",function(){
    speed=this.value;
})


document.getElementById("rangebar").addEventListener("change",function(){
    numberOfElements=document.getElementById("rangebar").value;
    generateRandomArray(numberOfElements);
    createBars(randomArray);
});




document.getElementById("selectionsortbtn").addEventListener("click",function(){

    $("#homebtn").removeClass("active");
        $("#bubblesortbtn").removeClass("active")
        $("#selectionsortbtn").addClass("active")
        $("#insertionsortbtn").removeClass("active")
        $("#mergesortbtn").removeClass("active");
    
    $("#bubbleSortDescription").hide();
    $("#aboutalgorithms").hide();
    $("#selectionSortDescription").show();
    $("#insertionSortDescription").hide();



    if(randomArray.length==0){
        selectionSortFunction(arr);
    }
    else{
        selectionSortFunction(randomArray);
    }
})



document.getElementById("bubblesortbtn").addEventListener("click",function(){

        $("#homebtn").removeClass("active");
        $("#bubblesortbtn").addClass("active")
        $("#selectionsortbtn").removeClass("active")
        $("#insertionsortbtn").removeClass("active")
        $("#mergesortbtn").removeClass("active");

        
    $("#bubbleSortDescription").show();
    $("#aboutalgorithms").hide();
    $("#selectionSortDescription").hide();
    $("#insertionSortDescription").hide();


    if(randomArray.length==0){
        sortFunction(arr);
    }
    else{
        sortFunction(randomArray);
    }
})



document.getElementById("insertionsortbtn").addEventListener("click",function(){
    $("#homebtn").removeClass("active");
        $("#bubblesortbtn").removeClass("active")
        $("#selectionsortbtn").removeClass("active")
        $("#insertionsortbtn").addClass("active")
        $("#mergesortbtn").removeClass("active");


    $("#bubbleSortDescription").hide();
    $("#aboutalgorithms").hide();
    $("#selectionSortDescription").hide();
    $("#insertionSortDescription").show();


    if(randomArray.length==0){
        insertionSortFunction(arr);
    }
    else{
        insertionSortFunction(randomArray);
    }
})


$("#logoimg").click(function(){
    location.href="index.html";
})
