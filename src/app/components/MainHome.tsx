
// .hero-map {
//     @apply absolute right-0 top-0 h-screen w-screen bg-pattern-2 bg-cover bg-center md:-right-28 xl:-top-60;

import Button from "./Button"

//   }
const MainHome = () => {
  return (
    <>
    <div className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row  ">
      <div className="absolute right-0 top-0 bg-pattern-2 bg-cover h-screen w-screen bg-center md:-right-28 xl:-top-60"/> 

      <div className="relative flex flex-col flex-1 xl:w-1/2 z-20">
        <div>
          <p className="text-[52px] font-[700] leading-[120%]">Lunar Holidays Camp Area</p>
          {/* <p className="text-[52px] font-[700]"></p> */}
          <p className="mt-8 xl-max-w-[500px]">We want to be on each of your journeys seeking the satisfaction of seeing the incorruptible beauty of nature. We can help you on an adventure around the world in just one app</p>
        </div>


 <div className="flex flex-wrap my-11">

 </div>
          <p className="mt-8 font-bold text-xl">198kExcellent Reviews</p>
  

        <div>
          <Button type={"button"} name={"Login"} icon="/user.svg" variant={"px-4 py-2 bg-green-500 text-white"}/>
        </div>

      </div>




      <div className=" flex flex-1 items-start ">
        <div className=" z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-800 px-7 py-8">

           <div className="flex flex-col">
            <div className="flex items-center justify-between">
              <p className="font-[600] text-gray-20">Location</p>
              {/* <Image src="/close.svg" alt="close" width={24} height={24} /> */}
            </div>
            <p className="font-[750] text-xl text-white">Kodaikanal town</p>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <p className="font-[600]  text-gray-20">Distance</p>
              <p className="font-[750] text-xl text-white">13.28 km</p>
            </div>
            <div className="flex flex-col">
              <p className="font-[600]  text-gray-20">Time</p>
              <p className="font-[750] text-xl text-white">21 min</p>
            </div>
          </div>
        </div>
      </div>
      <div></div>




    </div>
    </>
  )
}

export default MainHome