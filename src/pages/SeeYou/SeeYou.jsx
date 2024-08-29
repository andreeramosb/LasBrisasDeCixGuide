import { useState } from 'react';
import '../pages.css';
import Header from '../../components/Header/Header';
import Thanks from '../../assets/img/Thanks.jpg';

const accordionItems = [
    {
        id: 'thanks',
        title: (<div translate="no">Gracias</div>),
        content: (
            <>
                <div className="text-center mb-4">
                    <img src={Thanks} alt="thanks-img" className="img-fluid rounded" />
                </div>

                <p>
                    ¡Gracias por elegirnos!
                </p>
                <p>
                    Ha sido un verdadero placer recibirlos. Esperamos que hayan disfrutado de su estancia tanto como nosotros disfrutamos de su visita. Cada visita es especial para nosotros, y nos alegraría mucho poder darles la bienvenida nuevamente en el futuro.
                </p>
                <p>
                    Valoramos mucho las opiniones de nuestros huéspedes. Airbnb les enviará una solicitud para dejar un comentario sobre su experiencia. Si pueden compartir cómo les fue, se lo agradeceremos muchísimo
                </p>
                <p>
                    Si sienten que no hemos alcanzado las 5 estrellas, por favor no duden en contactarnos directamente por WhatsApp o dejar un comentario privado en la web de Airbnb. Esto nos ayudará a seguir mejorando.
                </p>
                <p>
                    Gracias de nuevo por confiar en nosotros. ¡Esperamos verlos pronto en <span translate="no">"Las Brisas de Cix"</span>!
                </p>
            </>
        )
    },
    {
        id: 'checkout',
        title: (<div translate="no">Información sobre la hora de salida</div>),
        content: (
            <>
                <p>
                    La hora de salida es a las 11:00 de la mañana. Si necesita salir más tarde, por favor comuníquense con nosotros para verificar la posibilidad de ofrecerles un tiempo extra. Revisaremos si hay alguna reserva inmediata posterior a la suya.
                </p>
                <p>
                    En caso de que haya una reserva inmediata, podrán dejarnos sus maletas y regresar a recogerlas sin ningún problema. Si no hay reservas posteriores, con mucho gusto les permitiremos salir unas horas más tarde, ya sea dejando sus maletas con nosotros o, si es posible, permaneciendo en el apartamento.
                </p>
            </>
        )
    },
    {
        id: 'departure',
        title: (<div translate="no">Información sobre la salida</div>),
        content: (
            <>
                <p>
                    Antes de su partida, le agradecemos que se ocupe de los siguientes detalles:
                </p>
                <ul>
                    <li>No es necesario hacer la cama. No se preocupe por eso.</li>
                    <li>Coloque todas las toallas usadas en la ducha (colgarlas en la puerta de la ducha).</li>
                    <li>Mueva todos los artículos, objetos y muebles a su ubicación original.</li>
                    <li>El set de llaves por favor entregarlas en el primer piso.</li>
                </ul>
                <p>
                    Esperamos que haya disfrutado de su estadía y le deseamos un feliz viaje de retorno a casa. ¡Saludos!.
                </p>
            </>
        )
    }
];

const SeeYou = () => {
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
            <Header title={"Regrese pronto"} prePage={"/menu"} />
            <div className='container mb-5'>
                {/* Sección de acordeones */}
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

export default SeeYou;
