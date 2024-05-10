export default class Employment
{
    constructor (emp)
    {
        const title = document.createElement("a");
        title.setAttribute("href", emp.url);
        title.classList.add("url");
        title.innerText = emp.title;

        const container = document.createElement("div");
        container.appendChild(title);
        container.classList.add("entry");

        emp.sections.forEach(s => {
            const section_title = document.createElement("div");
            section_title.classList.add("setion_title");
            section_title.innerText = s.label;

            const section = document.createElement("div");
            section.appendChild(section_title);

            s.values.forEach(v => {
                const value = document.createElement("div");
                value.classList.add("section_value");
                value.innerText = v;

                section.appendChild(value);
            });

            container.appendChild(section);
        });

        return container
    }
}