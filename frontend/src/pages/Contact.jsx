export default function Contact() {
  return (
    <section>
      <div className=" px-4 mx-auto max-w-screen-md">
        <h2 className="heading text-center">Contact Us</h2>
        <p className=" mb-8 lg:mb-16 font-light text-center text_para">
          If you have any questions or need help with something, please
          don&apos;t hesitate to reach out. We&apos;re here for you!
        </p>
        <form action="#" className=" space-y-8">
          <div>
            <label
              htmlFor="email"
              className=" text-gray-400 font-semibold text-[16px] mb-2"
            >
              Your Email
            </label>
            <input
              type="email"
              id="name"
              placeholder="example@gmail.com"
              name="name"
              required
              className=" w-full rounded-lg px-4 py-3 border border-solid border-[#0066ff61] focus:outline-none focus:border-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-gray-400 cursor-pointer mt-1"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className=" text-gray-400 font-semibold text-[16px] mb-2"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              placeholder="Let us know how we can help you..."
              name="subject"
              required
              className="w-full rounded-lg px-4 py-3 border border-solid border-[#0066ff61] focus:outline-none focus:border-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-gray-400 cursor-pointer mt-1"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className=" text-gray-400 font-semibold text-[16px] mb-1"
            >
              Your Message
            </label>
            <textarea
              rows="6"
              type="text"
              id="message"
              placeholder="Leave comment..."
              required
              className="w-full rounded-lg px-4 py-3 border border-solid border-[#0066ff61] focus:outline-none focus:border-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-gray-400 cursor-pointer mt-1"
            />
          </div>
          <button type="submit" className="btn rounded sm:w-fit">
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
