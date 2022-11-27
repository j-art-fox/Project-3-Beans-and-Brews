const Contact = () => {
  return (
    <div>
      <section className="text-gray-600 body-font relative">
        <div className="absolute inset-0 bg-gray-300">
          <img
            className="h-full w-full object-cover object-center"
            src="https://images.pexels.com/photos/773959/pexels-photo-773959.jpeg"
            alt="blog"
          />
        </div>
        <div className="container px-5 py-24 mx-auto flex">
          <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 className="text-gray-900 text-xl mb-1 font-medium title-font text-center">
              Contact Us
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              Use the form below to let us know how we can best help you.
            </p>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="name"
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="subject" className="leading-7 text-sm text-gray-600">
                Subject
              </label>
              <select
                type="subject"
                id="subject"
                name="subject"
                className="w-full bg-white rounded border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              >
                <option>Jobs and Opportunities</option>
                <option>Community and Volunteering</option>
                <option>News and Media Queries</option>
                <option>Issues and/or Complaints</option>
              </select>
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button className="text-white bg-amber-500 border-0 py-2 px-6 focus:outline-none hover:bg-amber-600 rounded text-lg">
              Submit
            </button>
            <p className="text-xs text-gray-500 mt-3">
              Thank you for contacting us. Please allow us 1-3 business days for us to respond. 
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
