AFRAME.registerComponent( 'delete-crate-component', {
    init : function() {
        const Context_AF = this;

        let crateLocation = document.getElementById("crate");
        let cratePos = crateLocation.getAttribute("position");

        if (cratePos.x < 9.0 && cratePos.x > 5.0 && cratePos.z < 5 && cratePos.z > -5 && cratePos.y < 2) { //if dropped on the destroyer plane
            console.log('dump');
            crateLocation.parentNode.removeChild( crateLocation ); //delete
        }else{
            console.log('not in zone'); //if dropped in the regular area
        }

    },
  
});



