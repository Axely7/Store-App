import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { getProductById } from '../../../core/products/actions/get-product-by-id.action';

export const useProduct = (productId: string) => {
    
    const productQuery = useQuery({
        queryKey: ['product', productId],
        queryFn: () => getProductById(productId),
        staleTime: 1000 * 60 * 60 // 1 hora
    })


  return {
    productQuery
  }
}
