let input =document.getElementById("inp");
let text =document.querySelector(".text");

function addTask(){
    if(input.value==""){
        alert("You must write something")

    }
    else{
        let newEl=document.createElement("ul");
        newEl.innerHTML=`<span class="img"><img src="/images/unchecked.png"width=25px style="padding:0px 5px"alt=""></span>${input.value} <i class="fa-solid fa-trash"></i>`;
        text.appendChild(newEl);
        input.value="";
        newEl.querySelector("i").addEventListener("click",remove);
        function remove(){
            newEl.remove();
        }
        const spans = document.querySelectorAll("span");
        spans.forEach(span => {
            span.addEventListener("click", function() {
                this.innerHTML = `<img src="/images/checked.png" width="25px" style="padding:0px 5px" alt="">`;
            });
        });
        
    }
}