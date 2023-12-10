/* 
Los beneficios de la miel no son en absoluto una novedad. Desde tiempos antiguos, culturas como la egipcia la incorporaron a las más diversas actividades de la salud. Desde entonces, el uso de la miel como antibiótico o como alimento medicinal fue tan popular en varios países, que ha llegado incluso hasta nuestro días. Eso sin mencionar que es increíblemente deliciosa.

Coincidimos en que los componentes de la miel la hacen a la vez sabrosa y saludable: es como probar un caramelo cargado de antioxidantes y nutrientes, sin tener que preocuparse por recibir los mismos daños de cuando comemos azúcar refinada tradicional.

No solo los entusiastas de la gastronomía vegetariana la elogian, cada vez son más los hallazgos que demuestran las virtudes de la miel.




Conclusión
Si bien la miel es una alternativa dulce y deliciosa para el azúcar refinada, sigue siendo eso: un tipo de dulce, compuesto de azúcar y calorías. Por lo tanto, al consumirla, recuerda siempre dar prioridad a marcas de alta calidad nutritiva, que son las que no están alteradas con sirope.

En todo caso, compra la miel más artesanal que te sea posible, y úsala siempre como sustituto del azúcar, nunca como su complemento.


2- Reduce el estrés metabólico
El estrés emocional, psicológico o fisiológico se traduce en el cuerpo como estrés metabólico. Ocurre cuando el cerebro piensa que está en peligro de quedarse sin combustible: al ejercitarse o durante el sueño nocturno, por ejemplo.
La miel natural produce glucógeno en el hígado: reserva de energía que necesita el cerebro para su normal funcionamiento. Tendremos reservas suficientes de glucógeno si consumimos miel natural en el desayuno, antes de acostarnos y a intervalos regulares durante todo el día (especialmente antes y después de hacer ejercicio).

3- Promueve la recuperación del sueño
El azúcar natural que contiene la miel produce una ligera secreción de insulina, lo que permite la secreción de melatonina, una hormona vital para la regulación diaria del sueño y vigilia. Por ello, es recomendable consumir leche caliente con una cucharada de miel antes de ir a dormir.

La melatonina, además, regula los ritmos cardíacos, ayuda a mejorar la inmunidad y facilita la reconstrucción de los tejidos durante la noche.

4 - Combate el estreñimiento
La miel tiene un elevado contenido en fructooligosacáridos (FOS), que, aunque tienen una función principalmente energética, al llegar al colon se comportan de una forma similar a la fibra vegetal: captan el agua aumentando el volumen de las heces y originan gases que incrementan el peristaltismo o movilidad intestinal. Por esto ejercen un efecto laxante suave.
Además, es el alimento preferido de las bacterias beneficiosas que habitan en el colon (nuestra flora intestinal) responsable de la fermentación y putrefacción de los residuos alimenticios que darán lugar a las heces.

5- Mejora la función cerebral
Para que el cerebro funcione correctamente hay que suministrarle energía. La función del calcio en el cerebro es importantísima ya que las neuronas utilizan el calcio para originar la señal eléctrica que se conduce de una neurona a otra para comunicar los mensajes. Si no hay suficiente calcio, el cerebro no funciona correctamente. Hay información científica que demuestra que la miel natural ayuda a absorber y fijar el calcio en el cuerpo, favoreciendo una correcta función cerebral.
 */

import Beneficio from "../helpers/Beneficio";
import beneficios from "../helpers/datosBeneficios";
import "../../styles/custom.css";

function ListaBeneficios() {
  return (
    <>
      <h3 className="rma">Beneficios de consumir MIEL pura</h3>
      <div className="container__card">
        <section className="row align-items-md-center text-info-emphasis">
          <div className="col-12 col-md-4 fs-4">
            {beneficios.map((beneficio, index) => (
              <Beneficio
                className="gap-3"
                key={index}
                texto={beneficio.beneficio}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default ListaBeneficios;
