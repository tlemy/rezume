export default class RadioButtonForm
{
    constructor(choices, onClick)
    {
        this.choices = choices;
        this.onClick = onClick;
    }

    build()
    {
        let language = localStorage.getItem("language");
        this.container = document.createElement("form");
        this.container.setAttribute("id", "language");
        this.container.onclick = this.formOnClick;

        Array.from(this.choices.keys()).forEach(key => {
            let label = document.createElement("label");
            label.setAttribute("id", key);
            label.innerHTML = key;
            label.setAttribute("name", "options");

            if (key == language)
            {
                label.classList.add("radioButtonClicked");
                localStorage.setItem("language", language);
            }
            else 
            {
                label.classList.add("radioButton");
            }

            label.onclick = this.onClick;
            this.container.appendChild(label);
        });

        return this.container;
    }
}