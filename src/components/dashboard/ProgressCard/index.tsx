const ProgressCard = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-2">Your Progress</h2>
      <p className="text-gray-600 text-sm mb-4">Track your fitness journey with real-time data.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-gray-100 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-gray-700">Steps</h3>
          <div className="text-2xl font-bold text-gray-800">8,500</div>
          <p className="text-green-500 text-sm">+ 15 %</p>
        </div>

        <div className="bg-gray-100 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-gray-700">Calories Burned</h3>
          <div className="text-2xl font-bold text-gray-800">500</div>
          <p className="text-green-500 text-sm">+ 10 %</p>
        </div>
      </div>

      <div className="bg-gray-100 rounded-lg p-4">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Fitness Progress</h3>
        <p className="text-gray-500 text-sm mb-4">Metrics</p>
        <div className="h-40 bg-gray-200 rounded relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center text-gray-400">
            <svg className="w-full h-full">
              <path
                d="M10 30 C 50 10, 150 50, 290 20"
                stroke="black"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M10 70 C 50 90, 150 60, 290 80"
                stroke="black"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </div>
        </div>
        <div className="flex justify-end text-gray-500 text-sm mt-1">Date</div>
      </div>
    </div>
  );
};

export default ProgressCard;