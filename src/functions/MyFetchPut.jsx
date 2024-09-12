// API PUT de usuario.
function MyFetchPut() {

    // Modificar edad
    let usuarioActualizado = {
        nombre: 'Andrea',
        edad: 33
    }

    // API PUT de usuario.
    fetch('https://reqres.in/api/users/2', {
        method: 'PUT',
        body: JSON.stringify(usuarioActualizado), // data a enviar
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(resp => resp.json()).then(console.log).catch(error => {
        console.log('Error en la petición API PUT');
        console.log(error);
    });

    return (
        <>
            <div>
                <h1>
                    Programa para FETCH API PUT
                </h1>
            </div>
        </>
    );
}
export default MyFetchPut;