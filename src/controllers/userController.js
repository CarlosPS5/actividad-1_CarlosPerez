
let users = []

exports.createUser = (req,res) => {
    const dni = req.body.dni
    regexDNI = /^[A-Z]{3}[0-9]{2}[a-z]{1}[0-9]{1}$/
    const isValidDNI = regexDNI.test(dni)

    if(isValidDNI) {
        const newUser = {
            "name" : req.body.name,
            "age" : req.body.age,
            "dni" : req.body.dni
        }
        users.push(newUser)
        console.log(users)
        res.send("Usuario creado con éxito")
    } else {
        console.log(users)
        res.send("El DNI tiene formato incorrecto")
    }
    
}

exports.getUsers = (req,res) => {
    console.log(users)
    res.send("Se ha devuelto la lista con todos los usuarios")
}

exports.getUserByDNI = (req,res) => {
    const dni = req.params.dni
    const user = users.filter(user => user.dni === dni)
    console.log(user)
    user.length === 0? res.send("No hay ningún usuario con ese DNI") : res.send("Se ha encontrado un usuario con ese DNI")
}

exports.updateUser = (req,res) => {
    if(users.some(user => user.dni === req.params.dni)) {
        users.map(user => {
            if(user.dni === req.params.dni) {
                user.name = req.body.name
                user.age = req.body.age
                user.dni = req.body.dni
                res.send("El usuario ha sido actualizado")
            }
        })
    } else {
        res.send("No se ha encontrado un usuario con ese DNI")
    }
    

}

exports.deleteUser = (req,res) => {
    if(users.some(user => user.dni === req.params.dni)) {
        users = users.filter(user => user.dni !== req.params.dni)
        res.send("Se ha borrado el usuario correctamente")
    } else {
        res.send("No se ha encontrado un usario con ese DNI")
    }
    
    
}