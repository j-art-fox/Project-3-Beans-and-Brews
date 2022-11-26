import React from 'react';

function Jumbotron({ children }) {
  return (
    <section className="custom-hero-image flex flex-col justify-start items-center text-center h-1/2 w-screen text-white font-bold bg-slate-300 p-5">
      {children}
    </section>
  );
}

export default Jumbotron;
