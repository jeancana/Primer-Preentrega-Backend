import { promises as fs } from 'fs'

export default class CartManager {
    
    constructor() {
        this.carts = []
        this.path = './carts.json'
    }

    static id = 0
  

    addProducts = async (products) => {
        
        CartManager.id++
        let newCarts= { id: CartManager.id, products }
        this.carts.push(newCarts)
        await fs.writeFile(this.path, JSON.stringify(this.carts, null, '\t'))
    }

    // Metodo Interno que se usara solo para hacer los Metodos GetAll y GetByID
    readCarts = async () => {
        let cartsContent = await fs.readFile(this.path, 'utf-8')
        return JSON.parse(cartsContent)
    }


    getCarts = async () => {
        let contenido2 = await this.readCarts()
        return console.log(contenido2)
    }


    getCarstById = async (id) => {
        let showOneContent = await this.readCarts()  
        let response = showOneContent.find(product => product.id === id)
        return(response)
    }

    upDateCarts = async (title, description, price, thumbnail, code, stock) => {
        CartManager.id++
        let newCarts= { id: CartManager.id, title, description, price, thumbnail, code, stock }
        this.products.push(newCarts)
        await fs.writeFile(this.path, JSON.stringify(this.carts, null, '\t'))
    }

    deleteCartsById = async (id) => {
        let deleteContent = await this.readCarts()  
        let filterProduct = deleteContent.filter((producto) => producto.id != id)
        
        console.log(filterProduct)
        await fs.writeFile(this.path, JSON.stringify(filterProduct, null, '\t'))
    }

}


//const cartManager = new CartManager()

// ---------- ORDEN PARA EL USO DE TODO 

//PASO 1: AGREGANDO LOS PRODUCTOS AL ARRAY (usando Metodo - addProducts() )


/* cartManager.addProducts('Manzana Roja', 'es una fruta', 130, 'url:web - colocarla aca', '001', '5000')
cartManager.addProducts('Manzana Verde', 'es una fruta', 130, 'url:web - colocarla aca', '001', '5000')
cartManager.addProducts('Pera', 'es una fruta', 180, 'url:web - colocarla aca', '002', '3000')
cartManager.addProducts('Arandano', 'es una fruta', 20, 'url:web - colocarla aca', '003', '7000')
cartManager.addProducts('Piña', 'es una fruta', 300, 'url:web - colocarla aca', '004', '1000')
cartManager.addProducts('Fresa', 'es una fruta', 300, 'url:web - colocarla aca', '004', '1000')
cartManager.addProducts('Papaya', 'es una fruta', 300, 'url:web - colocarla aca', '004', '1000')
cartManager.addProducts('Melon', 'es una fruta', 300, 'url:web - colocarla aca', '004', '1000')
cartManager.addProducts('Uva', 'es una fruta', 300, 'url:web - colocarla aca', '004', '1000')
cartManager.addProducts('Naranja', 'es una fruta', 300, 'url:web - colocarla aca', '004', '1000') */

 //----- Nota: una vez creados los productos los vuelvo a texto para que no entre en conflicto con el getProductsById al buscar un objeto  


/*
//PASO 2: ACTUALIZANDO LOS PRODUCTOS DENTRO DEL  ARRAY (usando Metodo - upDateProducts() )
productManager.upDateProducts('manzana', 'es una fruta', 130, 'url:web - colocarla aca', '001', '5000')
productManager.upDateProducts('manzana', 'es una fruta', 130, 'url:web - colocarla aca', '001', '5000')
productManager.upDateProducts('pera', 'es una fruta', 180, 'url:web - colocarla aca', '002', '3000')
productManager.upDateProducts('modificado1', 'se modifico para probar1', 20, 'url:web - colocarla aca', '003', '7000')
productManager.upDateProducts('modificado2', 'se modifico para probar2', 300, 'url:web - colocarla aca', '004', '1000')
*/

//PASO 3: MOSTRANDO TODOS LOS PRODUCTOS QUE ESTAN DENTRO DEL ARRAY (usando Metodo - getProducts() )
// 3. Devolviendo todos los productos que estan dentro del arreglo
//productManager.getProducts()


//PASO 4: BUSNCAN UN PRODUCTO DENTRO DEL ARRAY POR SU ID (usando Metodo - getProductsById() )
//productManager.getProductsById(4)

//----- NOTA: los vuelvo a texto para que no entre en conflicto getProducts() - PERO SI FUNCIONA


// PASO 5: BUSNCAN UN PRODUCTO DENTRO DEL ARRAY POR SU ID(usando Metodo - getProductsById())
//productManager.deleteProductsById(2)








