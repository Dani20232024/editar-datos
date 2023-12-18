let persons = [
    {
       nombre: "Julian",
       apellidos: "Jimenex",
       correo : "julian@gmail.com"
    },
    {
       nombre: "Andres",
       apellidos: "Martinez",
       correo : "andres@gmail.com"
    },
    {
       nombre: "carmen",
       apellidos: "matias",
       correo : "carmen@gmail.com"
    }];


    
    function actualizar(posicion){
       let nombre = document.getElementById('nombre_' + posicion).value;
       let apellido = document.getElementById('apellido_' + posicion).value;
       let correo = document.getElementById('correo_' + posicion).value;
       if (nombre !=''){
        document.getElementById ('nombre_0').classList.add('is-valid');
        document.getElementById ('nombre_0').classList.remove('is-invalid');
       } else {
         document.getElementById ('nombre_0').classList.add('is-invalid');
         document.getElementById ('nombre_0').classList.remove('is-valid');
       }

       if (apellido !=''){
        document.getElementById ('apellido_0').classList.add('is-valid');
        document.getElementById ('apellido_0').classList.remove('is-invalid');
      
       } else {
         document.getElementById ('apellido_0').classList.add('is-invalid');
         document.getElementById ('apellido_0').classList.remove('is-valid');
     
       }

       if (correo !=''){
         document.getElementById ('correo_0').classList.add('is-valid');
         document.getElementById ('correo_0').classList.remove('is-invalid');
      
        } else {
          document.getElementById ('correo_0').classList.add('is-invalid');
          document.getElementById ('correo_0').classList.remove('is-valid');
   
        }
        
        
    }
        persons[posicion].nombre = nombre;
        persons[posicion].apellidos = apellido;
        persons[posicion].correo = correo;
        console.log(persons);

    console.log(persons);