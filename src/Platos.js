import ListadoDePlatos from "./ListadoDePlatos";
import useFetch from "./useFetch";


const Platos = () => {

    const {datos:platos,cargando,error} = useFetch("https://il-piatto-api.herokuapp.com/platos");

    return ( 
        <div className="platos">
            {error && <div className="mensaje"> {error} </div>}
            {cargando && <div className="mensaje">Cargando...</div>}
            {platos && <ListadoDePlatos platos={platos.plato}/>}
        </div>
    );
}
 
export default Platos;