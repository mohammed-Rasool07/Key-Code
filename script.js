const container = document.getElementById("keycontainer");

 container.innerHTML = generateHTML("-","-","-")

 window.addEventListener("keydown", (e) =>{
    container.innerHTML = generateHTML(e.key,e.code,e.key.
        charCodeAt(0));
 });

 function generateHTML(Key,code,keyCode){
    
    return`
     <div class="key-container">
     <h4>Key</h4>
     <div class="key-content">${Key === " " ? "Space" : Key}
     </div>
     </div>

     <div class="key-container">
     <h4>Code</h4>
     <div class="key-content">${code}
     </div>
     </div>

     <div class="key-container">
     <h4>Key Code</h4>
     <div class="key-content">${keyCode}
     </div>
     </div>
    `;
 }