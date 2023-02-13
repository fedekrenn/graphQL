const ProductRepository = require('../../dao/Product')
const handleProducts = ProductRepository.getInstance()

const getProducts = async (req, res) => {
  const { id } = req.params

  if (id) {
    const result = await handleProducts.getById(id)
    res.json(result)
  } else {
    const productos = await handleProducts.getAll()
    res.json(productos)
  }
}

const addProduct = async (req, res) => {
  const product = req.body

  const { nombre, descripcion, codigo, foto, precio, stock } = req.body

  if (!nombre || !descripcion || !codigo || !foto || !precio || !stock) {
    return res.status(400).json({
      error: 'Faltan datos',
    })
  }

  const result = await handleProducts.save(product)
  res.status(201).json(result)
}

const updateProduct = async (req, res) => {
  const { id } = req.params

  const { nombre, descripcion, codigo, foto, precio, stock } = req.body

  if (!nombre || !descripcion || !codigo || !foto || !precio || !stock) {
    return res.status(400).json({
      error: 'Faltan datos',
    })
  }

  const result = await handleProducts.updateById(id, req.body)

  res.json(result)
}

const deleteProduct = async (req, res) => {
  const { id } = req.params

  const result = await handleProducts.deleteById(id)

  res.json(result)
}

module.exports = {
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
}
