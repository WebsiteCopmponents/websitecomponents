import homeSvg from "./homesvg";
import Components from "./components";
import Settings from "./settings";
import BlankAvatar from "./profileBox";
import Person from "./person";
import Date from "./date";
import Alert from "./alert";
import Flash from "./flash";

const Navitemsvgs = [
    {
        label: "Home",
        icon: homeSvg,
        path: "/"
    },
    {
        label: "Components",
        icon: Components,
        path: "https://webbyganesh.gumroad.com/"
    },
    {
        label: "Person",
        icon: Person,
        path: "https://webbyganesh.gumroad.com/"
    },
    {
        label: "Date",
        icon: Date,
        path: "https://webbyganesh.gumroad.com/"
    },
    {
        label: "Flash",
        icon: Flash,
        path: "https://webbyganesh.gumroad.com/"
    },
    {
        label: "Alert",
        icon: Alert,
        path: "https://webbyganesh.gumroad.com/"
    },
    {
        label : "Settings",
        icon: Settings,
        path: "https://webbyganesh.gumroad.com/"
    },
    {
        label : "Profile",
        icon : BlankAvatar,
        path: "https://webbyganesh.gumroad.com/"
    }
];

export default Navitemsvgs;
