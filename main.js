import fr from "./data/fr.json" assert { type: 'json' };
import en from "./data/en.json" assert { type: 'json' };
import Banner from "./Component/Banner.js"
import Contact from "./Component/Contact.js";
import Employment from "./Entity/Employment.js";
import Education from "./Entity/Education.js";
import Section from "./Component/Section.js";
import Volunteering from "./Entity/Volunteering.js";

const data = new Map()
data.set("FR", fr); 
data.set("EN", en);

if (localStorage.getItem("language") == null)
{
    localStorage.setItem("language", "FR");
}

let language = localStorage.getItem("language");

document.body.appendChild(new Banner());
document.body.appendChild(new Contact(data, language));
document.body.appendChild(new Section("^Employment").build().populate(data.get(language).employments, Employment));
document.body.appendChild(new Section("^Volunteering").build().populate(data.get(language).volunteerings, Volunteering));
document.body.appendChild(new Section("^Education").build().populate(data.get(language).educations, Education));
