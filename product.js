class ProductManager {
  products = [];
  idAuto = 1;

  getProducts() {
    return this.products;
  }

  addProducts(name, price, description, thumbnail, code, stock) {
    const found = this.products.find((product) => product.code === code);

    if (found) {
      return "el producto existe";
    }
    if (name && price && description && thumbnail && code && stock) {
      this.products.push({
        name: name,
        price: price,
        description: description,
        thumbnail: thumbnail,
        code: code,
        stock: stock,
        id: this.idAuto,
      });
      this.id + 1;
      return "se agrego el producto";
    } else {
      return "error al cargar el producto";
    }
  }
  getProductsById(id) {
    const found = this.products.find((product) => product.id === id);
    if (found) {
      return found;
    } else {
      return "no se encontro el producto";
    }
  }
}
const productManager = new ProductManager();

productManager.addProducts("airforce", 250, "none", "none", 145, 2);
productManager.getProducts();
productManager.getProductsById();

console.log(productManager);
