"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const handleproduct = ()=>{
    router.push("/products");
  }
  const handleaccount = ()=>{
    router.push("/account");
  }
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div>
        <Link
          href={"/products"}
          className="px-6 py-4 bg-blue-500 rounded-lg  text-white font-bold me-2"
        >
          Products
        </Link>
        <Link
          href={"/account"}
          className="px-6 py-4 bg-blue-500 rounded-lg text-white font-bold"
        >
          Account
        </Link>
      </div>
      <div className="mt-4">
        <h1 className="font-bold text-2xl">Alternative way of navigate</h1>
        <button
          onClick={handleproduct}
          className="px-6 py-4 bg-blue-500 rounded-lg text-white font-bold cursor-pointer"
        >
          Products
        </button>
        <button
          onClick={handleaccount}
          className="px-6 py-4 bg-blue-500 rounded-lg text-white font-bold cursor-pointer"
        >
          Account
        </button>
      </div>
    </div>
  );
}
