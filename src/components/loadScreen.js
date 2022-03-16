import "./loadScreen.css"
const loadScreen = () =>{
    return(
        <div class="loader" id="loader">
        <div id="barraProgreso">
            <div class="cargando">
                <img src="assets/byn.png" height="100%" alt=""></img>
            </div>
            <div class="cargado" id="cargado">
                <img src="assets/color.png" height="100%" alt=""></img>
            </div>
            <div class="cargadoFull" id="cargadoFull">
                <img src="assets/color.png" height="100%" alt=""></img>
            </div>
        </div>
    </div>
    )
}
export default loadScreen;