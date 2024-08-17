"use client";

import { useState } from "react";
import { Separator } from "./ui/separator";
import Link from "next/link";
import { FaWhatsapp, FaEnvelope, FaCheck, FaFacebook, FaInstagram } from "react-icons/fa";

// Datos del footer
const dataFooter = [
  {
    id: 1,
    name: "Inicio",
    link: "/",
  },
  {
    id: 2,
    name: "Sobre nosotros",
    link: "#",
  },
  {
    id: 3,
    name: "Términos y condiciones",
    link: "#",
  },
  {
    id: 4,
    name: "Información de aduanas",
    link: "#",
  },
  {
    id: 5,
    name: "Política de devolución de productos",
    link: "#",
  },
];

const socialIcons = [
  {
    id: 1,
    icon: <FaEnvelope />,
    link: "mailto:sombrerossaphikuna@gmail.com",
  },
  {
    id: 2,
    icon: <FaWhatsapp />,
    link: "https://wa.me/593962568895",
  },
  {
    id: 3,
    icon: <FaFacebook />,
    link: "https://www.facebook.com/your-profile",
  },
  {
    id: 4,
    icon: <FaInstagram />,
    link: "https://www.instagram.com/sombrerossaphikuna?igsh=NWdmcG1jNTZ6dXJo",
  },
];

// Componente del Modal de Sobre Nosotros
// Componente del Modal "Sobre Nosotros"
const AboutUsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl max-h-[80vh] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-6">Sobre Nosotros</h2>
        <p className="text-lg leading-relaxed mb-6">
          <strong>¿Quiénes somos?</strong>
          <br /><br />
          En Sombrero Saphikuna, somos una empresa dedicada a ofrecer los mejores sombreros y accesorios para protegerte del sol. Fundada con el objetivo de proporcionar productos de alta calidad y diseñados para cada ocasión, nos enorgullece ofrecer una amplia variedad de opciones que combinan estilo, comodidad y funcionalidad.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          <strong>Historia</strong>
          <br /><br />
          En el siglo XVI, los sombreros llegaron a Ecuador con los colonizadores españoles, quienes los utilizaban como símbolo de estatus y para protegerse del clima. Aunque inicialmente ajenos a la cultura local, las comunidades indígenas comenzaron a adoptar este accesorio, transformándolo mediante el uso de materiales locales como la lana de oveja y el pelo de conejo. Lo que comenzó como una imposición extranjera se convirtió con el tiempo en un símbolo de identidad cultural, enriquecido por la sabiduría y las tradiciones ancestrales.
