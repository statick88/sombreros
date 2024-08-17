import { Menu } from "lucide-react";
import {Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import Link from "next/link";

const ItemsMenuMobile = () => {
    return (

        <Popover>
            <PopoverTrigger>
                <Menu />
            </PopoverTrigger>
            <PopoverContent>
                <Link href="/category/sombreros-de-la-costa" className="block">Ruta Costera</Link>
                <Link href="/category/sombreros-de-la-sierra" className="block">Ruta Andina</Link>
                <Link href="/category/sombreros-de-la-amazonia" className="block">Ruta Amazónica</Link>
            </PopoverContent>
        </Popover>
        
    );
    
}

export default ItemsMenuMobile;