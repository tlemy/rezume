export default class Education
{
    constructor (info)
    {
        const title = document.createElement("a");
        title.setAttribute("href", info.url);
        title.innerText = info.title;
        title.classList.add("url");

        const value = document.createElement("div");
        value.classList.add("setion_title");
        value.innerText = info.value;

        const container = document.createElement("div");
        container.appendChild(title);
        container.appendChild(value);
        container.classList.add("entry");

        return container
    }
}