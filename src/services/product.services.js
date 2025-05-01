import { productDao } from "../persistence/dao/product.dao";

class ProductServices {

    async getAllProduct(pquery,options){
        return await productDao.getAll(pquery,options)
    }

    async getProductById(pid){
        return await productDao.getById(pid)
    }

    async deleteProductById(pid){
        return await productDao.deleteOne(pid)
    }

    async updateProductById(pid,productData){
        return await productDao.update(pid,productData)
    }

    async createProduct(productData){
        return await productDao.create(productData)
    }
}

export const productServices = new ProductServices();