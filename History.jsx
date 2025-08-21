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
          <h1 className="text-4xl font-bold mb-2">MGM College History</h1>
          {/* <a href="#" className="text-lg underline font-semibold">Home</a> */}
        </header>

        {/* History Card */}
        <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-6">
          <h2 className="bg-gradient-to-b from-blue-500 to-blue-900 text-white text-lg md:text-xl font-semibold text-center py-2 rounded-t-lg shadow-inner mb-6">History</h2>
          <p className="text-justify">
            The Mahatma Gandhi Memorial College, founded in 1949 was the brainchild of the late Dr. T.M.A. Pai, the 
            architect of modern Manipal. Located in the sylvan terrain of Sagri... [Text continues as in your code]
          </p>
        </div>

        {/* Hurdles Card */}
        <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-6 space-y-4">
          <h2 className="bg-gradient-to-b from-blue-500 to-blue-900 text-white text-lg md:text-xl font-semibold text-center py-2 rounded-t-lg shadow-inner mb-6">Need For A College & Hurdles</h2>
          <p className="text-justify">The Mahatma Gandhi Memorial College, Udupi, was founded in 1949 to fulfill the aspirations... </p>
          <p className="text-justify">But Dr. Pai, a man of grit that he was, did not give up...</p>
          <p className="text-justify">Hurdles in the path were many. The Gods of the University were again unwilling...</p>
          <p className="text-justify">Once Dr. Pai's sincerity was realized, the support he got became spontaneous...</p>
        </div>

        {/* Our Founder */}
        <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-6 space-y-4">
          <h2 className="bg-gradient-to-b from-blue-500 to-blue-900 text-white text-lg md:text-xl font-semibold text-center py-2 rounded-t-lg shadow-inner mb-6">Our Founder</h2>
          <p className="text-justify">Dr. T M A Pai, Tonse Madhava Ananth Pai, born on April 30, 1898...</p>
          <div className="flex justify-center">
            <div>
              <img src={pai} alt="Dr. T M A Pai" className="w-60 rounded-lg shadow-md mx-auto" />
              <p className="text-center mt-0 font-semibold text-blue-700 text-lg">Dr. Thonse Madhava Anantha Pai</p>
            </div>
          </div>
          <p className="text-justify">Dr. Pai practised surgery for 15 years. But realizing the dire need...</p>
          <p className="text-justify">In 1933 Dr. Pai bought 107 acres of land...</p>
          <p className="text-justify">Initially the Pai brothers established a few small-scale diverse industries...</p>
          <p className="text-justify">In 1948 he started the "Academy of General Education"...</p>
          <p className="text-justify">It is difficult to believe that once upon a time Manipal was nothing but a grazing ground...</p>
          <p className="text-justify">This is the story of the success of Manipal...</p>
        </div>

        {/* Principals Section */}
        <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-6 space-y-4">
          <h2 className="bg-gradient-to-b from-blue-500 to-blue-900 text-white text-lg md:text-xl font-semibold text-center py-2 rounded-t-lg shadow-inner mb-6">Principals of the College</h2>
          <p className="text-justify">
            Our founder principal was <strong>Prof. H. Sunder Rao</strong>... [text continues]
          </p>
          <p className="text-justify">
            The golden era of development... <strong>Prof. K. S. Haridasa Bhat</strong>...
          </p>
          <ol className="list-decimal list-inside space-y-1">
            <li>Prof. H. Sunder Rao (1949–64)</li>
            <li>Prof. K. S. Haridasa Bhat (1964–79)</li>
            <li>Prof. K. Ramadas (1979–84)</li>
            <li>Prof. K. K. Eshwaran (1984–88)</li>
            <li>Prof. K. Rama Bhat (1988–90)</li>
            <li>Prof. Dr. Alwyn D’Souza (1990–94)</li>
            <li>Prof. K. Shreesha Acharya (1994–97)</li>
            <li>Prof. Dr. P. N. Narasimha Murthy (1997–98)</li>
            <li>Prof. Sam Daniel (1998–2001)</li>
            <li>Prof. Dr. Gopalan Puthusseri (2001–2002)</li>
            <li>Prof. Ganapathi Bhat (2002–2004)</li>
            <li>Prof. Malpe Laxminarayana Samaga (2003–2007)</li>
            <li>Prof. Dr. Jayaprakash Mavinakuli (2007–2009)</li>
            <li>Prof. Dr. Venkataramana Gowda (2009–2013)</li>
            <li>Prof. Dr. N. Hala Naik (2013–2014)</li>
            <li>Prof. Mrs. K Kusuma Kamath (2014–2017)</li>
            <li>Dr. Mrs. Sandhya R Nambiar (2017–2018)</li>
            <li>Dr. M. G. Vijaya (2018–2020)</li>
            <li>Dr. Devidas S. Naik (2020–2022)</li>
            <li>Prof. Laxminarayana Karanth (2022–2025)</li>
            <li>Prof. Vanitha Maiya (2025–todate)</li>
          </ol>

          {/* PU Section */}
          <h2 className="bg-gradient-to-b from-blue-500 to-blue-900 text-white text-lg md:text-xl font-semibold text-center py-2 rounded-t-lg shadow-inner mb-6">Principals of the Pre University College</h2>
          <ol className="list-decimal list-inside space-y-1">
            <li>Prof. Padmavathi Badikillaya (2001–2007)</li>
            <li>Prof. Arun Kumar (2007–2008)</li>
            <li>Prof. Anasooya Karkera (2008–2009)</li>
            <li>Mrs. Malathi Devi A (2009–todate)</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default App;
