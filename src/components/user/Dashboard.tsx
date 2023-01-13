import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Countdown } from 'react-daisyui'
import Sidebar from '../layout/Sidebar'
import { BsFillPlayFill  } from 'react-icons/bs';
import {GiTrophyCup} from 'react-icons/gi'
import {AiFillCodeSandboxSquare} from 'react-icons/ai'
type Props = {}

export default function Dashboard({}: Props) {
  
  
  const [day,setDay]=useState(0)
  const [hour,setHour]=useState(59)
  const [minute,setMinute]=useState(59)
  const [second,setSecond]=useState(58)


  useEffect(() => {
    const timer = setTimeout(() => {
        setSecond(second+1)
        if(second>=59){
            setMinute(minute+1)
            setSecond(0)
            if(minute>=59){
                setHour(hour+1)
                setMinute(0)
            }
            if(hour>=24){
              setDay(day+1)
              setHour(0)
            }
        }
    }, 1000)

    return () => {
      clearTimeout(timer)
    }
  }, [second])

  return (
    
    <div>
      <Sidebar/>
      
        {/* end sidenav */}
        <main className="relative h-full max-h-screen transition-all duration-200 ease-in-out xl:ml-68 rounded-xl">
          {/* Navbar */}
          
          <div className="w-full px-6 py-6 mx-auto">
        <div className="flex flex-wrap -mx-3">
          <div className="max-w-full px-3 lg:w-2/3 lg:flex-none">
            <div className="flex flex-wrap -mx-3">
              <div className="w-full max-w-full px-3 mb-6 xl:mb-0 xl:w-1/2 xl:flex-none">
                <div className="relative flex flex-col min-w-0 break-words bg-transparent border-0 border-transparent border-solid shadow-xl rounded-2xl bg-clip-border">
                  <div className="relative overflow-hidden rounded-2xl" style={{backgroundImage: 'url("https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/card-visa.jpg")'}}>
                    <span className="absolute top-0 left-0 w-full h-full bg-center bg-cover bg-gradient-to-tl from-zinc-800 to-zinc-700 dark:bg-gradient-to-tl dark:from-slate-750 dark:to-gray-850 opacity-80" />
                    <div className="relative z-10 flex-auto p-4">
                      <i className="p-2 text-white fas fa-wifi" aria-hidden="true" />
                      <h5 className="pb-2 mt-6 mb-12 text-white">Most Important Project</h5>
                      <div className="flex">
                        <div className="flex">
                          <div className="mr-6">
                            <p className="mb-0 text-sm leading-normal text-white opacity-80">ProjectName</p>
                            <h6 className="mb-0 text-white">Portal-Markazi</h6>
                          </div>
                          <div>
                            <p className="mb-0 text-sm leading-normal text-white opacity-80">Deadline</p>
                            <h6 className="mb-0 text-white">2022/11/10</h6>
                          </div>
                        </div>
                        <div className="flex items-end justify-end w-1/5 ml-auto">
                          <img className="w-3/5 mt-2 rounded-lg" src="https://avatars.githubusercontent.com/u/109419883?s=400&u=14d45e93e7b554e7eddc5111ee0dfb6c9220541d&v=4" alt="logo" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full max-w-full px-3 xl:w-1/2 xl:flex-none">
                <div className="flex flex-wrap -mx-3">
                  <div className="w-full max-w-full px-3 md:w-1/2 md:flex-none">
                    <div className="relative flex flex-col min-w-0 break-words bg-white border-0 border-transparent border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
                      <div className="p-4 mx-6 mb-0 text-center border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
                        <AiFillCodeSandboxSquare size={20}/>
                      </div>
                      <div className="flex-auto p-4 pt-0 text-center">
                        <h6 className="mb-0 text-center dark:text-white">Activity</h6>
                        <span className="text-xs leading-tight dark:text-white dark:opacity-80">Sum Of Your Activities</span>
                        <hr className="h-px my-4 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent" />
                        <h5 className="mb-0 dark:text-white">+2000 Hour</h5>
                      </div>
                    </div>
                  </div>
                  <div className="w-full max-w-full px-3 mt-6 md:mt-0 md:w-1/2 md:flex-none">
                    <div className="relative flex flex-col min-w-0 break-words bg-white border-0 border-transparent border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
                      <div className="p-4 mx-6 mb-0 text-center border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
                          <GiTrophyCup size={20}/>
                        
                      </div>
                      <div className="flex-auto p-4 pt-0 text-center">
                        <h6 className="mb-0 text-center dark:text-white">Rank</h6>
                        <span className="text-xs leading-tight dark:text-white dark:opacity-80">TopUser</span>
                        <hr className="h-px my-4 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent" />
                        <h5 className="mb-0 dark:text-white">4 of 10</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="max-w-full px-3 mb-6 lg:mb-0 lg:w-full lg:flex-none">
                <div className="relative flex flex-col min-w-0 mt-6 break-words bg-white border-0 border-transparent border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
                  <div className="p-4 pb-0 mb-0 border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
                    <div className="flex flex-wrap -mx-3">
                      <div className="flex items-center flex-none w-1/2 max-w-full px-3">
                        <h6 className="mb-0 dark:text-white">Active Projects</h6>
                      </div>
                      
                    </div>
                  </div>
                  <div className="flex-auto p-4">
                    <div className="flex flex-wrap -mx-3">
                      <div className="max-w-full px-3 mb-6 md:mb-0 md:w-1/2 md:flex-none">
                        <div className="relative flex flex-row items-center flex-auto min-w-0 p-6 break-words bg-transparent border border-solid shadow-none md-max:overflow-auto rounded-xl border-slate-100 dark:border-slate-700 bg-clip-border">
                          <img className="mb-0 mr-4 w-1/10" src="/images/logos/mastercard.png" alt="logo" />
                          <h6 className="mb-0 dark:text-white">SpaceBimeh</h6>
                          <i className="ml-auto cursor-pointer fas fa-pencil-alt text-slate-700" data-target="tooltip_trigger" data-placement="top" aria-hidden="true" />
                          <div data-target="tooltip" className="hidden px-2 py-1 text-sm text-white bg-black rounded-lg" data-popper-placement="top" style={{position: 'absolute', inset: 'auto auto 0px 0px', margin: '0px', transform: 'translate(595px, -519px)'}}>
                            Edit Card
                            <div className="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']" data-popper-arrow style={{position: 'absolute', left: '0px', transform: 'translate(0px, 0px)'}} />
                          </div>
                        </div>
                      </div>
                      <div className="max-w-full px-3 md:w-1/2 md:flex-none">
                        <div className="relative flex flex-row items-center flex-auto min-w-0 p-6 break-words bg-transparent border border-solid shadow-none md-max:overflow-auto rounded-xl border-slate-100 dark:border-slate-700 bg-clip-border">
                          <img className="mb-0 mr-4 w-1/10" src="/images/logos/visa.png" alt="logo" />
                          <h6 className="mb-0 dark:text-white">KargozareBimeh</h6>
                          <i className="ml-auto cursor-pointer fas fa-pencil-alt text-slate-700" data-target="tooltip_trigger" data-placement="top" aria-hidden="true" />
                          <div data-target="tooltip" className="hidden px-2 py-1 text-sm text-white bg-black rounded-lg" data-popper-placement="top" style={{position: 'absolute', inset: 'auto auto 0px 0px', margin: '0px', transform: 'translate(936px, -519px)'}}>
                            Edit Card
                            <div className="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']" data-popper-arrow style={{position: 'absolute', left: '0px', transform: 'translate(0px, 0px)'}} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full max-w-full px-3 lg:w-1/3 lg:flex-none">
            <div className="relative flex flex-col h-full min-w-0 break-words bg-white border-0 border-transparent border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
              <div className="p-4 pb-0 mb-0 border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
                <div className="flex flex-wrap -mx-3">
                  <div className="flex items-center flex-none w-1/2 max-w-full px-3">
                    <h6 className="mb-0 dark:text-white">Top Users</h6>
                  </div>
                  <div className="flex-none w-1/2 max-w-full px-3 text-right">
                  <Link href="/user/team">
                  
                  <button className="inline-block px-8 py-2 mb-0 text-xs font-bold leading-normal text-center text-blue-500 align-middle transition-all ease-in bg-transparent border border-blue-500 border-solid rounded-lg shadow-none cursor-pointer bg-150 active:opacity-85 hover:-translate-y-px tracking-tight-rem bg-x-25 hover:opacity-75">View All</button>

                  </Link>
                  </div>
                </div>
              </div>
              <div className="flex-auto p-4 pb-0">
                <ul className="flex flex-col pl-0 mb-0 rounded-lg">
                  <li className="relative flex justify-between px-4 py-2 pl-0 mb-2 border-0 rounded-t-inherit text-inherit rounded-xl">
                    <div className="flex flex-col">
                      <h6 className="mb-1 text-sm font-semibold leading-normal dark:text-white text-slate-700">       <img src="/images/team-2.jpg" className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl" alt="user1" />
 March, 01, 2020</h6>
                     
                    </div>
                    <div className="flex items-center text-sm leading-normal dark:text-white/80">
                      Rank 1
                      <button className="dark:text-white inline-block px-0 py-2.5 mb-0 ml-6 font-bold leading-normal text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer ease-in bg-150 text-sm active:opacity-85 hover:-translate-y-px tracking-tight-rem bg-x-25 text-slate-700"><i className="mr-1 text-lg leading-none fas fa-file-pdf" aria-hidden="true" /> 130 hour</button>
                    </div>
                  </li>
                  <li className="relative flex justify-between px-4 py-2 pl-0 mb-2 border-0 rounded-xl text-inherit">
                    <div className="flex flex-col">
                      <h6 className="mb-1 text-sm font-semibold leading-normal dark:text-white text-slate-700">February, 10, 2021</h6>
                      <span className="text-xs leading-tight dark:text-white dark:opacity-80">#RV-126749</span>
                    </div>
                    <div className="flex items-center text-sm leading-normal dark:text-white/80">
                      $250
                      <button className="dark:text-white inline-block px-0 py-2.5 mb-0 ml-6 font-bold leading-normal text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer ease-in bg-150 text-sm active:opacity-85 hover:-translate-y-px tracking-tight-rem bg-x-25 text-slate-700"><i className="mr-1 text-lg leading-none fas fa-file-pdf" aria-hidden="true" /> PDF</button>
                    </div>
                  </li>
                  <li className="relative flex justify-between px-4 py-2 pl-0 mb-2 border-0 rounded-xl text-inherit">
                    <div className="flex flex-col">
                      <h6 className="mb-1 text-sm font-semibold leading-normal dark:text-white text-slate-700">April, 05, 2020</h6>
                      <span className="text-xs leading-tight dark:text-white dark:opacity-80">#FB-212562</span>
                    </div>
                    <div className="flex items-center text-sm leading-normal dark:text-white/80">
                      $560
                      <button className="dark:text-white inline-block px-0 py-2.5 mb-0 ml-6 font-bold leading-normal text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer ease-in bg-150 text-sm active:opacity-85 hover:-translate-y-px tracking-tight-rem bg-x-25 text-slate-700"><i className="mr-1 text-lg leading-none fas fa-file-pdf" aria-hidden="true" /> PDF</button>
                    </div>
                  </li>
                  <li className="relative flex justify-between px-4 py-2 pl-0 mb-2 border-0 rounded-xl text-inherit">
                    <div className="flex flex-col">
                      <h6 className="mb-1 text-sm font-semibold leading-normal dark:text-white text-slate-700">June, 25, 2019</h6>
                      <span className="text-xs leading-tight dark:text-white dark:opacity-80">#QW-103578</span>
                    </div>
                    <div className="flex items-center text-sm leading-normal dark:text-white/80">
                      $120
                      <button className="dark:text-white inline-block px-0 py-2.5 mb-0 ml-6 font-bold leading-normal text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer ease-in bg-150 text-sm active:opacity-85 hover:-translate-y-px tracking-tight-rem bg-x-25 text-slate-700"><i className="mr-1 text-lg leading-none fas fa-file-pdf" aria-hidden="true" /> PDF</button>
                    </div>
                  </li>
                  <li className="relative flex justify-between px-4 py-2 pl-0 border-0 rounded-b-inherit rounded-xl text-inherit">
                    <div className="flex flex-col">
                      <h6 className="mb-1 text-sm font-semibold leading-normal dark:text-white text-slate-700">March, 01, 2019</h6>
                      <span className="text-xs leading-tight dark:text-white dark:opacity-80">#AR-803481</span>
                    </div>
                    <div className="flex items-center text-sm leading-normal dark:text-white/80">
                      $300
                      <button className="dark:text-white inline-block px-0 py-2.5 mb-0 ml-6 font-bold leading-normal text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer ease-in bg-150 text-sm active:opacity-85 hover:-translate-y-px tracking-tight-rem bg-x-25 text-slate-700"><i className="mr-1 text-lg leading-none fas fa-file-pdf" aria-hidden="true" /> PDF</button>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3">
          <div className="w-full max-w-full px-3 mt-6 md:w-7/12 md:flex-none">
            <div className="relative flex flex-col min-w-0 break-words bg-white border-0 shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
              <div className="p-6 px-4 pb-0 mb-0 border-b-0 rounded-t-2xl">
                <h6 className="mb-0 dark:text-white">All Projects</h6>
              </div>
              <div className="flex-auto p-4 pt-6">
                <ul className="flex flex-col pl-0 mb-0 rounded-lg">
                  <li className="relative flex p-6 mb-2 border-0 rounded-t-inherit rounded-xl bg-gray-50 dark:bg-slate-850">
                    <div className="flex flex-col">
                      <h6 className="mb-4 text-sm leading-normal dark:text-white">Oliver Liam</h6>
                      <span className="mb-2 text-xs leading-tight dark:text-white/80">Company Name: <span className="font-semibold text-slate-700 dark:text-white sm:ml-2">Viking Burrito</span></span>
                      <span className="mb-2 text-xs leading-tight dark:text-white/80">Email Address: <span className="font-semibold text-slate-700 dark:text-white sm:ml-2">oliver@burrito.com</span></span>
                      <span className="text-xs leading-tight dark:text-white/80">VAT Number: <span className="font-semibold text-slate-700 dark:text-white sm:ml-2">FRB1235476</span></span>
                    </div>
                    <div className="ml-auto text-right">
                      <a className="relative z-10 inline-block px-4 py-2.5 mb-0 font-bold text-center text-transparent align-middle transition-all border-0 rounded-lg shadow-none cursor-pointer leading-normal text-sm ease-in bg-150 bg-gradient-to-tl from-red-600 to-orange-600 hover:-translate-y-px active:opacity-85 bg-x-25 bg-clip-text" href="javascript:;"><i className="mr-2 far fa-trash-alt bg-150 bg-gradient-to-tl from-red-600 to-orange-600 bg-x-25 bg-clip-text" aria-hidden="true" />Delete</a>
                      <a className="inline-block dark:text-white px-4 py-2.5 mb-0 font-bold text-center align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer leading-normal text-sm ease-in bg-150 hover:-translate-y-px active:opacity-85 bg-x-25 text-slate-700" href="javascript:;"><i className="mr-2 fas fa-pencil-alt text-slate-700" aria-hidden="true" />Edit</a>
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
          <div className="w-full max-w-full px-3 mt-6 md:w-5/12 md:flex-none">
            <div className="relative flex flex-col h-full min-w-0 mb-6 break-words bg-white border-0 shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
              <div className="p-6 px-4 pb-0 mb-0 border-b-0 rounded-t-2xl">
                <div className="flex flex-wrap -mx-3">
                  <div className="max-w-full px-3 md:w-1/2 md:flex-none">
                    <h6 className="mb-0 dark:text-white">Your Activities</h6>
                    <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
      <div className="flex flex-col p-2 bg-neutral rounded-lg px-3 text-neutral-content">
        <Countdown className="font-mono text-2xl" value={day} />
        days
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-lg px-3 text-neutral-content">
        <Countdown className="font-mono text-2xl" value={hour} />
        hours
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-lg px-3 text-neutral-content">
        <Countdown className="font-mono text-2xl" value={minute} />
        min
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-lg px-3 text-neutral-content">
        <Countdown className="font-mono text-2xl" value={second} />
        sec
      </div>
    </div>
                  </div>
                  
                  <div className="flex items-center justify-end max-w-full px-3 dark:text-white/80 md:w-1/2 md:flex-none">
                 
                    <i className="mr-2 far fa-calendar-alt" aria-hidden="true" />
                    <button onClick={()=>startTime()} className="bg-150 bg-x-25 hover:shadow-xs mt-5 inline-block w-82  select-none rounded-lg border-0 bg-blue-500 px-8 py-3 text-center align-middle text-xs font-bold leading-normal text-white shadow-md transition-all ease-in hover:-translate-y-px" > <BsFillPlayFill size={20} />  </button>
                  
                  </div>
                  
                </div>
              </div>
              <div className="flex-auto p-4 pt-6">
                <h6 className="mb-4 text-xs font-bold leading-tight uppercase dark:text-white text-slate-500">Newest</h6>
                <ul className="flex flex-col pl-0 mb-0 rounded-lg">
                  <li className="relative flex justify-between px-4 py-2 pl-0 mb-2 border-0 rounded-t-inherit text-inherit rounded-xl">
                    <div className="flex items-center">
                      <button className="leading-pro ease-in text-xs bg-150 w-6.5 h-6.5 p-1.2 rounded-3.5xl tracking-tight-rem bg-x-25 mr-4 mb-0 flex cursor-pointer items-center justify-center border border-solid border-red-600 border-transparent bg-transparent text-center align-middle font-bold uppercase text-red-600 transition-all hover:opacity-75"><i className="fas fa-arrow-down text-3xs" aria-hidden="true" /></button>
                      <div className="flex flex-col">
                        <h6 className="mb-1 text-sm leading-normal dark:text-white text-slate-700">Netflix</h6>
                        <span className="text-xs leading-tight dark:text-white/80">27 March 2020, at 12:30 PM</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <p className="relative z-10 inline-block m-0 text-sm font-semibold leading-normal text-transparent bg-gradient-to-tl from-red-600 to-orange-600 bg-clip-text">- $ 2,500</p>
                    </div>
                  </li>
                  <li className="relative flex justify-between px-4 py-2 pl-0 mb-2 border-0 border-t-0 rounded-b-inherit text-inherit rounded-xl">
                    <div className="flex items-center">
                      <button className="leading-pro ease-in text-xs bg-150 w-6.5 h-6.5 p-1.2 rounded-3.5xl tracking-tight-rem bg-x-25 mr-4 mb-0 flex cursor-pointer items-center justify-center border border-solid border-emerald-500 border-transparent bg-transparent text-center align-middle font-bold uppercase text-emerald-500 transition-all hover:opacity-75"><i className="fas fa-arrow-up text-3xs" aria-hidden="true" /></button>
                      <div className="flex flex-col">
                        <h6 className="mb-1 text-sm leading-normal dark:text-white text-slate-700">Apple</h6>
                        <span className="text-xs leading-tight dark:text-white/80">27 March 2020, at 04:30 AM</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <p className="relative z-10 inline-block m-0 text-sm font-semibold leading-normal text-transparent bg-gradient-to-tl from-green-600 to-lime-400 bg-clip-text">+ $ 2,000</p>
                    </div>
                  </li>
                </ul>
                <h6 className="my-4 text-xs font-bold leading-tight uppercase dark:text-white text-slate-500">Yesterday</h6>
                <ul className="flex flex-col pl-0 mb-0 rounded-lg">
                  <li className="relative flex justify-between px-4 py-2 pl-0 mb-2 border-0 rounded-t-inherit text-inherit rounded-xl">
                    <div className="flex items-center">
                      <button className="leading-pro ease-in text-xs bg-150 w-6.5 h-6.5 p-1.2 rounded-3.5xl tracking-tight-rem bg-x-25 mr-4 mb-0 flex cursor-pointer items-center justify-center border border-solid border-emerald-500 border-transparent bg-transparent text-center align-middle font-bold uppercase text-emerald-500 transition-all hover:opacity-75"><i className="fas fa-arrow-up text-3xs" aria-hidden="true" /></button>
                      <div className="flex flex-col">
                        <h6 className="mb-1 text-sm leading-normal dark:text-white text-slate-700">Stripe</h6>
                        <span className="text-xs leading-tight dark:text-white/80">26 March 2020, at 13:45 PM</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <p className="relative z-10 inline-block m-0 text-sm font-semibold leading-normal text-transparent bg-gradient-to-tl from-green-600 to-lime-400 bg-clip-text">+ $ 750</p>
                    </div>
                  </li>
                  <li className="relative flex justify-between px-4 py-2 pl-0 mb-2 border-0 border-t-0 text-inherit rounded-xl">
                    <div className="flex items-center">
                      <button className="leading-pro ease-in text-xs bg-150 w-6.5 h-6.5 p-1.2 rounded-3.5xl tracking-tight-rem bg-x-25 mr-4 mb-0 flex cursor-pointer items-center justify-center border border-solid border-emerald-500 border-transparent bg-transparent text-center align-middle font-bold uppercase text-emerald-500 transition-all hover:opacity-75"><i className="fas fa-arrow-up text-3xs" aria-hidden="true" /></button>
                      <div className="flex flex-col">
                        <h6 className="mb-1 text-sm leading-normal dark:text-white text-slate-700">HubSpot</h6>
                        <span className="text-xs leading-tight dark:text-white/80">26 March 2020, at 12:30 PM</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <p className="relative z-10 inline-block m-0 text-sm font-semibold leading-normal text-transparent bg-gradient-to-tl from-green-600 to-lime-400 bg-clip-text">+ $ 1,000</p>
                    </div>
                  </li>
                  <li className="relative flex justify-between px-4 py-2 pl-0 mb-2 border-0 border-t-0 text-inherit rounded-xl">
                    <div className="flex items-center">
                      <button className="leading-pro ease-in text-xs bg-150 w-6.5 h-6.5 p-1.2 rounded-3.5xl tracking-tight-rem bg-x-25 mr-4 mb-0 flex cursor-pointer items-center justify-center border border-solid border-emerald-500 border-transparent bg-transparent text-center align-middle font-bold uppercase text-emerald-500 transition-all hover:opacity-75"><i className="fas fa-arrow-up text-3xs" aria-hidden="true" /></button>
                      <div className="flex flex-col">
                        <h6 className="mb-1 text-sm leading-normal dark:text-white text-slate-700">Creative Tim</h6>
                        <span className="text-xs leading-tight dark:text-white/80">26 March 2020, at 08:30 AM</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <p className="relative z-10 items-center inline-block m-0 text-sm font-semibold leading-normal text-transparent bg-gradient-to-tl from-green-600 to-lime-400 bg-clip-text">+ $ 2,500</p>
                    </div>
                  </li>
                  <li className="relative flex justify-between px-4 py-2 pl-0 mb-2 border-0 border-t-0 rounded-b-inherit text-inherit rounded-xl">
                    <div className="flex items-center">
                      <button className="leading-pro ease-in text-xs bg-150 w-6.5 h-6.5 p-1.2 rounded-3.5xl tracking-tight-rem bg-x-25 mr-4 mb-0 flex cursor-pointer items-center justify-center border border-solid border-slate-700 border-transparent bg-transparent text-center align-middle font-bold uppercase text-slate-700 transition-all hover:opacity-75"><i className="fas fa-exclamation text-3xs" aria-hidden="true" /></button>
                      <div className="flex flex-col">
                        <h6 className="mb-1 text-sm leading-normal dark:text-white text-slate-700">Webflow</h6>
                        <span className="text-xs leading-tight dark:text-white/80">26 March 2020, at 05:00 AM</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <p className="flex items-center m-0 text-sm font-semibold leading-normal text-slate-700">Pending</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
       
      </div>
        </main>
        
        
      </div>




  )
}