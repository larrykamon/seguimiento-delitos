
export const GetDelitos = async (expedientes_id) => {
    console.log('http://localhost/blog/public/cursos/delitosByExpedientes/'+expedientes_id)
    let response = await fetch('http://localhost/blog/public/cursos/delitosByExpedientes/'+expedientes_id);
    return response;

}
