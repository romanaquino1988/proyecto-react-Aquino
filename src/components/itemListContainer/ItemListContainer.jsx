import React from 'react'

const ItemListContainer = ({saludo}) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    pedirProductos()
        .then(Response => {
          setProducts(Response)
        })
        .catch(error => {
          console.error(error)
        }

        )
  },[]  )

  return (
    <div>
        <h2> {saludo} </h2>
    </div>
  )
}

export default ItemListContainer