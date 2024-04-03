import React from 'react';

export const Book = () => {
  return (
    <div className='mt-10'>
        <div className='text-center'>
            <p className='font-thin text-sm text-gray-600 pt-3 pb-3'>Book Table</p>
            <h2 className='text-3xl md:text-4xl font-light mb-5 text-slate-600'>Book Your <span className='text-orange-500 font-bold'>Stay With Us</span></h2>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center p-12">
            
            <div className='mb-5 md:mb-0 md:mr-12'>
                <img src="https://images.pexels.com/photos/331107/pexels-photo-331107.jpeg?auto=compress&cs=tinysrgb&w=600" className='rounded-sm' alt="" />
            </div>
        
            <div className="w-full max-w-[550px] bg-white ">
                <form>
                    <div className="-mx-3 flex flex-wrap ">
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5"> 
                                <label htmlFor="fName" className="mb-3 block text-base font-medium text-gray-600">
                                    First Name
                                </label>
                                <input type="text" name="fName" id="fName" placeholder="First Name"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-light text-gray-600 outline-none focus:border-[#6A64F1] focus:shadow-md" />
                            </div>
                        </div>
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label htmlFor="lName" className="mb-3 block text-base font-medium text-gray-600">
                                    Last Name
                                </label>
                                <input type="text" name="lName" id="lName" placeholder="Last Name"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-light text-gray-600 outline-none focus:border-[#6A64F1] focus:shadow-md" />
                            </div>
                        </div>
                    </div>
                    <div className="mb-5">
                        <label htmlFor="guest" className="mb-3 block text-base font-medium text-gray-600">
                            How many guests are you bringing?
                        </label>
                        <input type="number" name="guest" id="guest" placeholder="5" min="0"
                            className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-light text-gray-600 outline-none focus:border-[#6A64F1] focus:shadow-md" />
                    </div>
                    <div className="-mx-3 flex flex-wrap">
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label htmlFor="date" className="mb-3 block text-base font-medium text-gray-600">
                                    Date
                                </label>
                                <input type="date" name="date" id="date"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                            </div>
                        </div>
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label htmlFor="time" className="mb-3 block text-base font-medium text-gray-600">
                                    Time
                                </label>
                                <input type="time" name="time" id="time"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <button
                            className="hover:shadow-form rounded-3xl bg-orange-500 py-3 px-8 text-center text-base font-semibold text-gray-100 outline-none">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
