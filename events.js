// variables
var scrollCount = 0;

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
    document.body.innerHTML += '<div class="block">x</div>';
    scrollCount ++;
}
