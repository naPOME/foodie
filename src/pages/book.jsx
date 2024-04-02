import React from 'react'

export const Book = () => {
  return (
    <div className='mt-10 '>
        <div>
            <p className='text-center font-thin text-sm text-gray-600 pt-5 pb-5'>Book Table</p>
            <h2 class="text-3xl md:text-4xl font-light mb-5 text-slate-600 text-center">Book Your <span className='text-orange-500 text-3xl md:text-4xl font-bold mb-5 t'>Stay With Us</span></h2>
        </div>
    <div class="flex items-center justify-center p-12">
        
        <div className=''>
            <img src="https://images.pexels.com/photos/331107/pexels-photo-331107.jpeg?auto=compress&cs=tinysrgb&w=600" className='rounded-sm' alt="" />
        </div>
    
    <div class="mx-auto w-full max-w-[550px] bg-white ">
        <form>
            <div class="-mx-3 flex flex-wrap ">
                <div class="w-full px-3 sm:w-1/2">
                    <div class="mb-5"> 
                        <label for="fName" class="mb-3 block text-base font-medium text-gray-600">
                            First Name
                        </label>
                        <input type="text" name="fName" id="fName" placeholder="First Name"
                            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-light text-gray-600 outline-none focus:border-[#6A64F1] focus:shadow-md" />
                    </div>
                </div>
                <div class="w-full px-3 sm:w-1/2">
                    <div class="mb-5">
                        <label for="lName" class="mb-3 block text-base font-medium text-gray-600">
                            Last Name
                        </label>
                        <input type="text" name="lName" id="lName" placeholder="Last Name"
                            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-light text-gray-600 outline-none focus:border-[#6A64F1] focus:shadow-md" />
                    </div>
                </div>
            </div>
            <div class="mb-5">
                <label for="guest" class="mb-3 block text-base font-medium text-gray-600">
                    How many guest are you bringing?
                </label>
                <input type="number" name="guest" id="guest" placeholder="5" min="0"
                    class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-light text-text-gray-600 outline-none focus:border-[#6A64F1] focus:shadow-md" />
            </div>
            <div class="-mx-3 flex flex-wrap">
                <div class="w-full px-3 sm:w-1/2">
                    <div class="mb-5">
                        <label for="date" class="mb-3 block text-base font-medium text-gray-600">
                            Date
                        </label>
                        <input type="date" name="date" id="date"
                            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                    </div>
                </div>
                <div class="w-full px-3 sm:w-1/2">
                    <div class="mb-5">
                        <label for="time" class="mb-3 block text-base font-medium text-gray-600">
                            Time
                        </label>
                        <input type="time" name="time" id="time"
                            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                    </div>
                </div>
            </div>
            <div>
                <button
                    class="hover:shadow-form rounded-3xl bg-orange-500 py-3 px-8 text-center text-base font-semibold text-gray-100 outline-none">
                    Submit
                </button>
            </div>
        </form>
    </div>
</div>
</div>
  )
}
