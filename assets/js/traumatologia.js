var traumatologia = [
    {hora: '8:00',  especialista: 'MARIA PAZ ALTUZARRA', paciente: 'PAULA SANCHEZ',     rut: '15554774-5', prevision: 'FONASA'},
    {hora: '10:00', especialista: 'RAUL ARAYA',          paciente: 'ANGÉLICA NAVAS',    rut: '15444147-9', prevision: 'ISAPRE'},
    {hora: '10:30', especialista: 'MARIA ARRIAGADA',     paciente: 'ANA KLAPP',         rut: '17879423-9', prevision: 'ISAPRE'},
    {hora: '11:00', especialista: 'ALEJANDRO BADILLA',   paciente: 'FELIPE MARDONES',   rut: '1547423-6', prevision: 'ISAPRE'},
    {hora: '11:30', especialista: 'CECILIA BUDNIK',      paciente: 'DIEGO MARRE',       rut: '16554741-K', prevision: 'FONASA'},
    {hora: '12:00', especialista: 'ARTURO CAVAGNARO',    paciente: 'CECILIA MENDEZ',    rut: '9747535-8', prevision: 'ISAPRE'},
    {hora: '12:30', especialista: 'ANDRES KANACRI',      paciente: 'MARCIAL SUAZO',     rut: '11254785-5', prevision: 'ISAPRE'},
];

/* Requerimiento 1, agregando horas a traumatologia */
traumatologia.push({hora: '09:00', especialista: 'RENÉ POBLETE', paciente: 'ANA GELLONA', rut: '13123329-7', prevision: 'ISAPRE'});
traumatologia.push({hora: '09:30', especialista: 'MARIA SOLAR', paciente: 'RAMIRO ANDRADE', rut: '12221451-K', prevision: 'FONASA'});
traumatologia.push({hora: '10:00', especialista: 'RAUL LOYOLA', paciente: 'CARMEN ISLA', rut: '10112348-3', prevision: 'ISAPRE'});
traumatologia.push({hora: '10:30', especialista: 'ANTONIO LARENAS', paciente: 'PABLO LOAYZA', rut: '13453234-1', prevision: 'ISAPRE'});
traumatologia.push({hora: '12:00', especialista: 'MATIAS ARAVENA', paciente: 'SUSANA POBLETE', rut: '14345656-6', prevision: 'FONASA'});

/* Ordenando según la hora */
traumatologia.sort((a, b) => {
    const hrA = new Date(`2000/01/01 ${a.hora}`);
    const hrB = new Date(`2000/01/01 ${b.hora}`);
    return hrA - hrB;
});


/* Requrimiento 6, filtrando pacientes fonasa */
const fonasaTraumatologia = traumatologia.filter(cita => cita.prevision === "FONASA");
var texto_fonasa = '';

for (var i = 0; i < fonasaTraumatologia.length; i++) {
    texto_fonasa += `<p>${fonasaTraumatologia[i].paciente} - ${fonasaTraumatologia[i].prevision} </p>`;
}

document.getElementById("traumatologia-fonasaListado").innerHTML = texto_fonasa;
