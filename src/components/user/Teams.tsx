import React, { useState } from 'react'
import { AiOutlineGithub } from 'react-icons/ai'
import { FaDiscord } from 'react-icons/fa'
import Sidebar from '../layout/Sidebar'
import {IoCall} from 'react-icons/io5'
import { Countdown } from 'react-daisyui'

type Props = {}

export default function Teams({}: Props) {
  const [value, setValue] = useState<number>(12)

  return (
    
   <>
   
   <Sidebar/>
         <main className="relative h-full max-h-screen transition-all duration-200 ease-in-out xl:ml-68 rounded-xl ps ps--active-y">
        
        <div className="w-full px-6 py-6 mx-auto">
          <div className="flex flex-wrap -mx-3">
            <div className="flex-none w-full max-w-full px-3">
              <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
                <div className="p-6 pb-0 mb-0 border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
                  <h6 className="dark:text-white">All Users</h6>
                </div>
                <div className="flex-auto px-0 pt-0 pb-2">
                  <div className="p-0 overflow-x-auto ps">
                    <table className="items-center w-full mb-0 align-top border-collapse dark:border-white/40 text-slate-500">
                      <thead className="align-bottom">
                        <tr>
                          <th className="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Username</th>
                          <th className="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Position</th>
                          <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Status</th>
                          <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">LastActive</th>
                          <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Rank</th>
                          <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Score</th>
                          <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">SocialMedia</th>

                        </tr>
                      </thead>
                      <tbody>
                      
                        <tr>
                          <td className="p-2 align-middle bg-transparent border-b-0 whitespace-nowrap shadow-transparent">
                            <div className="flex px-2 py-1">
                              <div>
                                <img src="/images/team-4.jpg" className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl" alt="user6" />
                              </div>
                              <div className="flex flex-col justify-center">
                                <h6 className="mb-0 text-sm leading-normal dark:text-white">Miriam Eric</h6>
                                <p className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">miriam@creative-tim.com</p>
                              </div>
                            </div>
                          </td>
                          <td className="p-2 align-middle bg-transparent border-b-0 whitespace-nowrap shadow-transparent">
                            <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-80">Programtor</p>
                            <p className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">Developer</p>
                          </td>
                          <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b-0 whitespace-nowrap shadow-transparent">
                            <span className="bg-gradient-to-tl from-slate-600 to-slate-300 px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">Offline</span>
                          </td>
                          <td className="p-2 text-center align-middle bg-transparent border-b-0 whitespace-nowrap shadow-transparent">
                            <span className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400">14/09/20</span>
                          </td>
                          <td className="p-2 text-center align-middle bg-transparent border-b-0 whitespace-nowrap shadow-transparent">
                            <span className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400">1</span>
                          </td>
                          <td className="p-2 text-center align-middle bg-transparent border-b-0 whitespace-nowrap shadow-transparent">
                            <span className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 text-slate-400">120</span>
                          </td>
                          
                          <td className="p-2 text-center align-middle bg-transparent border-b-0 whitespace-nowrap shadow-transparent">
                          <a href="https://www.creative-tim.com/learning-lab/tailwind/html/quick-start/argon-dashboard/?_ga=2.247388612.1592100210.1663838560-607442646.1657624050" target="_blank" className="inline-block w-auto px-8 py-2  font-bold leading-normal text-sm text-center text-white capitalize transition-all ease-in rounded-lg shadow-md bg-slate-700 bg-150 text-xs hover:shadow-xs hover:-translate-y-px"> <AiOutlineGithub size={20}/> </a>
                          <a href="https://www.creative-tim.com/learning-lab/tailwind/html/quick-start/argon-dashboard/?_ga=2.247388612.1592100210.1663838560-607442646.1657624050" target="_blank" className="inline-block w-auto px-8 py-2 ml-4  font-bold leading-normal text-sm text-center text-white capitalize transition-all ease-in rounded-lg shadow-md bg-slate-700 bg-150 text-xs hover:shadow-xs hover:-translate-y-px"> <FaDiscord size={20}/> </a>
                          <a href="https://www.creative-tim.com/learning-lab/tailwind/html/quick-start/argon-dashboard/?_ga=2.247388612.1592100210.1663838560-607442646.1657624050" target="_blank" className="inline-block w-auto px-8 py-2 ml-4  font-bold leading-normal text-sm text-center text-white capitalize transition-all ease-in rounded-lg shadow-md bg-slate-700 bg-150 text-xs hover:shadow-xs hover:-translate-y-px"> <IoCall size={20}/> </a>


                          </td>
                          
                        </tr>
                      </tbody>
                    </table>
                    <div className="ps__rail-x" style={{left: '0px', bottom: '0px'}}><div className="ps__thumb-x" tabIndex={0} style={{left: '0px', width: '0px'}} /></div><div className="ps__rail-y" style={{top: '0px', right: '0px'}}><div className="ps__thumb-y" tabIndex={0} style={{top: '0px', height: '0px'}} /></div></div>
                </div>
              </div>
            </div>
          </div>
         
        </div>
        </main>
        
   </>
   

  )
}