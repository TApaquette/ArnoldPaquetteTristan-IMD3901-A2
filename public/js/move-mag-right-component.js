AFRAME.registerComponent( 'move-mag-right-component', {
    init : function() {
        console.log('right');

        const Context_AF = this;
        Context_AF.originalScale = Context_AF.el.object3D.scale.clone();

        Context_AF.el.addEventListener('click', function(event) {
            console.log('click right');
            Context_AF.moveRight();
        });

        Context_AF.el.addEventListener('mouseenter', function(event) {
            Context_AF.el.object3D.scale.set(Context_AF.originalScale.x * 1.1, Context_AF.originalScale.y * 1.1, Context_AF.originalScale.z * 1.1);
        });

        Context_AF.el.addEventListener('mouseleave', function(event) {
            Context_AF.el.object3D.scale.set(Context_AF.originalScale.x, Context_AF.originalScale.y, Context_AF.originalScale.z);
        });
    },
    moveRight : function(){

        const Context_AF = this;

        let location = document.getElementById("magnet");
        let magPos = location.getAttribute("position");

        let crateLocation = document.getElementById("crate");
        let cratePos = crateLocation.getAttribute("position");

        const moveIncrement = 0.4

        location.setAttribute('animation', 'property: position; to: ' + (magPos.x + moveIncrement) + '0 7; loop:false; dur: 200')

        //add to scene
        let scene = document.querySelector('a-scene');

        if ((magPos.y - cratePos.y) < 2){
            if ((magPos.x - cratePos.x) > 0.3 || (magPos.z - cratePos.z) > 0.3 || (magPos.x - cratePos.x) < -0.3 || (magPos.z - cratePos.z) < -0.3){
                cratePos.x = magPos.x;
                cratePos.z = magPos.z;
            }
        }
    }

});