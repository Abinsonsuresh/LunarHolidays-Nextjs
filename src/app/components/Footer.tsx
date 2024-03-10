import Link from "next/link"
import { NavLinks, Services } from "../Data/data"

const Footer = () => {
  return (
    <footer className="w-full  bg-green-500 text-white">
    <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 lg:px-0">
      <div className="inline-flex items-center">
     
      <div className="">
            <div className="text-2xl font-bold"><span className="text-white">Lunar</span><span className="text-green-900 underline">Holidays</span></div>
        </div>
      </div>

    </div>
    <hr className="my-8" />
    <div className="mx-auto flex max-w-6xl flex-col items-start space-x-8 md:flex-row">
      <div className="w-full px-4 md:w-1/2 lg:px-0">
        <h1 className="max-w-sm text-3xl font-bold">Ready to experience immersive holidays?</h1>
        <form action="" className="mt-4 inline-flex w-full items-center md:w-3/4">
          <input
            className="flex h-10 w-full rounded-md border border-white bg-transparent px-3 py-2 text-sm placeholder:text-gray-200 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            type="email"
            placeholder="Email"
          />
          <button
          type="button"
          className="ml-2 rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
        <a href="https://wa.me/918078593452" target="_blank">book now</a>
          
        </button>
        </form>
      </div>
      <div className="mt-8 grid grid-cols gap-6 md:mt-0 lg:w-3/4 lg:grid-cols-3">
        <div className="mb-8 lg:mb-0">
          <p className="mb-6 text-lg font-semibold text-gray-900 ">Menu</p>
          <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-200">
          {
                NavLinks.map((items)=>(
                    <Link className="text-gray-200 text-[16px] flex justify-start items-start" key={items.key} href={items.href}>{items.label}</Link>
                ))
            }
          </ul>
        </div>
        <div className="mb-8 lg:mb-0">
          <p className="mb-6 text-lg font-semibold text-gray-900 ">Our Services</p>
          <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-200">
          {
                Services.map((items)=>(
                    <Link className="text-gray-200 text-[16px] flex justify-start items-start" key={items.key} href={items.href}>{items.label}</Link>
                ))
            }
          </ul>
        </div>
        <div className="mb-8 lg:mb-0">
          <p className="mb-6 text-lg font-semibold text-gray-900 ">Connect with us</p>
          <div className="">
            <div className="list-none mb-10 flex space-x-5 indeterminate:justify-center">
              <li>
              <a href="https://www.linkedin.com/company/lunarcodes/" target="_blank"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401m-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4"/>
              </svg></a>
              </li>
              <li>
              <a href="https://twitter.com/abinsonsuresh/" target="_blank"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-twitter-x" viewBox="0 0 16 16">
                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"/>
              </svg> </a>
              </li>
              <li>
              <a href="https://youtube.com/lunarcodes/" target="_blank"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-youtube" viewBox="0 0 16 16">
                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408z"/>
              </svg> </a>
    
              </li>
              <li>
              <a href="https://instagram.com/lunarcodeswebsolutions/" target="_blank"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
              </svg> </a>
    
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className='flex justify-center items-center font-extralight bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 mt-12'>
      <p>Copyright © 2024 Lunar Holidays</p>
  </div>
  </footer>
  )
}

export default Footer