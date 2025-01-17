import { useState } from "react";

const Home = () => {
  const [list, setList] = useState<string[]>([]);
  const [task, setTask] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const handleAdd = () => {
    if (task.trim() === "") return;
    if (list.includes(task)) return;
    setList([...list, task]);
    setTask("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };

  const handleDelete = (index: number) => {
    const filteredList = list.filter((_, keyIndx) => {
      return keyIndx !== index;
    });
    setList(filteredList);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Todo List
        </h1>

        <div className="flex gap-2 mb-6">
          <input
            type="text"
            placeholder="Enter your task"
            value={task}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            onClick={handleAdd}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Add
          </button>
        </div>

        <div className="space-y-2">
          {list.length > 0 ? (
            <ul className="divide-y divide-gray-200">
              {list.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between py-3 px-2 group hover:bg-gray-50 rounded-lg"
                >
                  <span className="text-gray-800">{item}</span>
                  <button
                    className="text-gray-400 hover:text-red-500"
                    onClick={() => {
                      handleDelete(index);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <div className="text-center py-4 text-gray-500">
              No tasks added yet
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
