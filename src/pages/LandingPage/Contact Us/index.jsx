function ContactUs() {
  return (
    <section className="px-6 md:max-w-[75rem] md:mx-auto py-36  flex flex-col md:flex-row  gap-12 w-full md:w-auto items-center md:items-start">
      <div className="md:w-3/4 items-center md:items-start md:text-left text-center flex flex-col gap-2">
        <h3 className="text-3xl font-medium text-accent-1">Contact Us</h3>
        <p className="text-sm text-text-secondary w-3/4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
          aliquam voluptatem architecto suscipit.
        </p>
      </div>
      <div className="w-full md:w-1/2 flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="text-sm text-text-secondary">
            Name:
          </label>
          <input
            type="text"
            placeholder="Your Name"
            className="text-md font-medium text-text-primary rounded-md p-2 bg-gray-50 border-[1px] focus:outline-none focus:border-accent-2"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="subject" className="text-sm text-text-secondary">
            Subject:
          </label>
          <input
            type="text"
            placeholder="Enter Subject"
            className="text-md font-medium text-text-primary rounded-md p-2 bg-gray-50 border-[1px] focus:outline-none focus:border-accent-2"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="message" className="text-sm text-text-secondary">
            Message:
          </label>
          <textarea
            placeholder="Type your message here"
            rows={6}
            className="text-md font-medium text-text-primary rounded-md p-2 bg-gray-50 border-[1px] focus:outline-none focus:border-accent-2"
          ></textarea>
        </div>

        <button className="bg-accent-2 p-2 rounded-md text-white text-md font-medium">
          Send Message
        </button>
      </div>
    </section>
  );
}

export default ContactUs;
