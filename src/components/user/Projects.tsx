import React from 'react'
import Sidebar from '../layout/Sidebar'
import {AiOutlineGithub} from 'react-icons/ai'
import {FaNodeJs} from 'react-icons/fa'
type Props = {}

export default function Projects({}: Props) {
  return (
    
    
    <div>
      <Sidebar/>
      
        {/* end sidenav */}
        <main className="relative h-full max-h-screen transition-all duration-200 ease-in-out xl:ml-68 rounded-xl">
          {/* Navbar */}
          
          <div className="w-full px-6 py-6  mx-auto">
        <div className="flex flex-wrap -mx-3 justify-center ">
          <div className="w-full max-w-full px-3 mt-6 md:w-12/12 md:flex-none">
            <div className="relative flex flex-col min-w-0 break-words bg-white border-0 shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
              <div className="p-6 px-4 pb-0 mb-0 border-b-0 rounded-t-2xl">
                <h6 className="mb-0 dark:text-white">Projects</h6>
              </div>
              <div className="flex-auto p-4 pt-6">
                <ul className="flex flex-col pl-0 mb-0 rounded-lg">
                  <li className="relative flex p-6 mb-2 border-0 rounded-t-inherit rounded-xl bg-gray-50 dark:bg-slate-850">
                  <img className="mb-0 mr-4 mt-12 w-20 h-14" src="/images/logos/mastercard.png" alt="logo"></img>

                    <div className="flex flex-col">
                      
                      <h6 className="mb-4 text-md font-bold leading-normal dark:text-white">SpaceBimeh</h6>
                      <span className="mb-2 text-sm font-semibold leading-tight dark:text-white/80">Company Owner: <span className="font-semibold text-slate-700 dark:text-white sm:ml-2">Viking Burrito</span></span>
                      <span className="mb-2 text-sm  font-semibold leading-tight dark:text-white/80">Status: <span className="font-semibold text-slate-700 dark:text-white sm:ml-2">Viking Burrito</span></span>
                      <span className="mb-2 text-sm font-semibold leading-tight dark:text-white/80">StartTime: <span className="font-semibold text-slate-700 dark:text-white sm:ml-2">oliver@burrito.com</span></span>
                      <span className="mb-2 text-sm font-semibold  leading-tight dark:text-white/80">EndTime: <span className="font-semibold text-slate-700 dark:text-white sm:ml-2">oliver@burrito.com</span></span>
                      <span className="mb-2 text-sm  font-semibold leading-tight dark:text-white/80">Using Stacks: <span className="font-semibold text-slate-700 dark:text-white sm:ml-2">#NodeJs #Golang #NestJs #Prisma</span></span>

                    </div>
                    <div className="ml-auto text-right">
                    <a href="https://www.creative-tim.com/learning-lab/tailwind/html/quick-start/argon-dashboard/?_ga=2.247388612.1592100210.1663838560-607442646.1657624050" target="_blank" className="inline-block w-auto px-8 py-2 mb-4 font-bold leading-normal text-sm text-center text-white capitalize transition-all ease-in rounded-lg shadow-md bg-slate-700 bg-150 text-xs hover:shadow-xs hover:-translate-y-px"> <AiOutlineGithub size={20}/> </a>

                      <a className="inline-block dark:text-white px-4 py-2.5 mb-0 font-bold text-center align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer leading-normal text-sm ease-in bg-150 hover:-translate-y-px active:opacity-85 bg-x-25 text-slate-700" href="javascript:;"><i className="mr-2 fas fa-pencil-alt text-slate-700" aria-hidden="true" /> <FaNodeJs size={20}/> </a>
                    </div>
                  </li>
                  <li className="relative flex p-6 mt-4 mb-2 border-0 rounded-xl bg-gray-50 dark:bg-slate-850">
                    <div className="flex flex-col">
                      <h6 className="mb-4 text-sm leading-normal dark:text-white">Lucas Harper</h6>
                      <span className="mb-2 text-xs leading-tight dark:text-white/80">Company Name: <span className="font-semibold text-slate-700 dark:text-white sm:ml-2">Stone Tech Zone</span></span>
                      <span className="mb-2 text-xs leading-tight dark:text-white/80">Email Address: <span className="font-semibold text-slate-700 dark:text-white sm:ml-2">lucas@stone-tech.com</span></span>
                      <span className="text-xs leading-tight dark:text-white/80">VAT Number: <span className="font-semibold text-slate-700 dark:text-white sm:ml-2">FRB1235476</span></span>
                    </div>
                    <div className="ml-auto text-right">
                      <a className="relative z-10 inline-block px-4 py-2.5 mb-0 font-bold text-center text-transparent align-middle transition-all border-0 rounded-lg shadow-none cursor-pointer leading-normal text-sm ease-in bg-150 bg-gradient-to-tl from-red-600 to-orange-600 hover:-translate-y-px active:opacity-85 bg-x-25 bg-clip-text" href="javascript:;"><i className="mr-2 far fa-trash-alt bg-150 bg-gradient-to-tl from-red-600 to-orange-600 bg-x-25 bg-clip-text" aria-hidden="true" />Delete</a>
                      <a className="inline-block dark:text-white px-4 py-2.5 mb-0 font-bold text-center align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer leading-normal text-sm ease-in bg-150 hover:-translate-y-px active:opacity-85 bg-x-25 text-slate-700" href="javascript:;"><i className="mr-2 fas fa-pencil-alt text-slate-700" aria-hidden="true" />Edit</a>
                    </div>
                  </li>
                  <li className="relative flex p-6 mt-4 mb-2 border-0 rounded-b-inherit rounded-xl bg-gray-50 dark:bg-slate-850">
                    <div className="flex flex-col">
                      <h6 className="mb-4 text-sm leading-normal dark:text-white">Ethan James</h6>
                      <span className="mb-2 text-xs leading-tight dark:text-white/80">Company Name: <span className="font-semibold text-slate-700 dark:text-white sm:ml-2">Fiber Notion</span></span>
                      <span className="mb-2 text-xs leading-tight dark:text-white/80">Email Address: <span className="font-semibold text-slate-700 dark:text-white sm:ml-2">ethan@fiber.com</span></span>
                      <span className="text-xs leading-tight dark:text-white/80">VAT Number: <span className="font-semibold text-slate-700 dark:text-white sm:ml-2">FRB1235476</span></span>
                    </div>
                    <div className="ml-auto text-right">
                      <a className="relative z-10 inline-block px-4 py-2.5 mb-0 font-bold text-center text-transparent align-middle transition-all border-0 rounded-lg shadow-none cursor-pointer leading-normal text-sm ease-in bg-150 bg-gradient-to-tl from-red-600 to-orange-600 hover:-translate-y-px active:opacity-85 bg-x-25 bg-clip-text" href="javascript:;"><i className="mr-2 far fa-trash-alt bg-150 bg-gradient-to-tl from-red-600 to-orange-600 bg-x-25 bg-clip-text" aria-hidden="true" />Delete</a>
                      <a className="inline-block dark:text-white px-4 py-2.5 mb-0 font-bold text-center align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer leading-normal text-sm ease-in bg-150 hover:-translate-y-px active:opacity-85 bg-x-25 text-slate-700" href="javascript:;"><i className="mr-2 fas fa-pencil-alt text-slate-700" aria-hidden="true" />Edit</a>
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
          <a fixed-plugin-button className="fixed px-4 py-2 text-xl bg-white shadow-lg cursor-pointer bottom-8 right-8 z-990 rounded-circle text-slate-700">
            <i className="py-2 pointer-events-none fa fa-cog"> </i>
          </a>
          {/* -right-90 in loc de 0*/}
          <div fixed-plugin-card className="z-sticky backdrop-blur-2xl backdrop-saturate-200 dark:bg-slate-850/80 shadow-3xl w-90 ease -right-90 fixed top-0 left-auto flex h-full min-w-0 flex-col break-words rounded-none border-0 bg-white/80 bg-clip-border px-2.5 duration-200">
            <div className="px-6 pt-4 pb-0 mb-0 border-b-0 rounded-t-2xl">
              <div className="float-left">
                <h5 className="mt-4 mb-0 dark:text-white">Argon Configurator</h5>
                <p className="dark:text-white dark:opacity-80">See our dashboard options.</p>
              </div>
              <div className="float-right mt-6">
                <button fixed-plugin-close-button className="inline-block p-0 mb-4 text-sm font-bold leading-normal text-center uppercase align-middle transition-all ease-in bg-transparent border-0 rounded-lg shadow-none cursor-pointer hover:-translate-y-px tracking-tight-rem bg-150 bg-x-25 active:opacity-85 dark:text-white text-slate-700">
                  <i className="fa fa-close" />
                </button>
              </div>
              {/* End Toggle Button */}
            </div>
            <hr className="h-px mx-0 my-1 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent" />
            <div className="flex-auto p-6 pt-0 overflow-auto sm:pt-4">
              {/* Sidebar Backgrounds */}
              <div>
                <h6 className="mb-0 dark:text-white">Sidebar Colors</h6>
              </div>
              <a href="javascript:void(0)">
                <div className="my-2 text-left" sidenav-colors>
                  <span className="py-2.2 text-xs rounded-circle h-5.6 mr-1.25 w-5.6 ease-in-out bg-gradient-to-tl from-blue-500 to-violet-500 relative inline-block cursor-pointer whitespace-nowrap border border-solid border-slate-700 text-center align-baseline font-bold uppercase leading-none text-white transition-all duration-200 hover:border-slate-700" active-color data-color="blue" onclick="sidebarColor(this)" />
                  <span className="py-2.2 text-xs rounded-circle h-5.6 mr-1.25 w-5.6 ease-in-out bg-gradient-to-tl from-zinc-800 to-zinc-700 dark:bg-gradient-to-tl dark:from-slate-750 dark:to-gray-850 relative inline-block cursor-pointer whitespace-nowrap border border-solid border-white text-center align-baseline font-bold uppercase leading-none text-white transition-all duration-200 hover:border-slate-700" data-color="gray" onclick="sidebarColor(this)" />
                  <span className="py-2.2 text-xs rounded-circle h-5.6 mr-1.25 w-5.6 ease-in-out bg-gradient-to-tl from-blue-700 to-cyan-500 relative inline-block cursor-pointer whitespace-nowrap border border-solid border-white text-center align-baseline font-bold uppercase leading-none text-white transition-all duration-200 hover:border-slate-700" data-color="cyan" onclick="sidebarColor(this)" />
                  <span className="py-2.2 text-xs rounded-circle h-5.6 mr-1.25 w-5.6 ease-in-out bg-gradient-to-tl from-emerald-500 to-teal-400 relative inline-block cursor-pointer whitespace-nowrap border border-solid border-white text-center align-baseline font-bold uppercase leading-none text-white transition-all duration-200 hover:border-slate-700" data-color="emerald" onclick="sidebarColor(this)" />
                  <span className="py-2.2 text-xs rounded-circle h-5.6 mr-1.25 w-5.6 ease-in-out bg-gradient-to-tl from-orange-500 to-yellow-500 relative inline-block cursor-pointer whitespace-nowrap border border-solid border-white text-center align-baseline font-bold uppercase leading-none text-white transition-all duration-200 hover:border-slate-700" data-color="orange" onclick="sidebarColor(this)" />
                  <span className="py-2.2 text-xs rounded-circle h-5.6 mr-1.25 w-5.6 ease-in-out bg-gradient-to-tl from-red-600 to-orange-600 relative inline-block cursor-pointer whitespace-nowrap border border-solid border-white text-center align-baseline font-bold uppercase leading-none text-white transition-all duration-200 hover:border-slate-700" data-color="red" onclick="sidebarColor(this)" />
                </div>
              </a>
              {/* Sidenav Type */}
              <div className="mt-4">
                <h6 className="mb-0 dark:text-white">Sidenav Type</h6>
                <p className="text-sm leading-normal dark:text-white dark:opacity-80">Choose between 2 different sidenav types.</p>
              </div>
              <div className="flex">
                <button transparent-style-btn className="inline-block w-full px-4 py-2.5 mb-2 font-bold leading-normal text-center text-white capitalize align-middle transition-all bg-blue-500 border border-transparent border-solid rounded-lg cursor-pointer text-sm xl-max:cursor-not-allowed xl-max:opacity-65 xl-max:pointer-events-none xl-max:bg-gradient-to-tl xl-max:from-blue-500 xl-max:to-violet-500 xl-max:text-white xl-max:border-0 hover:-translate-y-px dark:cursor-not-allowed dark:opacity-65 dark:pointer-events-none dark:bg-gradient-to-tl dark:from-blue-500 dark:to-violet-500 dark:text-white dark:border-0 hover:shadow-xs active:opacity-85 ease-in tracking-tight-rem shadow-md bg-150 bg-x-25 bg-gradient-to-tl from-blue-500 to-violet-500 hover:border-blue-500" data-class="bg-transparent" active-style>White</button>
                <button white-style-btn className="inline-block w-full px-4 py-2.5 mb-2 ml-2 font-bold leading-normal text-center text-blue-500 capitalize align-middle transition-all bg-transparent border border-blue-500 border-solid rounded-lg cursor-pointer text-sm xl-max:cursor-not-allowed xl-max:opacity-65 xl-max:pointer-events-none xl-max:bg-gradient-to-tl xl-max:from-blue-500 xl-max:to-violet-500 xl-max:text-white xl-max:border-0 hover:-translate-y-px dark:cursor-not-allowed dark:opacity-65 dark:pointer-events-none dark:bg-gradient-to-tl dark:from-blue-500 dark:to-violet-500 dark:text-white dark:border-0 hover:shadow-xs active:opacity-85 ease-in tracking-tight-rem shadow-md bg-150 bg-x-25 bg-none hover:border-blue-500" data-class="bg-white">Dark</button>
              </div>
              <p className="block mt-2 text-sm leading-normal dark:text-white dark:opacity-80 xl:hidden">You can change the sidenav type just on desktop view.</p>
              {/* Navbar Fixed */}
              <div className="flex my-4">
                <h6 className="mb-0 dark:text-white">Navbar Fixed</h6>
                <div className="block pl-0 ml-auto min-h-6">
                  <input navbarfixed className="rounded-10 duration-250 ease-in-out after:rounded-circle after:shadow-2xl after:duration-250 checked:after:translate-x-5.3 h-5 relative float-left mt-1 ml-auto w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-blue-500/95 checked:bg-blue-500/95 checked:bg-none checked:bg-right" type="checkbox" />
                </div>
              </div>
              <hr className="h-px my-6 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent " />
              <div className="flex mt-2 mb-12">
                <h6 className="mb-0 dark:text-white">Light / Dark</h6>
                <div className="block pl-0 ml-auto min-h-6">
                  <input dark-toggle className="rounded-10 duration-250 ease-in-out after:rounded-circle after:shadow-2xl after:duration-250 checked:after:translate-x-5.3 h-5 relative float-left mt-1 ml-auto w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-blue-500/95 checked:bg-blue-500/95 checked:bg-none checked:bg-right" type="checkbox" />
                </div>
              </div>
              <a target="_blank" className="dark:border dark:border-solid dark:border-white inline-block w-full px-6 py-2.5 mb-4 font-bold leading-normal text-center text-white align-middle transition-all bg-transparent border border-solid border-transparent rounded-lg cursor-pointer text-sm ease-in hover:shadow-xs hover:-translate-y-px active:opacity-85 tracking-tight-rem shadow-md bg-150 bg-x-25 bg-gradient-to-tl from-zinc-800 to-zinc-700 dark:bg-gradient-to-tl dark:from-slate-750 dark:to-gray-850" href="https://www.creative-tim.com/product/argon-dashboard-tailwind">Free Download</a>
              <a target="_blank" className="dark:border dark:border-solid dark:border-white dark:text-white inline-block w-full px-6 py-2.5 mb-4 font-bold leading-normal text-center align-middle transition-all bg-transparent border border-solid rounded-lg shadow-none cursor-pointer active:shadow-xs hover:-translate-y-px active:opacity-85 text-sm ease-in tracking-tight-rem bg-150 bg-x-25 border-slate-700 text-slate-700 hover:bg-transparent hover:text-slate-700 hover:shadow-none active:bg-slate-700 active:text-white active:hover:bg-transparent active:hover:text-slate-700 active:hover:shadow-none" href="https://www.creative-tim.com/learning-lab/tailwind/html/quick-start/argon-dashboard/">View documentation</a>
              <div className="w-full text-center">
                <a className="github-button" href="https://github.com/creativetimofficial/argon-dashboard-tailwind" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star creativetimofficial/argon-dashboard on GitHub">Star</a>
                <h6 className="mt-4 dark:text-white">Thank you for sharing!</h6>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    
  )
}