import { useState } from "react";
import ChartLineCompo from "../charts/ChartLineCompo.jsx";
import { personalityAnalysis } from "../../../assets/data/personalityAnalysis.js";

const DropDownDetailsCharts = (props) => {
  const [items, setItems] = useState([
    {
      id: 1,
      title: (
        <div className="flex">
          <div className="px-2 py-2 flex">
            <div className="flex justify-center items-center w-16 h-16 bg-red-200 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-9 text-white"
                viewBox="0 0 384 512"
              >
                <path d="M192 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm51.3 182.7L224.2 307l49.7 49.7c9 9 14.1 21.2 14.1 33.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V397.3l-73.9-73.9c-15.8-15.8-22.2-38.6-16.9-60.3l20.4-84c8.3-34.1 42.7-54.9 76.7-46.4c19 4.8 35.6 16.4 46.4 32.7L305.1 208H336V184c0-13.3 10.7-24 24-24s24 10.7 24 24v55.8c0 .1 0 .2 0 .2s0 .2 0 .2V488c0 13.3-10.7 24-24 24s-24-10.7-24-24V272H296.6c-16 0-31-8-39.9-21.4l-13.3-20zM81.1 471.9L117.3 334c3 4.2 6.4 8.2 10.1 11.9l41.9 41.9L142.9 488.1c-4.5 17.1-22 27.3-39.1 22.8s-27.3-22-22.8-39.1zm55.5-346L101.4 266.5c-3 12.1-14.9 19.9-27.2 17.9l-47.9-8c-14-2.3-22.9-16.3-19.2-30L31.9 155c9.5-34.8 41.1-59 77.2-59h4.2c15.6 0 27.1 14.7 23.3 29.8z" />
              </svg>
            </div>
          </div>
          <div className="p-6">
            <h5 className="mb-2 text-xl font-medium leading-tight">
              Tolérance au risque
            </h5>
          </div>
        </div>
      ),
      content: (
        <p className="mb-4 text-base underline underline-offset-2">
          {personalityAnalysis["Prudent"].toleranceRisk}
        </p>
      ),
    },
    {
      id: 2,
      title: (
        <div className="flex">
          <div className="px-2 py-2 flex">
            <div className="flex justify-center items-center w-16 h-16 bg-red-200 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-9 text-white"
                viewBox="0 0 384 512"
              >
                <path d="M192 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm51.3 182.7L224.2 307l49.7 49.7c9 9 14.1 21.2 14.1 33.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V397.3l-73.9-73.9c-15.8-15.8-22.2-38.6-16.9-60.3l20.4-84c8.3-34.1 42.7-54.9 76.7-46.4c19 4.8 35.6 16.4 46.4 32.7L305.1 208H336V184c0-13.3 10.7-24 24-24s24 10.7 24 24v55.8c0 .1 0 .2 0 .2s0 .2 0 .2V488c0 13.3-10.7 24-24 24s-24-10.7-24-24V272H296.6c-16 0-31-8-39.9-21.4l-13.3-20zM81.1 471.9L117.3 334c3 4.2 6.4 8.2 10.1 11.9l41.9 41.9L142.9 488.1c-4.5 17.1-22 27.3-39.1 22.8s-27.3-22-22.8-39.1zm55.5-346L101.4 266.5c-3 12.1-14.9 19.9-27.2 17.9l-47.9-8c-14-2.3-22.9-16.3-19.2-30L31.9 155c9.5-34.8 41.1-59 77.2-59h4.2c15.6 0 27.1 14.7 23.3 29.8z" />
              </svg>
            </div>
          </div>
          <div className="p-6">
            <h5 className="mb-2 text-xl font-medium leading-tight">
              Tolérance au risque
            </h5>
          </div>
        </div>
      ),
      content: (
        <p className="mb-4 text-base underline underline-offset-2">
          {personalityAnalysis["Prudent"].toleranceRisk}
        </p>
      ),
    },
    {
      id: 10,
      title: "Item 2",
      // eslint-disable-next-line react/prop-types
      content: <ChartLineCompo situation={props.situation} />,
    },
    { id: 3, title: "Item 3", content: "Details of Item 3 go here." },
  ]);

  /*
                      <div className=" rounded-lg block bg-gray-100 text-center text-surface p-2">
                                    <div className="border-b-2 border-gray-200 px-2 py-2 flex justify-center">
                                      <div className="flex justify-center items-center w-16 h-16 bg-red-200 rounded-full">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          className="w-8 h-9 text-white"
                                          viewBox="0 0 384 512"
                                        >
                                          <path d="M192 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm51.3 182.7L224.2 307l49.7 49.7c9 9 14.1 21.2 14.1 33.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V397.3l-73.9-73.9c-15.8-15.8-22.2-38.6-16.9-60.3l20.4-84c8.3-34.1 42.7-54.9 76.7-46.4c19 4.8 35.6 16.4 46.4 32.7L305.1 208H336V184c0-13.3 10.7-24 24-24s24 10.7 24 24v55.8c0 .1 0 .2 0 .2s0 .2 0 .2V488c0 13.3-10.7 24-24 24s-24-10.7-24-24V272H296.6c-16 0-31-8-39.9-21.4l-13.3-20zM81.1 471.9L117.3 334c3 4.2 6.4 8.2 10.1 11.9l41.9 41.9L142.9 488.1c-4.5 17.1-22 27.3-39.1 22.8s-27.3-22-22.8-39.1zm55.5-346L101.4 266.5c-3 12.1-14.9 19.9-27.2 17.9l-47.9-8c-14-2.3-22.9-16.3-19.2-30L31.9 155c9.5-34.8 41.1-59 77.2-59h4.2c15.6 0 27.1 14.7 23.3 29.8z" />
                                        </svg>
                                      </div>
                                    </div>
                                    <div className="p-6">
                                      <h5 className="mb-2 text-xl font-medium leading-tight">
                                        Tolérance au risque
                                      </h5>
                                      <p className="mb-4 text-base underline underline-offset-2">
                                        {personalityAnalysis[personType].toleranceRisk}
                                      </p>
                                    </div>
                                  </div>
                      */

  const toggleItem = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, isOpen: !item.isOpen } : item,
      ),
    );
  };
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {items.map((item) => (
        <div key={item.id} className="border-b border-gray-200">
          <button
            onClick={() => toggleItem(item.id)}
            className="w-full flex items-center justify-between px-4 py-3 focus:outline-none"
          >
            <span className="text-lg font-semibold">{item.title}</span>
            <svg
              className={`w-4 h-4 transform ${item.isOpen ? "rotate-180" : "rotate-0"} transition-transform duration-200`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {item.isOpen && (
            <div className="px-4 py-2">
              <p className="text-gray-600">{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default DropDownDetailsCharts;
