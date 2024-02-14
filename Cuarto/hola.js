function validarPedido(){
    var form = document.getElementById("FormPedido")
    var texto= new String("Su pedido de arroz incluye:\n\t Arroz regular.\n");
    if (document.getElementById('CBCerdo').checked){
        texto += "\t Porción de Cerdo.\n";
         
    }
    if (document.getElementById('CBRes').checked){
        texto += "\t Porción de Res.\n";
    }
    if (document.getElementById('CBPollo').checked){
        texto += "\t Porción de Pollo.\n";
    }
    if (document.getElementById('CBPinha').checked){
        texto += "\t Porción de Piña.\n";
    }
    texto+="¿Desea continuar con su pedido?"
    
    var confirmacion= confirm(texto);

    if (confirmacion){
        form.submit()
        alert("Su orden ha sido realizada con exito!")
    } else {
        alert("Orden cancelada.")
    }
}   

function formaFinal(){
    alert("Esta pagina a alcanzado su forma definitiva >:D")
}

