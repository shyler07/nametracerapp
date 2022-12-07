document.addEventListener("DOMContentLoaded", ()=> {

    let convert_Btn = document.querySelector("#convert-btn");
    let reset_Btn = document.querySelector("#reset-btn");

    let name_Text = document.querySelector("#name-text");
    let result_List = document.querySelector("#result-list");

    let font_Label = document.querySelector("#font-label");

    let print_Btn = document.querySelector("#print-btn")
    



    convert_Btn.addEventListener("click", () => {
    
    let page_Label = document.querySelector("#page-label");

    if  (font_Label.value === "Codystar"){

        for ( i = 1; i <= page_Label.value; i++) {
            // create a element 
             let para_element = document.createElement('li');
            // create text in a element wih the value of input field/class
            let text_element = document.createTextNode(name_Text.value);

            //console.log("Convert Clicked");

             // css inline css in javascript
            para_element.style.fontFamily = "Codystar"  
            para_element.style.fontSize = "50px" 

            // create a element -> createtextelement/node
            para_element.appendChild(text_element);
            //get id of the element -> create element with value
            result_List.appendChild(para_element);
          }
   
       
    }

    else if (font_Label.value === "Raleway Dots"){

        for ( i = 1; i <= page_Label.value; i++) {
            // create a element 
            let para_element = document.createElement('li');
            // create text in a element wih the value of input field/class
            let text_element = document.createTextNode(name_Text.value);
 
            // css inline css in javascript
            para_element.style.fontFamily = "Raleway Dots"   
            para_element.style.fontSize = "50px" 
            //console.log("Convert Clicked");
        
             para_element.appendChild(text_element);
            result_List.appendChild(para_element);

        }      
    }

    
    })

    // clear button
    reset_Btn.addEventListener("click", () => {
        document.querySelector('#name-text').value= "";
       
        // remove element
        document.querySelector('ul').innerHTML="";
     

    })



   print_Btn.addEventListener("click", () =>{
   
    window.print();


   })

       



});
