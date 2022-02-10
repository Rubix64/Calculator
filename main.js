//calci-simple
output= document.getElementById("output");
keys= document.querySelectorAll(".keys button");
let outputvalue="";
for(key of keys){
  key.addEventListener('click',(event)=>{
    let v= event.target.innerText;
    if(v=="x"){
      v="*";
      outputvalue+=v;
      output.value=outputvalue;
    }
    else if(v=="AC"){
      outputvalue="";
      output.value=outputvalue;
    }
    else if(v=="="){
      try{
      outputvalue=eval(outputvalue);
      output.value=outputvalue;}
      catch(err){
        output.value="Error!";
        outputvalue="";
      }
    }
    else{
      outputvalue+=v;
      output.value=outputvalue;
    }
  })
}