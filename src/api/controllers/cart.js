const CartRepository = require('../../dao/Cart')
const ProductRepository = require('../../dao/Product')

const handleCarts = new CartRepository()
const handleProducts = ProductRepository.getInstance()

const createCart = async (req, res) => {
  const result = await handleCarts.createCart()
  res.json(result)
}

const addProductToCart = async (req, res) => {
  const { id: cartId, productId } = req.params

  const product = await handleProducts.getById(productId)

  if (product.error) {
    res.json({ error: 'No existe el producto' })
  } else {
    const result = await handleCarts.addProductToCart(cartId, product)
    res.json(result)
  }
}

const buyCart = async (req, res) => {
  const dataToBuy = req.body

  if (!Array.isArray(dataToBuy.cart))
    return res.json({ error: 'No hay productos en el carrito' })

  const result = await handleCarts.buyCart(dataToBuy)
  res.json(result)
}

const deleteCart = async (req, res) => {
  const { id } = req.params

  const result = await handleCarts.deleteCart(id)
  res.json(result)
}

const deleteProductFromCart = async (req, res) => {
  const { id: cartId, productId } = req.params

  const result = await handleCarts.deleteProductFromCart(cartId, productId)
  res.json(result)
}

const getAllCarts = async (req, res) => {
  const result = await handleCarts.getAll()

  res.json(result)
}

const getProductsFromCart = async (req, res) => {
  const { id } = req.params

  const result = await handleCarts.getProducts(id)
  res.json(result)
}

module.exports = {
  createCart,
  addProductToCart,
  buyCart,
  deleteCart,
  deleteProductFromCart,
  getAllCarts,
  getProductsFromCart,
}
