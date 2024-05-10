import RadioButtonForm from "./RadioButtonForm.js";
import Info from "./Info.js";

export default class Contact
{
    constructor (data, language)
    {
        let infos = data.get(language).infos;
        const logo = document.createElement("pre");
        logo.setAttribute("id", "logo");
        logo.innerHTML = preformatedText;

        const infos_list = document.createElement("div");
        infos_list.classList.add("contact_info_list");

        infos.forEach(i => {
            infos_list.appendChild(new Info(i));
        });
        
        const radioButtonForm = new RadioButtonForm(data, 
            (self) => {
                language = self.srcElement.innerHTML;

                self.srcElement.parentElement.childNodes.forEach(c => {
                    if (c.innerHTML === localStorage.getItem("language"))
                    {
                        c.classList.replace("radioButton", "radioButtonClicked");
                        localStorage.setItem("language", language);
                    }
                    else
                    {
                        c.classList.replace("radioButtonClicked", "radioButton");
                    }
                });

                location.reload();
            }
        ).build(language);

        infos_list.appendChild(radioButtonForm);
    
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