const {createServer}=require("http");
const {createReadStream}= require("fs");

const servidor = createServer((peticion,respuesta)=>{
   respuesta.writeHead(404,{"Content-type": "text/html"})
    respuesta.write("... x cosa");
    respuesta.end();
});

servidor.listen(process.env.PORT || 3000);

