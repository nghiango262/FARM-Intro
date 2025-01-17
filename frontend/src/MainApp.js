import React from 'react'
import Taskline from './Taskline'

function MainApp() {
  return (
    <div className="flex w-screen h-screen bg-gray-200">
      {/* container */} 
      <aside className="flex flex-col items-center h-full text-gray-700 bg-white shadow">
        {/* Side Nav Bar*/} 
        <div className="flex items-center w-full h-16">
          {/* Logo Section  */}
          <a className="w-6 h-6 mx-auto" href="http://svelte.dev/">
            <img className="w-6 h-6 mx-auto" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/512px-Svelte_Logo.svg.png" alt="svelte logo" />
          </a>
        </div>
        <ul>
          {/* Items Section  */}
          <li className="hover:bg-gray-100">
            <a href="." className="flex items-center justify-center w-full h-16 px-6 focus:text-orange-500">
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
                <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0
                  2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0
                  0-1.79 1.11z" />
              </svg>
            </a>
          </li>
          <li className="hover:bg-gray-100">
            <a href="." className="flex items-center justify-center w-full h-16 px-6 focus:text-orange-500">
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
              </svg>
            </a>
          </li>
          <li className="hover:bg-gray-100">
            <a href="." className="flex items-center justify-center w-full h-16 px-6 focus:text-orange-500">
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <polyline points="3 6 5 6 21 6" />
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2
                  0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
              </svg>
            </a>
          </li>
          <li className="hover:bg-gray-100">
            <a href="." className="flex items-center justify-center w-full h-16 px-6 focus:text-orange-500">
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <circle cx={9} cy={21} r={1} />
                <circle cx={20} cy={21} r={1} />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0
                  2-1.61L23 6H6" />
              </svg>
            </a>
          </li>
          <li className="hover:bg-gray-100">
            <a href="." className="flex items-center justify-center w-full h-16 px-6 focus:text-orange-500">
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <circle cx={12} cy={12} r={3} />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1
                  0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0
                  0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2
                  2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0
                  0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1
                  0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0
                  0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65
                  0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0
                  1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0
                  1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2
                  0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0
                  1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0
                  2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0
                  0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65
                  1.65 0 0 0-1.51 1z" />
              </svg>
            </a>
          </li>
          <li className="hover:bg-gray-100">
            <a href="." className="flex items-center justify-center w-full h-16 px-6 focus:text-orange-500">
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
              </svg>
            </a>
          </li>
        </ul>
        <div className="flex items-center w-full h-16 mt-auto">
          {/* Action Section  */}
          <button className="flex items-center justify-center w-10 w-full h-16 mx-auto focus:text-orange-500 hover:bg-red-200 focus:outline-none">
            <svg className="w-5 h-5 text-red-700" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1={21} y1={12} x2={9} y2={12} />
            </svg>
          </button>
        </div>
      </aside>
      <div className="flex-1 overflow-scroll">
        {/* <Accordion /> */}
        <Taskline />
      </div>
    </div>

  )
}

export default MainApp
