const dragItems = document.querySelectorAll(".drag-item");
const dropTargets= document.querySelectorAll(".drop-target");




let startInnerX;
let startInnerY;


dragItems.forEach((dragItem, index)=>{
    dragItem.addEventListener("dragstart", function(event){
        event.dataTransfer.setData(`dragItemId`, event.target.id);
      
        startInnerX= event.offsetX;
        startInnerY=event.offsetY;
    });
    // dragItem.addEventListener("mousedown", ()=>{
    //     dragItem.style.zIndex= "1";
    //     dragItems.forEach((item, i) => {
    //         if (i !== index) {
    //             dragItems[i].style.zIndex="0";
    //         }
    //     });

    // });
   

});



dropTargets.forEach((dropTarget, index) => {
    dropTarget.addEventListener("dragenter", (event) => {
        dropTarget.style.border="3px dotted green"
       
    });
    dropTarget.addEventListener("dragleave", (event) => {
        dropTarget.style.border="";
       
    });
    dropTarget.addEventListener("dragover", (event) => {
        event.preventDefault();

       
    });
});


 

dropTargets.forEach((dropTarget, index) => {
    dropTarget.addEventListener("drop", (event) => {
        event.preventDefault();
     
        dropTarget.style.border="";


       
        const dataId = event.dataTransfer.getData("dragItemId");
        const data = document.getElementById(dataId);
      
        event.target.appendChild(data);

        let offsetX = `${event.offsetX -startInnerX}px`;
        let offsetY = `${event.offsetY -startInnerY}px`;

        data.style.left = offsetX;
        data.style.top = offsetY;

    });
});