Con la independencia de Ecuador en el siglo XIX, los sombreros se consolidaron como una parte esencial de la vestimenta regional. 
<br />
Desde los sombreros de paja toquilla, mundialmente conocidos como "sombreros Panamá", hasta los sombreros andinos de culturas como los Salasaka, Kayambi, Otavalo, el Chulla Quiteño y la Chola Cuencana, cada estilo refleja una historia de adaptación y orgullo cultural. Es importante destacar que, aunque se les conoce como "sombreros Panamá", su origen es ecuatoriano, específicamente de las provincias de Manabí y Azuay, donde son elaborados artesanalmente a partir de la fibra de la paja toquilla, un material que crece en estas regiones.
<br />
 Adicionalmente, los sombreros se confeccionan con otros materiales como el paño y la lana, los cuales son igualmente representativos de la diversidad cultural y geográfica del Ecuador. Estos sombreros, elaborados por manos artesanas en diversas provincias del país, no solo son distintivos de cada cultura, sino que también responden a las particularidades climáticas de cada región. Así, cada sombrero no solo es un accesorio, sino una expresión viva de la identidad ecuatoriana.

        </p>
        <p className="text-lg leading-relaxed mb-6">
          <strong>Objetivo</strong>
          <br /><br />
          Ofrecer una plataforma en línea que no solo comercialice sombreros típicos ecuatorianos, sino que también promueva y potencie la rica cultura, las tradiciones ancestrales y las historias de los pueblos de Ecuador, apoyando prácticas sostenibles, comercio justo y preservación del patrimonio cultural.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          <strong>Misión</strong>
          <br /><br />
          Ser un puente entre las raíces ancestrales de Ecuador y el mundo, ofreciendo sombreros típicos de alta calidad elaborados por artesanos locales, mientras fomentamos la sostenibilidad, el respeto por el medio ambiente, y el comercio justo. Buscamos que cada compra no solo represente un producto, sino una experiencia cultural auténtica y significativa.

        </p>
        <p className="text-lg leading-relaxed mb-6">
          <strong>Visión</strong>
          <br /><br />
          Convertirnos en la principal plataforma de referencia mundial para la venta de sombreros típicos ecuatorianos, reconocidos no solo por la calidad y autenticidad de nuestros productos, sino también por nuestro compromiso con la preservación cultural, la sostenibilidad y la mejora de las condiciones de vida de las comunidades artesanales del Ecuador.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          <strong>Nuestros Valores</strong>
          <br /><br />
          - <strong>Calidad:</strong> Solo ofrecemos productos que cumplen con los más altos estándares de calidad.
          <br />
          - <strong>Servicio al Cliente:</strong> Estamos aquí para ayudarte en cada paso del proceso de compra y para resolver cualquier duda que puedas tener.
          <br />
          - <strong>Innovación:</strong> Nos mantenemos a la vanguardia de las tendencias para ofrecerte lo último en moda y tecnología para sombreros.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          <strong>¿Por qué elegirnos?</strong>
          <br /><br />
          En Sombrero Saphikuna, no solo vendemos productos, sino que ofrecemos una experiencia. Nuestro equipo está dedicado a brindarte un servicio excepcional y a asegurarse de que cada compra sea una experiencia agradable. Con nuestro compromiso con la calidad y la atención al detalle, puedes confiar en que estás haciendo una excelente elección al elegirnos.
        </p>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600"
        >
          X
        </button>
      </div>
    </div>
  );
};

// Componente del Modal de Información de aduanas
const CustomsInfoModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl max-h-[80vh] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-6">Información de aduanas</h2>
        <p className="text-lg leading-relaxed mb-6">
          <strong>Información de Aduanas Ecuador</strong>
          <br /><br />
          Esto es lo que debes saber para estar al día con la normativa de la aduana y que tu orden pueda llegar sin problema del mundo a tu puerta en Ecuador. En Sombreros Saphikuna puedes hacer tus compras a través de la categoría B (4x4) y la categoría C.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          <strong>1. El 4x4 (o categoría B)</strong>
          <br /><br />
          <strong>a. </strong>No paga impuestos ecuatorianos.
          <br />
          <strong>b. </strong>Tienes una cantidad ilimitada de órdenes en el régimen 4x4 siempre que cada una de estas esté dentro del peso máximo permitido (hasta 4 kg) y no superen los $400, además de cumplir con el cupo anual por persona.
          <br />
          <strong>c. </strong>El cupo anual máximo es de $1.600 al año para compras en el exterior a través del régimen 4x4.
          <br />
          <strong>d. </strong>Se puede comprar una gran variedad de productos dentro de esta categoría siempre y cuando cumplan con el 4x4 y no sean para fines comerciales. Por esa razón, se puede comprar máximo 3 productos iguales o similares de la misma categoría. Por ejemplo, puedes comprar hasta 3 perfumes, hasta 3 relojes y hasta 3 pares de zapatos. Si te excedes de esta cantidad, tu orden puede tener cargos extra por parte de la aduana.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          <strong>2. Las tablets, laptops y celulares se pueden comprar a través de la Categoría C.</strong>
          <br /><br />
          <strong>a. </strong>Esta categoría sí paga impuestos (IVA + Fodinfa).
          <br />
          <strong>b. </strong>Solo se puede comprar un celular nuevo al año; no se admiten refabricados, usados u “open box.”
        </p>
        <p className="text-lg leading-relaxed mb-6">
          <strong>3. </strong>No tendrás que hacer trámites de aduana. Hacemos todo por ti.
          <br /><br />
          <strong>4. </strong>El monto de las compras se limita a una cédula, pero no a tu usuario de Tiendamia.
        </p>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600"
        >
          X
        </button>
      </div>
    </div>
  );
};


