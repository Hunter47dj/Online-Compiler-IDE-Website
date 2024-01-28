// document.addEventListener("DOMContentLoaded", function() {
    
//     // setting the theme 
//     var editor = CodeMirror.fromTextArea(document.getElementById("editor"),{
//         mode: "text/x-c++src",
//         theme: "dracula",
//         lineNumbers: true,
//         autoCloseBrackets: true,
//     })

//     var themeSelect = document.getElementById("themeSelect");

//     themeSelect.addEventListener("change", function() {
//         var selectedTheme = themeSelect.value;
//         editor.setOption("theme", selectedTheme);
//     });

//     //setting window width
//     var width =window.innerWidth
//     editor.setSize(0.7*width, "600")

//     // getting elements ready for the api request
//     var input = document.getElementById("input")
//     var output = document.getElementById("output")
//     var run = document.getElementById("run")

    

//     var option = document.getElementById("inlineFormSelectPref")
//     option.addEventListener("change", function(){
//         if(option.value=="Java"){
//             editor.setOption("mode","text/x-java")
//         }
//         else if(option.value=="Python"){
//             editor.setOption("mode","text/x-python")
//         }
//         else {
//             editor.setOption("mode","text/x-c++src")
//         }
//     })

//     var code;   // this variable will be sent to the api
//     run.addEventListener("click", async function(){
//             code={
//                 code:editor.getValue(),
//                 input:input.value,
//                 lang:option.value
//             }
//             var oData = await fetch("http://localhost:8000/compile",{    // http://localhost:8000/compile this is the endpoint 
//                 method:"POST",
//                 headers:{
//                     "Content-Type":"application/json"
//                 },
//                 body:JSON.stringify(code)
//             })
//             var d= await oData.json()  // get the value from the api
//             output.value= d.output     // send the output to the frontend
//     })


// });