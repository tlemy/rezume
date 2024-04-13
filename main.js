import data from "./data.json" assert { type: 'json' };
import Banner from "./Component/Banner.js"
import Contact from "./Component/Contact.js";
import Section from "./Component/Section.js";
import Footer from "./Component/Footer.js"
import Entry from "./Entity/Entry.js";

const bannerText = String.raw`
$$$$$$$\  $$\                       $$\     
$$  _____|\__|                      $$ |    
$$ |      $$\  $$$$$$\   $$$$$$$\ $$$$$$\   
$$$$$\    $$ |$$  __$$\ $$  _____|\_$$  _|  
$$  __|   $$ |$$ |  \__|\$$$$$$\    $$ |    
$$ |      $$ |$$ |       \____$$\   $$ |$$\ 
$$ |      $$ |$$ |      $$$$$$$  |  \$$$$  |
\__|      \__|\__|      \_______/    \____/ 
                                            

$$\                            $$\          
$$ |                           $$ |         
$$ |      $$$$$$\   $$$$$$$\ $$$$$$\        
$$ |      \____$$\ $$  _____|\_$$  _|       
$$ |      $$$$$$$ |\$$$$$$\    $$ |         
$$ |     $$  __$$ | \____$$\   $$ |$$\      
$$$$$$$$\\$$$$$$$ |$$$$$$$  |  \$$$$  |     
\________|\_______|\_______/    \____/  
`;

document.body.appendChild(new Banner(bannerText));
document.body.appendChild(new Contact(data.infos));
document.body.appendChild(new Section("^Employment").build().populate(data.employments, Entry));
document.body.appendChild(new Section("^Volunteering").build().populate(data.volunteerings, Entry));
document.body.appendChild(new Section("^Education").build().populate(data.educations, Entry));
document.body.appendChild(new Section("^Projects").build().populate(data.projects, Entry));
document.body.appendChild(new Footer().build());