// Componente del Modal de Términos y condiciones
const TermsConditionsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl h-auto overflow-y-auto max-h-[90vh]">
        <h2 className="text-2xl font-bold mb-6">Términos y condiciones</h2>
        <div className="text-lg leading-relaxed mb-6">
          <strong>Acuerdo y Condiciones de Uso - Sombrero Saphikuna</strong>
          <br /><br />
          <strong>1. ALCANCE</strong>
          <br />
          Esta política de privacidad se aplica a todos los datos personales que recolectamos a través de nuestro sistema de facturación o en nuestra página web.
          <br /><br />
          <strong>2. INFORMACIÓN QUE RECOPILAMOS</strong>
          <br />
          En Sombrero Saphikuna, recolectamos información directamente de ti cuando usas nuestro sistema de facturación o visitas nuestro sitio web.
          <br /><br />
          <strong>¿Qué datos personales recopilamos?</strong>
          <br />
          - Cédula/RUC
          <br />
          - Nombre completo
          <br />
          - Provincia, ciudad, dirección
          <br />
          - Teléfono
          <br />
          - Género y estado civil
          <br />
          - Fecha de nacimiento
          <br />
          - Correo electrónico
          <br /><br />
          <strong>¿Por qué necesitamos estos datos?</strong>
          <br />
          Estos datos nos permiten ofrecerte un mejor servicio, garantizar que las transacciones se procesen correctamente, y asegurarnos de que la información que recibes sea relevante y personalizada.
          <br /><br />
          Importante: Siempre debes proporcionar información veraz y actualizada. No está permitido proporcionar datos de otras personas sin su consentimiento.
          <br /><br />
          <strong>3. TUS DERECHOS</strong>
          <br />
          La Ley de Protección de Datos Personales te otorga varios derechos sobre tu información:
          <br /><br />
          - Derecho a la información: Puedes saber qué datos tuyos tenemos y cómo los usamos.
          <br />
          - Derecho de acceso: Tienes derecho a ver y obtener una copia de tus datos.
          <br />
          - Derecho de rectificación: Si tus datos son incorrectos o están desactualizados, puedes pedir que los corrijamos.
          <br />
          - Derecho de eliminación: En algunos casos, puedes solicitar que eliminemos tus datos.
          <br />
          - Derecho a la oposición: Puedes oponerte al uso de tus datos, especialmente para marketing.
          <br /><br />
          Para ejercer estos derechos o si quieres revocar tu consentimiento, contáctanos en <a href="mailto:semestreq4@gmail.com" className="text-blue-500">semestreq4@gmail.com</a>.
          <br /><br />
          <strong>4. FINALIDAD</strong>
          <br />
          Usamos tus datos para:
          <br />
          - Enviar ofertas personalizadas y publicidad.
          <br />
          - Cumplir con obligaciones legales.
          <br />
          - Gestionar tus pagos y transacciones.
          <br />
          - Mejorar nuestros servicios y atención al cliente.
          <br /><br />
          Recuerda: Siempre respetamos tu privacidad y nos aseguramos de que estas actividades no sean invasivas.
          <br /><br />
          <strong>5. COMPARTIR TUS DATOS</strong>
          <br />
          Compartimos tus datos personales solo en los siguientes casos:
          <br />
          - Si nos das tu autorización.
          <br />
          - Para cumplir con obligaciones legales.
          <br />
          - Con terceros que necesiten los datos para brindarte nuestros servicios (asegurándonos de que usen tu información de manera segura).
          <br /><br />
          <strong>6. PROCESO PARA EJERCER TUS DERECHOS</strong>
          <br />
          Si deseas acceder, rectificar, eliminar u oponerte al uso de tus datos, envíanos un correo a <a href="mailto:semestreq4@gmail.com" className="text-blue-500">semestreq4@gmail.com</a> con el asunto "Derechos de datos" y tus datos personales. Responderemos a tu solicitud lo antes posible.
          <br /><br />
          <strong>7. CAMBIOS EN NUESTRA POLÍTICA DE PRIVACIDAD</strong>
          <br />
          Podemos actualizar esta política cuando sea necesario. Si hay cambios importantes, te notificaremos por correo electrónico o en nuestro sitio web antes de que entren en vigencia.
          <br /><br />
          <strong>8. USO DE COOKIES</strong>
          <br />
          Usamos cookies para mejorar tu experiencia en nuestro sitio web. Puedes revisar nuestra política de cookies para más detalles.
          <br /><br />
          <strong>9. SEGURIDAD DE TUS DATOS</strong>
          <br />
          En Sombrero Saphikuna, tomamos medidas de seguridad para proteger tu información personal. Usamos el protocolo HTTPS para asegurar las transacciones en línea.
          <br /><br />
          <strong>10. BASE LEGAL</strong>
          <br />
          Tratamos tus datos de acuerdo con la Ley Orgánica de Protección de Datos Personales y la Ley de Comercio Electrónico de Ecuador.
          <br /><br />
          <strong>11. TÉRMINOS Y CONDICIONES</strong>
          <br />
          Al utilizar nuestro sitio web o cualquiera de nuestros servicios, aceptas estos términos y condiciones de uso.
          <br /><br />
          <strong>12. RESPONSABILIDAD</strong>
          <br />
          Sombrero Saphikuna solo es responsable del tratamiento de los datos que recolecta directamente a través de su sistema de facturación o página web. Al aceptar estos términos, confirmas que tienes la capacidad legal para hacerlo y que has leído y aceptado todas las condiciones sin ninguna limitación.
        </div>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600"
        >
          X
        </button>
      </div>
    </div>
  );
};


