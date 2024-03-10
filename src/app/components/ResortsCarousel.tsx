import Image from "next/image";


interface CardProps {
    background: string;
    title: string;
    desc: string;
}
const RoomCard = ({ background, title, desc }: CardProps) => {
    return (
        <div className={`min-w-[500px] md:min-w-[1000px] h-full w-full bg-no-repeat ${background} bg-contain md:bg-cover border rounded-r-3xl`}>
            <div className="flex h-full  items-start justify-between p-6">

                <div className="flex gap-3">

                    <div className="rounded-full bg-green-50 p-4">
                        <Image
                            src="/folded-map.svg"
                            alt="map"
                            width={28}
                            height={28}
                        />
                    </div>

                    <div className="flex justify-center  items-start flex-col gap-1">
                        <h4 className="bold-18 text-white">{title}</h4>
                        <p className="regular-14 text-white">{desc}</p>

                    </div>
                </div>

            </div>

        </div>
    )
}


const ResortsCarousel = () => {
    return (
        <div className="lg:max-container relative flex flex-col  py-10 lg:mb-10 lg:py-20 xl:mb-20">
            <div className="flex justify-center items-center flex-col my-6">
            <h3 className="text-4xl font-bold">Our rooms</h3>
            <p className="text-sm text-gray-500 font-medium">Exclusive rooms provided by LunarHolidays</p>

            </div>
            <div className="flex h-[300px] md:h-[550px] w-full items-start justify-start gap-8 overflow-x-auto hide-scrollbar ">
                <RoomCard background="bg-bg-img-1" title="Camp Stay" desc="Klavarai, Kodaikanal" />
                <RoomCard background="bg-bg-img-2" title="Camp Stay" desc="kookal, Kodaikanal" />
                <RoomCard background="bg-bg-img-1" title="Camp Stay" desc="Klavarai, Kodaikanal" />
                <RoomCard background="bg-bg-img-2" title="Camp Stay" desc="kookal, Kodaikanal" />

            </div>

            <div className="flex justify-end mt-10 px-6 lg:-mt-60 lg:mr-6">
                <div className="bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20  w-full overflow-hidden rounded-3xl">
                    <h2 className="text-3xl font-[500] text-white">
                        <strong>Resort rooms</strong> <b>Exclusive luxury</b>
                    </h2>
                    <p className="text-[16px]  mt-5 text-white">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos dolore laudantium necessitatibus non voluptatibus architecto, aperiam quaerat voluptatum voluptate! Quibusdam soluta eius tempora omnis hic neque amet pariatur eligendi ullam, a nobis.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ResortsCarousel