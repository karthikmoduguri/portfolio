const Contact = () => {
  return (
    <section id="contact" className="bg-indigo-50 dark:bg-gray-800 py-20 px-6">
      <h2 className="text-3xl font-semibold text-indigo-600 mb-10 text-center">Contact Me</h2>
      <form className="max-w-xl mx-auto flex flex-col gap-6">
        <input
          type="text"
          placeholder="Your Name"
          className="p-3 rounded-md border border-indigo-300 dark:border-indigo-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-3 rounded-md border border-indigo-300 dark:border-indigo-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
        <textarea
          placeholder="Your Message"
          rows={5}
          className="p-3 rounded-md border border-indigo-300 dark:border-indigo-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-md transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
