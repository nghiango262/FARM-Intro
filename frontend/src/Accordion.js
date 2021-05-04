import React, { useState } from "react";
import { CheckCircleOutlined, MinusCircleOutlined } from "@ant-design/icons";
const data = [
  {
    name: "Title hello ",
    completed: false,
    description: "description",
    subtasks: [
      {
        subname: "hjdhjajdkada",
        completed: false,
      },
      {
        subname: "buoc 2 lam gi do",
        completed: false,
      },
      {
        subname: "buoc 3lfhalhfla",
        completed: false,
      },
    ],
  },
  {
    name: "Title bye ",
    description: "description",
    subtasks: [
      {
        subname: "hjdhjajdkada",
        completed: false,
      },
      {
        subname: "buoc 2 lam gi do",
        completed: false,
      },
      {
        subname: "buoc 3lfhalhfla",
        completed: false,
      },
    ],
  },
];



export const AccordItem = ({ name, description, subtasks, completed }) => {
  const [toggle, setToggle] = useState(false);
  const onToggle = () => {
    console.log("test toggle");
    setToggle(!toggle);
  };
  return (
    <div className="border-b">
      <div className="border-l-2 bg-grey-lightest border-indigo">
        <header className="flex items-center justify-between p-5 pl-8 pr-8 cursor-pointer select-none">
          <div className="flex flex-col">
            <span
              onClick={onToggle}
              className="text-xl font-bold text-blue-700 text-indigo"
            >
              {name}
            </span>
            <small>({description})</small>
          </div>

          <div className="flex items-center justify-center border rounded-full border-indigo w-7 h-7 bg-indigo">
            {toggle ? (
              // <svg
              //   className="true"
              //   aria-hidden="true"
              //   data-reactid={281}
              //   fill="none"
              //   height={24}
              //   stroke="white"
              //   strokeLinecap="round"
              //   strokeLinejoin="round"
              //   strokeWidth={2}
              //   viewBox="0 0 24 24"
              //   width={24}
              //   xmlns="http://www.w3.org/2000/svg"
              // >
              //   <polyline points="18 15 12 9 6 15"></polyline>
              // </svg>
              <CheckCircleOutlined
                style={{ color: "blue", fontSize: "24px" }}
              />
            ) : (
              // <svg
              //   aria-hidden="true"
              //   className="true"
              //   data-reactid={266}
              //   fill="none"
              //   height={24}
              //   stroke="#606F7B"
              //   strokeLinecap="round"
              //   strokeLinejoin="round"
              //   strokeWidth={2}
              //   viewBox="0 0 24 24"
              //   width={24}
              //   xmlns="http://www.w3.org/2000/svg"
              // >
              //   <polyline points="6 9 12 15 18 9"></polyline>
              // </svg>
              <MinusCircleOutlined
                style={{ color: "blue", fontSize: "24px" }}
              />
            )}
          </div>
        </header>
        {toggle && (
          <div>
            <div className="pb-5 pl-8 pr-8 text-grey-darkest">
              <ul className="pl-4">
                {subtasks.map((sub, index) => (
                  <li key={index.toString()}>
                    <div className="flex flex-row">
                      <MinusCircleOutlined
                        style={{ color: "blue", fontSize: "24px" }}
                      />
                      <p className="pl-4 text-blue-500">{sub.subname}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

function Accordion() {
  return (
    <div>
      <main className="w-3/5 p-8 mx-auto">
        <h1 className="mb-4">tailwind collapsible</h1>
        <section className="shadow">
          {data.map((task, i) => (
            <AccordItem
              key={i.toString()}
              name={task.name}
              subtasks={task.subtasks}
              description={task.description}
            />
          ))}
        </section>
      </main>
    </div>
  );
}

export default Accordion;
