import { useState } from 'react';
import RulesIng from '../../assets/img/rules.png';
import { Link } from 'react-router-dom';
import { BiCaretLeft, BiShareAlt } from 'react-icons/bi';
import '../pages.css';
import Header from '../../components/Header/Header';

// Datos de ejemplo
const accordionItems = [
    {
        id: 'item1',
        title: (<div>Reglas del Alojamiento</div>),
        content: (
            <>
                <div className="text-center mb-4">
                    <img src={RulesIng} alt="Home" className="img-fluid rounded" />
                </div>
                <p>Para su comodidad y tranquilidad, por favor tenga en cuenta estas reglas durante su estancia:</p>
                <ul>
                    <li>
                        Para mantener un ambiente sereno y relajante, le agradecemos que evite realizar fiestas o reuniones ruidosas en el departamento.
                    </li>
                    <li>
                        Le pedimos que evite fumar dentro del departamento.
                    </li>
                    <li>
                        Amamos a las mascotas tanto como usted, pero lamentablemente nuestro espacio no está preparado para recibirlas adecuadamente. Agradecemos su comprensión.
                    </li>
                    <li>
                        No se permiten tomar bebidas alchólicas.
                    </li>
                    <li>
                        El número máximo de personas que pueden ingresar al apartamento es el indicado en la reserva en la web de Airbnb. Si desea permitir la entrada a más personas, deberá coordinarlo previamente con el anfitrión y/o la co-anfitriona.
                    </li>
                </ul>
                <p>Gracias por su comprensión y cooperación. Si tiene alguna duda o necesita asistencia, no dude en contactarnos.</p>
            </>
        )
    }
];

const Rules = () => {
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
            <Header title={"Reglas del apartamento"} prePage={"/menu"} />
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

export default Rules;
