function ContactUs() {
  return (
    <section className="bg-section-background">
      <div
        id="contact-us"
        className="px-6  md:w-[45rem] lg:w-[55rem] xl:w-[60rem] justify-between  md:mx-auto py-36  flex flex-col md:flex-row  gap-2 w-full  items-center  md:items-start"
      >
        <div className="lg:w-1/2 items-center md:items-start md:text-left text-center flex flex-col gap-2 w-full">
          <h3 className="text-3xl font-semibold text-accent-1">Contact Us</h3>
          <p className="text-sm lg:text-md text-text-secondary md:w-3/4">
            We prioritize the satisfaction of our customers, so if you got any
            query feel free to leave a message. We'll be happy to assist you.
          </p>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-sm text-text-secondary">
              Name:
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="text-md font-medium text-text-primary rounded-md p-2 bg-white border-[1px] focus:outline-none focus:border-accent-2"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="subject" className="text-sm text-text-secondary">
              Subject:
            </label>
            <input
              type="text"
              placeholder="Enter Subject"
              className="text-md font-medium text-text-primary rounded-md p-2 bg-white border-[1px] focus:outline-none focus:border-accent-2"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="message" className="text-sm text-text-secondary">
              Message:
            </label>
            <textarea
              placeholder="Type your message here"
              rows={6}
              className="text-md font-medium text-text-primary rounded-md p-2 bg-white border-[1px] focus:outline-none focus:border-accent-2"
            ></textarea>
          </div>

          <button className="bg-accent-2 p-2 rounded-md text-white text-md font-medium">
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
