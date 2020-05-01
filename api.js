var app = express;

app.post('/user', (req, res) => {
// Criar usuario
let user = new user();
user.name = req.body.name;
user.email = req.body.email;

mongodb.save(user);
res.status(200).send('OK');
});

app.get('/user/:id', (req, res) => {

});

app.put('/user/:id', (req, res) => {

});

app.delete('/user/:id', (req, res) => {

});

app.post('/comment', (req, res) => {

});

app.get('/comment/:id', (req, res) => {

});

app.get('/comments', (req, res) => {

});