export default class Contact
{
    constructor (infos)
    {
        const logo = document.createElement("pre");
        logo.setAttribute("id", "logo");
        logo.innerHTML = preformatedText;

        const infos_list = document.createElement("div");
        infos_list.classList.add("contact_info_list");

        infos.forEach(i => {
            infos_list.appendChild(new Info(i));
        });

        const sub_container = document.createElement("div");
        sub_container.setAttribute("id", "contact_sub_container");
        sub_container.appendChild(logo);
        sub_container.appendChild(infos_list);

        const container = document.createElement("div");
        container.classList.add("container");
        container.setAttribute("id", "contact");
        container.appendChild(sub_container);

        return container;
    }
}

class Info
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

const preformatedText = String.raw`
 __________________
 | _______________ |
 | |<span class="computer_screen">             </span>| |
 | |<span class="computer_screen">             </span>| |
 | |<span class="computer_screen">HELLO, WORLD!</span>| |
 | |<span class="computer_screen">             </span>| |
 | |<span class="computer_screen">_____________</span>| |
 |_________________|
     _[_______]_
 ___[___________]___
|         [_____] []|
| <span class="computer_light"> </span>       [_____] []|
L___________________J `;