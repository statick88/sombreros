"use client";
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const PageSucess = () => {
  const router = useRouter();
  return (
    <div className="max-w-5xl p-4 mx-auto sm:py-16 sm:px-24">
      <div className="flex flex-col-reverse gap-2 sm:flex-row">
        <div>
          <h1 className="text-3xl">Se ha producido un error en tu compra</h1>
          <p className="my-3">Tu pedido no ha sido procesado.</p>
          <p className="my-3">Recuerda en Sombreros Saphikuna te vendemos tradiciones y cultura</p>
          <Button onClick={() => router.push("/")}>Volver a la tienda</Button>
        </div>
      </div>
    </div>
  );
}

export default PageSucess;