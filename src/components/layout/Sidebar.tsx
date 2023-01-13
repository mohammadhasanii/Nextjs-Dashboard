import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import {MdOutlineLogout} from 'react-icons/md'
import {BiGitPullRequest, BiTask} from 'react-icons/bi'
type Props = {};

export default function Sidebar({}: Props) {
  const router = useRouter();
  const locationRouter=router.pathname
  console.log(locationRouter)
  return (
    <>
    
      <div className='min-h-75 absolute w-full bg-blue-500 dark:hidden'></div>
      <aside
        className='dark:bg-slate-850 max-w-64 ease-nav-brand z-990 fixed inset-y-0 my-4 block w-full -translate-x-full flex-wrap items-center justify-between overflow-y-auto rounded-2xl border-0 bg-white p-0 antialiased shadow-xl transition-transform duration-200 dark:shadow-none xl:left-0 xl:ml-6 xl:translate-x-0'
        aria-expanded='false'
      >
        <div className='h-19'>
          <i className='fas fa-times absolute top-0 right-0 cursor-pointer p-4 text-slate-400 opacity-50 dark:text-white xl:hidden' />
          <Link href='/user/dashboard'>
            <a
              className='m-0 block whitespace-nowrap px-8 py-6 text-sm text-slate-700 dark:text-white'
            >
              <img
                src='/images/logo-ct-dark.png'
                className='ease-nav-brand inline h-full max-h-8 max-w-full transition-all duration-200 dark:hidden'
                alt='main_logo'
              />
              <img
                src='/images/logo-ct.png'
                className='ease-nav-brand hidden h-full max-h-8 max-w-full transition-all duration-200 dark:inline'
                alt='main_logo'
              />
              <span className='ease-nav-brand ml-1 font-semibold transition-all duration-200'>
                CloudBundles 2
              </span>
            </a>
          </Link>
        </div>
        <hr className='mt-0 h-px bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent' />
        <div className='h-sidenav block max-h-screen w-auto grow basis-full items-center overflow-auto'>
          <ul className='mb-0 flex flex-col pl-0'>
            <li className='mt-0.5 w-full'>
              <Link href='/user/dashboard'>
                <a className={`py-2.7 ${locationRouter=="/user/dashboard" && `bg-blue-500/13`} ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap rounded-lg px-4 text-sm font-semibold text-slate-700 transition-colors dark:text-white dark:opacity-80`}>
                  <div className='mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5'>
                    <i className='ni ni-tv-2 relative top-0 text-sm leading-normal text-blue-500' />
                  </div>
                  <span className='ease pointer-events-none ml-1 opacity-100 duration-300'>
                    Dashboard
                  </span>
                </a>
              </Link>
            </li>
            <li className='mt-0.5 w-full'>
              <Link href='/user/team'>
              <a className={`py-2.7 ${locationRouter=="/user/team" && `bg-blue-500/13`} ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap rounded-lg px-4 text-sm font-semibold text-slate-700 transition-colors dark:text-white dark:opacity-80`}>
                  <div className='mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5'>
                    <i className='ni ni-calendar-grid-58 relative top-0 text-sm leading-normal text-orange-500' />
                  </div>
                  <span className='ease pointer-events-none ml-1 opacity-100 duration-300'>
                    Teams
                  </span>
                </a>
              </Link>
            </li>
            <li className='mt-0.5 w-full'>
              <Link href='/user/reports'>
              <a className={`py-2.7 ${locationRouter=="/user/reports" && `bg-blue-500/13`} ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap rounded-lg px-4 text-sm font-semibold text-slate-700 transition-colors dark:text-white dark:opacity-80`}>
                  <div className='mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center fill-current stroke-0 text-center xl:p-2.5'>
                    <i className='ni ni-credit-card relative top-0 text-sm leading-normal text-emerald-500' />
                  </div>
                  <span className='ease pointer-events-none ml-1 opacity-100 duration-300'>
                    Reports
                  </span>
                </a>
              </Link>
            </li>
            <li className='mt-0.5 w-full'>
              <Link href='/user/requests'>
              <a className={`py-2.7 ${locationRouter=="/user/requests" && `bg-blue-500/13`} ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap rounded-lg px-4 text-sm font-semibold text-slate-700 transition-colors dark:text-white dark:opacity-80`}>
                  <div className='mr-2 flex h-9 w-9 items-center justify-center rounded-lg bg-center fill-current stroke-0 text-center xl:p-2.5'>
                  <BiGitPullRequest color='#3b82f6' size={20}/>

                  </div>
                  <span className='ease pointer-events-none ml-1 opacity-100 duration-300'>
                    Requests
                  </span>
                </a>
              </Link>
            </li>
            <li className='mt-0.5 w-full'>
              <Link href='/user/tasks'>
              <a className={`py-2.7 ${locationRouter=="/user/tasks" && `bg-blue-500/13`} ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap rounded-lg px-4 text-sm font-semibold text-slate-700 transition-colors dark:text-white dark:opacity-80`}>
                  <div className='mr-2 flex h-9 w-9 items-center justify-center rounded-lg bg-center fill-current stroke-0 text-center xl:p-2.5'>
                  <BiTask color='#3b82f6' size={30}/>

                  </div>
                  <span className='ease pointer-events-none ml-1 opacity-100 duration-300'>
                    Tasks
                  </span>
                </a>
              </Link>
            </li>
            <li className='mt-0.5 w-full'>
              <Link href='/user/projects'>
              <a className={`py-2.7 ${locationRouter=="/user/projects" && `bg-blue-500/13`} ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap rounded-lg px-4 text-sm font-semibold text-slate-700 transition-colors dark:text-white dark:opacity-80`}>
                  <div className='mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5'>
                    <i className='ni ni-app relative top-0 text-sm leading-normal text-cyan-500' />
                  </div>
                  <span className='ease pointer-events-none ml-1 opacity-100 duration-300'>
                    Projects
                  </span>
                </a>
              </Link>
            </li>

           <li className="mt-0.5 w-full">
           <Link href="/user/profile">

           <a className={`py-2.7 ${locationRouter=="/user/profile" && `bg-blue-500/13`} ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap rounded-lg px-4 text-sm font-semibold text-slate-700 transition-colors dark:text-white dark:opacity-80`}>
          <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
            <i className="relative top-0 leading-normal text-slate-700 text-sm ni ni-single-02" />
          </div>
          <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">Profile</span>
        </a>
        </Link>

      </li>
          </ul>
        </div>
        <div className='mx-4'>
          <p className='dark:from-slate-750 dark:to-gray-850 invisible hidden bg-slate-500 bg-gray-500/30 bg-cyan-500/30 bg-emerald-500/30 bg-orange-500/30 bg-red-500/30 text-gray-800 text-red-500 text-red-600 text-blue-500 text-emerald-500 text-cyan-500 text-slate-400 after:bg-gradient-to-tl after:from-zinc-800 after:from-blue-700 after:from-orange-500 after:from-green-600 after:from-red-600 after:from-slate-600 after:to-zinc-700 after:to-cyan-500 after:to-yellow-500 after:to-lime-400 after:to-orange-600 after:to-slate-300 dark:bg-white dark:bg-gradient-to-tl' />
          <div className='relative flex min-w-0 flex-col break-words rounded-2xl border-0 bg-transparent bg-clip-border shadow-none'>
            <img
              className='mx-auto w-1/3'
              src='https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-250.png'
              alt='sidebar illustrations'
            />
            <div className='w-full flex-auto p-4 pt-0 text-center'>
              <div className='ease-nav-brand transition-all duration-200'>
                <h6 className='mb-0 text-slate-700 dark:text-white'>
                  Need help?
                </h6>
                <p className='mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60'>
                  Please check our docs Github
                </p>
              </div>
            </div>
          </div>
          <a 
            className='animate-pulse bg-150 bg-x-25 hover:shadow-xs inline-block w-full select-none rounded-lg border-0 bg-blue-500 px-8 py-2 text-center align-middle text-xs font-bold leading-normal text-white shadow-md transition-all ease-in hover:-translate-y-px'
            href='https://github.com/mohammadmahdihasani'
            target='_blank'
          >
            Organiztion Github
          </a>
          <a
            className='bg-150 bg-x-25 hover:shadow-xs mt-5 inline-block w-full select-none rounded-lg border-0 bg-red-500 px-8 py-2 text-center align-middle text-xs font-bold leading-normal text-white shadow-md transition-all ease-in hover:-translate-y-px'
            href='https://www.creative-tim.com/product/argon-dashboard-pro-tailwind?ref=sidebarfree&_ga=2.145150324.1592100210.1663838560-607442646.1657624050'
            target='_blank'
          >
            <MdOutlineLogout size={20}/>
          </a>
        </div>
        
      </aside>

   
      
    </>
    
  );
}
