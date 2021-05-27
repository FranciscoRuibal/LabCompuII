/**
 *Conversion de unidades, de metros, pies y pulgadas.
 *@method cambiarunidades
 *@param {string} id - El id de los inputs de los metros, pies y pulgadas
 *@param {number} valor -El valor de los inputes de metros, pies y pulgadas
 *@return
*/
function cambiarunidades(id, valor){
    if(isNaN(valor)){
        alert('Se ingreso un valor invalido');
    document.lasunidades.unid_metro.value = "";
    document.lasunidades.unid_pulgadas.value = "";
    document.lasunidades.unid_pies.value = "";
    }
    else if (id == "metro"){
            document.lasunidades.unid_pulgadas.value = 39.3701*valor;
            document.lasunidades.unid_pies.value = 3.28084*valor;
    }
    else if (id == "pulgadas"){
            document.lasunidades.unid_pies.value = 0.0833333*valor;
            document.lasunidades.unid_metro.value = 0.0254*valor;
    }
    else if (id == "pies"){
            document.lasunidades.unid_pulgadas.value = 12*valor;
            document.lasunidades.unid_metro.value = 0.3048*valor;
    }
    }

