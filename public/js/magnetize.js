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
    magnetize : function(){

        let location = document.getElementById("magnet");
        let magPos = location.getAttribute("position");

        let crateLocation = document.getElementById("crate");
        let cratePos = crateLocation.getAttribute("position");

        if((magPos.y - cratePos.y) < 2){
            cratePos.y = 1;

            let destroyPlane = document.getElementById("destroyer");
            destroyPlane.setAttribute('delete-crate-component', '');
        } 
        else if ((magPos.x - cratePos.x) < 2 && (magPos.z - cratePos.z) < 2 && (magPos.x - cratePos.x) > -2 && (magPos.z - cratePos.z) > -2){
            cratePos.y = (magPos.y - 1);
        } 
    }

});