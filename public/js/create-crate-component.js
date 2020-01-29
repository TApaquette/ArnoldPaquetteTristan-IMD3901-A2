AFRAME.registerComponent( 'create-crate-component', {
    init : function() {
        console.log('init component');

        const Context_AF = this;
        Context_AF.originalScale = Context_AF.el.object3D.scale.clone();

        Context_AF.el.addEventListener('click', function(event) {
            console.log('click');
            Context_AF.createCrate();
        });

        Context_AF.el.addEventListener('mouseenter', function(event) {
            Context_AF.el.object3D.scale.set(Context_AF.originalScale.x * 1.1, Context_AF.originalScale.y * 1.1, Context_AF.originalScale.z * 1.1);
        });

        Context_AF.el.addEventListener('mouseleave', function(event) {
            Context_AF.el.object3D.scale.set(Context_AF.originalScale.x, Context_AF.originalScale.y, Context_AF.originalScale.z);
        });
    },
    createCrate : function(){

        const Context_AF = this;

        //setting the attributes of the created boxes
        let crateElem = document.createElement('a-entity');
        crateElem.setAttribute('id', 'crate');
        crateElem.setAttribute('geometry','primitive:box; depth:2; height:2; width:2; ');

        //random transforms for spawn conditions
        crateElem.setAttribute('position', {x:(Math.random() * 6.0) - 3.0, y:1, z: 2.0 - (Math.random() * 3.0) });
        crateElem.setAttribute('rotation', {x:0, y:Math.random() * 360.0, z:0});

        //add to scene
        let scene = document.querySelector('a-scene');
        scene.appendChild(crateElem);
    }
});