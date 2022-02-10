let percent =document.getElementById("percent");
let percentmark =document.getElementById("percentmark");
let grade =document.getElementById("grade");
let grademark =document.getElementById("grademark");
let butt =document.getElementById("butt");
let but =document.getElementById("but");
let maths =document.getElementById("maths");
let english =document.getElementById("english");
let physics =document.getElementById("physics");
let chemistry =document.getElementById("chemistry");
let pass = document.getElementById("pass");
let set = document.getElementById("set");
let add = document.getElementById("add");
let error = document.getElementsByClassName("error");
let error1 = document.getElementById("error1");
let error2 = document.getElementById("error2");
let error3 = document.getElementById("error3");
let error4 = document.getElementById("error4");
let errorMax = document.getElementsByClassName("errorMax");
let errorNum = document.getElementsByClassName("errorNum");
let classval = document.getElementsByClassName("form-control");
let ids=[];
let a;
let b;
let c;
let d;
let marksobt=0;
let total;
let calcuAns;
    





// tried to validate by looping through the courses buh to no avail, dats y i validated differntly after this block of code

//    function validation(){
//     for(let i=0; i<classval.length;i++){

//         if(isNaN(classval[i].value)){
//                             //  console.log("its not a number");   
//                         error[i].innerHTML="Incorrect input, pls check again";
//                         return false        
                         
//                     }if(classval[i].value ===""){
//                         error[i].innerHTML="Pls input a number";
//                         return false
//                     }
//                        if (classval[i].value > 100) {
//                               error[i].innerHTML="Max input is 100";
//                               return false;
//                             }else{
//                                 error[i].innerHTML = "";
//                                 return true;
//                             }
                
//                    }


//     }
   











// validation block of codes (original)

// i validated one after the other here since i couldnt loop tru above

    function validateMaths(){
       
               if(isNaN(maths.value)){
                    //  console.log("its not a number");   
                error1.innerHTML="Incorrect input, pls check again";
                return false        
                 
            }if(maths.value ===""){
                error1.innerHTML="Pls input a number";
                return false
            }
               if (maths.value > 100) {
                      error1.innerHTML="Max input is 100";
                      return false;
                    }else{
                        error1.innerHTML = "";
                        return true;
                    }
        
           }
    function validateEnglish(){
       
               if(isNaN(english.value)){
                    //  console.log("its not a number");   
                error2.innerHTML="Incorrect input, pls check again";
                return false;        
                 
            }if(english.value ===""){
                error2.innerHTML="Pls input a number";
            }
               else if (english.value > 100) {
                      error2.innerHTML="Max input is 100";
                      return false;
                    }else{
                        error2.innerHTML = "";
                        return true;
                    }
        
           }
    function validatePhysics(){
       
               if(isNaN(physics.value)){
                    //  console.log("its not a number");   
                error3.innerHTML="Incorrect input, pls check again"; 
                return false;       
                 
            } if(physics.value ===""){
                error3.innerHTML="Pls input a number";
            }
               else if (physics.value > 100) {
                      error3.innerHTML="Max input is 100";
                      return false;
                    }else{
                        error3.innerHTML = "";
                        return true;
                    }
        
           }
    function validateChemistry(){
       
               if(isNaN(chemistry.value)){
                    //  console.log("its not a number");   
                error4.innerHTML="Incorrect input, pls check again";
                return false;        
                 
            }if(chemistry.value ===""){
                error4.innerHTML="Pls input a number";
            }

               else if (chemistry.value > 100) {
                      error4.innerHTML="Max input is 100";
                      return false;
                    }else{
                        error4.innerHTML = "";
                        return true;
                    }
        
           }


















// tried to validate new courses added by looping buh to no avail

    // function validateRest(){
    //     a = Number(maths.value);
    //     b = Number(english.value);
    //     c = Number(physics.value);
    //     d = Number(chemistry.value);
    
    //      let values=[a,b,c,d];

    //      for(let i=0;i<ids.length;i++){

    //         let id=ids[i];
    //         let element = document.getElementById(id);
    //         let value= Number(element.value);
    //         values.push(value);
    //     }
    
       
    //            if(isNaN(ids[i].value)){
    //                 //  console.log("its not a number");   
    //             error[i].innerHTML="Incorrect input, pls check again";
    //             return false;        
                 
    //         }if(ids[i].value ===""){
    //             error[i].innerHTML="Pls input a number";
    //         }

    //            else if (ids[i].value > 100) {
    //                   error[i].innerHTML="Max input is 100";
    //                   return false;
    //                 }else{
    //                     error[i].innerHTML = "";
    //                     return true;
    //                 }
        
    //        }
           
        //    ids[i].addEventListener("blur", validateRest )
    



    




    
