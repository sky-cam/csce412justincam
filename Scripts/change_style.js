var savedStyle = localStorage.getItem("style") || "Styles./first_style.css";
document.getElementById("currentStyle").setAttribute("href", savedStyle);


function swapStyle() {
    let style = document.getElementById("currentStyle");

    if(style.getAttribute("href").includes("first_style.css"))
    {
        localStorage.setItem("style", "Styles/second_style.css");
        document.getElementById("currentStyle").setAttribute("href", "Styles/second_style.css");
    }
    else
    {
        localStorage.setItem("style", "Styles/first_style.css");
        document.getElementById("currentStyle").setAttribute("href", "Styles/first_style.css");
    }
}