// Componente del Modal de Política de devolución de productos
const ReturnPolicyModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl max-h-[80vh] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-6">Política de devolución de productos</h2>
        <p className="text-lg leading-relaxed mb-6">
          <strong>Política de devolución de Ecuador</strong>
          <br /><br />
          Sombreros Saphikuna ofrece a sus clientes la posibilidad de devolución para determinados productos a nuestras oficinas en Miami (EEUU). Dentro de cada publicación está especificado como “Producto con devolución” o “Producto sin devolución”.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          <strong>Los productos sin devolución son:</strong>
          <br /><br />
          - Los productos que tienen un tiempo de entrega mayor a 20 días hábiles.
          <br />
          - Productos que por su naturaleza, no admiten devolución en EEUU y por ende Sombreros Saphikuna no puede ofrecer la devolución al cliente. Ejemplos: perfumes, cremas y medicamentos.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          <strong>¿Cómo solicitar una devolución?</strong>
          <br /><br />
          Para solicitar una devolución, el cliente debe realizarlo a través de su cuenta de Sombreros Saphikuna. Este proceso está sujeto a la aprobación del departamento de Devoluciones (lo cual puede demorar de 48hs a 72hs hábiles). En caso de no tener la opción en la web, el cliente debe contactarse con Atención al Cliente para iniciar la solicitud.
          <br /><br />
          Una vez que la devolución sea habilitada por Sombreros Saphikuna, el cliente tiene un plazo de 48hs para gestionarlo en la web. Las solicitudes de devolución deben realizarse de manera individual para cada ítem de la orden, contando cada uno con su propia etiqueta.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          <strong>En productos con devolución, existen dos tipos de devoluciones:</strong>
          <br /><br />
          <strong>1. Devoluciones responsabilidad de cliente:</strong>
          <br /><br />
          Estas devoluciones se pueden dar por iniciativa del cliente, es decir, si no le gustó el producto o eligió mal el talle. El cliente dispone de un plazo máximo de 7 días para solicitar este tipo de devolución, desde el momento en que recibe su paquete. En estos casos, el cliente debe hacer la devolución a Miami por su cuenta, utilizando el courier que más le convenga, el costo lo debe cubrir el cliente.
          <br /><br />
          <strong>2. Devoluciones responsabilidad de Sombreros Saphikuna:</strong>
          <br /><br />
          Estas devoluciones se pueden dar si el producto llegó roto, diferente o incompleto. El cliente dispone en un plazo máximo de 7 días, desde el momento en que recibe su paquete. En estos casos, el cliente debe elegir un courier para hacer la devolución a Miami. Tiendamia cubre hasta $30 USD del costo de envío*. * El cliente debe enviar foto del comprobante para que se pueda reembolsar el costo de envío.
          <br /><br />
          En ambos casos de devoluciones, el reembolso de dinero será realizado a crédito interno, a no ser que el cliente especifique lo contrario. Para que desde nuestras oficinas en Miami nos confirmen que el producto fue recibido, y de esta forma podamos realizar el reembolso al cliente, es necesario que el producto llegue en las condiciones que fue enviado y con la etiqueta enviada por el departamento de Devoluciones a la vista.
        </p>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600"
        >
          X
        </button>
      </div>
    </div>
  );
};



