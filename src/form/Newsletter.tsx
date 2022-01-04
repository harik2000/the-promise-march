import Link from 'next/link';

const Newsletter = () => (
  <form>
    <div className="flex flex-col sm:flex-row gap-2 items-stretch justify-center">
      {/* <input
        className="w-full sm:max-w-xl bg-white py-3 px-6 rounded-md appearance-none border-2 border-gray-400 hover:border-primary-500 focus:outline-none focus:border-primary-500"
        placeholder="Enter your email address"
      /> */}
      <Link href="https://m.facebook.com/events/509183733569265?view=permalink&id=509183740235931&m_entstream_source=timeline&anchor_composer=false">
        <a>
          <button
          className="py-3 px-6 rounded-md appearance-none bg-primary-500 text-white font-extrabold hover:bg-primary-600"
          type="button"
          >
            Fight For Change
          </button>
        </a>
      </Link>
     
    </div>
  </form>
);

export { Newsletter };
