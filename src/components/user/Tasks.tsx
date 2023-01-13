import Sidebar from '@/components/layout/Sidebar';
import React from 'react';
import { AiOutlineClockCircle, AiOutlineGithub } from 'react-icons/ai';
import { FaDiscord } from 'react-icons/fa';
import { IoCall } from 'react-icons/io5';
import {GrInProgress} from 'react-icons/gr'
import { MdDone } from 'react-icons/md';
import { BsFillPlayFill } from 'react-icons/bs';
type Props = {};

export default function Tasks({}: Props) {
  return (
    <>
      <Sidebar />
      <main className='xl:ml-68 ps ps--active-y relative h-full max-h-screen rounded-xl transition-all duration-200 ease-in-out'>
        <div className='mx-auto w-full px-6 py-6'>
          <div className='-mx-3 flex flex-wrap'>
            <div className='w-full max-w-full flex-none px-3'>
              <div className='dark:bg-slate-850 dark:shadow-dark-xl relative mb-6 flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid border-transparent bg-white bg-clip-border shadow-xl'>
                <div className='border-b-solid mb-0 rounded-t-2xl border-b-0 border-b-transparent p-6 pb-0'>
                  <h6 className='dark:text-white'>Todays Tasks</h6>
                </div>
                <div className='flex-auto px-0 pt-0 pb-2'>
                  <div className='ps overflow-x-auto p-0'>
                    <div className='overflow-x-auto '>
                      <table className='w-full text-left text-sm text-gray-500 dark:text-gray-400'>
                        <thead className='bg-gray-50 text-xs uppercase text-center text-gray-700 dark:bg-gray-700 dark:text-gray-400'>
                          <tr>
                            <th scope='col' className='py-3 px-6'>
                              TaskName
                            </th>
                            <th scope='col' className='py-3 px-6'>
                              Status
                            </th>
                            <th scope='col' className='py-3 px-6'>
                              Priority
                            </th>
                            <th scope='col' className='py-3 px-6'>
                              Estimate
                            </th>
                            <th scope='col' className='py-3 px-6'>
                              Labels
                            </th>
                            <th scope='col' className='py-3 px-6'>
                              Project
                            </th>
                            <th scope='col' className='py-3 px-6'>
                              Start Time-End Time
                            </th>
                            <th scope='col' className='py-3 px-6'>
                              Change Status
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className='border-b text-center bg-white dark:border-gray-700 dark:bg-gray-800'>
                            <th
                              scope='row'
                              className='whitespace-nowrap py-4 px-6 font-medium text-gray-900 dark:text-white'
                            >
                              Apple MacBook Pro 17"
                            </th>
                            <td className='py-4 px-6'>Sliver</td>
                            <td className='py-4 px-6'>Laptop</td>
                            <td className='py-4 px-6'>12</td>
                            <td className='py-4 px-6'>FrontEnd</td>
                            <td className='py-4 px-6'>SpaceBimeh</td>
                            <td className='py-4 px-6'>
                              2022-12-20 __ 2022-12-24
                            </td>
                            <td className='py-4 px-6'>
                            <button disabled  className="inline-block w-auto px-8 py-2    font-bold leading-normal text-sm text-center text-white capitalize transition-all ease-in rounded-lg shadow-md bg-slate-700 bg-150 text-xs hover:shadow-xs hover:-translate-y-px"> <BsFillPlayFill color='#ffffff' size={20}/> </button>
                            <a href="https://www.creative-tim.com/learning-lab/tailwind/html/quick-start/argon-dashboard/?_ga=2.247388612.1592100210.1663838560-607442646.1657624050" target="_blank" className="inline-block w-auto px-8 py-2  font-bold leading-normal text-sm text-center text-white capitalize transition-all ease-in rounded-lg shadow-md bg-slate-700 bg-150 text-xs hover:shadow-xs hover:-translate-y-px ml-5"> <MdDone color='#ffffff' size={20}/> </a>

                            </td>
                          </tr>
                          <tr className='border-b bg-white dark:border-gray-700 dark:bg-gray-800'>
                            <th
                              scope='row'
                              className='whitespace-nowrap py-4 px-6 font-medium text-gray-900 dark:text-white'
                            >
                              Microsoft Surface Pro
                            </th>
                            <td className='py-4 px-6'>White</td>
                            <td className='py-4 px-6'>Laptop PC</td>
                            <td className='py-4 px-6'>$1999</td>
                          </tr>
                          <tr className='bg-white dark:bg-gray-800'>
                            <th
                              scope='row'
                              className='whitespace-nowrap py-4 px-6 font-medium text-gray-900 dark:text-white'
                            >
                              Magic Mouse 2
                            </th>
                            <td className='py-4 px-6'>Black</td>
                            <td className='py-4 px-6'>Accessories</td>
                            <td className='py-4 px-6'>$99</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div
                      className='ps__rail-x'
                      style={{ left: '0px', bottom: '0px' }}
                    >
                      <div
                        className='ps__thumb-x'
                        tabIndex={0}
                        style={{ left: '0px', width: '0px' }}
                      />
                    </div>
                    <div
                      className='ps__rail-y'
                      style={{ top: '0px', right: '0px' }}
                    >
                      <div
                        className='ps__thumb-y'
                        tabIndex={0}
                        style={{ top: '0px', height: '0px' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
