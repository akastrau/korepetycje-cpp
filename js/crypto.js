$("#submit").on("click", function() {
    loadPage($("#login").val(), $("#password").val());
});
$("#password").keypress(function(e) {
    if (e.which == 13) {
        loadPage($("#login").val(), $("#password").val());
    }
});
$("#login").focus();