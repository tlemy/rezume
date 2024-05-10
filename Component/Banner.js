export default class Banner
{
    constructor ()
    {
        const title = document.createElement("pre");
        title.setAttribute("id", "title");
        title.innerText = bannerText;

        const subtitle = document.createElement("p");
        subtitle.classList.add("typewriter");
        subtitle.setAttribute("id", "subtitle");
        subtitle.innerText = String.raw`SOFTWARE DEVELOPER`;

        const container = document.createElement("div");
        container.classList.add("container");
        container.setAttribute("id", "banner");
        container.appendChild(title);
        container.appendChild(subtitle);

        setInterval(this.refresh_subtitle_animation, 10000);

        return container;
    }

    refresh_subtitle_animation ()
    {
        const subtitle = document.getElementById("subtitle");
        subtitle.classList.remove("typewriter");
        subtitle.offsetHeight;
        subtitle.classList.add("typewriter");
    }
}

// create with https://www.asciiart.eu/text-to-ascii-art
const bannerText = String.raw`
   $$$$$\           $$\                       $$$$$$$\                      
   \__$$ |          $$ |                      $$  __$$\                     
      $$ | $$$$$$\  $$$$$$$\  $$$$$$$\        $$ |  $$ | $$$$$$\   $$$$$$\  
      $$ |$$  __$$\ $$  __$$\ $$  __$$\       $$ |  $$ |$$  __$$\ $$  __$$\ 
$$\   $$ |$$ /  $$ |$$ |  $$ |$$ |  $$ |      $$ |  $$ |$$ /  $$ |$$$$$$$$ |
$$ |  $$ |$$ |  $$ |$$ |  $$ |$$ |  $$ |      $$ |  $$ |$$ |  $$ |$$   ____|
\$$$$$$  |\$$$$$$  |$$ |  $$ |$$ |  $$ |      $$$$$$$  |\$$$$$$  |\$$$$$$$\ 
 \______/  \______/ \__|  \__|\__|  \__|      \_______/  \______/  \_______|
 `;