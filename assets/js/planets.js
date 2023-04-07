$(".boton").click((e) => {
    e.preventDefault();
    $("img").css("display", "none");
    let id = e.target.id;
    $("#planet_" +id).css("display", "block");
    $(".boton").addClass("text-decoration");
    e.target.classList.remove("text-decoration");
});