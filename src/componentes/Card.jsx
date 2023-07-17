import '../css/estilos.css'

function Card({nombre, tipo, imagen} = this.props){
    const getTypes = () => {
        return tipo?.length > 1 
            ? `${tipo?.[0].type.name} / ${tipo[1].type.name}`
            : `${tipo?.[0].type.name}`
    }

return(
    <div className='contenedorTexto'>
        <img className='contenedorImagen' src={imagen} alt='imagen'/> 
        <h5 className='contenedorTitulo'>{nombre}</h5>
        <p className='contenedorParrafo'>{getTypes()}</p>
    </div>

);
}
export default Card;
