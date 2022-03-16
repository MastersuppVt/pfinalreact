import "./NavBar.css"
function acord (){
    const bloque    = document.querySelectorAll('.bloque')
    const h2        = document.querySelectorAll('.h2')
        
    h2.forEach( ( cadaH2 , i )=>{
        
        h2[i].addEventListener('click', ()=>{
    
            bloque.forEach( ( cadaBloque , i )=>{
             
                bloque[i].classList.remove('activo')
            })
         
            bloque[i].classList.add('activo')
    
        })
    })
}
module.export.acord = acord;
const ILContainer = () => {
    return (
        <div class="acordeon">
            <div class="bloque">
                <h2 class="h2">

                </h2>
                <p class="contenido">

                </p>
            </div>
            <div class="bloque">
                <h2 class="h2">

                </h2>
                <p class="contenido">

                </p>
            </div>
        </div>
    )
}
export default ILContainer;