AFRAME.registerComponent( 'move-mag-up-component', {
    init : function() {
        console.log('right');

        const Context_AF = this;
        Context_AF.originalScale = Context_AF.el.object3D.scale.clone();

        Context_AF.el.addEventListener('click', function(event) {
            console.log('click up');
            Context_AF.moveUp();
        });

        Context_AF.el.addEventListener('mouseenter', function(event) {
            //el = html entity or element
            //object3D = three.js (rendering engine) 3D element
            Context_AF.el.object3D.scale.set(Context_AF.originalScale.x * 1.1, Context_AF.originalScale.y * 1.1, Context_AF.originalScale.z * 1.1);
        });

        Context_AF.el.addEventListener('mouseleave', function(event) {
            Context_AF.el.object3D.scale.set(Context_AF.originalScale.x, Context_AF.originalScale.y, Context_AF.originalScale.z);
        });
    },
    moveUp : function(){

        const Context_AF = this;

        let location = document.getElementById("magnet");
        let magPos = location.getAttribute("position")
        const moveIncrement = -0.4

        //location.setAttribute('animation', 'property: position; to:'  + (magPos.z + moveIncrement) + '0 7; loop:false; dur: 200')
        location.setAttribute('animation', 'property:position; to:' + (magPos.x) + ' ' + (magPos.y) + ' ' + (magPos.z + moveIncrement) + '; loop:false dur: 200')
        console.log(magPos)

        //add to scene
        let scene = document.querySelector('a-scene');
    }

});