class ProductManager {
    static id = 0
    constructor(){
        this.products = []
    }
    addProduct(title, description, price, thumbnail, code, stock) {
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].code === code) {
                console.log(`${code} es un codigo repetido`);
                break;
            }
        }
        const newProduct = {
            title, description, price, thumbnail, code, stock
        }
        if(!Object.values(newProduct).includes(undefined)){
            ProductManager.id++
            this.products.push({...newProduct, id: ProductManager.id})
        }else{
            console.log("Todos los campos son obligatorios");
        }
        
    }
    getProducts(){
        return this.products;
    }
    getProductById(id){
        if(!this.products.find((producto) => producto.id === id)){
            console.log("Not Found");
        }else{
            console.log(this.products.find((producto) => producto.id === id));
        }
    }
}

const producto = new ProductManager;
producto.addProduct('Anillo', 'Oro', 2000, 'sin imagen', 'a001', 5)
producto.addProduct('Anillo', 'Plata', 1000, 'sin imagen', 'a002', 5)
producto.addProduct('Anillo', 'Acero', 500, 'sin imagen', 'a003', )//undefined
console.log(producto.getProducts());//mostrar array

producto.addProduct('Anillo', 'Alpaca', 700, 'sin imagen', 'a001', 5)// codigo repetido

producto.getProductById(1)//traer producto por id