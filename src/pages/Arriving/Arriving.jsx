import { useState } from 'react';
import DoorThirdFloor from '../../assets/img/DoorThirdFloor.jpeg';
import { Link } from 'react-router-dom';
import { BiCaretLeft, BiShareAlt } from 'react-icons/bi';
import AccessPanel from '../../assets/img/ch1.jpeg';
import PanelNumber from '../../assets/img/ch2.jpeg';
import InteriorPanel from '../../assets/img/ch3.jpeg';
import '../pages.css'
import Header from '../../components/Header/Header';

const accordionItems = [
    {
        id: 'item1',
        title: (<div>Instrucciones para ingresar</div>),
        content: (
            <>
                <ul>
                    <li>
                        El apartamento está ubicado en el tercer piso del edificio.
                    </li>

                    <li>
                        Al llegar, comuníquese con nosotros a través de WhatsApp para coordinar su ingreso y recibir la clave de acceso.
                        Utilice el panel de acceso que se indica en la siguiente imagen: presione el botón con el ícono de tarjeta para activar la pantalla y mostrar el teclado numérico.
                    </li>
                </ul>
                <div className="text-center mb-4">
                    <img src={AccessPanel} alt="Panel de acceso exterior" className="img-fluid rounded" />
                </div>

                <ul>
                    <li>
                        Ingrese la clave en el teclado iluminado para desbloquear la puerta automáticamente.
                    </li>
                </ul>
                <div className="text-center mb-4">
                    <img src={PanelNumber} alt="Panel numérico iluminado" className="img-fluid rounded" />
                </div>

                <ul>
                    <li>
                        Una vez dentro de la reja principal, suba las escaleras ubicadas a la izquierda. Estas lo llevarán al tercer piso.
                    </li>

                    <li>
                        Al llegar al tercer piso, encontrará la puerta de madera que da acceso al apartamento.
                        La llave estará colgada en la chapa para que pueda ingresar fácilmente.
                    </li>
                </ul>
                <div className="text-center mb-4">
                    <img src={DoorThirdFloor} alt="Puerta del Tercer Piso" className="img-fluid rounded" />
                </div>

                <ul>
                    <li>
                        No se preocupe por la iluminación de las escaleras durante la noche.
                        Los focos cuentan con sensores que se activan automáticamente para iluminar su camino.
                        Las luces se apagarán solas después de unos minutos.
                    </li>

                    <li>
                        Para salir del apartamento, presione el botón circular del panel interior, como se muestra en la siguiente imagen.
                        Esto desbloqueará la puerta y permitirá abrirla sin necesidad de código.
                    </li>
                </ul>
                <div className="text-center mb-4">
                    <img src={InteriorPanel} alt="Panel interior de salida" className="img-fluid rounded" />
                </div>

                <div className="alert alert-warning mt-4" role="alert">
                    <strong>Importante:</strong> Al cerrar la puerta, espere unos segundos hasta escuchar un clic metálico.
                    Ese sonido indica que el cerrojo automático se ha activado correctamente y la puerta está asegurada.
                </div>
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
            <Header title={"Al llegar"} prePage={"/menu"} />
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
