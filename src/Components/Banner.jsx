import React from 'react'

const Banner = () => {
  return (
    <div className="w-full flex flex-col items-center text-center bg-gray-900 text-white py-16 px-5 ">

      <img
        src="https://cdn.mos.cms.futurecdn.net/9QTpESGBXa32D29J77VR3d-1200-80.jpg"
        alt="banner"
        className="w-full max-w-4xl rounded-xl shadow-lg border-2 "
      />

      <h1 className="text-4xl md:text-5xl font-bold mt-8 text-blue-400">
        Hi, I'm a Web Developer
      </h1>

      <p className="mt-4 max-w-2xl text-gray-300 text-lg">
        I build modern, responsive websites using React and modern web
        technologies. I love creating clean UI and smooth user experiences.
      </p>

      <button className="mt-6 bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold transition duration-300">
        Hire Me
      </button>

    </div>
  )
}

export default Banner