
import {test,request} from '@playwright/test'
import { log } from 'node:console';

test('login',async({request})=>{
    const base_url = 'https://www.shoppersstack.com/shopping';

    // Login
    let r1 = await request.post(`${base_url}/users/login`,{
        data:{
            email:"devanshbhatra2614@gmail.com",
            password:"Yc3sdm$XR9$x8G",
            role:"SHOPPER"
        },
        ignoreHTTPSErrors:true,
        
    })
    console.log( await r1.json());
    let resp =await r1.json();
    const token = resp.data.jwtToken;
    const shopperId = resp.data.userId;
    console.log(token);
    console.log(shopperId);
    

// Products
    let r2 = await request.get(`${base_url}/products/alpha`,{
        ignoreHTTPSErrors:true,
        headers:{
            Authorization:`Bearer ${token}`
        }
    })
    // console.log(await r2.json());
    let resp2 = await r2.json();
    console.log(resp2);
    
    const product_Id = resp2.data[0].productId;
    console.log(product_Id);
    
//wishlist
    //addwishlist
    let r3 = await request.post(`${base_url}/shopper/${shopperId}/wishlist`,{
        data:{
            productId:product_Id,
            quantity:2
        },
        ignoreHTTPSErrors:true,
        headers:{
            Authorization:`Bearer ${token}`
        }
    });
    let resp3 = await r3.json();
    console.log(resp3);

    //see wishlist
    let r4 = await request.get(`${base_url}/shoppers/${shopperId}/wishlist`,{
        ignoreHTTPSErrors:true
    });
    console.log("Status:", r4.status());

    let resp4;

    if (r4.status() === 200) {
        resp4 = await r4.json();
        console.log(resp4);
    } else {
        const text = await r4.text(); // safer fallback
        console.log("Error response:", text);
    }

    //delete wishlist
    let r5 = await request.delete(`${base_url}/shoppers/${shopperId}/wishlist`,{
        ignoreHTTPSErrors:true
    });
    console.log(await r5.text());


    
    // Cart
    // add to cart
    let r6 = await request.post(`${base_url}/shoppers/${shopperId}/carts`,{
        data:{
            productId:product_Id,
            quantity:2
        },
        ignoreHTTPSErrors:true,
        headers:{
            Authorization:`Bearer ${token}`
        }
    });
    console.log( await r6.json());

    //get cart
    let r7 = await request.get(`${base_url}/shoppers/${shopperId}/carts`,{
        ignoreHTTPSErrors:true,
        headers:{
            Authorization:`Bearer ${token}`
        }
    })
    let resp7 = await r7.json();
    const item_Id = resp7.data[0].itemId;
    console.log(resp7);
    console.log(item_Id);

    // update cart
    let r8 = await request.put(`${base_url}/shoppers/${shopperId}/carts/${item_Id}`,{
        ignoreHTTPSErrors:true,
        headers:{
            Authorization:`Bearer ${token}`
        },
        data:{
            productId:product_Id,
            quantity:5
        }
    });
    console.log(await r8.json());

    // Adress
    // Add adress
    let r9 = await request.post(`${base_url}/shoppers/${shopperId}/address`,{
        ignoreHTTPSErrors:true,
        headers:{
            Authorization:`Bearer ${token}`
        },
        data:{
            addressId: 0,
                buildingInfo: "string",
                city: "string",
                country: "string",
                landmark: "string",
                name: "string",
                phone: "string",
                pincode: "432101",
                state: "string",
                streetInfo: "string",
                type: "string"
        }
    })

    let resp9 = await r9.json();
    const adress_Id = resp9.data.addressId;

    //get adress
    let r10 = await request.get(`${base_url}/shoppers/${shopperId}/address`,{
        ignoreHTTPSErrors:true,
        headers:{
            Authorization:`Bearer ${token}`
        },
        }
    );

    console.log(await r10.json());
    
    //get specific adress
    let r11 = await request.get(`${base_url}/shoppers/${shopperId}/address/${adress_Id}`,{
        ignoreHTTPSErrors:true,
        headers:{
            Authorization:`Bearer ${token}`
        },
        }
    );

    console.log(await r11.json());

    //update adress
    let r12 = await request.put(`${base_url}/shoppers/${shopperId}/address/${adress_Id}`,{
        data:{
                addressId: 0,
                buildingInfo: "string",
                city: "string",
                country: "string",
                landmark: "string",
                name: "ABC",
                phone: "string",
                pincode: "432101",
                state: "string",
                streetInfo: "string",
                type: "string"
        },
        ignoreHTTPSErrors:true,
        headers:{
            Authorization:`Bearer ${token}`
        },
        }
    );

    console.log(await r12.json());
    

    // Order 
    // place order
    let r13 = await request.post(`${base_url}/shoppers/${shopperId}/orders`,{
        data:{
            address:{
                addressId: adress_Id,
                buildingInfo: "string",
                city: "string",
                country: "string",
                landmark: "string",
                name: "ABC",
                phone: "string",
                pincode: "432101",
                state: "string",
                streetInfo: "string",
                type: "string"
            },
            paymentMode:"COD"
        },
        ignoreHTTPSErrors:true,
        headers:{
            Authorization:`Bearer ${token}`
        }
    });
    let resp13 = await r13.json();
    const order_Id = resp13.data.orderId;
    console.log(resp13);
    console.log(order_Id);

    // Get Order
    let r14 = await request.get(`${base_url}/shoppers/${shopperId}/orders`,{
        ignoreHTTPSErrors:true,
        headers:{
            Authorization:`Bearer ${token}`
        }
    });
    console.log(await r14.json());

    // get specific order 
    let r15 = await request.get(`${base_url}/shoppers/${shopperId}/orders/${order_Id}`,{
        ignoreHTTPSErrors:true,
        headers:{
            Authorization:`Bearer ${token}`
        }
    });
    console.log(await r15.text());   
    
    // Update Order
    let r16 = await request.patch(`${base_url}/shoppers/${shopperId}/orders/${order_Id}?status=DELIVERED`,{
        ignoreHTTPSErrors:true,
        headers:{
            Authorization:`Bearer ${token}`
        }
    });
    console.log(await r16.text());

    // Review
    // add reviwe
    let r17= await request.post(`${base_url}/reviews?productId=${product_Id}`,{
        data:{
            dateTime: "2026-04-28T07:01:32.786Z",
            description: "ABC",
            heading: "string",
            rating: 3,
            shopperId: shopperId,
            shopperName: "Pankaj"
        },
        ignoreHTTPSErrors:true,
        headers:{
            Authorization:`Bearer ${token}`
        }
    });
    let res17 = await r17.json();
    const review_Id = res17.data.reviewId;

    console.log(res17);
    console.log(review_Id);

    // get all review
    let r18 = await request.get(`${base_url}/reviews/${product_Id}`,{
        ignoreHTTPSErrors:true
    });
    console.log(await r18.json());

    // update review
    let r19 = await request.put(`${base_url}/reviews/${review_Id}?productId=${product_Id}`,{
        data:{
            dateTime: "2026-04-28T07:01:32.786Z",
            description: "ABC",
            heading: "Nice Iphone",
            rating: 4,
            shopperId: shopperId,
            shopperName: "string"
        },
        ignoreHTTPSErrors:true,
        headers:{
            Authorization:`Bearer ${token}`
        }
    });
    console.log(await r19.json());
    
    
    
    
    
    
    
    
    
})
