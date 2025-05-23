const ProductDetails = async ({ params }) => {
  const id  = await params;
  console.log(id);
  return <p>ID: </p>;
}

export default ProductDetails;
