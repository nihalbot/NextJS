import Link from "next/link";

const NotFound = ()=>{
    return(
        <div>
            <h1>Page is not found</h1>
            <Link href={"/"}>Got to home</Link>
        </div>
    );
}
export default NotFound;