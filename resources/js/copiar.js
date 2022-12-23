
function copiarPortapapeles(){
    var copiado = document.getElementById("resultado");
    copiado.select();
    document.execCommand('copy');
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Copiado en el portapapeles',
        showConfirmButton: false,
        timer: 1500
      })
}
 
 botonCopiar.onclick = copiarPortapapeles;