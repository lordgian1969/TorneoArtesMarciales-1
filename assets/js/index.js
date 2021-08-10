import { Saiyajin , Humano } from "./clases/Razas.js";


let participantes = [];

document.getElementById("btnRegistrar").addEventListener("click", () => {

    let nombre = document.getElementById("nombre");
    let raza = document.getElementById("raza");
    let previewElement = document.getElementById("preview");
    let imagenSrcBg = previewElement.style.backgroundImage;
    let imgSrc = imagenSrcBg.slice(5 , imagenSrcBg.length - 2);
    let ki = document.getElementById("poderPelea");

   console.log(nombre.value,raza.value,imagenSrcBg, imgSrc, ki.value)


   let nuevoParticipante;
   if (raza.value == "Saiyajin"){
       nuevoParticipante = new Saiyajin(nombre.value, imgSrc, ki.value, raza.value);
      
   }
   else if(raza.value== "Humano"){
    nuevoParticipante = new Humano(nombre.value, imgSrc, ki.value, raza.value);
   };

   if(raza.value && nombre.value && ki.value && imgSrc ){
    participantes.push(nuevoParticipante);
    nombre.selectedIndex = 0;
    raza.selectedIndex = 0;
    previewElement.style.backgroundImage = "none";
    imagenSrcBg = previewElement.style.backgroundColor = "#f0f0f0";
    ki.value ="";
    // console.log(participantes);
    reloadTable();
   }else{
       alert("Faltan datos por llenar")
   }
  
  
});

const reloadTable = () =>{
   const participantesTemplate = document.getElementById("Participantes");
   participantesTemplate.innerHTML = "";
   participantes.forEach( (p,i) =>{
  
       participantesTemplate.innerHTML+= `
        <div class="px-3 pb-2 participante" data-fighter = "${p.getNombre()}">
            <div class="card">
                <img src="${p.getImg()}" class="card-img-top" />
                <div class="card-body">
                    <h4 class="card-title">${p.getNombre()}</h4>
                    <hr class="w-50 mx-auto"/>
                    <h6 class="card-text">Raza: ${p.getRaza()}</h6>
                    <h6 class="card-text">Poder de pelea: <span class="text-danger">${p.getPoder()}</span></h6>
                    <button class="btn btn-outline-warning" onclick="activarHabilidad('${i}')">Habilidad</button>
                </div>  
            </div>      
        </div>
       `;
   });
};

//aqui se realiza la funcion porque no se puede cuando se realiza modulo, tiene scope special

window.activarHabilidad = (i) =>{
    const participante = participantes[i];
    if(participante.getRaza() == "Saiyajin"){
        participante.Transformacion();
    }else if(participante.getRaza() == "Humano"){
        participante.Coraje();
    }
    reloadTable();
};

document.getElementById("btnMasFuerte").addEventListener("click", () =>{
    const masFuerte = participantes.sort( (a,b) => b.getPoder() - a.getPoder())[0];
    const nombre = masFuerte.getNombre();

    document.querySelector(`[data-fighter='${nombre}'] div`).style.boxShadow = "0px 0px 5px 1px yellow";
});

