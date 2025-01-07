let contor = 1;

function addCards(){
    const b = document.querySelectorAll("#container");
    for( let i = 0 ; i < b.length ; i++){
        b[i].remove();
    }

    let height = parseInt( document.querySelector("#height").value);
    if( height > 40 ){
        alert("the maximum input for height is 30")
        return
    } 
    let length = parseInt( document.querySelector("#length").value);
    if( length > 40 ){
        alert("the maximum input for length is 30")
        return
    } 
    let parent = document.querySelector("#parent");  
    console.log(parent)     
    parent.innerHTML += '<main id="container" style="display:grid; height:100%; width:100%; grid-template-columns: repeat('+length+',1fr); grid-template-rows: repeat('+height+',1fr);"></main>'
    let area = height * length;
    for( let i = 1 ; i <= area ; i++){
        document.querySelector("#container").innerHTML += '<div class="blocks" ondragover="add(event)" onclick="addColor(event)"></div>';
        contor++;
    }              
}

let color
let ok
function switchMode(){
    ok = 1
}

function changeColor(event){
    color = document.querySelector("#color").value;
    if (color[0] != "#"){
        color = "#" + color
    }
}

function colorPicker(colorPicker){
    color = "#" + colorPicker
    ok = -1
}

function addColor(event){
    let block = event.target;    
    if (ok == 1){
        changeColor()
    }
    console.log(ok)
    block.style.backgroundColor = color
    console.log(color)
}

let bool = false
function toogleGrid(){
    let cards =  document.querySelectorAll(".blocks");
    if(bool == false){
        for( let i = 0 ; i < cards.length ; i++ ){
            cards[i].classList.add("blocks-grid");
       }
    }else{
        for( let i = 0 ; i < cards.length ; i++ ){
            cards[i].classList.remove("blocks-grid");
       }
    }
    bool = !bool;
}