function runit(){
                    a = Number(maths.value);
                    b = Number(english.value);
                    c = Number(physics.value);
                    d = Number(chemistry.value);

                    let values=[a,b,c,d];

                    for(let i=0;i<ids.length;i++){

                    let id=ids[i];
                    let element = document.getElementById(id);
                    let value= Number(element.value);
                    values.push(value);
    }



    

    // mathematics calculation code
    

    for(let i=0; i<values.length;i++){

               marksobt += values[i];
    }

               total= values.length*100;
               calcuAns = (marksobt/total)*100;

               marksobt=0;
    
    
            //    grade range block of codes
    
    if( calcuAns >= 70 && calcuAns <=100){

                            percent.innerHTML="Your percentage is:";
                            percentmark.innerHTML=calcuAns.toFixed(8) +"%";
                            grade.innerHTML="Your grade is"
                            grademark.innerHTML="A";
                            pass.innerHTML="Congratulations you passed! Excellent!!";
                            return false;

    }else if( calcuAns >=60 && calcuAns <70 ){
                            percent.innerHTML="Your percentage is:";
                            percentmark.innerHTML=calcuAns.toFixed(8) +"%";
                            grade.innerHTML="Your grade is:"
                            grademark.innerHTML="B";
                            pass.innerHTML="Congratulations you passed! Very good!";
                            return false;
    }
    else if( calcuAns >=50 && calcuAns <60){
                            percent.innerHTML="Your percentage is:";
                            percentmark.innerHTML= calcuAns.toFixed(8) +"%";
                            grade.innerHTML="Your grade is:"
                            grademark.innerHTML="C";
                            pass.innerHTML="Congratulations you passed! Good!!";
                            return false;
    }
    else if( calcuAns >=40 && calcuAns < 50){
                            percent.innerHTML="Your percentage is:";
                            percentmark.innerHTML=calcuAns.toFixed(8) +"%";
                            grade.innerHTML="Your grade is:"
                            grademark.innerHTML="D";
                            pass.innerHTML="Congratulations you passed!";
                            return false;
    }
    else if( calcuAns >=30 && calcuAns <40 ){
                            percent.innerHTML="Your percentage is:";
                            percentmark.innerHTML=calcuAns.toFixed(8) +"%";
                            grade.innerHTML="Your grade is:"
                            grademark.innerHTML="E";
                            pass.innerHTML="Sorry, you failed";
                            return false;
    }
    else if( calcuAns <=30 ){
                            percent.innerHTML="Your percentage is:";
                            percentmark.innerHTML=calcuAns.toFixed(8) +"%";
                            grade.innerHTML="Your grade is:"
                            grademark.innerHTML="F";
                            pass.innerHTML="Sorry, you failed";
                            return true;
    }
      

}



// this code adds new courses

function addNew(){
             let id = String(Date.now());

             but.insertAdjacentHTML('beforebegin', `
                
             <div class="form-group">
                    <input type="text" class="form-control" placeholder="Enter score" id=${id}>
                    <p class="error"></p>
                    <p class="errorNum"></p>
                    <p class="errorMax"></p>
             </div> `)

             ids.push(id);


}


    //  this blocks calls all the above functions


            maths.addEventListener("blur" , validateMaths);
            english.addEventListener("blur" , validateEnglish);
            physics.addEventListener("blur" , validatePhysics);
            chemistry.addEventListener("blur" , validateChemistry);
            // classval[i].addEventListener("click" , validation);
            but.addEventListener("click" , runit);
            add.addEventListener("click" , addNew);

                       


            // this function resets all values


function reset(){
    

    for(let i=0; i<classval.length;i++){
       
                    if(classval[i].value===""){
                    error[i].innerHTML="Pls input a number";
                    error[i].innerHTML="";

   
        }
    
    }


                    a = Number(maths.value);
                    b = Number(english.value);
                    c = Number(physics.value);
                    d = Number(chemistry.value);
                    let values=[a,b,c,d];


    for(let i=0; i<values.length;i++){
       
        if(isNaN(values[i])){
                       
                   errorNum[i].innerHTML="";
        }


                   if(values[i] > 100){
            
                   errorMax[i].innerHTML="";
            
        }
             
    }
                    maths.value="";
                    english.value="";
                    physics.value="";
                    chemistry.value="";
                    percent.innerHTML="";
                    percentmark.innerHTML="";
                    grade.innerHTML=""
                    grademark.innerHTML="";
                    pass.innerHTML="";
                        
                        

    for(let i=0;i<ids.length;i++){

                    let id=ids[i];
                    let element = document.getElementById(id);
                    element.value="";
    }
 

}
set.addEventListener("click" , reset);

