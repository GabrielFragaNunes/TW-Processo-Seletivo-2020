function verifica() {
    if ( document.getElementById("txtNome").value == "") {
       alert("Por favor, preencha os campos corretamente.");
       return;
   }
}

function calcular(){
   var nota1, nota2;

   nota1 = frmMedia.txtNota1.value;
   nota2 = frmMedia.txtNota2.value;
   totalAulas = frmMedia.txttotalAulas.value;
   aulasPresente = frmMedia.txtaulasPresente.value;

   nota1 = parseFloat(nota1);
   nota2 = parseFloat(nota2);
   totalAulas = parseFloat(totalAulas);
   aulasPresente = parseFloat(aulasPresente);
   
   if ( nota1 > 10 || nota2 > 10 || nota1 < 0 || nota2 < 0) {
       alert("Nota inválida");

       return;
   }

   if (totalAulas <= 0 || aulasPresente < 0 || aulasPresente > totalAulas) {
       alert ("O número de aulas presentes não pode sar maior que o número de aulas dadas");

       return;

   }

   media = (nota1 + nota2)/2;
   frequencia = (aulasPresente * 100) / totalAulas ;

   processar('myTable', media, frequencia);
}

String.prototype.capitalize = function(){
   return String(this).replace(/([^A-zÀ-ú]?)([A-zÀ-ú]+)/g, function(match, separator, word){
       return separator + word.charAt(0).toUpperCase() + word.slice(1);
   });
}

var d = document;
   function processar(idTabela, medial, frequencia, text) {
   
       var newRow = d.createElement('tr');
       newRow.insertCell(0).innerHTML = "";
       newRow.insertCell(1).innerHTML = d.getElementsByName('txtNome')[0].value.capitalize();
       newRow.insertCell(2).innerHTML = d.getElementsByName('txtNota1')[0].value;
       newRow.insertCell(3).innerHTML = d.getElementsByName('txtNota2')[0].value;
       newRow.insertCell(4).innerHTML = formatNumber (media);
       newRow.insertCell(5).innerHTML = formatNumber (frequencia) + "%";
       newRow.insertCell(6).innerHTML = "<input type='button' value='Delete' onclick='deleteRow(this)'>";

       if(media < 6 || frequencia < 75){   
           newRow.style.backgroundColor = "#FA312B";
       }else{  
           newRow.style.backgroundColor = "00FF80";  
       }

       d.getElementById(idTabela).appendChild(newRow);

   }

function formatNumber (valor) {
   return Math.trunc(valor *100 )/100;
}

function deleteRow(btn) {
   var row = btn.parentNode.parentNode;
   row.parentNode.removeChild(row);
} 