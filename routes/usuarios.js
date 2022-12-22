
//Se usa para separar las rutas
const {Router}=require('express')

const {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete }=require('../controllers/usuarios')

const router=Router()


router.get('/',usuariosGet)

//id ya viene configurado en Express y lo parsea y te lo da en una propiedad del objeto request
router.put('/:id',usuariosPut) //Hace dinamico la ruta 
/*Caulaquier info despues del '/' se almacenara en un propiedad
del req con el nombre que le hayas puesto  */

router.post('/',usuariosPost)

router.delete('/',usuariosDelete)

router.patch('/', usuariosPatch)



module.exports=router