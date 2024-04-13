export default class Entry
{
    constructor (info)
    {
        const title = document.createElement("a");
        title.setAttribute("href", info.url);
        title.innerText = info.title;
        title.classList.add("url");

        const container = document.createElement("div");
        container.appendChild(title);
        container.classList.add("entry");

        info.sections.forEach(s => {
            const section_title = document.createElement("div");
            section_title.classList.add("setion_title");
            section_title.innerText = s.label;

            const section = document.createElement("div");
            section.appendChild(section_title);

            s.values.forEach(v => {
                const description = document.createElement("div");
                description.classList.add("section_value");
                description.innerText = v.description;

                const url_title = document.createElement("a");
                url_title.setAttribute("href", v.url);
                url_title.innerText = v.url_title;
                url_title.classList.add("section_sub_value");

                const value = document.createElement("div");
                value.appendChild(description);

                if (v.url_title != "")
                {
                    value.appendChild(url_title);
                }

                section.appendChild(value);
            });

            container.appendChild(section);
        });

        return container
    }
}