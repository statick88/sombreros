import Link from "next/link";
import { buttonVariants } from "./ui/button";

const bannerDiscount = () => {

    return (
        <div className="p-5 sm:p-20 text-center">
            <h2 className="uppercase font-black text-2xl text-primary"> Consigue  hasta un -25% de descuento</h2>
            <h3 className="mt-3 font-semibold">-20 al gastar 100$ o -25 al gastar 200$</h3>

        <div className="max-w-md mx-auto sm-flex justify-center gap-8 mt-5">
            <Link href="#" className={buttonVariants()}>Comprar</Link>
            <Link href="#" className={buttonVariants({variant: "outline"})}>Más Información</Link>
        </div>

        </div>
    );

}

export default bannerDiscount;