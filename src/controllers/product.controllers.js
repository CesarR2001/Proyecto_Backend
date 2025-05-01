import { productServices } from "../services/product.services";
import { request,response } from "express";


class ProductControllers{
    async getAllProduct (req = request, res = response)  {
      try {
        const { limit, page, sort, category, status } = req.query;
        const options = {
          limit: limit || 10,
          page: page || 1,
          sort: {
            price: sort === "asc" ? 1 : -1,
          },
          learn: true,
        };
    
        // Si nos solicitan por categoría
        if (category) {
          const products = await productServices.getAllProduct({ category }, options);
          return res.status(200).json({ status: "ok", products });
        }
    
        if (status) {
          const products = await productServices.getAllProduct({ status }, options);
          return res.status(200).json({ status: "ok", products });
        }
    
        const products = await productServices.getAllProduct({}, options);
        res.status(200).json({ status: "ok", products });
      } catch (error) {
        console.log(error);
        res.status(500).json({ status: "Error", msg: "Error interno del servidor" });
      }
    }

    async getProductById (req = request, res = response) {
      try {
        const { pid } = req.params;
        const product = await productServices.getProductById(pid);
        if (!product) return res.status(404).json({ status: "Error", msg: "Producto no encontrado" });
    
        res.status(200).json({ status: "ok", product });
      } catch (error) {
        console.log(error);
        res.status(500).json({ status: "Error", msg: "Error interno del servidor" });
      }
    }

     async deleteProductById (req = request, res = response) {
      try {
        const { pid } = req.params;
        const product = await productServices.deleteProductById(pid);
        if (!product) return res.status(404).json({ status: "Error", msg: "Producto no encontrado" });
    
        res.status(200).json({ status: "ok", msg: `El producto con el id ${pid} fue eliminado` });
      } catch (error) {
        console.log(error);
        res.status(500).json({ status: "Error", msg: "Error interno del servidor" });
      }
    }

    async updateProductById (req, res) {
      try {
        const { pid } = req.params;
        const productData = req.body;
        const product = await productServices.updateProductById(pid, productData);
        if (!product) return res.status(404).json({ status: "Error", msg: "Producto no encontrado" });
    
        res.status(200).json({ status: "ok", product });
      } catch (error) {
        console.log(error);
        res.status(500).json({ status: "Error", msg: "Error interno del servidor" });
      }
    }

    async createProduct (req, res) {
      try {
        const productData = req.body;
        const product = await productServices.createProduct(productData);
    
        res.status(201).json({ status: "ok", product });
      } catch (error) {
        console.log(error);
        res.status(500).json({ status: "Error", msg: "Error interno del servidor" });
      }
    }
}

export const productController = new ProductControllers();