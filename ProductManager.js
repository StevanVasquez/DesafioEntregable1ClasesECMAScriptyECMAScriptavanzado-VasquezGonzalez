class ProductManager {
    constructor() {
        this.products = [];
    }

    getProducts = () => {
        return this.products
    }

    getProductByID(id) {
        let productoId = this.products.findIndex((product) => {
            return product.id === id;
        });
    
        return productoId !== -1 ? this.products[productoId]: `No se encuentra ningun producto con el id ${id}`;
    
    }

    addProduct(title, description, price, thumbnail, code, stock) {

        if(!title || !description || !price || !thumbnail || !stock || !code){
            console.log("El producto no fue ingresado, todos los campos son obligatorios")
            return;
        };

        const productoCode = this.products.find((product) => 
            product.code === code);

        if (productoCode) {
            console.log(`El codigo ${code} del producto ingresado ya se encuentra en otro producto`)
            return;
        }

        const producto = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
            customer: [],
        }

        if(this.products.length === 0) {
            producto.id = 1;
        } else {
            producto.id = this.products[this.products.length - 1]. id + 1;
        }

        this.products.push(producto);

        console.log("Producto agregado exitosamente");
    }

    addCustomer = (idProducto, idCustomer) => {
        const productIndex = this.products.findIndex(producto => producto.id === idProducto);

        if(productIndex === -1) {
            console.log('El producto no se encuentra')
            return;
        }

        const customerRegistrado = this.products[productIndex].customer.includes(idCustomer);

        if(customerRegistrado) {
            console.log('Cliente ya registrado');
            return;
        }

        this.products[productIndex].customer.push(idCustomer);
    }    
}

const manejadorDeLosProductos = new ProductManager();

manejadorDeLosProductos
.addProduct
('Lavadora Samsung WA19T6260BY Gris', 
'Carga Superior Motor Digital Inverter', 
2300000, 
'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.samsung.com%2Fco%2Fwashers-and-dryers%2Fwashing-machines%2Ftop-load-17kg-black-caviar-wa17t6260bv-co%2F&psig=AOvVaw0kTiCX3byE32CgTRrj6f5O&ust=1693763322677000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCIiM3aG-jIEDFQAAAAAdAAAAABAE',
'SAM-2345',
20)

manejadorDeLosProductos
.addProduct
('Parlante JBL PARTY BOX 310', 
'Inalambrico 240watts', 
3100000, 
'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.jbl.com.co%2Fparlantes%2FPARTYBOX-110-.html&psig=AOvVaw1wKrSHWq6yUWs0AdiXg2nQ&ust=1693763672043000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCLC8osK_jIEDFQAAAAAdAAAAABAx',
'JBLS-3456',
12)

manejadorDeLosProductos
.addProduct
('Audifonos Apple', 
'AirPods Inalambricos Blanco', 
749000, 
'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.apple.com%2Fla%2Fnewsroom%2F2021%2F10%2Fintroducing-the-next-generation-of-airpods%2F&psig=AOvVaw0xyVtIWhF3b3ZN7gevFYxT&ust=1693854135152000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCPiOssKQj4EDFQAAAAAdAAAAABAG',
'APP-2111',
24)

manejadorDeLosProductos
.addProduct
('Televisor LG 55Pulgadas UR8750PSA', 
'LED 4K-UHD 2023 Smart Tv', 
2200000, 
'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.exito.com%2Ftelevisor-lg-55-pulgadas-led-uhd-4k-smart-tv-55ur8750psaawc-3122473%2Fp&psig=AOvVaw2YQIU89tqVmlXvEC0iqiap&ust=1693855148827000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCPjw7qWUj4EDFQAAAAAdAAAAABAJ',
'LGS-7799',
10)

manejadorDeLosProductos
.addProduct
('Computador portatil HP 15,6" Pulgadas Ef2524la', 
'Procesador:AMD R5, Ram: 8GB, DiscoSSD: 512 GB', 
5000000, 
'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ktronix.com%2Fcomputador-portatil-hp-156-pulgadas-ef2505la-amd-ryzen-7-ram-8gb-disco-ssd-512-gb-dorado%2Fp%2F196337771505&psig=AOvVaw0xxg-EuAd3IE2n6NabtP6b&ust=1693882009978000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCNCR7634j4EDFQAAAAAdAAAAABAG',
'LGS-7799',
25);


manejadorDeLosProductos.addCustomer(1, 'Kevin Daniel Vasquez');
manejadorDeLosProductos.addCustomer(2, 'Valentina Uribe Guzman');
manejadorDeLosProductos.addCustomer(3, 'Carolina Salazar Gonzalez');
manejadorDeLosProductos.addCustomer(4, 'Carlos Santiago Aragon');
manejadorDeLosProductos.addCustomer(5, 'Edward Ramon Rodriguez');

manejadorDeLosProductos.addCustomer(1, 'Kevin Daniel Vasquez');
manejadorDeLosProductos.addCustomer(2, 'Valentina Uribe Guzman');
manejadorDeLosProductos.addCustomer(3, 'Carolina Salazar Gonzalez');
manejadorDeLosProductos.addCustomer(4, 'Carlos Santiago Aragon');

console.log(manejadorDeLosProductos.getProducts());
console.log(manejadorDeLosProductos.getProductByID(6));
manejadorDeLosProductos.addProduct();
