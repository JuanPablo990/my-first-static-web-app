module.exports = async function (context, req) {
    context.res = {
        status: 200,
        body: "¡Hola! Esta es una función de prueba en Azure."
    };
}