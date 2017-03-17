// variables
var scrollCount = 0;
var body = document.getElementById('body');

// functions
function load()
{
    document.write("on page load");
}

function click()
{
    alert("clicked");
}

function scroll()
{
    //document.body.innerHTML += '<div class="block">x</div>';
    //body.innerHTML += '<div class="block">x</div>';
    body.innerHTML += '<div style="width: 100px; heigth: 100px; background: red;">block<div>';
    scrollCount ++;
}
