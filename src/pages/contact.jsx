import React from 'react'

export const Contact = () => {
  return (
    <section className="mb-32 pt-5 pb-5">
        <p className='text-3xl text-center text-gray-500 font-extralight pb-10'>Need Help? <span className='font-bold text-orange-500'>Contact Us</span></p>
    <div id="map" className="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat">
    <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.903267054989!2d38.747805614746065!3d9.009237291044824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x163582dbf07a53cf%3A0xe7ba7c5f71da21d3!2sAddis%20Ababa!5e0!3m2!1sen!2set!4v1619524992238!5m2!1sen!2set"
    width="100%" height="480" style={{ border: '0' }}
    allowFullScreen=""
    loading="lazy"
></iframe>

    </div>
  <div class="container px-6 md:px-12">
    <div
      class="block rounded-lg bg-[#ffffff] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px] border border-gray-200">
      <div class="flex flex-wrap">
        <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
          <form>
            <div class="relative mb-6" data-te-input-wrapper-init>
              <input type="text"
                  class="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
                  id="exampleInput90" />
              <label
                  class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
                  for="exampleInput90">Name
                </label>
            </div>
            <div class="relative mb-6" data-te-input-wrapper-init>
              <input type="email"
                  class="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
                  id="exampleInput91" />
              <label
                  class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
                  for="exampleInput91">Email address
                </label>
            </div>
            <div class="relative mb-6" data-te-input-wrapper-init>
              <textarea
                  class="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
                  id="exampleFormControlTextarea1" rows="3"></textarea>
              <label for="exampleFormControlTextarea1"
                  class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none ">Message</label>
            </div>
            <div class="mb-6 inline-block min-h-[1.5rem] justify-center pl-[1.5rem] md:flex">
              <input
                  class="relative float-left mt-[0.15rem] mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent "
                  type="checkbox" value="" id="exampleCheck96" checked />
              <label class="inline-block pl-[0.15rem] hover:cursor-pointer" for="exampleCheck96">
                  Send me a copy of this message
                </label>
            </div>
            <button type="button"
                class="mb-6 w-full rounded bg-orange-500 text-white px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal   lg:mb-0">
                Send
              </button>
          </form>
        </div>
        <div class="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
          <div class="flex flex-wrap">
            <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
              <div class="flex items-start">
                <div class="shrink-0">
                  <div class="inline-block rounded-md bg-gray-100 p-4 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" color='orange' stroke-width="2"
                      stroke="currentColor" class="h-6 w-6">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
                    </svg>
                  </div>
                </div>
                <div class="ml-6 grow">
                  <p class="mb-2 font-bold text-gray-800">
                    Technical support
                  </p>
                  <p class="text-sm text-neutral-500">
                    example@gmail.com
                  </p>
                  <p class="text-sm text-neutral-500">
                    1-600-890-4567
                  </p>
                </div>
              </div>
            </div>
            <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
              <div class="flex items-start">
                <div class="srink-0">
                  <div class="inline-block rounded-md bg-gray-100 p-4 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" color='orange' viewBox="0 0 24 24" stroke-width="2"
                      stroke="currentColor" class="w-7 h-7">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                    </svg>
                  </div>
                </div>
                <div class="ml-6 grow">
                  <p class="mb-2 font-bold text-gray-800">
                    Address
                  </p>
                  <p class="text-sm text-gray-500">
                    abcd, <br/>
                        xyz <br/>
                  </p>
                </div>
              </div>
            </div>
            <div
              class="mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:mb-12 lg:w-full lg:px-6 xl:w-6/12">
              <div class="align-start flex">
                <div class="shrink-0">
                  <div class="inline-block rounded-md bg-gray-100 p-4 text-primary">
                  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" 
                      xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" class="w-7 h-7" 
                      viewBox="0 0 111.756 122.879" enable-background="new 0 0 111.756 122.879" color='orange' xml:space="preserve">
                      <g>
                        <path
                          d="M27.953,5.569v96.769h19.792V5.569H37.456H27.953L27.953,5.569z M21.898,105.123V2.785C21.898,1.247,23.254,0,24.926,0 h12.53h13.316C52.443,0,53.8,1.247,53.8,2.785v102.338c0,1.537-1.356,2.783-3.028,2.783H24.926 C23.254,107.906,21.898,106.66,21.898,105.123L21.898,105.123z M13.32,17.704c1.671,0,3.027,1.247,3.027,2.785 s-1.355,2.784-3.027,2.784H7.352c-0.161,0-0.292,0.022-0.39,0.064c-0.129,0.056-0.276,0.166-0.429,0.325 c-0.161,0.167-0.281,0.346-0.353,0.528c-0.083,0.208-0.125,0.465-0.125,0.759v90.803c0,0.287,0.043,0.537,0.125,0.74l0.034,0.092 c0.068,0.135,0.165,0.264,0.284,0.383c0.126,0.125,0.258,0.217,0.39,0.27c0.123,0.051,0.279,0.074,0.466,0.074h97.052 c0.188,0,0.346-0.025,0.467-0.074c0.133-0.053,0.264-0.145,0.389-0.27c3.035-3.035,0.441,1.799,0.441-1.215V24.949 c0-3.667,3.039,2.357-0.477-1.288c-0.143-0.146-0.287-0.254-0.43-0.314c-0.113-0.048-0.246-0.075-0.391-0.075H62.563 c-1.672,0-3.027-1.247-3.027-2.784s1.355-2.785,3.027-2.785h41.842c1.041,0,2.029,0.204,2.943,0.597 c0.895,0.385,1.699,0.945,2.393,1.663c0.664,0.686,1.17,1.468,1.514,2.334c0.332,0.839,0.502,1.726,0.502,2.652v90.803 c0,0.938-0.168,1.826-0.502,2.654c-0.344,0.859-0.865,1.639-1.549,2.324c-0.701,0.703-1.506,1.234-2.398,1.598 c-0.906,0.367-1.879,0.551-2.902,0.551H7.352c-1.022,0-1.995-0.184-2.901-0.551c-0.894-0.363-1.698-0.896-2.399-1.598 c-0.621-0.623-1.107-1.33-1.45-2.107c-0.036-0.07-0.069-0.143-0.099-0.217C0.168,117.574,0,116.684,0,115.752V24.949 c0-0.921,0.17-1.811,0.504-2.652c0.342-0.863,0.849-1.648,1.512-2.334c0.683-0.707,1.488-1.263,2.393-1.652 c0.929-0.401,1.917-0.607,2.943-0.607H13.32L13.32,17.704z M65.902,29.03h27.049c0.803,0,1.566,0.145,2.291,0.431 c0.076,0.03,0.15,0.063,0.223,0.099c0.607,0.269,1.166,0.635,1.666,1.096c0.584,0.533,1.027,1.128,1.326,1.782 c0.047,0.104,0.088,0.21,0.119,0.317c0.225,0.584,0.34,1.189,0.34,1.812v12.611c0,0.744-0.156,1.45-0.459,2.118l-0.004,0.009 l0.004,0.002c-0.291,0.64-0.725,1.224-1.291,1.75c-0.58,0.546-1.227,0.956-1.932,1.231c-0.736,0.287-1.5,0.426-2.283,0.426H65.902 c-0.777,0-1.535-0.14-2.27-0.426c-0.693-0.269-1.33-0.668-1.912-1.198c-0.588-0.539-1.031-1.144-1.326-1.81 c-0.033-0.078-0.063-0.157-0.09-0.235c-0.234-0.605-0.35-1.228-0.35-1.867V34.567c0-0.723,0.146-1.424,0.445-2.099l-0.006-0.002 c0.295-0.666,0.738-1.271,1.326-1.81l0.037-0.032l-0.002-0.001c0.877-0.78,2.039-1.219,2.119-1.244 C64.537,29.147,65.215,29.03,65.902,29.03L65.902,29.03z M93.475,34.599h-28.08v12.547h28.08V34.599L93.475,34.599z M78.877,63.42 c1.072,0,2.01,0.41,2.807,1.207s1.188,1.734,1.188,2.785c0,1.148-0.389,2.104-1.188,2.865c-0.799,0.758-1.734,1.129-2.807,1.129 c-1.129,0-2.084-0.371-2.844-1.129c-0.76-0.762-1.148-1.717-1.148-2.865c0-1.051,0.391-1.988,1.148-2.785 S77.748,63.42,78.877,63.42L78.877,63.42z M90.977,63.42c1.072,0,2.008,0.41,2.805,1.207s1.189,1.734,1.189,2.785 c0,1.148-0.391,2.104-1.189,2.865c-0.799,0.758-1.732,1.129-2.805,1.129c-1.131,0-2.086-0.371-2.846-1.129 c-0.76-0.762-1.148-1.717-1.148-2.865c0-1.051,0.391-1.988,1.148-2.785S89.846,63.42,90.977,63.42L90.977,63.42z M66.662,75.518 c1.15,0,2.105,0.389,2.865,1.148s1.129,1.715,1.129,2.865c0,1.051-0.371,1.988-1.129,2.785s-1.715,1.209-2.865,1.209 c-1.053,0-1.988-0.412-2.785-1.209s-1.209-1.734-1.209-2.785c0-1.15,0.41-2.105,1.209-2.865S65.609,75.518,66.662,75.518 L66.662,75.518z M78.877,75.518c1.072,0,2.008,0.389,2.807,1.148s1.188,1.715,1.188,2.865c0,1.051-0.391,1.988-1.188,2.785 s-1.734,1.209-2.807,1.209c-1.129,0-2.086-0.412-2.844-1.209s-1.148-1.734-1.148-2.785c0-1.15,0.389-2.105,1.148-2.865 S77.748,75.518,78.877,75.518L78.877,75.518z M90.977,75.518c1.072,0,2.006,0.389,2.805,1.148s1.189,1.715,1.189,2.865 c0,1.051-0.393,1.988-1.189,2.785s-1.732,1.209-2.805,1.209c-1.131,0-2.088-0.412-2.846-1.209s-1.148-1.734-1.148-2.785 c0-1.15,0.389-2.105,1.148-2.865S89.846,75.518,90.977,75.518L90.977,75.518z M66.662,87.518c1.15,0,2.107,0.393,2.865,1.189 s1.129,1.773,1.129,2.922c0,1.053-0.369,1.988-1.129,2.787s-1.715,1.207-2.865,1.207c-1.053,0-1.986-0.408-2.785-1.207 s-1.209-1.734-1.209-2.787c0-1.148,0.412-2.125,1.209-2.922S65.609,87.518,66.662,87.518L66.662,87.518z M78.877,87.518 c1.072,0,2.01,0.393,2.807,1.189s1.188,1.773,1.188,2.922c0,1.053-0.389,1.988-1.188,2.787s-1.734,1.207-2.807,1.207 c-1.129,0-2.084-0.408-2.844-1.207s-1.148-1.734-1.148-2.787c0-1.148,0.391-2.125,1.148-2.922S77.748,87.518,78.877,87.518 L78.877,87.518z M90.977,87.518c1.072,0,2.008,0.393,2.805,1.189s1.189,1.773,1.189,2.922c0,1.053-0.391,1.988-1.189,2.787 s-1.732,1.207-2.805,1.207c-1.131,0-2.086-0.408-2.846-1.207s-1.148-1.734-1.148-2.787c0-1.148,0.391-2.125,1.148-2.922 S89.846,87.518,90.977,87.518L90.977,87.518z M78.877,99.617c1.072,0,2.008,0.389,2.807,1.188s1.188,1.734,1.188,2.807 c0,1.129-0.389,2.084-1.188,2.844s-1.734,1.148-2.807,1.148c-1.129,0-2.084-0.389-2.844-1.148s-1.148-1.715-1.148-2.844 c0-1.072,0.389-2.008,1.148-2.807S77.748,99.617,78.877,99.617L78.877,99.617z M66.662,63.42c1.15,0,2.107,0.41,2.865,1.207 s1.129,1.734,1.129,2.785c0,1.148-0.369,2.104-1.129,2.865c-0.76,0.758-1.715,1.129-2.865,1.129c-1.053,0-1.986-0.371-2.785-1.129 c-0.799-0.762-1.209-1.717-1.209-2.865c0-1.051,0.412-1.988,1.209-2.785S65.609,63.42,66.662,63.42L66.662,63.42z" />
                      </g>
                    </svg>

                  </div>
                </div>
                <div class="ml-6 grow">
                  <p class="mb-2 font-bold text-gray-800 ">Land Line</p>
                  <p class="text-gray-500"> (+251) 431 2030
                  </p>
                </div>
              </div>
            </div>
            <div class="w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:mb-12 xl:w-6/12">
              <div class="align-start flex">
                <div class="shrink-0">
                  <div class="inline-block rounded-md bg-gray-100 p-4 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" color='orange' stroke-width="1.5"
                      stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                    </svg>
                  </div>
                </div>
                <div class="ml-6 grow">
                  <p class="mb-2 font-bold ">Mobile</p>
                  <p class="text-gray-500"> +91 123456789
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    

  )
}
