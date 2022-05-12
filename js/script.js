const dragItems = document.querySelectorAll(".drag-item");
const dropTargets= document.querySelectorAll(".drop-target");





dragItems.forEach((dragItem, index)=>{
    dragItem.addEventListener("dragstart", function(event){
        event.dataTransfer.setData(`dragItemId`, event.target.id);
        event.target.style.opacity="0.4";

    });
    dragItem.addEventListener("mousedown", ()=>{
        dragItem.style.zIndex= "1";
        dragItems.forEach((item, i) => {
            if (i !== index) {
                dragItems[i].style.zIndex="0";
            }
        });

    });
   

});



dropTargets.forEach((dropTarget, index) => {
    dropTarget.addEventListener("dragend", (event) => {
        dropTarget.style.opacity="1"; 
    });
});




dropTargets.forEach((dropTarget, index) => {
    dropTarget.addEventListener("dragenter", (event) => {
        dropTarget.style.border="3px dotted green"
       
    });
});



dropTargets.forEach((dropTarget, index) => {
    dropTarget.addEventListener("dragleave", (event) => {
        dropTarget.style.border="";
       
    });
});





dropTargets.forEach((dropTarget, index) => {
    dropTarget.addEventListener("dragover", (event) => {
        event.preventDefault();
    });
});

dropTargets.forEach((dropTarget, index) => {
    dropTarget.addEventListener("drop", (event) => {
        event.preventDefault();
        dropTarget.style.border="";
       
        const data= event.dataTransfer.getData("dragItemId");
        event.target.appendChild(document.getElementById(data));
    });
});




