import React from 'react'

export const Chefs = () => {
  return (
<div class="py-20 bg-yellow-50">
    <div class="container mx-auto px-6 md:px-12 xl:px-32">
        <div class="mb-16 text-center">
            <p className='text-center text-gray-500 font-thin text-sm pb-10'>Chefs</p>
            <h2 class="mb-4 text-center text-2xl text-orange-500 font-bold md:text-4xl">Our Proffesional Chefs</h2>
            <p class="text-gray-600 lg:w-8/12 lg:mx-auto">Lorem epsiom lorem episom lorem epison</p>
        </div>
        <div class="grid gap-12 items-center md:grid-cols-3 border-slate-700 rounded-sm">
            <div class="space-y-4 text-center">
                <img class="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64" 
                    src="https://cdn.mos.cms.futurecdn.net/S6Lf3cznnhL6gbSYFctwAG-1200-80.jpg" alt="woman" loading="lazy" width="640" height="805"/>
                <div>
                    <h4 class="text-2xl text-slate-700">Pinkman</h4>
                    <span class="block text-sm text-gray-500">Chief Technical Officer </span>
                </div>
            </div>
            <div class="space-y-4 text-center">
                <img class="w-64 h-64 mx-auto object-cover rounded-xl md:w-48 md:h-64 lg:w-64 lg:h-80" 
                    src="https://i.redd.it/heisenberg-actually-cooking-v0-3bp58z82wv9c1.jpg?width=1024&format=pjpg&auto=webp&s=564bcd5f744632c613051f54ce02c5af696c6b7c" alt="man" loading="lazy" width="1000" height="667"/>
                <div>
                    <h4 class="text-2xl text-slate-700">Heisenberg</h4>
                    <span class="block text-sm text-gray-500">Chief Operations Officer</span>
                </div>
            </div>
            <div class="space-y-4 text-center">
                <img class="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64" 
                    src="https://s.yimg.com/ny/api/res/1.2/zljjV8YHQZry1jA0_NnNzw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTM2MA--/https://media.zenfs.com/en/complex584/fd1576893baef246e1265d85726073b4" alt="woman" loading="lazy" width="1000" height="667"/>
                <div>
                    <h4 class="text-2xl text-slate-700">Anabelle Fring</h4>
                    <span class="block text-sm text-gray-500">CEO-Founder</span>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
