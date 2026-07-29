const botones = document.querySelectorAll(".botones-tiempo");
const imagen = document.querySelector(".img-grande img");
const imagenpequena =document.querySelector(".img-pequena img");
const titulo =document.querySelector(".historia-derecha h2");
const subtitulo = document.querySelector(".textocuadro h3");
const texto = document.querySelector(".textocuadro p");

botones.forEach(boton => {

    boton.addEventListener("click", (event) => {

        const btnSeleccionado = event.target.textContent;
         
        document.startViewTransition(() => {

            switch (btnSeleccionado) {

                case "2019":
                    imagen.src = "./images/" + "principal.jpg";
                    imagenpequena.src = "./images/" + "Rectangle 1087.jpg";
                    titulo.textContent ="Nuestra Historia";
                    
                    break;

                case "2022":
                    imagen.src = "./images/" + "parte2 linea.png";
                    imagenpequena.src ="./images/" + "Rectangle 108.png";
                    titulo.textContent ="Nuestra Mision"
                    texto.textContent =" únicas a través de la creación y distribución de dulces y regalos personalizados, combinando calidad, creadtividad y detalle en cada producto. Nos enfocamos en transmitir emociones."
                    subtitulo.textContent="Brindar experiencias";
                    break;

                case "2026":
                    
                
                    imagen.src = "./images/" + "principalllll.png";
                    imagenpequena.src ="./images/" + "linea 4.png";
                    titulo.textContent ="Nuestro Aporte"
                    texto.textContent =" Porque no solo vendemos dulces y regalos, creamos experiencias que transmiten emociones. Nos destacamos por la calidad de nuestros productos, la frescura de cada ingrediente y el cuidado en cada detalle."
                    subtitulo.textContent="¿Por que escogernos?";
                    break;

                case "2030": 
                    imagen.src = "./images/" + "linea.png";
                    imagenpequena.src ="./images/" + "linea 5.png";
                    imagen.setAttribute("img","linea 5.png")
                    titulo.textContent ="Nuestra Vision"
                    subtitulo.textContent="Ser una empresa lider"
                    texto.textContent=" reconocida por nuestra creatividad, calidad y capacidad de innovar en cada detalle. Buscamos expandir nuestra marca, llegar a más personas y convertirnos en la opción preferida para celebrar momentos especiales."
                    
                    break;
                default:
                    alert("idontnou")
            }
        })

    });

});