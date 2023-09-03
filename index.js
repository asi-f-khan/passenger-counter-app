
let count =0;
let cnt=0;
let cntel= document.getElementById("count-el");
let precount= document.getElementById("pre-cnt");

function increment() {
  count +=1;
  cntel.innerText=count;
}

function reset() {
  count=0;
  cntel.innerText=0;
  cnt=0;
  precount.innerText= "Previous Count:"
}

function decrement() {
  if(count!=0){
    count-=1;
cntel.innerText=count;

  }


}

function save(){

  if(count!=0){
    precount.innerText= precount.innerText+" "+cnt+" -> "+count+" , ";
    cnt+=1;
    count=0;
    cntel.innerHTML=count;
  }

   
}
