var input = document.getElementsByClassName("in")[0];
var add = document.getElementsByClassName("add")[0];
var tasks = document.getElementsByClassName("tasks")[0];

function addToList(){
    var item = document.createElement("DIV");
    item.innerHTML='<i class="fas fa-check-circle"></i> '+input.value;
    item.classList.add('listitem');
    tasks.appendChild(item);
    input.value="";
    
    item.addEventListener("click",function(){
       this.remove(); 
    });
    

}


add.addEventListener("click",addToList);