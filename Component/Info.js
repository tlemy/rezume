export default class Info
{
    constructor (info)
    {
        const label = document.createElement("div");
        label.classList.add("contact_info_label");
        label.classList.add("label");
        label.innerText = info.label;

        const value = document.createElement("div");
        value.classList.add("contact_info_value");
        value.innerHTML = info.value;

        const container = document.createElement("div");
        container.classList.add("contact_info");
        container.appendChild(label);
        container.appendChild(value);

        return container;
    }
}