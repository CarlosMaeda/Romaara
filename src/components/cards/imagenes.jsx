const imagenData = [
  "../../src/assets/img/ft-frascoMielUntador.jpg",
  "../../src/assets/img/mielPanal.jpg",
  "../../src/assets/img/ft-fondo.jpg",
];

function ImgTarjeta(props) {
  console.log(imagenData[0]);
  return (
    <>
      <img src={imagenData[props.indice]} />
    </>
  );
}
export default ImgTarjeta;

/* 
//import Tarjeta from "./tarjeta";
function ImgTarjeta() {
  [
    //const mockImagenes = [
    "../../src/assets/img/ft-frascoMielUntador.jpg",
    "../../src/assets/img/mielPanal.jpg",
    "../../src/assets/img/ft-fondo.jpg",
  ];

  //return <Tarjeta imagenes={mockImagenes} />;
}

export default ImgTarjeta;
 */
