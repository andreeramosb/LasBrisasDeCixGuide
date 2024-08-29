import { useState } from 'react';
import DoorThirdFloor from '../../assets/img/DoorThirdFloor.jpeg';
import { Link } from 'react-router-dom';
import { BiCaretLeft, BiShareAlt } from 'react-icons/bi';
import '../pages.css'
import Header from '../../components/Header/Header';

const accordionItems = [
    {
        id: 'item1',
        title: (<div>Instrucciones para ingresar</div>),
        content: (
            <>
                <div className="text-center mb-4">
                    <img src={DoorThirdFloor} alt="Puerta del Tercer Piso" className="img-fluid rounded" />
                </div>
                <p>
                    El apartamento está ubicado en el tercer piso del edificio.
                </p>
                <p>
                    Al llegar, comuníquese con nosotros a través de WhatsApp para coordinar su ingreso y abrir la puerta principal. Le entregaremos un juego de dos llaves: una para la puerta de la reja principal y otra para la puerta del apartamento.
                </p>
                <p>
                    Una vez dentro de la reja principal, suba las escaleras ubicadas a la izquierda. Estas lo llevarán al tercer piso, donde encontrará la puerta de madera que da acceso al apartamento.
                </p>
                <p>
                    No se preocupe por la iluminación de las escaleras durante la noche. Los focos cuentan con sensores que se activan automáticamente para iluminar su camino. Las luces se apagarán solas después de unos minutos.
                </p>
            </>
        )
    },
    {
        id: 'item2',
        title: (<div>Notas importantes</div>),
        content: (
            <>
                <div className='mb-3'>
                    <strong>A partir de medianoche:</strong>
                </div>
                <p>
                    A partir de medianoche, la puerta de la reja principal se cierra con llave, como una costumbre. Si llega después de esa hora y la reja está cerrada, simplemente utilice la llave proporcionada para abrirla. Inserte la llave en la cerradura y gírela hasta que la puerta se abra. Si al llegar la reja está cerrada sin llave, asegúrese de cerrarla correctamente al entrar. La zona es tranquila y muy comercial, por lo que podrá entrar y salir con su familia en cualquier momento; no hay restricciones horarias.
                </p>
            </>
        )
    },
];

const Arriving = () => {
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
            <Header title={"Al llegar"} prePage={"/menu"}/>
            <div className='container container-description'>
                <p>
                    Aquí encontrará información para facilitar su llegada al apartamento:
                </p>
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

export default Arriving;
