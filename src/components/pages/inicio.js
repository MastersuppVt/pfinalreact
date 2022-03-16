// import "../style/styles.css"
const Inicio = () => {
return(
    <div class="contenedor">
    <header>
        <div class="head">
            <div class="contenido__video">
                <video class="video" autoplay="autoplay" loop="loop" id="video_background" preload="auto"
                    muted="muted" poster="Copia de Mastersupp-icono.png">
                    <source src="assets/INTRO.mp4" type="video/mp4" />
                </video>
            </div>
            <div class="enunciado1">
                <p>El Vtuber latino mas manco del mundo, ven y diviertete
                </p>
                <p id="titulo">
                    "MASTERSUPPVT"
                </p>
            </div>
        </div>



    </header>
    <section>
        <div class="secUno">
            <img class="img" src="assets/q&a.png" alt="preguntas y respuestas" title="EJEMPLO"></img>
            <div class="pRespuesta">

                <p class="subTitle">
                    P y R
                </p>

                <article>
                    <p class="parrafo">
                        Bienvenido a la seccion donde puedes hacerme una pregunta y yo te respondere lo antes
                        posible, no te olvides de visitar las demas paginas
                    </p>
                </article>
                <div class="btmI">
                    <a class="btmSubmit" href="#contenedorAsk">Preguntame</a>
                </div>
            </div>


        </div>

        <div class="contenedorAsk" id="contenedorAsk">
            <div>

                <form action="#" class="form">
                    <a href="#close"><img src="assets/close.png" class="closeBtmI"></img></a>
                    <div class="formheader">
                        <h1 class="formTitle">
                            C<span>ontacto</span>
                        </h1>
                    </div>
                    <label for="nombre" class="fLabel">Nombre</label>
                    <input class="fInput" type="text" name="nombre" placeholder="Nombre Completo"></input>

                    <label for="correo" class="fLabel">Correo electronico</label>
                    <input class="fInput" type="text" name="correo" placeholder="pepito@gmail.com" required></input>
                    <div>
                        <label for="si" class="fLabel">Recibir notificaciones</label>
                        <input type="checkbox" name="si" value="1"></input>
                    </div>


                    <label for="texA" class="fLabel">Tu mensaje aqui</label>
                    <textarea name="mensaje" id="texA" cols="30" rows="10"
                        placeholder="hola, ¿como estas?..."></textarea>
                    <div class="btmS">
                        <input type="submit" class="btmSubmit" value="Enviar Mensaje"></input>
                        <input type="reset" class="btmReset" value="Borrar todo"></input>
                    </div>

                </form>

            </div>

        </div>
    </section>
    <div>

    </div>
    <section>

        <div class="secDos">
            <img id="imagen2" src="assets/trapitomaster.png" alt="Mi forma femenina" title="forma alternativa"></img>
            <div class="sobre">

                <p class="subTitle">
                    Sobre mi
                </p>

                <article>
                    <p class="parrafo">
                        Bueno soy un semi-dios espiritual que busca llevar alegria a las personas,
                        ¿que como me volvi un semi-dios? pues, yo era un gato callejero que tenia que luchar para
                        conseguir que comer, despues de un ataque de perros callejeros y estando al borde de la
                        muerte, una humana me tomo bajo su cuidado al encontrarte entre los botes de basura gracias
                        a mis gritos de agonia, me cuido y me enseño con su forma de actuar que la gente en sus
                        peores momentos necesitas a alguien que este ahi.Lamentablemente esta mujer tenia una
                        enfermedad terminal y murio, yo nunca intente dejar de hacer felices a las demas personas ya
                        que ese era el recuerdo de mi mejor amiga y cuando estaba en mi lecho de muerte, escondido,
                        porque no queria que nadie se pusiera trizte, logre reunirme otra vez con ella.
                        Despues de mucho tiempo se me dio la oportunidad de ir a recojer las almas de las personas a
                        las que habia hecho felices y para eso se me dio la capacidad de moverme entre planos
                        existenciales y la capacidad de cambiar mi forma fisica a voluntad, ahora aprovecho cada
                        viaje al plano fisico
                        para tratar de hacer felices a mas personas y asi vean una cara familiar en sus ultimos
                        momentos y sepan que todo va a estar bien.
                    </p>
                </article>
                <div class="btmI">
                    <a class="btmSubmit" href="social.html">Social</a>
                </div>
            </div>

        </div>
    </section>


    <div class="secTres">

        <a href="index.html"><img src="assets/color.png" alt="icono mastersupp" width="64" height="64"
                title="Icono"></img></a>

        <a title="Mastersupp Channel" href="https://www.twitch.tv/mastersuppvt">
            <img src="assets/twitch.png" alt="icono twitch" height="64" title="twitch"></img>
        </a>


        <a title="Mastersupp Channel" href="https://www.youtube.com/channel/UC81ClcDZYSLK-FDGbDIBcOw">
            <img src="assets/yt.png" alt="icono youtube" width="64" height="64" title="youtube"></img>
        </a>

    </div>




    <section>
        <div class="secCuatro">


            <article id="text">
                <p class="parrafo">
                    Muy pronto estare haciendo una app para que tengan todo mi contenido en la palma de sus manos
                </p>
                <div class="btmS">
                    <a class="btmSubmit" href="">Pronto en Android</a>
                    <a class="btmSubmit" href="">Pronto en iOs</a>
                </div>
            </article>
            <img id="imagen3" src="assets/phone.png" alt="dispositivo movil" title="s9"></img>
        </div>
    </section>
    <section class="esteNo">

        <div class="secCinco">
            <div align="center" id="videos">

                <iframe src="https://www.youtube.com/embed/crBtGaM7YE0" title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
                <iframe src="https://www.youtube.com/embed/oQsbZK7Ozag" title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>


                <iframe src="https://www.youtube.com/embed/DR278P-3tDE" title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
                <iframe class="xs" src="https://www.youtube.com/embed/smFgDJO526E" title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>


            </div>
        </div>
    </section>
    <section id="accounts">
        <div class="secSeis">
            <p class="subTitle">
                Official Accounts
            </p>

            <article>
                <p id="ofi" class="parrafo">
                    Bienvenido a mis redes sociales no tengas miedo de hablarme o mandarme una solicitud de amistad
                    :3
                </p>
            </article>
            <div id="iconos">
                <a href="https://twitter.com/MastersuppVt">
                    <img src="assets/Twitter-Logotipo-2012–presente.png" alt="icono mastersupp" width="64"
                        height="64" title="Icono"></img></a>
                <a href="https://www.facebook.com/mastersuppvT">
                    <img src="assets/face.png" alt="icono mastersupp" width="64" height="64" title="Icono"></img></a>
            </div>

        </div>
    </section>


    <section>
        <div class="secSiete">

            <p class="subTitle">
                Agenda
            </p>

            <div>
                <iframe src="https://calendar.google.com/calendar/embed?src=6gkoc737noh2lnup5ootde94cc%40group.calendar.google.com&ctz=America%2FSantiago"></iframe>
            </div>
        </div>
    </section>


    <section class="esteMenos">
        <div class="secOcho">
            <p class="subTitle">
                Sponsors
            </p>

            <div class="listFull">

                <img src="assets/sponsor.jpg" alt="icono mastersupp" title="Icono"></img>

                <img src="assets/sponsor.jpg" alt="icono mastersupp" title="Icono"></img>

                <img src="assets/sponsor.jpg" alt="icono mastersupp" title="Icono"></img>

                <img src="assets/sponsor.jpg" alt="icono mastersupp" title="Icono"></img>

                <img src="assets/sponsor.jpg" alt="icono mastersupp" title="Icono"></img>

            </div>
        </div>
    </section>
    <footer>
        <div class="pie">
            <div class="icoPie">
                <img src="assets/Twitter-Logotipo-2012–presente.png" alt="icono mastersupp" title="Icono"></img>
                <img src="assets/face.png" alt="icono mastersupp" title="Icono"></img>
            </div>
            <div class="texPie">
                <p>
                    ©2021 Mastersupp Company
                </p>
            </div>
        </div>

    </footer>
</div>
)
}
export default Inicio