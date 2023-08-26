document.addEventListener("DOMContentLoaded", ()=> {

    let convert_Btn = document.querySelector("#convert-btn");
    let reset_Btn = document.querySelector("#reset-btn");

    let fname_Text = document.querySelector("#fname-text");
    let lname_Text = document.querySelector("#lname-text");
    let result_List = document.querySelector("#result-list");

    let font_Label = document.querySelector("#font-label");

    let print_Btn = document.querySelector("#print-btn")

    let page_Label = document.querySelector("#page-label");
    

// using createTextNode

    // convert_Btn.addEventListener("click", () => {
    
    // let page_Label = document.querySelector("#page-label");

    // if  (font_Label.value === "Codystar"){

    //     for ( i = 1; i <= page_Label.value; i++) {
    //         // create a element 
    //          let para_element = document.createElement('li');
    //         // create text/string in a element wih the value of input field/class
    //         let text_element1 = document.createTextNode(fname_Text.value);
    //         let text_element2 = document.createTextNode(lname_Text.value);
    //         //console.log("Convert Clicked");

    //          // css inline css in javascript
    //         para_element.style.fontFamily = "Codystar"  
    //         para_element.style.fontSize = "70px" 
            
    //         // create a element -> create text element/node
    //         para_element.appendChild(text_element1);
    //         para_element.appendChild(text_element2);

    //         //get id of the element -> create element with value
    //         result_List.appendChild(para_element);
            
    //       }
   
       
    // }

    // else if (font_Label.value === "Raleway Dots"){

    //     for ( i = 1; i <= page_Label.value; i++) {
    //         // create a element 
    //         let para_element = document.createElement('li');
    //         // create text in a element wih the value of input field/class
    //         let text_element1 = document.createTextNode(fname_Text.value);
    //         let text_element2 = document.createTextNode(lname_Text.value);
 
    //         // css inline css in javascript
    //         para_element.style.fontFamily = "Raleway Dots"   
    //         para_element.style.fontSize = "70px" 
    //         //console.log("Convert Clicked");
        
    //          para_element.appendChild(text_element1);
    //          para_element.appendChild(text_element2);
    //         result_List.appendChild(para_element);

    //     }      
    // }

    
    // })

    //refactor

    convert_Btn.addEventListener("click", () => {
    
        if (font_Label.value === "Codystar" || font_Label.value === "Raleway Dots") {
            let selectedFont = font_Label.value;
    
            for (let i = 1; i <= page_Label.value; i++) {
                let para_element = document.createElement("li");
                para_element.style.fontFamily = selectedFont;
                para_element.style.fontSize = "70px";

                // using innerHTML
               // para_element.innerHTML = `${fname_Text.value} ${lname_Text.value}`;

                // using textContent
                //para_element.textContent = `${fname_Text.value} ${lname_Text.value}`;

               // using innerText
                para_element.innerText = `${fname_Text.value} ${lname_Text.value}`;
                result_List.appendChild(para_element);
               
            }
        }
    });
    

    // clear button
    reset_Btn.addEventListener("click", () => {
        
        document.querySelector('#fname-text').value= "";
        document.querySelector('#lname-text').value= "";
        // remove element
       // document.querySelector('ul').innerHTML="";
       //document.querySelector('ul').innerText="";
       document.querySelector('ul').textContent="";
       
    })



   print_Btn.addEventListener("click", () =>{
    window.print();
   })

       

   
  
});
