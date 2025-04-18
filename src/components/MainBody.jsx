import artical2 from "../assets/artical2.png";

function MainBody() {
  return (
    <div>
      <div className="h-50 m-5 p-15">
        <p className="text-2xl font-bold">Articles Page UI Design</p>

        <div className="flex items-center justify-between">
          <div className="flex flex-row items-center">
            <img
              src="https://cdn.dribbble.com/users/883236/avatars/normal/733bacd03501e519dc726648e3633354.jpg?1571846901"
              className="h-12 w-12 rounded-full mt-5 "
            />
            <p className="font-bold ml-5">lldiko Gaspar</p>
          </div>

          <div className="">
            <button className="bg-black px-4 py-2 rounded-full text-white hover:bg-gray-700">
              Get In Touch
            </button>
          </div>
        </div>
      </div>

      <div className="bg-gray-300 m-5 p-15 rounded-lg h-250">
        <div className="flex justify-center">
          <div className="h-15 p-5">
            <img src={artical2} alt="" className="" />
          </div>
        </div>
      </div>

      <div className="h-80">
        <div className="ml-30">
          <p className="text-2xl">Get 1500+ open source designs at:</p>
          <a
            href=""
            className="text-2xl font-bold underline hover:text-gray-500"
          >
            uidesigndaily.com
          </a>
          <p className="text-2xl mt-10">
            For custom design requests please visit:
          </p>
        </div>
      </div>

      <div className="flex justify-center item-center h-10">
        <div className="bg-gray-400 h-1 w-200"></div>
        <div>
          <img
            src="https://cdn.dribbble.com/users/883236/avatars/normal/733bacd03501e519dc726648e3633354.jpg?1571846901"
            className="h-20 w-20 rounded-full mt-5 absolute top-400 left-148"
          />
        </div>
        <div className="bg-gray-400 h-1 w-200 "></div>
      </div>
      <div className="h-30">
        <div>
          <p className="text-center mt-5 text-2xl">lldiko Gaspar</p>
        </div>
        <div className="flex justify-center">
          <button className=" bg-black px-4 py-2 text-white rounded-full mt-5 hover:bg-gray-700">Get In Touch</button>
        </div>
      </div>
    </div>
  );
}
export default MainBody;
