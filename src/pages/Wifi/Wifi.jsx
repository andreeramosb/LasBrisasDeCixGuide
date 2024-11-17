import { useState } from 'react';
import WifiLogo from '../../assets/img/wifi.jpg';
import { Link } from 'react-router-dom';
import { BiCaretLeft, BiShareAlt } from 'react-icons/bi';
import '../pages.css'
import Header from '../../components/Header/Header';

// Datos de ejemplo
const accordionItems = [
    {
        id: 'item1',
        title: (<div>Wifi</div>),
        content: (
            <>
                <div className="text-center mb-4">
                    <img src={WifiLogo} alt="Wi-Fi" className="img-fluid rounded" />
                </div>
                <p>Para su comodidad, le ofrecemos acceso a internet vía Wi-Fi. A continuación, encontrará los detalles para conectarse:</p>
                <ul>
                    <li><strong>Nombre de la red:</strong> MRamosD</li>
                    <li><strong>Contraseña:</strong> +660621M_R</li>
                </ul>
                <p>Estamos aquí para ayudarle. ¡Disfrute de su estancia!</p>
            </>
        )
    }
];

const Wifi = () => {
    const [openItems, setOpenItems] = useState([]);

    const handleToggle = (id) => {
        setOpenItems((prevOpenItems) =>
            prevOpenItems.includes(id)
                ? prevOpenItems.filter(itemId => itemId !== id)
                : [...prevOpenItems, id]
        );
    };

    return (
        <>
            <Header title={"Internet"} prePage={"/menu"}/>
            <div className='container mt-title-accordion'>
            </div>

            <div className="container mb-5">
                <div className="accordion" id="accordionExample">
                    {accordionItems.map((item, index) => (
                        <div className="accordion-item" key={item.id}>
                            <h2 className="accordion-header" id={`heading${index}`}>
                                <button
                                    className={`accordion-button ${openItems.includes(item.id) ? '' : 'collapsed'}`}
                                    type="button"
                                    onClick={() => handleToggle(item.id)}
                                    aria-expanded={openItems.includes(item.id)}
                                    aria-controls={`collapse${index}`}
                                >
                                    <div className='title-accordion'>
                                        {item.title}
                                        <div className='underline'></div>
                                    </div>
                                </button>
                            </h2>
                            <div
                                id={`collapse${index}`}
                                className={`accordion-collapse collapse ${openItems.includes(item.id) ? 'show' : ''}`}
                                aria-labelledby={`heading${index}`}
                            >
                                <div className="accordion-body">
                                    {item.content}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Wifi;
