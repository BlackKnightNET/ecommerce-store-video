"use client";

import axios from "axios";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

import Button from "@/components/ui/Button";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
import { toast } from "react-hot-toast";

const Summary = ({userId}: {userId: string | undefined}) => {



  const searchParams = useSearchParams();
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);

  useEffect(() => {
    if (searchParams.get('success')) {
      toast.success('Payment completed.');
      removeAll();
    }

    if (searchParams.get('canceled')) {
      toast.error('Something went wrong.');
    }
  }, [searchParams, removeAll]);

  const deliveryCost = 300; 
  const totalPrice = items.reduce((total, item) => {
      return total + Number(item.price)*Number(item.quantity);
  }, 0);
  
  if (!userId) {
    return null
  }
  const adjustedDeliveryCost = totalPrice === 0 ? 0 : (totalPrice > 3999 ? 0 : deliveryCost);

  
  const totalPriceWithDelivery = totalPrice + adjustedDeliveryCost;

  const onCheckout = async () => {
    // const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
    //    productIds: items.map((item) => item.id)
    // });
  

    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
       productsBought: items.map((item) => ({
         id: item.id,
         quantity: item.quantity,
         color: item.boughtColor,
         size: item.boughtSize
       })),
       userId
    });

    window.location = response.data.url;
  }

  return ( 
    <div
      className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
    >
      <h2 className="text-lg font-medium text-gray-900">
        Permbledhje
      </h2>
      <div className="mt-6 space-y-4">
      <div className="flex items-center justify-between border-t border-gray-200 pt-4">
      <div className="text-base font-medium text-gray-900">
        {totalPrice > 3999 ? 'Posta Falas' : 'Posta'}
      </div>
      {totalPrice > 3999 ? 'ALL 0 +' : `ALL ${adjustedDeliveryCost} +`}
        </div>
        <div className="flex items-center justify-between  pt-4">
          <div className="text-base font-medium text-gray-900">Porosi total</div>
         <Currency value={totalPriceWithDelivery } />
        </div>
        
      </div>
      <Button onClick={onCheckout} disabled={items.length === 0} className="w-full mt-6">
        Checkout
      </Button>
    </div>
  );
}
 
export default Summary;


