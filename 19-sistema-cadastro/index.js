const express = require('express')
const app = express()

// o handlebars é uma template engine como o blade
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')

const Post = require('./Models/Post')

// Config
// Template Engine
app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// routes
app.get('/', async (req, res) => {

    let posts = await Post.findAll({
        order: [['id', 'desc']]
    })
    res.render('index', { posts: posts })
        
    // Post.findAll().then((posts) => {
    //     console.log(posts);
    //     res.render('index', { posts: posts})
    // })
    
})

app.get('/cadastro', (req, res) => {
    res.render('formulario')
})

app.post('/cadastrar', (req, res) => {
    Post.create({
        title: req.body.title,
        content: req.body.content
    }).then(() => {
        // res.send("Post criado com sucesso.")
        res.redirect("/")
    }).catch((err) => {
        res.send("Houve um erro: "+ err)
    })
})

app.get('/deletar/:id', (req, res) => {

    Post.destroy({
        where: {'id': req.params.id}
    }).then(() => {
        res.send("Post excluído")
    }).catch(() => {
        res.send("Este poste não existe")
    })
 
    // res.redirect('/')
})

// tem que ser sempre a ultima linha
app.listen(8081, () => {
    console.log("Servidor rodando na url http://localhost:8081/");
})
