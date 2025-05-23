"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Loading from "../loading";
const ClientDataFetch = ()=>{
    const [userList, setUserList] = useState([]);
    const [loading, setLoading] = useState(false);
    
    const fetchData = async ()=>{
        try{
            setLoading(true);
            const response = await fetch("https://dummyjson.com/users");
            const data = await response.json();
            setUserList(data.users);
        }catch(error){
            throw new Error(error);
        }
        
    }
    useEffect(()=>{
        fetchData();
    }, []);

    return (
      <div>
        <h2 className="mt-4 text-center font-bold text-2xl">
          Client Side Data Fetching
        </h2>
        {!loading ? (
          <Loading />
        ) : (
          <div className="flex justify-center items-center pb-10">
            <div className="w-6/12">
              <ul className="">
                {userList && userList.length > 0
                  ? userList.map(({ id, firstName }) => (
                      <Link key={id} href={`/client-side-data-fetch/${id}`}>
                        <li className="mt-3 py-6 px-2 bg-gray-100 rounded-xl text-2xl cursor-pointer transform transition-all delay-75 hover:scale-105">
                          {firstName}
                        </li>
                      </Link>
                    ))
                  : null}
              </ul>
            </div>
          </div>
        )}
      </div>
    );
}
export default ClientDataFetch;