$(".boton").click((e) => {
    e.preventDefault();
    $("img").css("display", "none");
    $(".boton").addClass("text-decoration");
    e.target.classList.remove("text-decoration");
});