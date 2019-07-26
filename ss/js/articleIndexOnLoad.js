$(document).ready(function(){
    $("#web-header").load("common/header.html");
    $("#web-rightSideBar").load("common/search.html");
    $("#web-articlesIndex").load("common/articlesIndex.html");
    $("#web-footer").load("common/footer.html");
    $("#articleSearchInput").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#articleList li").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
     });
});







