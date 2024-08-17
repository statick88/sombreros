"use client"; // Asegúrate de que esta línea esté al inicio

import React, { useState } from 'react';

// Define el tipo de datos para los sombreros
interface Sombrero {
  id: number;
  title: string;
  image: string;
  content: string;
}

// Componente funcional para la página de historia
const HistoryPage = () => {
  const [selectedSombrero, setSelectedSombrero] = useState<Sombrero | null>(null);

  // Datos de ejemplo para los sombreros
  const sombreros: Sombrero[] = [
    {
      id: 1,
      title: 'Sombreros de Natabuela',
      image: '../../../natabuela.jpg',
      content: 'Situada en la provincia de Imbabura, Natabuela es hogar de una comunidad indígena con raíces profundas en la cultura Quitu-Cara. Sus tradiciones giran en torno al Inti Raymi, una fiesta dedicada al sol, que se celebra con música andina, danzas tradicionales y rituales que agradecen la abundancia de la cosecha. La comunidad también conserva prácticas de tejido artesanal, destacándose en la confección de textiles.',
    },
    {
      id: 2,
      title: 'Sombrero Aruchico',
      image: '../../../ariucho.jpg',
      content: 'Originario de las regiones andinas de Cayambe y Pedro Moncayo, al norte de Ecuador, el sombrero Aruchico es un emblema de las festividades de San Pedro y San Juan. Utilizado por los aruchicos, personajes centrales en estas celebraciones, simboliza la conexión espiritual y cultural de las comunidades con sus antepasados y el entorno andino.',
    },
    {
        id: 3,
        title: 'Sombrero Otavalo',
        image: '../../../otavalo.jpg',
        content: 'En Otavalo, corazón de la sierra norte de Ecuador, el sombrero Otavaleño refleja la vibrante cultura kichwa y una rica historia de comercio y tradiciones precolombinas. Usado en ceremonias y eventos especiales, es un testimonio de la habilidad artesanal y la profunda conexión de sus habitantes con sus raíces indígenas.',
    },
    {
        id: 4,
        title: 'Sombrero Montubio',
        image: '../../../montubio.jpg',
        content: 'Desde las provincias costeras de Guayas, Manabí y Los Ríos, el sombrero montuvio encarna la cultura montuvia, nacida de la herencia mestiza y las costumbres rurales. Confeccionado en Montecristi y otras localidades manabitas, ha acompañado a los montuvios en su vida diaria, protegiéndolos del sol y simbolizando su vínculo con la tierra',
    },
    {
        id: 5,
        title: 'Sombreros de los Kayambi',
        image: '../../../cayambis.jpg',
        content: 'Los Kayambi, ubicados en la región andina al norte de Pichincha, han mantenido vivas sus costumbres ancestrales, especialmente a través del Koya Raymi, una festividad que celebra la fertilidad de la tierra y el ciclo agrícola. Durante esta fiesta, se realizan rituales de purificación, ofrendas a la Pachamama (Madre Tierra), y se llevan a cabo danzas y cantos que reflejan su conexión con la naturaleza. ',
    },
    {
        id: 6,
        title: 'Sombrero de los Puruháes',
        image: '../../../puruhaes.jpg',
        content: 'En la Sierra Centro del Ecuador, los Puruháes, una etnia histórica que resistió valientemente la conquista española, continúan celebrando sus tradiciones a través de festividades como el Kapak Raymi. Esta fiesta, que marca el inicio del nuevo ciclo agrícola, incluye rituales para bendecir la tierra y agradecer por las cosechas venideras. Se realizan danzas, se preparan comidas típicas como la chicha y se ofrecen ofrendas a los apus (espíritus de las montañas).',
    },
    {
        id: 7,
        title: 'Sombrero de Paja Toquilla',
        image: '../../../paja-toquilla.jpg',
        content: 'En la costa del Ecuador, la confección del sombrero de paja toquilla es una tradición ancestral, donde cada sombrero es tejido a mano con hojas de la planta de toquilla. Este proceso, que puede llevar meses, requiere gran habilidad y ha sido transmitido de generación en generación. Conocido internacionalmente como "Panama Hat", este sombrero es un símbolo de la cultura ecuatoriana y una importante fuente de sustento para muchas familias en las provincias de Manabí y Azuay.',
    },
    {
        id: 8,
        title: 'Sombrero de Paja Toquilla Ala Ancha',
        image: '../../../ala-ancha.jpg',
        content: 'En la costa del Ecuador, el sombrero de paja toquilla de ala ancha es una expresión icónica de la artesanía local. Tejido a mano con hojas de la planta de toquilla, este sombrero se distingue por su amplio borde, que ofrece tanto estilo como protección contra el sol. Su elaboración, que puede tomar meses, refleja una tradición transmitida de generación en generación. Este accesorio, conocido mundialmente como "Panama Hat", es un símbolo de la cultura ecuatoriana y una fuente clave de ingresos para las comunidades artesanas en Manabí y Azuay.',
    },
    {
        id: 9,
        title: 'Sombrero del Chullita Quiteño',
        image: '../../../chullita-quitenio.jpg',
        content: 'En las calles empedradas de Quito, donde el viento acaricia las montañas, el sombrero del chullita quiteño es un símbolo de la identidad y la picardía de su gente. Este sombrero, tradicionalmente de fieltro negro y con una cinta alrededor, ha sido parte del atuendo de los quiteños desde tiempos coloniales. El chullita, con su sombrero bien puesto, es el personaje que encarna la alegría, el ingenio y el orgullo de ser quiteño. Durante las fiestas de Quito, el sombrero se convierte en un emblema, acompañando a los trajes típicos en desfiles y bailes, reflejando una historia de resistencia y amor por la tierra.',
    },
    {
        id: 10,
        title: 'Sombrero de las mujeres Salasaca antes de la boda',
        image: '../../../salasaca-antes-boda.jpg',
        content: 'En las montañas de los Andes ecuatorianos, donde el aire es puro y las tradiciones son sagradas, las mujeres Salasacas llevan con orgullo un sombrero especial antes de la boda. Este sombrero, de tonos claros y adornado con bordados coloridos, simboliza su soltería y su preparación para el matrimonio. Cada mujer personaliza su sombrero con detalles únicos, reflejando su identidad y la conexión con sus raíces ancestrales. En ceremonias y festividades, este sombrero es más que un accesorio; es un emblema de la juventud, la belleza y la esperanza, que las acompaña en el camino hacia una nueva etapa en sus vidas.',
    },
    {
        id: 11,
        title: 'Sombrero de los Secoyas',
        image: '../../../secoyas.jpg',
        content: 'En los comienzos de la historia Secoya, para protegerse del sol y honrar su conexión con la selva, los ancestros crearon sombreros tejidos a mano con hojas de palma y fibras naturales. Adornados con plumas y conchas, estos sombreros se convirtieron en símbolos de identidad y espiritualidad, cargados de historias personales y comunitarias, y usados con orgullo en ceremonias y festividades.',
    },
    {
        id: 12,
        title: 'Sombreros de los Salasaca tradicional',
        image: '../../../salasaca-tradicional.jpg',
        content: 'Los Salasaca, ubicados entre Ambato y Baños, en la parroquia Salasaca del cantón Pelileo, provincia de Tungurahua, son conocidos por su carácter "bravo" y su firme defensa de las tradiciones culturales. Su nombre proviene de la fusión de dos apellidos: Sala, de origen Panzaleo, y Saca, de origen Puruhá. A lo largo de los siglos, han resistido la intrusión de aquellos ajenos a su cultura, manteniendo su identidad y su dialecto quichua.',
    },
    {
        id: 13,
        title: 'Sombreros de los Salasaca para una mujer ya casada',
        image: '../../../salasaca-casada.jpg',
        content: 'Una mujer casada en la comunidad siempre lleva un sombrero negro, lo que subraya su estado civil y resalta aún más la importancia de la vestimenta en la expresión de su identidad cultural, complementando así la historia que contiene elementos míticos y el mito que contiene elementos históricos.',
    },
    {
        id: 14,
        title: 'Sombrero de los Saraguro',
        image: '../../../saraguro.jpg',
        content: 'Este grupo étnico, el único en Loja que sobrevivió a la colonización española, celebra cada 21 de junio el Inti Raymi en la comunidad de Las Lagunas, una festividad intercultural rica en música, gastronomía y rituales ancestrales, incluyendo el "Baño del Inca", un lugar histórico de purificación vinculado a Atahualpa. Históricamente, se dice que los Saraguros fueron mitimaes, trasladados desde Bolivia o Perú para pacificar y colonizar el sur del Ecuador durante el Tahuantinsuyu.',
    },
    {
        id: 15,
        title: 'Sombrero de la Chola Cuencana',
        image: '../../../chola-cuencana.jpg',
        content: 'La Chola cuencana, ubicada en la provincia del Azuay, es un símbolo cultural con profundas raíces históricas y sociales. Su origen se remonta a la época colonial, cuando en la documentación se usaba la expresión "mestiza en hábito de india" para referirse a la chola. Los primeros registros en Cuenca de una "mestiza en hábitos de india" datan de 1607, aunque su presencia en documentos notariales se vuelve más frecuente a finales del siglo XVII, especialmente en transacciones de tierras y casas, donde la chola intervenía como compradora o vendedora.',
    },
  ];

  // Maneja la apertura del modal
  const openModal = (sombrero: Sombrero) => {
    setSelectedSombrero(sombrero);
  };

  // Maneja el cierre del modal
  const closeModal = () => {
    setSelectedSombrero(null);
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Historia de la cultura de los Sombreros</h1>
      <p className="mb-6 text-center">              La historia de los sombreros es un recorrido fascinante que abarca diversas culturas y épocas, incluyendo la rica tradición del Ecuador. Desde tiempos antiguos, los sombreros se crearon como una necesidad práctica para protegerse de los elementos, pero con el tiempo, evolucionaron para reflejar estatus, identidad y cultura.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {sombreros.map((sombrero) => (
          <div
            key={sombrero.id}
            className="max-w-xs rounded overflow-hidden shadow-lg cursor-pointer m-4"
            onClick={() => openModal(sombrero)}
          >
            <img className="w-full" src={sombrero.image} alt={sombrero.title} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{sombrero.title}</div>
            </div>
          </div>
        ))}
      </div>

      {selectedSombrero && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 text-center">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">{selectedSombrero.title}</h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">{selectedSombrero.content}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={closeModal}
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HistoryPage;
