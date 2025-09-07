import React from 'react';
import pai from '../assets/pai.jpg';


function App() {
  return (
    

        <div
      className="bg-fixed bg-cover bg-center min-h-screen"
        style={{ backgroundImage: `url('/oldblck.jpg')` }}
      
    >
      {/* Content container */}
      <div className="px-6 py-10 md:px-20 lg:px-32 bg-white/90 backdrop-blur-md text-gray-800">
        {/* Vision Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">Our Vision</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-lg">
            <li>Endowed with the spirit of enquiry</li>
            <li>Eager to acquire knowledge and skills</li>
            <li>Competent to be employed in his/her field</li>
            <li>Possessing qualities of leadership, responsible to family, society and nation</li>
            <li>Capable of appreciating aesthetics and understanding our cultural heritage and rational and humane in attitude</li>
          </ul>
          <div className="bg-blue-100 border-l-4 border-blue-600 p-4">
            <h3 className="font-semibold text-blue-800 mb-2">Vision Statement</h3>
            <p className="italic text-blue-700">
              "To be the leading institution of higher learning, fostering innovation, excellence, and global citizenship while preparing students for the challenges of tomorrow."
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">Our Mission</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-lg">
            <li>To provide students with quality education using innovative and humane methods of teaching and learning</li>
            <li>To develop in them competence for employment as well as entrepreneurship, to promote their power of thinking and creative ability</li>
            <li>To organize activities that will contribute to the understanding of their responsibilities to the family, the society and the nation</li>
            <li>To promote national integration through cordial relationship between and among stakeholders</li>
          </ul>
          <div className="bg-blue-100 border-l-4 border-blue-600 p-4">
            <h3 className="font-semibold text-blue-800 mb-2">Mission Statement</h3>
            <p className="italic text-blue-700">
              The vision of our founder Dr. T.M.A. Pai was "to take education to the doorsteps of the people in and around Udupi." The lamp lit by him has lit hundreds of lamps. The college believes in words of the Mahatma after whom the college is named – 
              "The end of all knowledge must be building up of character".
            </p>
          </div>
        </section>

        {/* Objectives Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">Our Objectives</h2>
          <p className="text-lg text-center mb-8">
            Provide quality education through innovative methods, develop student competence for employment and entrepreneurship, foster thinking and creative ability, organize activities for social responsibility, and promote national integration.
          </p>

          {/* Objective Cards */}
          <div className="space-y-6">
            <div className="bg-white shadow-md rounded-lg p-6 border-l-4 border-blue-600">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">1. Character Building</h3>
              <p className="text-gray-600 leading-relaxed mb-4">To foster the holistic development of:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Instilling a deep sense of integrity and ethical responsibility</li>
                <li>Cultivating empathy and a commitment to community service and engagement</li>
                <li>Building resilience, discipline, and the ability to navigate personal and professional challenges with conviction</li>
              </ul>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6 border-l-4 border-blue-600">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">2. Excellence in Teaching-Learning</h3>
              <p className="text-gray-600 leading-relaxed mb-4">To ensure the highest standards of excellence in teaching and learning by:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Promoting innovative and engaging teaching methodologies</li>
                <li>Encouraging continuous faculty development</li>
                <li>Utilizing technology and research to enhance learning outcomes</li>
              </ul>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6 border-l-4 border-blue-600">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">3. Building Competence for Employability / Entrepreneurship</h3>
              <p className="text-gray-600 leading-relaxed mb-4">To enhance student competence for career success by:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Engaging students in activities that benefit the community and promote empathy</li>
                <li>Creating platforms for students to learn about and celebrate national diversity</li>
                <li>Encouraging collaboration across cultural and regional boundaries</li>
              </ul>
            </div>
          </div>

          {/* Closing Statement */}
          <div className="mt-8 bg-blue-100 border-l-4 border-blue-600 p-4">
            <h3 className="font-semibold text-blue-800 mb-2">Commitment to Excellence</h3>
            <p className="italic text-blue-700">
              "These objectives guide our daily operations and strategic planning. We are committed to achieving each goal while maintaining the highest standards of quality and integrity in everything we do."
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;