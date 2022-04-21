const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBlEQMwv0vcinsUrAozV50nsLY8NuE8Sc0",
    authDomain: "fir-prueba-589e0.firebaseapp.com",
    projectId: "fir-prueba-589e0",
    storageBucket: "fir-prueba-589e0.appspot.com",
    messagingSenderId: "1088078922151",
    appId: "1:1088078922151:web:55a62ded8cc1e0e289b682"
  });
const db = firebaseApp.firestore();

const base = db.collection("Estudiantes");





//-------AGREGAR UN LISTA CON USURIO---- //
// db.collection("Estudiantes").add({
//     nombre: "tomas",
//     apellido: "BENAVIDES",
//     edad: "30"
// });


//------ELIMINAR DATOS DE LA LISTA----- //
// base.doc("HgJbmqI2vr8qepZCJY5X").delete();


//-----MODIFICAR DATOS ----------------//
// base.doc("6n2lwaAG5FVBKS6ZP0fw").set
// ({
//     estado: "ACTIVO"
// });

//-----AGREGAR CAMPOS----------------//
// base.doc("6n2lwaAG5FVBKS6ZP0fw").update
// ({
//     deporte: "fuchibol",
//     genero: "por definor"
// })

//-----MOSTRAR DATOS ----------------//
// base.get().then(snap => {
//     const Estudiantes = [];

//     snap.forEach(sn => {

//         Estudiantes.push({
//             id: sn.id,
//             ...sn.data()
//         })

//     });
//     console.log(Estudiantes);
// })

//----------------------consulta-----------------------//

// base.where('nombre', '==', 'camilo').get().then(snap => {
//     const Estudiantes = [];

//     snap.forEach(sn => {

//         Estudiantes.push({
//             id: sn.id,
//             ...sn.data()
//         })

//     });
//     console.log(Estudiantes);
// })

//----------contar mas de uno---------------//

// base.where('edad', '<=', '30').get().then(snap => {
//     const Estudiantes = [];

//     snap.forEach(sn => {

//         Estudiantes.push({
//             id: sn.id,
//             ...sn.data()
//         })

//     });
//     console.log(Estudiantes);
// })

//--------------------------IMPRIMIR EN PANTALLA------------------------//

// base.get().then(snap => {
    
//     const Estudiantes = [];
//     snap.forEach(sn => {

//         Estudiantes.push({
//             id: sn.id,
//             ...sn.data()
//         })      
        
//     });
//     const impresion = document.getElementById("contenedor");

//     let tabla = `<table>
//                         <thead>
//                             <tr>
//                                 <th>Nombre</th>
//                                 <th>Apellido</th>
//                                 <th>Codigo</th>
//                             </tr>
//                         <tead>
//                     `

//     for(let i = 0; i<Estudiantes.length; i++){

//             tabla = tabla + `
//                             <tr>
//                                 <td>${Estudiantes[i].nombre}</td>
//                                 <td>${Estudiantes[i].apellido}</td>
//                                 <td>${Estudiantes[i].edad}</td>
//                             </tr>
//                             `

//     }

//     impresion.innerHTML=tabla;
// })
