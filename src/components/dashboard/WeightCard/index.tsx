const WeightCard= () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-2">Fitness Profile</h2>
      <p className="text-gray-600 text-sm mb-4">Fill in your details for a customized fitness plan.</p>

      <div className="mb-4">
        <label htmlFor="age" className="block text-gray-700 text-sm font-bold mb-2">
          Age
        </label>
        <input
          type="number"
          id="age"
          placeholder="Enter your age"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="weight" className="block text-gray-700 text-sm font-bold mb-2">
          Weight
        </label>
        <input
          type="number"
          id="weight"
          placeholder="Enter your weight"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">Fitness Level</label>
        <div className="flex space-x-2">
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Beginner
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Intermediate
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Advanced
          </button>
        </div>
      </div>

      <button
        className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Save Profile
      </button>
    </div>
  );
};
export default WeightCard;