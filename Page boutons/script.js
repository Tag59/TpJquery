$(document).ready(function(){
    $("#agrandissement").click(function(){
        $("p").addClass("grand");
    });
    
    $("#reduction").click(function(){
        $("p").removeClass("grand");
    });
    
    $("button").eq(2).click(function(){
        let nvTexte=$("input").eq(0).val();
    
        $("p").eq(0).text(nvTexte);
    
        $("input").eq(0).val("");
    
    });

});