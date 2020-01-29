AFRAME.registerComponent( 'magnetize', {
    init : function() {
        console.log('mag');

        const Context_AF = this;

        Context_AF.originalScale = Context_AF.el.object3D.scale.clone();

        Context_AF.el.addEventListener('click', function(event) {
            console.log('click mag');
            Context_AF.magnetize();
        });

        Context_AF.el.addEventListener('mouseenter', function(event) {
            Context_AF.el.object3D.scale.set(Context_AF.originalScale.x * 1.1, Context_AF.originalScale.y * 1.1, Context_AF.originalScale.z * 1.1);
        });

        Context_AF.el.addEventListener('mouseleave', function(event) {
            Context_AF.el.object3D.scale.set(Context_AF.originalScale.x, Context_AF.originalScale.y, Context_AF.originalScale.z);
        });
        
    },
    //function runs when magButton is clicked
    magnetize : function(){

        //getting the position of magnet and box
        let location = document.getElementById("magnet");
        let magPos = location.getAttribute("position");

        let crateLocation = document.getElementById("crate");
        let cratePos = crateLocation.getAttribute("position");

        if((magPos.y - cratePos.y) < 2){ //if box is near magnet in height
            cratePos.y = 1; //drops the box
            
            setTimeout('', 500);

            let destroyPlane = document.getElementById("destroyer");

            setTimeout(() => { // allows user to see the box land in the destruction plane for a moment before being deleted
                
                destroyPlane.setAttribute('delete-crate-component', ''); //runs the component to check if the box is in the right area to be deleted
                destroyPlane.removeAttribute('delete-crate-component'); //removes the component, so that the next box dropped can properly check for deletion
             }, 500);
            

            
        } 
        else if ((magPos.x - cratePos.x) < 2 && (magPos.z - cratePos.z) < 2 && (magPos.x - cratePos.x) > -2 && (magPos.z - cratePos.z) > -2){ //if box is far magnet in height, and near magnet horizontally
            cratePos.y = (magPos.y - 1); //lift box to magnet
        } 
    }

});