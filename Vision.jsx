import React from 'react';
import pai from '../assets/pai.jpg';
import oldblck from '../assets/oldblck.jpg';


function App() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed overflow-y-auto p-6"
      style={{ backgroundImage: `url(${oldblck})` }}
    >
      <div className="max-w-5xl mx-auto text-gray-800 space-y-8">

        {/* Header */}
        <header className="text-center text-white">
          <h1 className="text-4xl font-bold mb-2">Vision And Mission</h1>
          {/* <a href="#" className="text-lg underline font-semibold">Home</a> */}
        </header>

        {/* History Card */}
        <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-6">
          <h2 className="bg-gradient-to-b from-blue-500 to-blue-900 text-white text-lg md:text-xl font-semibold text-center py-2 rounded-t-lg shadow-inner mb-6">Our Mission and Vision</h2>
          <p className="text-justify">
            The vision of our founder Dr. T.M.A. Pai was "to take education to the doorsteps of the people in and around Udupi." The lamp lit by him has lit hundreds of lamps.
             The college believes in words of the Mahatma after whom the college is named- "The end of all knowledge must
              be building up of character". With the changing times the Vision & Mission of the college has been affirmed 
              as follows:
          </p>
        </div>

        {/* Hurdles Card */}
        <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-6 space-y-4">
          <h2 className="bg-gradient-to-b from-blue-500 to-blue-900 text-white text-lg md:text-xl font-semibold text-center py-2 rounded-t-lg shadow-inner mb-6">Vision</h2>
          <ol className="list-disc list-inside space-y-1">
          <li>Endowed with the spirit of enquiry</li>
          <li>Eager to acquire knowledge and skills</li>
          <li>Competent to be employed in his/her field</li>
          <li>Possessing qualities of leadership, responsible to family, society and nation</li>
          <li>Capable of appreciating aesthetics and understanding our cultural heritage and rational and humane in attitude</li>
          </ol>
        </div>

        {/* Our Founder */}
        <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-6 space-y-4">
          <h2 className="bg-gradient-to-b from-blue-500 to-blue-900 text-white text-lg md:text-xl font-semibold text-center py-2 rounded-t-lg shadow-inner mb-6">Mission</h2>
          <ol className="list-disc list-inside space-y-1">
          <li>To provide students with quality education using innovative and humane methods of teaching and learning</li>
          <li>To develop in them competence for employment as well as entrepreneurship, to promote their power of thinking and creative ability</li>
          <li>To organize activities that will contribute to the understanding of their responsibilities to the family the society and the nation</li>
          <li>To promote national integration through cordial relationship between and among stake holders</li>
          </ol>
        </div>

        {/* Principals Section */}
        <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-6 space-y-4">
          <h2 className="bg-gradient-to-b from-blue-500 to-blue-900 text-white text-lg md:text-xl font-semibold text-center py-2 rounded-t-lg shadow-inner mb-6">Objectives</h2>
          <ol className="list-disc list-inside space-y-1">
          <li>Character building</li>
          <li>Excellence in teaching-learning</li>
          <li>Building competence for employability/entrepreneurship</li>
          </ol>

        </div>
      </div>
    </div>
  );
}

export default App;
