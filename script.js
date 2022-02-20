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
let errorNum = document.getElementsByClassName("errorNm");
let classval = document.getElementsByClassName("form-control");

let ids=[];
let a;
let b;
let c;
let d;
let marksobt=0;
let total;
let calcuAns;






// validation block of codes (original)


function isValidInputValue( value, errorTarget ) {

    
    if(isNaN(value)){
        //  console.log("its not a number");   
        errorTarget.innerHTML="Incorrect input, pls check again";
        return false        
        
    }if(value ===""){
        errorTarget.innerHTML="Pls input a number";
        return false
    }

    if (value > 100) {
        errorTarget.innerHTML="Max input is 100";
        return false;
    }else{
        errorTarget.innerHTML = "";
        return true;
    }
}




    
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
    if ( 
        !isValidInputValue( maths.value, error1 ) ||
        !isValidInputValue( english.value, error2 ) ||
        !isValidInputValue( physics.value, error3 ) ||
        !isValidInputValue( chemistry.value, error4 )||
        !isValidInputValue( chemistry.value, error4 )
    )
     {
        return
    }
    let dynamic = document.getElementsByClassName("dynamic-courses");
    
    
        
    for (let course of dynamic){
        let coursesId = course.id;
        let eror=document.getElementById(
            (`error${coursesId}`) )
        if( !isValidInputValue( course.value, eror )){
            return
        }
    } 
    
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
                    <input type="text" class="form-control dynamic-courses" placeholder="Enter score" id="${id}">
                    <p class="error" id="error${id}"></p>
                    <p class="errorNm"></p>
                    <p class="errorMax"></p>
             </div> `)

             ids.push(id);

             const newCourse = document.getElementById(id);
             const errorTarg = document.getElementById(`error${id}`);
             newCourse.addEventListener("blur" , () => isValidInputValue( newCourse.value, errorTarg ) );

             
            
            
}


    //  this blocks calls all the above functions


            maths.addEventListener("blur" , () => isValidInputValue( maths.value, error1 ) );
            english.addEventListener("blur" , () => isValidInputValue( english.value, error2 ));
            physics.addEventListener("blur" , () => isValidInputValue( physics.value, error3 ));
            chemistry.addEventListener("blur" , () => isValidInputValue( chemistry.value, error4 ));
            but.addEventListener("click" , runit);
            add.addEventListener("click" , addNew);


            // chemistry.addEventListener("blur" , function() {isValidInputValue()});
            // chemistry.addEventListener("blur" , validateChemistry );

            // const dynamicCourses = document.getElementsByClassName('dynamic-courses');
                // for (let i=0; i < dynamicCourses.length; i++) {
                //     const course = dynamicCourses[i];
                //     console.log()
                // }
            //     for ( course in dynamicCourses ) {
            //         console.log(course);
            //     }

            //     dynamicCourses.forEach(course => {
                    
            //     })

            // classval[i].addEventListener("click" , validation);

                       


            // this function resets all values

                 
                 let allFixed;
                 let others;
function reset(){
    

    
    for(let i=0; i<classval.length;i++){
       
                    if(classval[i].value===""){
                    error[i].innerHTML="Pls input a number";
                    error[i].innerHTML="";

   
        }
        if(isNaN(classval[i].value)){
                       
                            error[i].innerHTML="";
                }
        
        
                           if(classval[i].value > 100){
                    
                          error[i].innerHTML="";
                    
                }

    
    }


                    a = Number(maths.value);
                    b = Number(english.value);
                    c = Number(physics.value);
                    d = Number(chemistry.value);


                   allFixed=[maths,english,physics,chemistry];

                   for(let i=0; i<allFixed.length; i++){

                      allFixed[i].value ="";
                   }

                   others=[percent,percentmark,grade,grademark,pass];

                   for(let i=0; i<others.length; i++){

                      others[i].innerHTML ="";
                   }

                  
    

    for(let i=0;i<ids.length;i++){

                    let id=ids[i];
                    let element = document.getElementById(id);
                    element.value="";
    }
 

}
set.addEventListener("click" , reset);

