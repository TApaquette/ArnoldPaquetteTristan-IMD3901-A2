AFRAME.registerComponent( 'delete-crate-component', {
    init : function() {
        const Context_AF = this;

        const looper = 1;

        let crateLocation = document.getElementById("crate");
        let cratePos = crateLocation.getAttribute("position");

        if (cratePos.x < 9.0 && cratePos.x > 5.0 && cratePos.z < 5 && cratePos.z > -5 && cratePos.y < 2) {
            console.log('dump');
            crateLocation.parentNode.removeChild( crateLocation ); 
        }else{
            console.log('lmao no');
        }

    },
  
});



