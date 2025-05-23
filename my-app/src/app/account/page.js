import { redirect } from "next/navigation";

const Accounts = ()=>{
    const profilePage = null;
    if(profilePage === null) redirect("/products?search=product1");
    return <h1>Hi from Account route</h1>;
}
export default Accounts;