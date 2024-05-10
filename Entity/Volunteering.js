export default class Volunteering
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

                const meta_info = document.createElement("a");
                meta_info.setAttribute("href", v.url);
                meta_info.innerText = v.meta_info;
                meta_info.classList.add("section_sub_value");

                const value = document.createElement("div");
                value.appendChild(description);

                if (v.meta_info != "")
                {
                    value.appendChild(meta_info);
                }

                section.appendChild(value);
            });

            container.appendChild(section);
        });

        return container
    }
}