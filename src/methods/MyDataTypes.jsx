function MyDataTypes() {
    let IdNombre = 'Andy';
    IdNombre = 706;
    //Constantes
    const Alias  = "Andy";
    const Nombre  = "Andrea";
    const Apellidos  = "Guillen"
    const NumControl = 19400585;
    const NumControl2 = 1074;
    const FechaReg = new Date();
    //Variables
    let Experiencia = 23;
    let Activo = false;
    console.log("IdNombre:", IdNombre);
    console.log("IdNombre:", Alias);
    console.log("IdNombre:", Nombre);
    console.log("IdNombre:", Apellidos);
    console.log("IdNombre:", NumControl2);
    console.log("IdNombre:", FechaReg);
    console.log("IdNombre:", Experiencia);
    console.log("IdNombre:", Activo);
    //Arreglos
    let Pasatiempos = ['dormir ', 'series ', 'dormir otra vez ', 'ejercicio '];
    //Agregamos elementos al arreglo
    Pasatiempos.push('poker ');
    Pasatiempos.push('comer ');
    Pasatiempos.push(706);
    Pasatiempos.push(true);
    console.log("Pasatiempos:", Pasatiempos);
    let Libros = [];
    Libros.push(1122);
    Libros.push(true);
    Libros.push("It");
    console.log("Libros:", Libros);
    return (
        <>
            <div>
                <h1>
                    Programa para conocer diferentes Tipos de de Datos
                </h1>
                <h2>
                      Alias: {Alias},    <br/>
                      Id:    {IdNombre}, <br/>
                      Nombre:{Nombre},  <br/>
                      Apellidos: {Apellidos}, <br/>
                      Num. Control: {NumControl}, <br/>
                      Num. Control 2: {NumControl2}, <br/>
                      Fecha de Registro:{FechaReg.toString()}, <br/>
                      Años de Experiencia: {Experiencia},<br/>
                      Estatus: {(Activo) ? 'Activo' : 'No Activo'}, <br/>
                      Pasatiempos: {Pasatiempos}, <br/>
                      Libros: {Libros[0]},   
                              {(Libros[1]) ? 'Activo' : 'No Activo'},
                              {Libros[2]}
                </h2>
            </div>
       
        </>
    );
};
export default MyDataTypes;