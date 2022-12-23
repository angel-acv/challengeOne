var botonDos = document.querySelector("#btn2");
var mensaje = document.querySelector("#introducir-texto").value



function desencriptar(){
    document.getElementById("alert-deft").style.display = "none";
    var msjDesencriptado = "";
    var mensaje = document.querySelector("#introducir-texto").value;
    var mayus = /[A-Z]/g;
    var caracteres = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/g;

    if(mensaje == ""){
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Necesita ingresar texto',
            showConfirmButton: false,
            timer: 1500
          })
        resultado(no)
        document.getElementById("alert-deft").style.display = "";
    }else if (mensaje.match(mayus)!= mensaje.match(mayus)){
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'No se admiten mayusculas',
            showConfirmButton: false,
            timer: 1500
          })
        resultado(no)
        document.getElementById("alert-deft").style.display = "";
    }else if (mensaje.match(caracteres) != mensaje.match(caracteres)){
        Swal.fire({
            position : 'center',
            icon: 'error',
            title: 'No se aceptan acentos y/o caracteres especiales',
            showConfirmButton: false,
            timmer: 1500
        })
        resultado(no);
        document.getElementById("alert-deft").style.display = "";
    }else{
    msjDesencriptado = mensaje.replace(/ai/g, "a").replace(/enter/g,"e").replace(/imes/g,"i").replace(/ober/g,"o").replace(/ufat/g,"u"); 
    document.getElementById("resultado").innerHTML=msjDesencriptado;
    document.getElementById("titulo-resultado").innerHTML=desencriptacionExitosa;
  
    resultado(si)
    document.getElementById("introducir-texto").value = ""
    }
    
    
    
}



  botonDos.onclick = desencriptar;
  
  