import "../components/Style.css";
function Header() {
  return (
    <>
      <div className="h-20 ">
        <div className="h-20 flex flex-row items-center fixed bg-white ">
          <p className=" font-mono font text-xl ml-15">Dribbble</p>
          <div className="relative">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="w-100 h-13 rounded-4xl ml-10 pl-6 bg-gray-200"
            />
            <select name="" id="" className="absolute right-18 top-3.5 w-17">
              <option value="" className="">
                Short
              </option>
              <option value="" className="">
                Designer
              </option>
              <option value="" className="">
                Services
              </option>
            </select>
            <img
              src="https://cdn-icons-png.flaticon.com/128/9968/9968777.png"
              alt="Search"
              className="h-9 w-9 absolute right-5 top-2"
            />
          </div>
          <div className="w-170 flex flex-row justify-around">
            <select name="" id="" className="w-20">
              <option value="" className="">
                Web Design
              </option>
              <option value="" className="">
                Explore
              </option>
              <option value="" className="">
                IIlustration
              </option>
              <option value="" className="">
                Annimation
              </option>
              <option value="" className="">
                Mobile
              </option>
              <option value="" className="">
                Print
              </option>
            </select>
            <select name="" id="" className="w-35">
              <option value="" className="">
                Hire a Designer
              </option>
              <option value="" className="">
                Browser Freelancers
              </option>
              <option value="" className="">
                Submit a Project
              </option>
              <option value="" className="">
                Full-Time Job
              </option>
            </select>
            <button>Finds Jobs</button>
            <button>Blog</button>
            <button>Sign up</button>
            <button className="bg-black text-white px-7 py-1.5 rounded-4xl">
              Log in
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;
