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

const bannerText = String.raw`
10101010\                 10\       10\
\__10  __|                10 |      10 |
   10 |   .010101\  .0101010 |      10 |      .010101\  101010\0101\  10\   10\
   10 |   10  __10\ 10  __10 |      10 |      10  __10\ 10  _01  _10\ 10 |  10 |
   10 |   10101010 |10 /  10 |      10 |      10101010 |10 / 01 / 10 |10 |  10 |
   10 |   10   ____|10 |  10 |      10 |      10   ____|10 | 01 | 10 |10 |  10 |
   10 |   \0101010\ \0101010 |      10101010\ \0101010\ 10 | 01 | 10 |\0101010 |
   \__|    \_______| \_______|      \________| \_______|\__| \__| \__| \____10 |
                                                                      10\   10 |
                                                                      \010101" |
                                                                       \______/`;