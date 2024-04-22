import BASE_URL from "./BaseUrl";


export async function addToWishList(body, token) {
    console.log(body, token);
    const res = await fetch(`${BASE_URL}/wishlist`,

        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                token: token
            },
            body: JSON.stringify(body)


        })

    if (!res.ok) {
        throw new Error("cannot update")
    }

    const data = await res.json();
    console.log(data);
    return data

}



export async function removeFromWishlist(id, token) {
    const res = await fetch(`${BASE_URL}/wishlist/${id}`,
        {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                token: token
            },

        })


    if (!res.ok) {
        throw new Error("cannot update")
    }


    const data = await res.json();
    console.log(data);
    return data

}





export async function getWishlist(token) {
    console.log(token);
    const res = await fetch(`${BASE_URL}/wishlist`,

        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                token: token
            },



        })

    if (!res.ok) {
        throw new Error("cannot update")
    }

    const data = await res.json();
    console.log(data);
    return data

}
