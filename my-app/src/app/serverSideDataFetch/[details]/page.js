const UserDetails = async ({params})=>{
    const {details} = await params;
    const response = await fetch(`https://dummyjson.com/users/${details}`);
    const data = await response.json();
    const {firstName, lastName, age, phone, birthDate, image, address} = data;
    return (
      <div className="flex flex-col items-center w-full h-screen ">
        <h1 className="mt-5 font-bold text-4xl">User Details</h1>
        <div className="w-6/12 mt-5 flex justify-between bg-gray-200 px-4 py-4 rounded-2xl">
          <div className="">
            <h1>
              <span className="font-bold">User Name:</span>{" "}
              <span>{firstName}</span>
              <span> {lastName}</span>
            </h1>
            <h1>
              <span className="font-bold ">Age:</span> <span>{age}</span>
            </h1>
            <h1>
              <span className="font-bold ">Date of Birth:</span>
              <span>{birthDate}</span>
            </h1>
            <h1>
              <span className="font-bold ">Phone:</span> <span>{phone}</span>
            </h1>
            <h1>
              <span className="font-bold ">Address</span> <span>{address.city}</span>
            </h1>
          </div>

          <div className="w-30 h-30 ">
            <img
              className="w-full h-full"
              src={image}
            />
          </div>
        </div>
      </div>
    );
}
export default UserDetails;