
export const GetExpedientes = async () => {
    let response = await fetch('http://localhost/blog/public/cursos/alls');
    return response;

}
