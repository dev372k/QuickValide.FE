const WaitList = ({ btnColor, wishListRef }) => {
  return (
    <div
      className="flex  justify-center lg:justify-end items-center w-full
    "
    >
      <div
        className="w-full shadow-md
          bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg border border-white border-opacity-100 p-6

      "
      >
        <h2 className="text-center text-2xl font-semibold text-gray-800 mb-4">
          Join Our Waitlist
        </h2>
        <form className="space-y-4">
          <div>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 `}
              required
              //   ref={wishListRef}
            />
          </div>
          <button
            type="submit"
            className="w-full text-white py-2 px-4 rounded-lg  focus:outline-none focus:ring-2"
            style={{ background: btnColor || "#0099ff" }}
          >
            Join Waitlist
          </button>
        </form>
      </div>
    </div>
  );
};

export default WaitList;
