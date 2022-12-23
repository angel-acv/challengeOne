
var botonUno = document.querySelector("#btn1");
var botonCopiar = document.querySelector("#btn-copy");

var encriptacionExitosa = "ENCRIPTADO";
var desencriptacionExitosa = "DESENCRIPTADO";


var si = "";
var no = "none";

function resultado(ver){
  document.getElementById("conteiner-resultado").style.display = ver;  
  document.getElementById("btn-copy").style.display = ver;
  document.getElementById("resultado").style.display = ver;
}

document.getElementById("alert-deft").style.display = "";

resultado(no);

function encriptar(){
  document.getElementById("alert-deft").style.display = "none";
  var msjEncriptado = "";
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
    document.getElementById("alert-deft").style.display = "";
    resultado(no)
  }else if (mensaje.match(mayus) != mensaje.match(mayus)){
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'No se aceptan mayusculas',
        showConfirmButton: false,
        timer: 1500
      })
      document.getElementById("alert-deft").style.display = "";
  }else if (mensaje.match(caracteres) != mensaje.match(caracteres)){
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'No se aceptan caracteres especiales',
        showConfirmButton: false,
        timer: 1500
      })
      document.getElementById("alert-deft").style.display = "";
  }else{
    for(var i = 0; i < mensaje.length; i++){
    if(mensaje[i] == "a"){
      var encriptando = mensaje[i].replace("a","ai",);
      msjEncriptado = msjEncriptado + encriptando;
    }else if(mensaje[i] == "e"){
      var encriptando = mensaje[i].replace("e","enter");
      msjEncriptado = msjEncriptado + encriptando;
    }else if(mensaje[i] == "i"){
      var encriptando = mensaje[i].replace("i","imes");
      msjEncriptado = msjEncriptado + encriptando;
    }else if(mensaje[i] == "o"){
      var encriptando = mensaje[i].replace("o","ober");
      msjEncriptado = msjEncriptado + encriptando;
    }else if(mensaje[i] == "u"){
      var encriptando = mensaje[i].replace("u","ufat");
      msjEncriptado = msjEncriptado + encriptando;
  }else{
      msjEncriptado = msjEncriptado + mensaje[i];
    }
  }
      document.getElementById("titulo-resultado").innerHTML=encriptacionExitosa;
      document.getElementById("resultado").innerHTML=msjEncriptado;
      document.getElementById("introducir-texto").value = "";
      document.getElementById("introducir-texto").style.color= "blue";
      resultado(si)
  }
}







botonUno.onclick = encriptar;


