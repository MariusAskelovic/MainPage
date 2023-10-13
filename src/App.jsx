export default function App() {
  return (
    <div className="bg-[url('/images/bg2.jpg')] h-screen w-screen relative overflow-hidden min-w-[375px] min-h-[700px] max-h-[1440px]">
      {/* TOP */}
      <div className="absolute bg-[url('/images/topx.png')] bg-right-top bg-no-repeat h-full w-full top-0 right-0">
        <div className='text-right py-2 px-3 md:text-center'>
          <h1 className='text-white text-3xl font-bold mb-4 md:text-5xl'>
            Front-End Developer
          </h1>
          <p className='text-neutral-50 mb-3 md:text-xl'>
            Hi! I&apos;m Marius Askelovic.{' '}
            <span className='block'>
              Front-End Developer{' '}
              <span className='block  md:inline-block'>
                from Lithuania, Vilnius.
              </span>
            </span>
          </p>
          <div className='flex gap-3 justify-end md:justify-center'>
            <a href='https://www.linkedin.com/in/marius-askelovic'>
              <i className='hover:animate-pulse fa-brands fa-linkedin text-3xl md:text-6xl text-white transition duration-500 hover:text-cyan-400 hover:duration-300 ease-in-out'></i>
            </a>
            <a href='https://github.com/MariusAskelovic'>
              <i className='hover:animate-pulse fa-brands fa-github text-3xl md:text-6xl text-white transition duration-500 hover:text-cyan-400 hover:duration-300 ease-in-out'></i>
            </a>
          </div>
          <div className='block h-8 rotate-[-17deg] absolute top-64 right-32'>
            <img
              className='h-8 md:h-12'
              src='https://skillicons.dev/icons?i=html,css,javascript,react,bootstrap,tailwind'
              alt='html and css icons'
            />
          </div>
        </div>
      </div>

      {/* MID */}
      <div className="bg-[url('/images/midx.png')] bg-right-top h-full w-full absolute top-[225px] right-0">
        <div className='text-right w-full mt-16'>
          <p className='text-slate-100 font-bold text-2xl -rotate-[17deg] inline-block mr-16 md:text-4xl md:mt-4'>
            React + Tailwind CSS
          </p>
          <div className='mt-12 mr-6 flex flex-col gap-2 text-center items-end md:gap-4'>
            <a
              className='text-slate-700 py-1 bg-white uppercase text-sm rounded-md transition-all duration-300
              hover:bg-cyan-400 font-bold w-[150px] md:w-[300px] md:text-lg md:py-2 hover:-skew-x-12'
              href='https://mariusask-shops.netlify.app/'
            >
              CodeAcademy{' '}
              <span className='block md:inline-block'>exam project</span>
            </a>
            <a
              className='text-slate-700 py-1 bg-white uppercase text-sm rounded-md transition-all duration-300
              hover:bg-cyan-400 font-bold w-[150px] md:w-[300px] md:text-lg md:py-2 hover:skew-x-12'
              href='https://youtube-subs-snowy.vercel.app/'
            >
              Youtube{' '}
              <span className='block md:inline-block'>API experiment</span>
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="pointer-events-none absolute bg-[url('/images/bottomx.png')] h-full w-full bg-no-repeat bg-bottom bottom-0 left-0">
        <div className='flex flex-col h-full justify-end relative'>
          <p className='text-slate-700 font-bold text-2xl inline-block absolute bottom-52 left-1/2 -translate-x-32 w-max rotate-[44deg] md:text-4xl md:mt-4 md:-translate-x-48'>
            JavaScript + SASS
          </p>
          <div className='flex text-center ml-3 mb-3'>
            <a
              className='pointer-events-auto text-slate-700 bg-white uppercase text-sm rounded-md transition-all duration-300
              border-2 border-transparent hover:border-cyan-400 font-bold w-3/5 sm:w-3/6 md:w-2/5'
              href='https://kyivbouquets.netlify.app/'
            >
              <img
                className='w-full h-28 object-cover hover:animate-scrolling md:h-48'
                src='/images/kyivbouquets.netlify.app.png'
                alt='website preview'
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
