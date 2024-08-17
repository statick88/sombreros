import {create} from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { ProductType } from "@/types/product"
import {toast} from '@/components/ui/use-toast'

interface CartStore {
    items: ProductType[];
    addItem: (item: ProductType) => void;
    removeItem: (id: number) => void;
    removeAll: () => void;

}

export const useCart = create(persist<CartStore>((set, get) => ({
    items: [],
    addItem: (data: ProductType)=>{
        const currentItems = get().items
        const existingItem = currentItems.find((item) => item.id === data.id)

        if (existingItem) {
            return toast({
                title:"Este producto ya está en el carrito",
                variant: "destructive"
            })
        }
        
        set({items: [...get().items, data]})
        toast({title: "Producto añadido al carrito :D"})
    },
    removeItem: (id: number) => {
        set({items: [...get().items.filter((item) => item.id !== id)]})
        toast({title: "Producto eliminado del carrito :(", variant: "destructive"})
    },  

    removeAll: () => {
        set({items: []})
        toast({title: "Carrito vaciado :(", variant: "destructive"})
    }
}),{
    name: "cart-storage",
    storage: createJSONStorage(()=>localStorage)
}
))