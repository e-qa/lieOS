import Close from '../Close';

const Note = () => {
  return (
    <div className="font-perfect-dos">
      <Close name={'about-me.txt'} />
      <div className="w-[55rem] h-[40rem] flex flex-col justify-center items-center bg-[#4d4d4e] border border-gray-400 overflow-auto">
        <div className="w-[40rem] h-full bg-white px-10 mt-10 shadow-[rgba(0,_0,_0,_0.80)_10px_10px_2px]">
          <h1 className="text-center my-10 text-2xl">About me</h1>
          <div className="h-full w-full flex flex-col gap-10">
            <p>Hello! I&apos;m Eli, and I&apos;m Front-end Developer.🪄</p>
            <p>
              My toolkit primarily includes React and Next.js, which I use to
              build dynamic applications that perform seamlessly. Writing code
              that is both maintainable and efficient is essential to my work,
              and I am always eager to learn new techniques and improve my
              problem-solving skills.
            </p>
            <p>
              I have a curious mindset I love experimenting with new tools,
              keeping up with the latest trends in web development, and
              continuously refining my skills.
            </p>
            <p>
              If you&apos;d like to see some of my projects, feel free to check
              out my work on GitHub:
              <a href="https://github.com/e-qa" className="text-blue-500">
                https://github.com/e-qa
              </a>{' '}
              I&apos;m always open to collaboration, discussing projects, or
              just connecting over shared interests Don&apos;t hesitate to reach
              out!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Note;
