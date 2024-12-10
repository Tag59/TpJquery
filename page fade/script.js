$(document).ready(function(){
    $("button").eq(0).click(function() {
        $("img").fadeOut(1000);  
    });
    
    // Bouton pour afficher l'image
    $("button").eq(1).click(function() {
        $("img").fadeIn(1000); 
    });
    
});
