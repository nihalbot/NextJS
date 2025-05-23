import Link from "next/link";

const ServerSideDataFetch = async ()=>{
  const response = await fetch('https://dummyjson.com/users');
  const data = await response.json();
  const listOfUsers = data.users;
  console.log(listOfUsers);
  return (
    <div className="pb-10">
      <h1 className="text-center mt-6 font-bold text-4xl">
        Server Side Data Fetching
      </h1>
      <div className="flex justify-center items-center">
        <div className="w-6/12">
          <ul className="">
            {listOfUsers && listOfUsers.length > 0
              ? listOfUsers.map(({ id, firstName }) => (
                  <Link key={id} href={`/serverSideDataFetch/${id}`}>
                    <li className="mt-3 py-6 px-2 bg-gray-100 rounded-xl text-2xl cursor-pointer transform transition-all delay-75 hover:scale-105">
                      {firstName}
                    </li>
                  </Link>
                ))
              : null}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ServerSideDataFetch;