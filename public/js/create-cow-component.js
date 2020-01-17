AFRAME.registerComponent( 'create-cow-component', {
    init : function() {
        console.log('init component');

        const Context_AF = this;
        Context_AF.originalScale = Context_AF.el.object3D.scale.clone();

        Context_AF.el.addEventListener('click', function(event) {
            console.log('click');
            Context_AF.createCow();
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
    createCow : function(){

        const Context_AF = this;

        let cowElem = document.createElement('a-entity');
        cowElem.setAttribute('class', 'clickable');
        cowElem.setAttribute('geometry','primitive:box; depth:2; height:2; width:2; ');
        cowElem.setAttribute('delete-cow-component', '');

        //random transforms
        cowElem.setAttribute('position', {x:(Math.random() * 6.0) - 3.0, y:1, z: -2.0 - (Math.random() * 3.0) });
        //const randScale = 0.2 + (Math.random() * 8.0);
        //cowElem.setAttribute('scale', {x:randScale, y:randScale, z:randScale});
        cowElem.setAttribute('rotation', {x:0, y:Math.random() * 360.0, z:0});

        //add to scene
        let scene = document.querySelector('a-scene');
        scene.appendChild(cowElem);
    }
});