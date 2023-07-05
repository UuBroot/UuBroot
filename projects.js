let array = [
    {
        name: "EchoBot",
        description: "A discord bot for a democratic server. This is just for testing the features of a project of mine(echotalk).",
        imgsrc: "https://raw.githubusercontent.com/UuBroot/EchoBot/a5a1ab0bb4ee9aaae291288510397db24709c6b0/logo/logo.svg",
        state: "active",
        link: "https://github.com/UuBroot/EchoBot"
    },
    {
        name: "Viider",
        description: "A private and easy to use Youtube Client.",
        imgsrc: "https://github.com/UuBroot/Viider/blob/V3/img/logowhite.png?raw=true",
        state: "finished",
        link: "https://github.com/UuBroot/Viider/tree/V3"
    },
    {
        name: "DarkWeb",
        description: "The really scarry things that are on the darkweb :O",
        imgsrc: "https://github.com/UuBroot/DarkWeb/blob/main/img/creepy.gif?raw=true",
        state: "paused",
        link: "https://github.com/UuBroot/DarkWeb"
    },
    {
        name: "echo-talk",
        description: "A social media with gunjs.",
        imgsrc: "",
        state: "paused",
        link: "https://github.com/UuBroot/echo-talk"
    }
]

//Generating
let string = "";
for(let i = 0;i < array.length;i++){
    string += `

        <div class="project" onclick="openPage('${array[i].link}', 'new')">

            <div class="flex-box" style="width:10vw">
                
                <img src="${array[i].imgsrc}" style="width:3em">

                <h3>${array[i].name}</h3>
            
            </div>

            <p>${array[i].description}</p>

            <p>${array[i].state}</p>

        </div>

    ` 
}
document.getElementById("project-contnent").innerHTML = string;