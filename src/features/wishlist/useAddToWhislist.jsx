import { useMutation, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import { addToWishList } from '../../Services/wishlistApi'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

export default function useAddToWhislist() {

    let navigate = useNavigate()

    const accessToken = localStorage.getItem("accessToken")
    const queryClient = useQueryClient()


    const { mutate, isError, status, data } = useMutation({
        mutationFn: (body) => addToWishList(body, accessToken),
        onMutate: () => {
            toast.loading("Loading")
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['wishlist']
            })
            toast.dismiss()
            toast.success("Added Successfully to wishlist")
        },
        onError: (err) => {

            if (!accessToken) {
                navigate('/login')
                toast.dismiss()
                toast("You must be logged in first")
            }
            else {
                toast.dismiss()
                toast.error("cannot add this product")
            }

        }
        ,

    })






    return { mutate, isError, status }
}
