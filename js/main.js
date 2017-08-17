
var prepareButtons = function() {
    $("#btn1").click(function() {
        console.log("=== BTN #1 ===\n");
    });
    $("#btnEnter").click(function() {
        console.log("### ENTER ###\n");
    });
};

$( document ).ready(function() {
    console.log("Document is ready.");
    prepareButtons();
});