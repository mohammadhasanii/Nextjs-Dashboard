import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { BiGitPullRequest } from 'react-icons/bi';
import Sidebar from '../layout/Sidebar';

type Props = {};

export default function Requests({}: Props) {
  return (
    <div>
      <Sidebar />

      {/* end sidenav */}
      <main className='xl:ml-68 relative h-full max-h-screen rounded-xl transition-all duration-200 ease-in-out'>
        {/* Navbar */}

        <div className='mx-auto w-full px-6 py-6'>
          <div className='-mx-3 flex flex-wrap justify-center'>
            <div className='mt-6 w-full max-w-full px-3 md:w-5/12 md:flex-none'>
              <div className='dark:bg-slate-850 dark:shadow-dark-xl relative mb-6 flex h-full min-w-0 flex-col break-words rounded-2xl border-0 bg-white bg-clip-border shadow-xl'>
                <div className='mb-0 rounded-t-2xl border-b-0 p-6 px-4 pb-0'>
                  <div className='-mx-3 flex flex-wrap'>
                    <div className='max-w-full px-3 md:w-1/2 md:flex-none'>
                      <h6 className='mb-0 dark:text-white'>Your Requests</h6>
                    </div>
                    <div className='flex max-w-full items-center justify-end px-3 dark:text-white/80 md:w-1/2 md:flex-none'>
                      <i
                        className='far fa-calendar-alt mr-2'
                        aria-hidden='true'
                      />
                      <a
                        className='bg-150 bg-x-25 hover:shadow-xs w-82 mt-5 inline-block  select-none rounded-lg border-0 bg-blue-500 px-8 py-3 text-center align-middle text-xs font-bold leading-normal text-white shadow-md transition-all ease-in hover:-translate-y-px'
                        href='https://www.creative-tim.com/product/argon-dashboard-pro-tailwind?ref=sidebarfree&_ga=2.145150324.1592100210.1663838560-607442646.1657624050'
                        target='_blank'
                      >
                        NewRequest <AiOutlinePlus size={20}/>
                      </a>
                    </div>
                  </div>
                </div>
                <div className='flex-auto p-4 pt-6'>
                  <h6 className='mb-4 text-xs font-bold uppercase leading-tight text-slate-500 dark:text-white'>
                    All
                  </h6>
                  <ul className='mb-0 flex flex-col rounded-lg pl-0'>
                    <li className='rounded-t-inherit relative mb-2 flex justify-between rounded-xl border-0 px-4 py-2 pl-0 text-inherit'>
                      <div className='flex items-center'>
                        <button className='leading-pro bg-150 w-6.5 h-6.5 p-1.2 rounded-3.5xl tracking-tight-rem bg-x-25 mr-4 mb-0 flex cursor-pointer items-center justify-center border border-solid border-red-600 border-transparent bg-transparent text-center align-middle text-xs font-bold uppercase text-red-600 transition-all ease-in hover:opacity-75'>
                          <i
                            className='fas fa-arrow-down text-3xs'
                            aria-hidden='true'
                          />
                        </button>
                        <div className='flex flex-col'>
                          <h6 className='mb-1 text-sm leading-normal text-slate-700 dark:text-white'>
                            Netflix
                          </h6>
                          <span className='text-xs leading-tight dark:text-white/80'>
                            27 March 2020, at 12:30 PM
                          </span>
                        </div>
                      </div>
                      <div className='flex flex-col items-center justify-center'>
                        <p className='relative z-10 m-0 inline-block bg-gradient-to-tl from-red-600 to-orange-600 bg-clip-text text-sm font-semibold leading-normal text-transparent'>
                          - $ 2,500
                        </p>
                      </div>
                    </li>
                    <li className='rounded-b-inherit relative mb-2 flex justify-between rounded-xl border-0 border-t-0 px-4 py-2 pl-0 text-inherit'>
                      <div className='flex items-center'>
                        <button className='leading-pro bg-150 w-6.5 h-6.5 p-1.2 rounded-3.5xl tracking-tight-rem bg-x-25 mr-4 mb-0 flex cursor-pointer items-center justify-center border border-solid border-emerald-500 border-transparent bg-transparent text-center align-middle text-xs font-bold uppercase text-emerald-500 transition-all ease-in hover:opacity-75'>
                          <i
                            className='fas fa-arrow-up text-3xs'
                            aria-hidden='true'
                          />
                        </button>
                        <div className='flex flex-col'>
                          <h6 className='mb-1 text-sm leading-normal text-slate-700 dark:text-white'>
                            Apple
                          </h6>
                          <span className='text-xs leading-tight dark:text-white/80'>
                            27 March 2020, at 04:30 AM
                          </span>
                        </div>
                      </div>
                      <div className='flex flex-col items-center justify-center'>
                        <p className='relative z-10 m-0 inline-block bg-gradient-to-tl from-green-600 to-lime-400 bg-clip-text text-sm font-semibold leading-normal text-transparent'>
                          + $ 2,000
                        </p>
                      </div>
                    </li>
                  </ul>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div fixed-plugin>
        <a
          fixed-plugin-button
          className='z-990 rounded-circle fixed bottom-8 right-8 cursor-pointer bg-white px-4 py-2 text-xl text-slate-700 shadow-lg'
        >
          <i className='fa fa-cog pointer-events-none py-2'> </i>
        </a>
        {/* -right-90 in loc de 0*/}
        <div
          fixed-plugin-card
          className='z-sticky dark:bg-slate-850/80 shadow-3xl w-90 ease -right-90 fixed top-0 left-auto flex h-full min-w-0 flex-col break-words rounded-none border-0 bg-white/80 bg-clip-border px-2.5 backdrop-blur-2xl backdrop-saturate-200 duration-200'
        >
          <div className='mb-0 rounded-t-2xl border-b-0 px-6 pt-4 pb-0'>
            <div className='float-left'>
              <h5 className='mt-4 mb-0 dark:text-white'>Argon Configurator</h5>
              <p className='dark:text-white dark:opacity-80'>
                See our dashboard options.
              </p>
            </div>
            <div className='float-right mt-6'>
              <button
                fixed-plugin-close-button
                className='tracking-tight-rem bg-150 bg-x-25 active:opacity-85 mb-4 inline-block cursor-pointer rounded-lg border-0 bg-transparent p-0 text-center align-middle text-sm font-bold uppercase leading-normal text-slate-700 shadow-none transition-all ease-in hover:-translate-y-px dark:text-white'
              >
                <i className='fa fa-close' />
              </button>
            </div>
            {/* End Toggle Button */}
          </div>
          <hr className='mx-0 my-1 h-px bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent' />
          <div className='flex-auto overflow-auto p-6 pt-0 sm:pt-4'>
            {/* Sidebar Backgrounds */}
            <div>
              <h6 className='mb-0 dark:text-white'>Sidebar Colors</h6>
            </div>
            <a href='javascript:void(0)'>
              <div className='my-2 text-left' sidenav-colors>
                <span
                  className='py-2.2 rounded-circle h-5.6 mr-1.25 w-5.6 relative inline-block cursor-pointer whitespace-nowrap border border-solid border-slate-700 bg-gradient-to-tl from-blue-500 to-violet-500 text-center align-baseline text-xs font-bold uppercase leading-none text-white transition-all duration-200 ease-in-out hover:border-slate-700'
                  active-color
                  data-color='blue'
                  onclick='sidebarColor(this)'
                />
                <span
                  className='py-2.2 rounded-circle h-5.6 mr-1.25 w-5.6 dark:from-slate-750 dark:to-gray-850 relative inline-block cursor-pointer whitespace-nowrap border border-solid border-white bg-gradient-to-tl from-zinc-800 to-zinc-700 text-center align-baseline text-xs font-bold uppercase leading-none text-white transition-all duration-200 ease-in-out hover:border-slate-700 dark:bg-gradient-to-tl'
                  data-color='gray'
                  onclick='sidebarColor(this)'
                />
                <span
                  className='py-2.2 rounded-circle h-5.6 mr-1.25 w-5.6 relative inline-block cursor-pointer whitespace-nowrap border border-solid border-white bg-gradient-to-tl from-blue-700 to-cyan-500 text-center align-baseline text-xs font-bold uppercase leading-none text-white transition-all duration-200 ease-in-out hover:border-slate-700'
                  data-color='cyan'
                  onclick='sidebarColor(this)'
                />
                <span
                  className='py-2.2 rounded-circle h-5.6 mr-1.25 w-5.6 relative inline-block cursor-pointer whitespace-nowrap border border-solid border-white bg-gradient-to-tl from-emerald-500 to-teal-400 text-center align-baseline text-xs font-bold uppercase leading-none text-white transition-all duration-200 ease-in-out hover:border-slate-700'
                  data-color='emerald'
                  onclick='sidebarColor(this)'
                />
                <span
                  className='py-2.2 rounded-circle h-5.6 mr-1.25 w-5.6 relative inline-block cursor-pointer whitespace-nowrap border border-solid border-white bg-gradient-to-tl from-orange-500 to-yellow-500 text-center align-baseline text-xs font-bold uppercase leading-none text-white transition-all duration-200 ease-in-out hover:border-slate-700'
                  data-color='orange'
                  onclick='sidebarColor(this)'
                />
                <span
                  className='py-2.2 rounded-circle h-5.6 mr-1.25 w-5.6 relative inline-block cursor-pointer whitespace-nowrap border border-solid border-white bg-gradient-to-tl from-red-600 to-orange-600 text-center align-baseline text-xs font-bold uppercase leading-none text-white transition-all duration-200 ease-in-out hover:border-slate-700'
                  data-color='red'
                  onclick='sidebarColor(this)'
                />
              </div>
            </a>
            {/* Sidenav Type */}
            <div className='mt-4'>
              <h6 className='mb-0 dark:text-white'>Sidenav Type</h6>
              <p className='text-sm leading-normal dark:text-white dark:opacity-80'>
                Choose between 2 different sidenav types.
              </p>
            </div>
            <div className='flex'>
              <button
                transparent-style-btn
                className='xl-max:cursor-not-allowed xl-max:opacity-65 xl-max:pointer-events-none xl-max:bg-gradient-to-tl xl-max:from-blue-500 xl-max:to-violet-500 xl-max:text-white xl-max:border-0 dark:opacity-65 hover:shadow-xs active:opacity-85 tracking-tight-rem bg-150 bg-x-25 mb-2 inline-block w-full cursor-pointer rounded-lg border border-solid border-transparent bg-blue-500 bg-gradient-to-tl from-blue-500 to-violet-500 px-4 py-2.5 text-center align-middle text-sm font-bold capitalize leading-normal text-white shadow-md transition-all ease-in hover:-translate-y-px hover:border-blue-500 dark:pointer-events-none dark:cursor-not-allowed dark:border-0 dark:bg-gradient-to-tl dark:from-blue-500 dark:to-violet-500 dark:text-white'
                data-class='bg-transparent'
                active-style
              >
                White
              </button>
              <button
                white-style-btn
                className='xl-max:cursor-not-allowed xl-max:opacity-65 xl-max:pointer-events-none xl-max:bg-gradient-to-tl xl-max:from-blue-500 xl-max:to-violet-500 xl-max:text-white xl-max:border-0 dark:opacity-65 hover:shadow-xs active:opacity-85 tracking-tight-rem bg-150 bg-x-25 mb-2 ml-2 inline-block w-full cursor-pointer rounded-lg border border-solid border-blue-500 bg-transparent bg-none px-4 py-2.5 text-center align-middle text-sm font-bold capitalize leading-normal text-blue-500 shadow-md transition-all ease-in hover:-translate-y-px hover:border-blue-500 dark:pointer-events-none dark:cursor-not-allowed dark:border-0 dark:bg-gradient-to-tl dark:from-blue-500 dark:to-violet-500 dark:text-white'
                data-class='bg-white'
              >
                Dark
              </button>
            </div>
            <p className='mt-2 block text-sm leading-normal dark:text-white dark:opacity-80 xl:hidden'>
              You can change the sidenav type just on desktop view.
            </p>
            {/* Navbar Fixed */}
            <div className='my-4 flex'>
              <h6 className='mb-0 dark:text-white'>Navbar Fixed</h6>
              <div className='min-h-6 ml-auto block pl-0'>
                <input
                  navbarfixed
                  className="rounded-10 duration-250 after:rounded-circle after:duration-250 checked:after:translate-x-5.3 relative float-left mt-1 ml-auto h-5 w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all ease-in-out after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:shadow-2xl after:content-[''] checked:border-blue-500/95 checked:bg-blue-500/95 checked:bg-none checked:bg-right"
                  type='checkbox'
                />
              </div>
            </div>
            <hr className='my-6 h-px bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent ' />
            <div className='mt-2 mb-12 flex'>
              <h6 className='mb-0 dark:text-white'>Light / Dark</h6>
              <div className='min-h-6 ml-auto block pl-0'>
                <input
                  dark-toggle
                  className="rounded-10 duration-250 after:rounded-circle after:duration-250 checked:after:translate-x-5.3 relative float-left mt-1 ml-auto h-5 w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all ease-in-out after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:shadow-2xl after:content-[''] checked:border-blue-500/95 checked:bg-blue-500/95 checked:bg-none checked:bg-right"
                  type='checkbox'
                />
              </div>
            </div>
            <a
              target='_blank'
              className='hover:shadow-xs active:opacity-85 tracking-tight-rem bg-150 bg-x-25 dark:from-slate-750 dark:to-gray-850 mb-4 inline-block w-full cursor-pointer rounded-lg border border-solid border-transparent bg-transparent bg-gradient-to-tl from-zinc-800 to-zinc-700 px-6 py-2.5 text-center align-middle text-sm font-bold leading-normal text-white shadow-md transition-all ease-in hover:-translate-y-px dark:border dark:border-solid dark:border-white dark:bg-gradient-to-tl'
              href='https://www.creative-tim.com/product/argon-dashboard-tailwind'
            >
              Free Download
            </a>
            <a
              target='_blank'
              className='active:shadow-xs active:opacity-85 tracking-tight-rem bg-150 bg-x-25 mb-4 inline-block w-full cursor-pointer rounded-lg border border-solid border-slate-700 bg-transparent px-6 py-2.5 text-center align-middle text-sm font-bold leading-normal text-slate-700 shadow-none transition-all ease-in hover:-translate-y-px hover:bg-transparent hover:text-slate-700 hover:shadow-none active:bg-slate-700 active:text-white active:hover:bg-transparent active:hover:text-slate-700 active:hover:shadow-none dark:border dark:border-solid dark:border-white dark:text-white'
              href='https://www.creative-tim.com/learning-lab/tailwind/html/quick-start/argon-dashboard/'
            >
              View documentation
            </a>
            <div className='w-full text-center'>
              <a
                className='github-button'
                href='https://github.com/creativetimofficial/argon-dashboard-tailwind'
                data-icon='octicon-star'
                data-size='large'
                data-show-count='true'
                aria-label='Star creativetimofficial/argon-dashboard on GitHub'
              >
                Star
              </a>
              <h6 className='mt-4 dark:text-white'>Thank you for sharing!</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
