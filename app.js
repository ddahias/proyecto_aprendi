const express = require (`express`);
const app  = express();
const port = process.env.PORT || 3000;
 
 app.set (`view engine`, `ejs`);
 app.get('/', (req, res) => {
    
    res.render('index', { 
        nombre: " GINNY ", 
        cedula: "31.523.456", 
        seccion: "Sección 4",
        horario: "2:00pm - 3:15pm"
      });
  });

  app.listen (port,() => { 
   
    console.log(`Servidor corriendo en http://localhost:${port}`);

});