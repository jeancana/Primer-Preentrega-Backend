// ***** IMPORTANDO LA RUTAS DINAMICAS *******
import express from 'express' //importando la libreria express
import cartsRouter from './routers/carts.routers.js'
import productsRouter from './routers/products.routers.js'


const PORT = 8080

const appServer = express()
appServer.use(express.json())
appServer.use(express.urlencoded({ extended: true }))

// ******* RUTAS DINAMICAS **************
appServer.use('/api/carts', cartsRouter)
appServer.use('/api/products', productsRouter)



// Poniendo a Escuchar el Servidor 
appServer.listen(PORT, () => console.log(`Server Up on PORT: ${PORT}`))