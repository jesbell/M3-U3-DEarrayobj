var todosArrays = traumatologia.concat(radiologia, dental);

var texto_paciente = '';
for (var i = 0; i < todosArrays.length; i++) {
    texto_paciente += `<p>${todosArrays[i].paciente}</p>`;
}

document.getElementById("pacientes-listado").innerHTML = texto_paciente;