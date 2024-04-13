export default class Section
{
    constructor(label)
    {
        this.label = label;
    }

    build()
    {
        this.title = document.createElement("div");
        this.title.classList.add("label");
        this.title.innerText = this.label;

        this.section_container = document.createElement("div");
        this.section_container.classList.add("section_container");
        this.section_container.appendChild(this.title);

        this.container = document.createElement("div");
        this.container.classList.add("section");
        this.container.appendChild(this.section_container);

        return this;
    }

    populate(entries, Object)
    {
        const list = document.createElement("div");
        list.classList.add("entry_list");
        entries.forEach(e => {
            list.appendChild(new Object(e));
        });
        this.section_container.appendChild(list);

        return this.container;
    }
}