import Image from "next/image";


type ButtonProps = {
    type: 'button';
    name: string;
    icon?: string;
    variant: string;
    
}

const Button = ({type, name,icon,variant}:ButtonProps) => {
  return (
    <button type={type} className={`flex justify-center items-center rounded-full border ${variant}`}>
        {icon && <Image src={icon} alt={name} className="w-24"/>}
        <label className="font-semibold">{name}</label>
    </button>
  )
}

export default Button