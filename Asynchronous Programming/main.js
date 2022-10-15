
 let h1= document.querySelector("#h1")

 function counter() {

    let i=60;

   let id= setInterval(() => {
        
       i= i-1
       if(i==-1) {
           i=0;
           clearInterval(id)
           alert("timeout!!")
       }
       
       
     h1.innerText=i
     
        
    },100);
}

counter()
