
let contor = 1;

function addCards(){
    
    const b = document.querySelectorAll("#container");
    for( let i = 0 ; i < b.length ; i++){
        b[i].remove();
    }
 
    let height = parseInt( document.querySelector("#height").value);
    console.log(height);
    let length = parseInt( document.querySelector("#length").value); 
    let parent = document.querySelector("#parent");  
    console.log(parent)     
    parent.innerHTML += '<main id="container" style="display:grid; height:100%; width:100%; grid-template-columns: repeat('+length+',1fr); grid-template-rows: repeat('+height+',1fr);"></main>'
    let area = height * length;
    for( let i = 1 ; i <= area ; i++){
        document.querySelector("#container").innerHTML += '<div class="blocks"></div>';
        contor++;
    }
    
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
