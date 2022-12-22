//creamos funciones y las exportamos aqui 
const {response,request} =require('express') //opcional sirve para que te salga el tipado en Vs.C


const usuariosGet =(req=request, res=response) => {

    const {q, nombre='No name', apikey,page,limit} =req.query
    
    res.json({
        msg: 'get API- controlador',
        q,
        nombre,
        apikey,
        page,
        limit
    })
}

const usuariosPut=(req, res) => {

    //const id=req.params.id     //Ruta id
    const {id}=req.params 

    res.json({
        msg: 'put API',
        id
    })
}

const usuariosPost= (req, res) => {

    const {nombre,edad} =req.body//Obtenr info del body

    res.json({
        msg: 'post API',
        //mostrar info del body 
        nombre,
        edad
    })
}

const usuariosDelete= (req, res) => {
    res.status(403).json({
        msg: 'delete API'
    }) 
}

const usuariosPatch=(req, res) => {
    res.status(403).json({
        msg: 'patch API'
    }) 
}


module.exports={
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete,


}