const Footer = () => {
  const [isAboutUsModalOpen, setAboutUsModalOpen] = useState(false);
  const [isCustomsModalOpen, setCustomsModalOpen] = useState(false);
  const [isTermsModalOpen, setTermsModalOpen] = useState(false);
  const [isReturnPolicyModalOpen, setReturnPolicyModalOpen] = useState(false);

  const handleAboutUsModalOpen = () => setAboutUsModalOpen(true);
  const handleAboutUsModalClose = () => setAboutUsModalOpen(false);

  const handleCustomsModalOpen = () => setCustomsModalOpen(true);
  const handleCustomsModalClose = () => setCustomsModalOpen(false);

  const handleTermsModalOpen = () => setTermsModalOpen(true);
  const handleTermsModalClose = () => setTermsModalOpen(false);

  const handleReturnPolicyModalOpen = () => setReturnPolicyModalOpen(true);
  const handleReturnPolicyModalClose = () => setReturnPolicyModalOpen(false);

  return (
    <footer className="mt-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <p>
            <span className="font-bold">Sombreros Saphikuna</span> E-commerce
          </p>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            {dataFooter.map((data) => (
              <li key={data.id}>
                {data.name === "Información de aduanas" ? (
                  <button
                    onClick={handleCustomsModalOpen}
                    className="hover:underline me-4 md:me-6 text-left text-gray-500 dark:text-gray-400"
                  >
                    {data.name}
                  </button>
                ) : data.name === "Términos y condiciones" ? (
                  <button
                    onClick={handleTermsModalOpen}
                    className="hover:underline me-4 md:me-6 text-left text-gray-500 dark:text-gray-400"
                  >
                    {data.name}
                  </button>
                ) : data.name === "Política de devolución de productos" ? (
                  <button
                    onClick={handleReturnPolicyModalOpen}
                    className="hover:underline me-4 md:me-6 text-left text-gray-500 dark:text-gray-400"
                  >
                    {data.name}
                  </button>
                ): data.name === "Sobre nosotros" ? (
                  <button
                    onClick={handleAboutUsModalOpen}
                    className="hover:underline me-4 md:me-6 text-left text-gray-500 dark:text-gray-400"
                  >
                    {data.name}
                  </button>
                ): (
                  <Link
                    href={data.link}
                    className="hover:underline me-4 md:me-6"
                    target={data.link.startsWith("/") ? "_self" : "_blank"}
                    rel={data.link.startsWith("/") ? undefined : "noopener noreferrer"}
                  >
                    {data.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
        <Separator className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="flex justify-center space-x-4 mb-4">
          Contactanos:
          <br />
          {socialIcons.map((social) => (
            <Link
              key={social.id}
              href={social.link}
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white text-2xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.icon}
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <div>
            <h4 className="font-bold">Todo en un solo lugar</h4>
            <ul className="text-gray-600 dark:text-gray-400">
              <li>
                <FaCheck className="inline-block text-green-600" /> Envío
                asegurado
              </li>
              <li>
                <FaCheck className="inline-block text-green-600" /> Garantía de
                entrega
              </li>
              <li>
                <FaCheck className="inline-block text-green-600" /> Productos
                originales
              </li>
              <li>
                <FaCheck className="inline-block text-green-600" /> El mejor
                precio
              </li>
              <li>
                <FaCheck className="inline-block text-green-600" /> Comprá fácil,
                rápido y seguro
              </li>
            </ul>
          </div>
          <div>
  <h4 className="font-bold">Compra con tranquilidad</h4>
  <p className="text-gray-600 dark:text-gray-400">
    La tienda cuenta con todas las certificaciones pertinentes para garantizar la seguridad de la compra
  </p>
  <h4 className="font-bold">Contamos con las siguientes certificaciones:</h4>
  <div className="flex gap-2 mt-2">
      <a href="https://www.ambiente.gob.ec/punto-verde-sector-productivo-y-de-servicios/" target="_blank" rel="noopener noreferrer">
      <img
        src="https://www.ambiente.gob.ec/wp-content/uploads/2012/08/LOGO-PUNTO-VERDE-3-scaled.jpg"
        alt="Trust Guard"
        className="w-24 h-24"
      />
    </a>
    <a href="https://www.fairtrade.net/about/key-benefits-of-fairtrade" target="_blank" rel="noopener noreferrer">
    <img
      src="https://new.unocace.com/wp-content/uploads/elementor/thumbs/logo-fairtrade-international-p060epgaqaigy5ck9k9wvhykgviy1nqsb6iu3hp0eu.png"
      alt="Trust Guard"
      className="w-24 h-24"
    />
    </a>

    <a href="https://www.controlsanitario.gob.ec/las-bpm-garantizan-la-inocuidad-en-la-cadena-de-produccion-de-los-alimentos-procesados/#:~:text=Las%20Buenas%20Pr%C3%A1cticas%20de%20Manufactura,de%20producci%C3%B3n%2C%20distribuci%C3%B3n%20y%20comercializaci%C3%B3n." target="_blank" rel="noopener noreferrer">
    <img
      src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjc03sl-GuUEFw-KWiAapgV1YwV8mXjWc3FqhSXdD3_LqEIPPiVHUWt0Rm1nIjkMvee5v6kwfc-QyvCf7zS5tWt8BKiqGHAbOtu4q5WCA6FGOsDMBEjs28NNm5AykATIX7It_o9UUqnVW8/s1600/Certificaciones+de+calidad+e+inocuidad+%252B+BPM.jpg"
      alt="Trust Guard"
      className="w-25 h-20"
    />
    </a>
  </div>
</div>

        </div>

        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400 mt-6">
          &copy; {new Date().getFullYear()}
          <Link href="#" target="_blank" rel="noopener noreferrer">
            {" "}
            Sombreros Saphikuna{" "}
          </Link>
          Todos los derechos reservados.
        </span>
      </div>

      {/* Incluir los modales y pasarlos el estado */}
      <AboutUsModal isOpen={isAboutUsModalOpen} onClose={handleAboutUsModalClose} />
      <CustomsInfoModal isOpen={isCustomsModalOpen} onClose={handleCustomsModalClose} />
      <TermsConditionsModal isOpen={isTermsModalOpen} onClose={handleTermsModalClose} />
      <ReturnPolicyModal isOpen={isReturnPolicyModalOpen} onClose={handleReturnPolicyModalClose} />
    </footer>
  );
};

export default Footer;