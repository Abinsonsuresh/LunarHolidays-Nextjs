import Image from "next/image";


type ButtonProps = {
    type: 'button';
    name: string;
    icon?: string;
    variant: string;
    
}

const Button = ({type, name,icon,variant}:ButtonProps) => {
  return (
    <button type={type} className={`flex justify-center items-center rounded-full border gap-3 cursor-pointer ${variant}`}>
        {icon && <Image src={icon} alt={name}  width={24} height={24}/>}
        <label className="font-semibold cursor-pointer">{name}</label>
    </button>
  )
}

export default Button