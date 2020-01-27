AFRAME.registerComponent( 'magnetize', {
    init : function() {
        console.log('mag');

        const Context_AF = this;

        
        let magBool = 0;


        Context_AF.originalScale = Context_AF.el.object3D.scale.clone();

        Context_AF.el.addEventListener('click', function(event) {
            console.log('click mag');
            Context_AF.magnetize();
        });

        Context_AF.el.addEventListener('mouseenter', function(event) {
            //el = html entity or element
            //object3D = three.js (rendering engine) 3D element
            Context_AF.el.object3D.scale.set(Context_AF.originalScale.x * 1.1, Context_AF.originalScale.y * 1.1, Context_AF.originalScale.z * 1.1);
        });

        Context_AF.el.addEventListener('mouseleave', function(event) {
            Context_AF.el.object3D.scale.set(Context_AF.originalScale.x, Context_AF.originalScale.y, Context_AF.originalScale.z);
        });

        if ((magPos.x - cratePos.x) < 2 && (magPos.z - cratePos.z) < 2 ){
            location.setAttribute("material", "color:#00cc66");
        } else {
            location.setAttribute("material", "color:#b1b1cd");
        }

        if (magBool == 1){
            
        }
    },
    magnetize : function(){
        let location = document.getElementById("magnet");
        let magPos = location.getAttribute("position");

        let crateLocation = document.getElementById("crate");
        let cratePos = crateLocation.getAttribute("position");


        if ((magPos.x - cratePos.x) < 4 && (magPos.z - cratePos.z) < 4 ){
            cratePos.y = (magPos.y - 1);
            magBool = 1;
        }

    }

});