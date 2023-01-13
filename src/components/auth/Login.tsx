import Link from 'next/link';
import React from 'react';

type Props = {};

export default function Login({}: Props) {
  return (
    <div>
      <div className='z-sticky container sticky top-0'>
        <div className='-mx-3 flex flex-wrap'>
          <div className='flex-0 w-full max-w-full px-3'>
            {/* Navbar */}
            <nav className='absolute top-0 left-0 right-0 z-30 m-6 mb-0 flex flex-wrap items-center rounded-xl bg-white/80 px-4 py-2 shadow-sm backdrop-blur-2xl backdrop-saturate-200 lg:flex-nowrap lg:justify-start'>
              <div className='flex-wrap-inherit mx-auto flex w-full items-center justify-between p-0 px-6'>
                <a
                  className='py-1.75 mr-4 ml-4 whitespace-nowrap text-sm font-bold text-slate-700 lg:ml-0'
                  href='/login'
                 
                >
                  {' '}
                  CloudBundles 2{' '}
                </a>
                <button
                  navbar-trigger
                  className='ml-2 cursor-pointer rounded-lg border border-solid border-transparent bg-transparent px-3 py-1 text-lg leading-none shadow-none transition-all ease-in-out lg:hidden'
                  type='button'
                  aria-controls='navigation'
                  aria-expanded='false'
                  aria-label='Toggle navigation'
                >
                  <span className='mt-2 inline-block h-6 w-6 bg-none bg-cover bg-center bg-no-repeat align-middle'>
                    <span className='w-5.5 rounded-xs relative my-0 mx-auto block h-px bg-gray-600 transition-all duration-300' />
                    <span className='w-5.5 rounded-xs mt-1.75 relative my-0 mx-auto block h-px bg-gray-600 transition-all duration-300' />
                    <span className='w-5.5 rounded-xs mt-1.75 relative my-0 mx-auto block h-px bg-gray-600 transition-all duration-300' />
                  </span>
                </button>
                <div
                  navbar-menu
                  className='lg-max:overflow-hidden ease lg-max:max-h-0 flex-grow basis-full items-center transition-all duration-500 lg:flex lg:basis-auto'
                >
                  
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <main className='mt-0 transition-all duration-200 ease-in-out'>
        <section>
          <div className='relative flex min-h-screen items-center overflow-hidden bg-cover bg-center p-0'>
            <div className='z-1 container'>
              <div className='-mx-3 flex flex-wrap'>
                <div className='md:flex-0 mx-auto flex w-full max-w-full shrink-0 flex-col px-3 md:w-7/12 lg:mx-0 lg:w-5/12 xl:w-4/12'>
                  <div className='lg:py4 dark:bg-gray-950 relative flex min-w-0 flex-col break-words rounded-2xl border-0 bg-transparent bg-clip-border shadow-none'>
                    <div className='mb-0 p-6 pb-0'>
                      <h4 className='font-bold'>Sign In</h4>
                      <p className='mb-0'>
                        Enter your Username and Password to sign in
                      </p>
                    </div>
                    <div className='flex-auto p-6'>
                      <form role='form'>
                        <div className='mb-4'>
                          <input
                            autoComplete='off'
                            type='email'
                            placeholder='Username'
                            className='focus:shadow-primary-outline dark:bg-gray-950 leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding p-3 text-sm font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none dark:text-white/80 dark:placeholder:text-white/80'
                          />
                        </div>
                        <div className='mb-4'>
                          <input
                            type='password'
                            autoComplete='off'
                            placeholder='Password'
                            className='focus:shadow-primary-outline dark:bg-gray-950 leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding p-3 text-sm font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none dark:text-white/80 dark:placeholder:text-white/80'
                          />
                        </div>
                        <div className='min-h-6 mb-0.5 flex items-center pl-12 text-left'>
                          <input
                            id='rememberMe'
                            className="rounded-10 duration-250 after:rounded-circle after:duration-250 checked:after:translate-x-5.3 relative float-left mt-0.5 -ml-12 h-5 w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-zinc-700/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all ease-in-out after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:shadow-2xl after:content-[''] checked:border-blue-500/95 checked:bg-blue-500/95 checked:bg-none checked:bg-right"
                            type='checkbox'
                          />
                          <label
                            className='ml-2 cursor-pointer select-none text-sm font-normal text-slate-700'
                            htmlFor='rememberMe'
                          >
                            Remember me
                          </label>
                        </div>
                        <div className='text-center'>
                          <button
                            type='button'
                            className='active:opacity-85 hover:shadow-xs tracking-tight-rem bg-150 bg-x-25 mt-6 mb-0 inline-block w-full cursor-pointer rounded-lg border-0 bg-blue-500 px-16 py-3.5 text-center align-middle text-sm font-bold leading-normal text-white shadow-md transition-all ease-in hover:-translate-y-px'
                          >
                            Sign in
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className='border-black/12.5 rounded-b-2xl border-t-0 border-solid p-6 px-1 pt-0 text-center sm:px-6'>
                      <p className='mx-auto mb-6 text-sm leading-normal'>
                        Don't have an account?{' '}
                        <Link href='/register'>
                          <a className='bg-gradient-to-tl from-blue-500 to-violet-500 bg-clip-text font-semibold text-transparent'>
                            Sign up
                          </a>
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
                <div className='flex-0 absolute top-0 right-0 my-auto hidden h-full w-6/12 max-w-full flex-col justify-center px-3 pr-0 text-center lg:flex'>
                  <div className="relative m-4 flex h-full flex-col justify-center overflow-hidden rounded-xl bg-[url('https://cdn.dribbble.com/users/870476/screenshots/5405762/comp-2.gif')] bg-cover px-24 ">
                    <span className='absolute top-0 left-0 h-full w-full from-blue-500  to-violet-500 bg-center ' />
                    <h4 className='z-20 mt-12 font-bold text-white'>
                      "Start Building App on CloudBundles Today"
                    </h4>
                    <p className='z-20 text-white '>
                      We use CloudBundles to create more stable services and
                      applications
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
