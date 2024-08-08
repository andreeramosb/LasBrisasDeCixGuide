import MainButton from '../../components/MainButton/MainButton';
import { BiSolidBackpack, BiFace, BiDoorOpen, BiHome, BiWifi, BiBook, BiPhone, BiMap, BiArrowToRight, BiCaretLeft, BiShareAlt } from 'react-icons/bi';
import './MainPage.css';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';

const MainPage = () => {

    const buttons = [
        {
            "title": "Bienvenido",
            "icon": BiFace,
            "href": "/welcome"
        },
        {
            "title": "Antes de viajar",
            "icon": BiSolidBackpack,
            "href": "/before-travel"
        },
        {
            "title": "Al llegar",
            "icon": BiDoorOpen,
            "href": "/arriving"
        },
        {
            "title": "Sobre el apartamento",
            "icon": BiHome,
            "href": "/apartment"
        },
        {
            "title": "WiFi / Internet",
            "icon": BiWifi,
            "href": "/internet"
        },
        {
            "title": "Reglas",
            "icon": BiBook,
            "href": "/rules"
        },
        {
            "title": "Contacto",
            "icon": BiPhone,
            "href": "/contact"
        },
        {
            "title": "Sobre la ubicación",
            "icon": BiMap,
            "href": "/location"
        },
        {
            "title": "Regresa pronto",
            "icon": BiArrowToRight,
            "href": "/see-you"
        }
    ]
    return (
        <>
            <Header title={"Menu"} prePage={"/"}/>   
            <div className="container container-menu">
                <div className="row">
                    {
                        buttons.map((button, index) => (
                            <div key={index} className="col-6 col-md-4 col-lg-3">
                                <MainButton text={button.title} icon={button.icon} href={button.href}/>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
}

export default MainPage;
