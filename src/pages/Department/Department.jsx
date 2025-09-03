import { useState } from 'react';
import Kitchen from '../../assets/img/kitchen.jpeg';
import { Link } from 'react-router-dom';
import { BiCaretLeft, BiShareAlt } from 'react-icons/bi';
import '../pages.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrese de que Bootstrap esté importado
import Header from '../../components/Header/Header';
import Img1 from '../../assets/img/1.jpg'
import Img2 from '../../assets/img/2.jpg'
import Img3 from '../../assets/img/3.jpg'
import Img3_1 from '../../assets/img/3_1.jpg'
import Img4 from '../../assets/img/4.jpg'
import Img5 from '../../assets/img/5.jpg'
import Img6 from '../../assets/img/6.jpg'
// Datos de ejemplo
const accordionItems = [
    {
        id: 'item1',
        title: 'Sala de entretenimiento',
        content: (
            <>
                <div className='mb-3'>
                    <strong>A continuación, se encuentran los elementos destinados a su entretenimiento durante la estadía:</strong>
                </div>
                <ul>
                    <li>Una televisión inteligente con acceso a canales nacionales e internacionales, películas y series. Además, cuenta con conexión a Internet.</li>
                    <br />
                    Para poder acceder a todo el contenido disponible en la televisión, se deberán seguir los siguientes pasos:<br /><br />
                    <ol>
                        <li>
                            Encender el televisor presionando el botón de encendido/apagado del <strong>control remoto grande</strong>.
                            <br /><br />
                            <strong>Este control solo se usará para encender o apagar totalmente el televisor, y para ingresar a otras aplicaciones como Netflix, YouTube, Prime Video, entre otras.</strong>
                            <br /><br />
                            <img src={Img1} className='img-fluid rounded' />
                        </li>
                        <br />
                        <li>
                            Presionar el botón de encendido/apagado del <strong>control remoto pequeño</strong>, apuntando hacia el módem.
                            Verá que, cuando está apagado, se muestra una luz roja; al encenderse, se mostrará una luz azul:
                            <br /><br /><img src={Img2} className='img-fluid rounded' /><br />
                            <br /><br /><img src={Img3} className='img-fluid rounded' />

                            <br /><br />
                            <strong>Importante:</strong> A través del aplicativo <strong>Magis</strong>, usted podrá acceder a una amplia variedad de contenido como <strong>canales de televisión (nacionales e internacionales), películas, series, contenido para niños (kids) y animes</strong>. ¡No se lo pierda!
                        </li>
                        <br />
                        <li>
                            Al encender el módem, visualizará el menú principal. A continuación, deberá abrir el aplicativo <strong>Magis</strong>, el cual se indica en la imagen:
                            <br /><br /><img src={Img3_1} className='img-fluid rounded' /><br />
                        </li>
                        <br />
                        <li>
                            Al abrir el aplicativo, visualizará un cuadro de publicidad como se muestra en la imagen siguiente.
                            Por favor, presione el botón indicado en el recuadro verde en la imagen del control para cerrar dicha publicidad:
                            <br /><br /><img src={Img4} className='img-fluid rounded' /><br />
                            <br /><br /><img src={Img5} className='img-fluid rounded' /><br />
                        </li>
                        <br />
                        <li>
                            Por último, podrá disfrutar de todo lo que se le ofrece, como canales de televisión (nacionales e internacionales), películas, series, contenido para niños (kids) y animes:
                            <br /><br /><img src={Img6} className='img-fluid rounded' /><br />
                        </li>
                        <br />
                        <li>
                            <strong>Importante:</strong> Cuando haya terminado de usar el televisor, por favor asegúrese de <strong>apagarlo utilizando el control remoto grande</strong>.
                        </li>
                    </ol>
                    <br />
                    <li>Un sofá cómodo para su relajación mientras disfruta de la televisión.</li>
                    <br />
                    <li>Una mesa de comedor con 4 asientos para disfrutar de sus comidas.</li>
                </ul>


            </>
        )
    },
    {
        id: 'item2',
        title: 'Cocina equipada',
        content: (
            <>
                <div className='mb-3'>
                    <strong>La cocina está totalmente equipada para su comodidad:</strong>
                </div>
                <ul>
                    <li>Una refrigeradora para mantener los alimentos frescos.</li>
                    <li className='mb-3'>
                        Cocina con horno eléctrico: La cocina está lista para su uso tradicional. Para utilizar el horno eléctrico, siga estos pasos:
                        <ul>
                            <li>Ubique el cable del horno en el compartimento del gabinete, situado en el lado izquierdo e inferior de la cocina.</li>
                            <li>Conecte el cable al enchufe correspondiente para encender el horno.</li>
                        </ul>
                        <div className="mb-3 mt-4">
                            <img src={Kitchen} alt="Horno eléctrico" className='img-fluid rounded' />
                        </div>
                        <p>Para una correcta utilización, consulte las instrucciones del siguiente video:</p>
                        <div className="video-container">
                            <iframe
                                src="https://www.youtube.com/embed/zanPeHvgkz0?si=7VYdnockYj21dqFL"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </li>
                    <li>Olla arrocera para preparar arroz de manera fácil.</li>
                    <li>Licuadora.</li>
                    <li>Hervidor de agua.</li>
                    <li>Horno microondas.</li>
                    <li>Utensilios de cocina (ollas, sartén, platos, cubiertos, etc.).</li>
                    <li>Utensilios pequeños para niños (platos, cucharas, etc.).</li>
                    <li>Implementos básicos de cocina (sal, aceite, etc.).</li>
                </ul>
            </>
        )
    },
    {
        id: 'item3',
        title: 'Lavandería',
        content: (
            <>
                <div className='mb-3'>
                    <strong>En la lavandería encontrará:</strong>
                </div>
                <ul>
                    <li>
                        Lavadora: Después de programar la lavadora y presionar el botón de inicio, ésta comenzará su ciclo inicial sin llenar agua de inmediato. Esto es normal, ya que realiza ajustes y comprobaciones previas antes de añadir agua.
                    </li>
                    <li>Tendedero para secar la ropa.</li>
                    <li>Escoba y recogedor.</li>
                    <li>Planchador y plancha de ropa.</li>
                </ul>
            </>
        )
    },
    {
        id: 'item4',
        title: 'Dormitorios',
        content: (
            <>
                <div className='mb-3'>
                    <strong>Para asegurar un descanso cómodo, se dispone de los siguientes dormitorios:</strong>
                </div>
                <ul>
                    <li>Una habitación con cama de plaza y media, ropero y mesa de estudio.</li>
                    <li>Una habitación con cama de dos plazas y ropero.</li>
                </ul>
            </>
        )
    }
];

const Apartment = () => {
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
            <Header title={"Sobre el apartamento"} prePage={"/menu"} />
            <div className='container mt-title-accordion'>
                <p>
                    Bienvenido al apartamento. A continuación, encontrará información sobre las comodidades y características disponibles para su estadía.
                </p>
            </div>

            <div className='container'>
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

            <div className='container mt-4 mb-5'>
                <p>
                    Además, se cuenta con un ventilador portátil para su comodidad. En la cocina, encontrará botellas de agua y chocolates/dulces como cortesía.
                </p>
                <p>
                    Esperamos que disfrute de su estancia y se sienta como en casa.
                </p>
            </div>
        </>
    );
}

export default Apartment;
