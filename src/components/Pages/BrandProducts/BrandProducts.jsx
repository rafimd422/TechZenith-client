import { useLoaderData } from "react-router-dom"

const BrandProducts = () => {
    const data = useLoaderData()
    console.log(data)
  return (
    <div>
      {data.length}
    </div>
  )
}

export default BrandProducts
