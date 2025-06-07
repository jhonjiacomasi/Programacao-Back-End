class ProductService {

    constructor(productRepository) {
        this.productRepository = productRepository;
    }

    async addNewProduct(productData) {
        return this.productRepository.create(productData);
    }

    async listAllProducts() {
        return this.productRepository.findAll();
    }

    async updateProduct(id, updateData) {
        const product = await this.productRepository.findById(id);
        if (!product) {
            return null; 
        }
        return this.productRepository.updateById(id, updateData);
    }

    async removeProduct(id) {
        const product = await this.productRepository.findById(id);
        if (!product) {
            return null;
        }
        return this.productRepository.deleteById(id);
    }
}

module.exports = ProductService;