const readfile = document.getElementById("abc");

addEventListener("load",function(){
    console.log("Hello world")
});

async function DisplayConsole(){
    console.log("foo");
    const res = await fetch("https://blue031415.github.io/Graduation-Requirements-Check-Tool/grad.json");
    const users = await res.json();
    console.log(users);
}

readfile.addEventListener("click", DisplayConsole());