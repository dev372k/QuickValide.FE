function Video() {
  return (
    <section className="px-6 py-36 bg-accent-1 bg-opacity-30 flex flex-col w-full gap-12 lg:px-32 items-center justify-center">
      <iframe
        className="w-full h-[400px] lg:w-[75rem] "
        src="https://www.youtube.com/embed/lPrjP4A_X4s?si=bSY7qw8u_iXuRFKj"
        title="YouTube video player"
        frameBorder="0"
        allow=""
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </section>
  );
}

export default Video;
