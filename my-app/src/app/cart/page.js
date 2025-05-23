"use client"
import { usePathname, useSearchParams } from "next/navigation";

const Cart = ()=>{
    const pathValue = usePathname();
    const pathParams = useSearchParams();
    console.log(pathValue + " " + pathParams.get("search"));
    return <h1>This is cart page</h1>
}

export default Cart;