export default class Footer
{
    build()
    {
        const footer = document.createElement("footer");
        const url = document.createElement("a");
        footer.innerText = "Created with ";
        url.innerText = "Rezume"
        url.href = "https://github.com/tlemy/rezume";
        footer.appendChild(url);

        return footer
    }
}