$(document).ready(function(){
    $(".square").click(function(e) {
        var info = this.id;
        $("#info").append("<div>Clicked " + info + "</div>"); 
    });
});
