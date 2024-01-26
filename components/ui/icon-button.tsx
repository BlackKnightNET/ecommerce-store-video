import { cn } from "@/lib/utils";
import { MouseEventHandler } from "react";

interface IconButtonProps{
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
    icon: React.ReactElement;
    className?: string;
    text?: string
}

const IconButton: React.FC<IconButtonProps> = ({
        onClick,
        icon,
        className,
        text
    })=>{
    return (
<button

onClick={onClick}
className={cn("rounded-full flex items-center justify-center bg-white shadow-md p-2 hover:scale110 hover:bg-black hover:text-white transition",className)}
>   
{text}
{icon}
</button>
    );
}

export default IconButton;