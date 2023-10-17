export default function App() {
  return (
    <div className='w-screen min-h-screen mb-4 mx-auto max-w-6xl'>
      <div className='py-4 px-2 md:flex md:flex-col text-center'>
        <h1 className='text-3xl font-bold text-neutral-700 shadow-lg py-2 md:text-6xl'>
          FrontEnd Web Developer
        </h1>
        <div className='md:flex md:h-64'>
          <div className='flex justify-between p-4 md:flex-row-reverse md:w-1/2'>
            <div className='flex flex-col gap-3 mt-4'>
              <div className='flex flex-col gap-3 md:flex-row'>
                <a href='https://www.linkedin.com/in/marius-askelovic'>
                  <i className='fa-brands fa-linkedin text-5xl transition-all duration-300 grayscale-[0.2] hover:grayscale-0 text-red-500 ease-in-out  hover:scale-105'></i>
                </a>
                <a href='https://github.com/MariusAskelovic'>
                  <i className='fa-brands fa-github text-5xl transition-all duration-300 grayscale-[0.2] hover:grayscale-0 text-red-500 ease-in-out  hover:scale-105'></i>
                </a>
              </div>
              <div className='flex flex-col md:flex-col py-4 gap-2'>
                <div className='flex gap-1 sm:flex-col md:flex-row'>
                  <img
                    className='h-6 sm:h-8 transition-all duration-500'
                    src='https://skillicons.dev/icons?i=html'
                    alt='html and css icons'
                  />
                  <img
                    className='h-6 sm:h-8 transition-all duration-500'
                    src='https://skillicons.dev/icons?i=css'
                    alt='html and css icons'
                  />
                </div>
                <div className='flex gap-1 sm:flex-col md:flex-row'>
                  <img
                    className='h-6 sm:h-8 transition-all duration-500'
                    src='https://skillicons.dev/icons?i=javascript'
                    alt='html and css icons'
                  />
                  <img
                    className='h-6 sm:h-8 transition-all duration-500'
                    src='https://skillicons.dev/icons?i=react'
                    alt='html and css icons'
                  />
                </div>
                <div className='flex gap-1 sm:flex-col md:flex-row'>
                  <img
                    className='h-6 sm:h-8 transition-all duration-500'
                    src='https://skillicons.dev/icons?i=bootstrap'
                    alt='html and css icons'
                  />
                  <img
                    className='h-6 sm:h-8 transition-all duration-500'
                    src='https://skillicons.dev/icons?i=tailwind'
                    alt='html and css icons'
                  />
                </div>
              </div>
            </div>
            <img
              className='animate-border border-4 transition-hover duration-300 grayscale-[0.2] hover:grayscale-0 border-red-500 w-4/5 object-cover aspect-square md:aspect-auto md:w-1/2'
              src='/images/avatar.webp'
              alt='my photo'
            />
          </div>
          <div className='flex justify-center items-center border-2 p-4 shadow-md mb-3 md:w-1/2'>
            <p className='text-center uppercase'>
              Hi! I&apos;m Marius Askelovic.{' '}
              <span className='block'>
                Front-End Developer{' '}
                <span className='block  md:inline-block'>
                  from Lithuania, Vilnius.
                </span>
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-8 text-left mx-2 sm:flex-row xl:gap-16 lg:mx-16'>
        <a className='w-full' href='https://mariusask-shops.netlify.app/'>
          <div className='flex justify-between items-center p-2 border-2 border-black transition duration-200 shadow-md shadow-black mx-4 mb-1 hover:bg-red-500 hover:shadow-red-500'>
            <p>
              CodeAcademy <span className='md:block'>last project</span>
            </p>
            <div className='flex gap-1'>
              <img
                className='h-6 md:h-10 transition-all duration-500'
                src='https://skillicons.dev/icons?i=react'
                alt='html and css icons'
              />
              <img
                className='h-6 md:h-10 transition-all duration-500'
                src='https://skillicons.dev/icons?i=tailwind'
                alt='html and css icons'
              />
            </div>
          </div>
          <img
            className='w-full h-60 object-cover object-top hover:animate-scrolling10s sm:h-64 border-2 border-black lg:h-96'
            src='/images/shops.webp'
            alt='website preview'
          />
        </a>
        <a className='w-full' href='https://youtube-subs-snowy.vercel.app/'>
          <div className='flex justify-between items-center p-2 border-2 border-black transition duration-200 shadow-md shadow-black mx-4 mb-1 hover:bg-red-500 hover:shadow-red-500'>
            <p>
              Youtube API <span className='md:block'>test project</span>
            </p>
            <div className='flex gap-1'>
              <img
                className='h-6 md:h-10 transition-all duration-500'
                src='https://skillicons.dev/icons?i=react'
                alt='html and css icons'
              />
              <img
                className='h-6 md:h-10 transition-all duration-500'
                src='https://skillicons.dev/icons?i=tailwind'
                alt='html and css icons'
              />
            </div>
          </div>
          <img
            className='w-full h-60 object-cover object-top hover:animate-scrolling5s sm:h-64 border-2 border-black lg:h-96'
            src='/images/youtubeCover.webp'
            alt='website preview'
          />
        </a>
        <a className='w-full' href='https://kyivbouquets.netlify.app/'>
          <div className='flex justify-between items-center p-2 border-2 border-black transition duration-200 shadow-md shadow-black mx-4 mb-1 hover:bg-red-500 hover:shadow-red-500'>
            <p>
              Kyiv Bouquets <span className='md:block'>figma practice</span>
            </p>
            <div className='flex gap-1'>
              <img
                className='h-6 md:h-10 transition-all duration-500'
                src='https://skillicons.dev/icons?i=javascript'
                alt='html and css icons'
              />
              <img
                className='h-6 md:h-10 transition-all duration-500'
                src='https://skillicons.dev/icons?i=sass'
                alt='html and css icons'
              />
            </div>
          </div>
          <img
            className='w-full h-60 object-cover object-top hover:animate-scrolling30s sm:h-64 border-2 border-black lg:h-96'
            src='/images/kyivbouquets.webp'
            alt='website preview'
          />
        </a>
      </div>
    </div>
  );
}
