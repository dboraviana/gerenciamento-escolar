
// A basic route returning a canned response
Sandbox.define('/hello', 'get', function(req, res) {
    // send 'Hello world' response
    res.send('Hello world');
});


// Using stateful behaviour to simulate creating users
Sandbox.define('/users', 'POST', function(req, res) {
    state.users = state.users || [];
    state.users.push(req.body);
        return res.json({status: "ok"});
});

// Using stateful behaviour to simulate getting all users
Sandbox.define('/users', 'GET', function(req, res) {
    // retrieve users or, if there are none init, to empty array
    state.users = state.users || [];

    return res.json(state.users);
});

// Using named route parameters to simulate getting a specific user
Sandbox.define('/users/{username}', 'GET', function(req, res) {
    // retrieve users or, if there are none, init to empty array
    state.users = state.users || [];

    // route param {username} is available on req.params
    var username = req.params.username;

    // log it to the console
    console.log("Getting user " + username + " details");

    // use lodash to find the user in the array
    var user = _.find(state.users, { "username": username});
    
    return res.json(user);
});

Sandbox.define('/usuario', 'GET', function(req, res){
    // Set the type of response, sets the content type.
    res.type('application/json');
    
    // Set the status code of the response.
    res.status(200);
    if (state.usuarios === null) {
        state.usuarios = [];
    }
    
    // Send the response body.
    res.json(state.usuarios);
})



Sandbox.define('/operadora', 'GET', function(req, res){
    // Set the type of response, sets the content type.
    res.type('application/json');
    
    // Set the status code of the response.
    res.status(200);
    if (state.operadoras === null) {
        state.operadoras = [];
    }
    state.operadoras = [{
        nomeOperadora: "Tim",
        id: "1"
    }, {
        nomeOperadora: "Vivo",
        id: "2"
    }, {
        nomeOperadora: "Claro",
        id: "3"
    },
    {
        nomeOperadora: "Oi",
        id:"4"
    }]
    
    
    // Send the response body.
    res.json(state.operadoras);
})

Sandbox.define('/usuario', 'POST', function(req, res){
    // Check the request, make sure it is a compatible type
    if (!req.is('application/json')) {
        return res.send(400, 'Invalid content type, expected application/json');
    }
    
    if (state.ultimoId == null) {
        state.ultimoId = 1;
    }
    
    var novoUsuario = {};
    novoUsuario.id = state.ultimoId++;
    novoUsuario.nome = req.body.nome;
    novoUsuario.telefone = req.body.telefone;
    novoUsuario.operadora = req.body.operadora;
    novoUsuario.cidade = req.body.cidade;
    novoUsuario.endereco = req.body.endereco;
    novoUsuario.numeroCasa = req.body.numeroCasa;
    novoUsuario.data = new Date();
    
    state.usuarios.push(novoUsuario);
    // Set the type of response, sets the content type.
    res.type('application/json');
    
    // Set the status code of the response.
    res.status(200);
    
    // Send the response body.
    res.json({
        "status": "OK"
    });
})

Sandbox.define('/remover-usuario/:id','DELETE', function(req, res){
    // Check the request, make sure it is a compatible type
    // if (!req.is('application/json')) {
    //     return res.send(400, 'Invalid content type, expected application/json');
    // }
    
    var idParaRemover = req.params.id;
    
    for (var i = 0; i < state.usuarios.length; i++) {
        if (state.usuarios[i].id == idParaRemover) {
            state.usuarios.splice(i, 1);
        }
    }
    
    
    // Set the type of response, sets the content type.
    res.type('application/json');
    
    // Set the status code of the response.
    res.status(200);
    
    //Send the response body.
    res.json({
        "status": "ok"
    });
    
    // Send the response body.
    // res.json({
    //     state.usuarios[i].id
    // });
})

Sandbox.define('/limpar-state','GET', function(req, res){
    state.usuarios = [];
    state.ultimoId = 1;
    res.type('application/json');
    res.status(200);
    res.json({
        "status": "ok"
    });
})

Sandbox.define('/usuario/{id}', 'GET', function(req, res){
    // // Check the request, make sure it is a compatible type
    // if (!req.is('application/json')) {
    //     return res.send(400, 'Invalid content type, expected application/json');
    // }
    
    
    var idUsuario = req.params.id;
    var usuarioEncontrado = {};
    
    for (var i = 0; i < state.usuarios.length; i++) {
        if (state.usuarios[i].id == idUsuario) {
            usuarioEncontrado = state.usuarios[i];
            break;
        }
    }
    
    
    // Set the type of response, sets the content type.
    res.type('application/json');
    
    // Set the status code of the response.
    res.status(200);
    
    // Send the response body.
    res.json(usuarioEncontrado);
})

Sandbox.define('/usuario/{id}','DELETE', function(req, res){
    // Check the request, make sure it is a compatible type
    // if (!req.is('application/json')) {
    //     return res.send(400, 'Invalid content type, expected application/json');
    // }
    
    var idParaRemover = req.params.id;
    
    for (var i = 0; i < state.usuarios.length; i++) {
        if (state.usuarios[i].id == idParaRemover) {
            state.usuarios.splice(i, 1);
        }
    }
    
    
    // Set the type of response, sets the content type.
    res.type('application/json');
    
    // Set the status code of the response.
    res.status(200);
    
    //Send the response body.
    res.json({
        "status": "ok"
    });
    
    // Send the response body.
    // res.json({
    //     state.usuarios[i].id
    // });
})

Sandbox.define('/usuario/{id}', 'PUT', function(req, res){
    // Check the request, make sure it is a compatible type
    // if (!req.is('application/json')) {
    //     return res.send(400, 'Invalid content type, expected application/json');
    // }
    
    var idUsuario = req.params.id;
    
    
    for (var i = 0; i < state.usuarios.length; i++) {
        if (state.usuarios[i].id == idUsuario) {
            state.usuarios[i].nome = req.body.nome;
            state.usuarios[i].telefone = req.body.telefone;
            state.usuarios[i].operadora = req.body.operadora;
            state.usuarios[i].cidade = req.body.cidade;
            state.usuarios[i].endereco = req.body.endereco;
            state.usuarios[i].numeroCasa = req.body.numeroCasa;
            state.usuarios[i].data = new Date();
            // state.usuarios = []
            // state.usuarios.push(req.body);
    
        }
    }
    
    // Set the type of response, sets the content type.
    res.type('application/json');
    
    // Set the status code of the response.
    res.status(200);
    
    
    // res.json({
    //     "status": "OK"
    // });
    
    res.json(req.body);
})