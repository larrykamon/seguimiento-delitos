
export const GetExpedientes = async () => {
    let response = await fetch('http://localhost/servicios-sui/public/expedientes/52/6');
    return response;

}
