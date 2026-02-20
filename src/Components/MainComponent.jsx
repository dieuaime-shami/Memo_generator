export default function MemeComponent() {
  return (
    <div className="max-w-2xl mx-auto bg-gray-100 p-6 rounded-lg">

      
      <div className="flex gap-4 mb-6">
        <div className="flex-1">
          <p className="mb-2 font-medium">Top Text</p>
          <input
            type="text"
            name="topText"
            placeholder="One does not simply"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none  focus:ring-purple-500"
          />
        </div>

        <div className="flex-1">
          <p className="mb-2 font-medium">Bottom Text</p>
          <input
            type="text"
            name="bottomText"
            placeholder="Walk into Mordor"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500"
          />
        </div>
      </div>

      <button className="w-full  bg-purple-600 py-4 rounded-md font-semibold  mb-6">
        Get a new meme image 🖼
      </button>

      
      <div className="relative">
        <img
          src="http://i.imgflip.com/1bij.jpg"
          alt="generated meme"
          className="w-full rounded-md"
        />

       
        <span className="absolute top-4 left-1/2 transform -translate-x-1/2 text-white text-3xl font-extrabold uppercase">
          ONE DOES NOT SIMPLY
        </span>

       
        <span className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-3xl font-extrabold uppercase">
          WALK INTO MORDOR
        </span>
      </div>

    </div>
  );
}