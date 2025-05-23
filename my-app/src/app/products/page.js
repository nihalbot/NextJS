const Product = async ({searchParams})=>{
    const id = await searchParams;
    console.log(id.search);
    return <h1>Product</h1>
};

export default Product;