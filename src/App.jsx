export default function App() {
  return (
    <div className='bg-zinc-50 w-screen min-h-screen mb-4'>
      <div className='py-4 px-2'>
        <h1 className='text-3xl font-bold text-center shadow-lg py-2'>
          FrontEnd Web Developer
        </h1>
        <div className='flex justify-between p-4'>
          <div className='flex flex-col gap-3 mt-4'>
            <a href='https://www.linkedin.com/in/marius-askelovic'>
              <i className='fa-brands fa-linkedin text-5xl md:text-6xl transition-all duration-300 grayscale-[0.2] hover:grayscale-0 text-red-500 ease-in-out hover:scale-105'></i>
            </a>
            <a href='https://github.com/MariusAskelovic'>
              <i className='fa-brands fa-github text-5xl md:text-6xl transition-all duration-300 grayscale-[0.2] hover:grayscale-0 text-red-500 ease-in-out hover:scale-105'></i>
            </a>
            <div className='flex flex-col py-4 gap-2'>
              <div className='flex gap-1 md:flex-col'>
                <img
                  className='h-6 md:h-12 transition-all duration-500'
                  src='https://skillicons.dev/icons?i=html'
                  alt='html and css icons'
                />
                <img
                  className='h-6 md:h-12 transition-all duration-500'
                  src='https://skillicons.dev/icons?i=css'
                  alt='html and css icons'
                />
              </div>
              <div className='flex gap-1 md:flex-col'>
                <img
                  className='h-6 md:h-12 transition-all duration-500'
                  src='https://skillicons.dev/icons?i=javascript'
                  alt='html and css icons'
                />
                <img
                  className='h-6 md:h-12 transition-all duration-500'
                  src='https://skillicons.dev/icons?i=react'
                  alt='html and css icons'
                />
              </div>
              <div className='flex gap-1 md:flex-col'>
                <img
                  className='h-6 md:h-12 transition-all duration-500'
                  src='https://skillicons.dev/icons?i=bootstrap'
                  alt='html and css icons'
                />
                <img
                  className='h-6 md:h-12 transition-all duration-500'
                  src='https://skillicons.dev/icons?i=tailwind'
                  alt='html and css icons'
                />
              </div>
            </div>
          </div>
          <img
            className='animate-border border-4 transition-hover duration-300 grayscale-[0.2] hover:grayscale-0 border-red-500 w-4/5 object-cover aspect-square'
            src='/images/avatar.webp'
            alt='my photo'
          />
        </div>
        <div className='border-2 p-4 shadow-md mb-3'>
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
      <div className='flex flex-col gap-8 text-left mx-2'>
        <a className='' href='https://mariusask-shops.netlify.app/'>
          <div className='flex justify-between p-2 border-2 border-black transition duration-200 shadow-md shadow-black mx-4 mb-1 hover:bg-red-500 hover:shadow-red-500'>
            <p>CodeAcademy last project</p>
            <div className='flex gap-1'>
              <img
                className='h-6 md:h-12 transition-all duration-500'
                src='https://skillicons.dev/icons?i=react'
                alt='html and css icons'
              />
              <img
                className='h-6 md:h-12 transition-all duration-500'
                src='https://skillicons.dev/icons?i=tailwind'
                alt='html and css icons'
              />
            </div>
          </div>
          <img
            className='w-full h-40 object-cover object-top hover:animate-scrolling10s md:h-32 lg:h-[150px] border-2 border-black'
            src='/images/shops.webp'
            alt='website preview'
          />
        </a>
        <a className='' href='https://youtube-subs-snowy.vercel.app/'>
          <div className='flex justify-between p-2 border-2 border-black transition duration-200 shadow-md shadow-black mx-4 mb-1 hover:bg-red-500 hover:shadow-red-500'>
            <p>Youtube API test project</p>
            <div className='flex gap-1'>
              <img
                className='h-6 md:h-12 transition-all duration-500'
                src='https://skillicons.dev/icons?i=react'
                alt='html and css icons'
              />
              <img
                className='h-6 md:h-12 transition-all duration-500'
                src='https://skillicons.dev/icons?i=tailwind'
                alt='html and css icons'
              />
            </div>
          </div>
          <img
            className='w-full h-40 object-cover object-top hover:animate-scrolling5s md:h-32 lg:h-[150px] border-2 border-black'
            src='/images/youtubeCover.webp'
            alt='website preview'
          />
        </a>
        <a className='' href='https://kyivbouquets.netlify.app/'>
          <div className='flex justify-between p-2 border-2 border-black transition duration-200 shadow-md shadow-black mx-4 mb-1 hover:bg-red-500 hover:shadow-red-500'>
            <p>Kyiv Bouquets figma practice</p>
            <div className='flex gap-1'>
              <img
                className='h-6 md:h-12 transition-all duration-500'
                src='https://skillicons.dev/icons?i=javascript'
                alt='html and css icons'
              />
              <img
                className='h-6 md:h-12 transition-all duration-500'
                src='https://skillicons.dev/icons?i=sass'
                alt='html and css icons'
              />
            </div>
          </div>
          <img
            className='w-full h-40 object-cover object-top hover:animate-scrolling30s md:h-32 lg:h-[150px] border-2 border-black'
            src='/images/kyivbouquets.webp'
            alt='website preview'
          />
        </a>
      </div>
    </div>
  );
}
