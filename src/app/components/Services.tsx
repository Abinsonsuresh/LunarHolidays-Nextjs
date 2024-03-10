import Image from "next/image"

interface CardProps {
    title: string;
    desc: string;
    icon: string;
}

{/* <li className="flex w-full flex-1 flex-col items-start">
<div className="rounded-full p-4 lg:p-7 bg-green-50">
  <Image src={icon} alt="map" width={28} height={28} />
</div>
<h2 className="bold-20 lg:bold-32 mt-5 capitalize">
  {title}
</h2>
<p className="regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">
  {description}
</p>
</li> */}

const ServiceCard = ({ title, desc, icon }: CardProps) => {
    return (
        <li className="flex w-full  flex-col  items-start p-8 border shadow-2xl rounded-3xl  bg-white/25">
            <div className="">
                <p className="text-2xl font-bold">{title}</p>
                <p className="mt-6 text-gray-500">{desc}</p>
                
            </div>
        </li>

    )
}

const Services = () => {
    return (
        <div className="flex flex-col justify-center  items-center overflow-hidden bg-feature-bg bg-cover bg-no-repeat py-8">
            <div className="max-container padding-container relative w-full flex">

                <div className="flex flex-1 lg:min-h-[900px]">
                    <Image
                        src="/camp.svg"
                        alt="pic"
                        width={440}
                        height={1000}
                    />
                </div>

                <div className="z-20 flex justify-center w-full flex-col lg:w-[60%] ">
                    <div className="flex items-start flex-col mb-12">
                    <h2 className="font-[700] text-6xl">Our Services</h2>
                    <p className="text-sm text-gray-400">Exclusive services provided by Lunar Holidays</p>
                    </div>
                    <div className="mt-6 ">
                        <ul className="grid md:grid-cols-2 gap-10">
                            <ServiceCard title="Luxury rooms" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque maiores veritatis voluptate a. Ipsa necessitatibus vel obcaecati recusandae." icon="f" />

                            <ServiceCard title="Mountain Treking" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque maiores veritatis voluptate a. Ipsa necessitatibus vel obcaecati recusandae." icon="f" />

                            <ServiceCard title="Camping and stay" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque maiores veritatis voluptate a. Ipsa necessitatibus vel obcaecati recusandae." icon="f" />

                            <ServiceCard title="Adventure activities" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque maiores veritatis voluptate a. Ipsa necessitatibus vel obcaecati recusandae." icon="f" />


                        </ul>
                    </div>
                </div>
            </div>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo, perspiciatis modi. Blanditiis?</p>
        </div>
    )
}

export default Services