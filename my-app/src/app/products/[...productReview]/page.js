const ProductReview = async ({params})=>{
    const id = await params;
    console.log(id);
    return <h1>This is a product review route, and this is a catch all route</h1>
}
export default ProductReview;