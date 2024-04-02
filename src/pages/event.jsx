import React from 'react'

export const Event = () => {
  return (
    <section class="mt-10 pb-10">
        <p className='text-center text-slate-500 font-thin text-sm pb-10'>Events</p>
        <h1 className='text-center text-slate-600 font-extralight text-4xl pb-10'>Share Your <span className='text-orange-500 font-bold'>Moment</span> With Us</h1>

	<div class="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
		<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
			<div class="col-span-2 sm:col-span-1 md:col-span-2  h-auto md:h-full flex flex-col">
				<a href="" class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
					<img src="https://images.pexels.com/photos/2788488/pexels-photo-2788488.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"/>
					<div class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
					<h2 class="z-10 text-2xl  text-orange-500 absolute top-0 left-0 p-4 xs:text-xl font-thin md:text-3xl underline">$400</h2>
                    <h3 className='z-10 text-2xl text-slate-100 absolute top-10 left-0 p-4 xs:text-xl font-medium md:text-2xl'>Wedding Ceremony</h3>
				</a>
			</div>
			<div class="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50 opacity-90">
				<a href="" class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4">
					<img src="https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"/>
					<div class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
					<h2 class="z-10 text-2xl  text-orange-500 absolute top-0 right-0 p-4 xs:text-xl font-thin md:text-3xl underline">$400</h2>
                    <h3 className='z-10 text-2xl text-slate-100 absolute top-10 right-0 p-4 xs:text-xl font-medium md:text-2xl'>Private Parties</h3>
				</a>
				<div class="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
					<a href="" class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
						<img src="https://images.pexels.com/photos/274192/pexels-photo-274192.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"/>
						<div class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
						<h2 class="z-10 text-xl  text-orange-500 absolute bottom-0 left-0 p-4 xs:text-xl font-light md:text-xl underline">$399</h2>
                    <h3 className='z-10 text-lg text-slate-100 absolute bottom-5 left-0 p-4 xs:text-xl font-medium md:text-2xl'>Special Occasion</h3>
					</a>
					<a href="" class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
						<img src="https://images.pexels.com/photos/450301/pexels-photo-450301.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"/>
						<div class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
						<h2 class="z-10 text-xl  text-orange-500 absolute bottom-6 left-0 p-4 xs:text-xl font-thin md:text-xl underline">$500</h2>
                    <h3 className='z-10 text-lg text-slate-100 absolute bottom-0 left-0 p-4 xs:text-xl font-medium md:text-2xl'>Custom Parties</h3>
					</a>
				</div>
			</div>
			<div class="col-span-2 sm:col-span-1 md:col-span-1 bg-sky-50 h-auto md:h-full flex flex-col">
				<a href="" class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
					<img src="https://images.pexels.com/photos/3371094/pexels-photo-3371094.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"/>
					<div class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
					<h2 class="z-10 text-xl  text-orange-500 absolute bottom-0 left-0 p-4 xs:text-xl font-thin md:text-3xl underline">$400</h2>
                    <h3 className='z-10 text-2xl text-slate-100 absolute bottom-10 left-0 p-4 xs:text-xl font-medium md:text-2xl'>Birthday Parties</h3>
				</a>
			</div>
		</div>
	</div>
</section>
  )
}
