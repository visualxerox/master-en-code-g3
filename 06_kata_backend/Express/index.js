const express = require('express'); 
const app = express(); 
const port = 3600; 
const axios =  require('axios');

const getCharacterFromSWAPI = async (idCharacter) => {
    const { data } = await axios.get(`https://swapi.dev/api/people/${idCharacter}/`);
    return data;
}

app.get('/', (req, res) => {
    res.send({
        message: 'Bienvenido a mi servidor', 
        icon: '👨‍💻'
    })
})

app.post('/', (req, res) => {
    res.send({
        server: req.hostname, 
        route: req.route.path
    })
})

app.post('/send-message', (req, res) => {
    res.send({
        message: {
            from: 'victor@devf.mx', 
            to: 'vm.reyesal@gmail.com',
            body: 'mensaje de prueba',
            dateInfo: Date.now()
        }
    })
})

app.get('/user/:name', (req, res)=>{
    const {name} = req.params;
    res.send({
        name: name.length
    })
})

app.get('/suma/', (req, res)=>{
    const {num1, numeromayor} = req.query
    res.send({resultado: parseInt(num1) + parseInt(numeromayor)});
})

app.get('/api/swapi/:idCharacter', async (req, res) => {
    const { idCharacter } = req.params;
    const character = await getCharacterFromSWAPI(idCharacter);
    console.log(character);
    res.status(200).json(character);
});
  
app.listen(port, () => {
    console.log(`Servidor en http://localhost:${port}`)
})


