// var rectangle = document.querySelector("#rect");
// rectangle.addEventListener("mousemove", function (details) {
//     var rect = document.querySelector("#rect")
//     var xval = gsap.utils.mapRange(
//         0,
//         window.innerWidth,
//         100 + rect.getBoundingClientRect().width / 2,
//         window.innerWidth - (100 + rect.getBoundingClientRect().width / 2),
//         details.clientX,
//     );
//     gsap.to("rect", {
//         left: xval,
//         ease: Power3,
//     });
// });

var rectangle = document.querySelector("#rect");
rectangle.addEventListener("mousemove", function (details) {
    var rect = document.querySelector("#rect");
    var xval = gsap.utils.mapRange(
        0,
        window.innerWidth,
        10 + rect.getBoundingClientRect().width / 2,
        window.innerWidth - (10 + rect.getBoundingClientRect().width / 2),
        details.clientX
    );
    gsap.to(rect, {
        left: xval,
        ease: Power3,
    });
});
