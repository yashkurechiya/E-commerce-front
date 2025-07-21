import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from 'axios'
import { useNavigate } from 'react-router-dom'; // Add this

export const ShopContext = createContext();

export const ShopContextProvider = (props) => {

    const currency = '$';
    const delivery_fee = 10;
    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const [products, setProducts] = useState([])
    const [token, setToken] = useState(localStorage.getItem('token') || '');

    const navigate = useNavigate(); // Add this
    const addToCart = async (itemId, size) => {
        if (!size) {
            toast.error('Select Product Size');
            return;

        }
        let cartData = structuredClone(cartItems);//Copy of Cart items
        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            }
            else {
                cartData[itemId][size] = 1;
            }
        }
        else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }
        setCartItems(cartData);

        if(token) {
            try {
                await axios.post(backendUrl + '/api/cart/add', {itemId, size}, { headers:{token}})
            } catch (error) {
                console.log(error);
                toast.error(error.message)
                
            }
        }
    }

    const getCartCount = () => {
        let totalCount = 0;
        for (const items in cartItems) {
            for (const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {
                        totalCount += cartItems[items][item];
                    }
                } catch (error) {

                }
            }
        }
        return totalCount;
    }
    const updateQuantity = async (itemId, size, quantity) => {

        let cartData = structuredClone(cartItems);
        cartData[itemId][size] = quantity;

        setCartItems(cartData);
        if (token) {
            try {
                
                await axios.post(backendUrl + '/api/cart/update',{itemId, size, quantity}, {headers: {token}} )
            } catch (error) {
                console.log(error);
                toast.error(error.message)
                
            }
        }
    }
    const getCartAmount = () => {
        let totalAmount = 0;

        for (const productId in cartItems) {
            const itemInfo = products.find((product) => product._id === productId);

            if (!itemInfo) {
                console.warn("⚠️ Product not found for ID:", productId);
                continue; // Skip this cart item if product doesn't exist
            }

            for (const size in cartItems[productId]) {
                const quantity = cartItems[productId][size];

                if (quantity > 0) {
                    totalAmount += itemInfo.price * quantity;
                }
            }
        }

        return totalAmount;
    };


    const getProductsData = async () => {
        try {
            const response = await axios.get(backendUrl + '/api/product/list')
            // console.log(response.data);
            if (response.data.sucess) {
                setProducts(response.data.products)
            } else {
                toast.error(response.data.message)
            }

        } catch (error) {
            console.log(error);
            toast.error(error.messsage)

        }
    }

    const getUserCart = async ( token )=>{
        try {
            const response = await axios.post(backendUrl  + '/api/cart/get',{},{headers:{token}})
            if (response.data.success) {
                setCartItems(response.data.cartData)
            }
        } catch (error) {
            console.log(error);
            toast.error(error.messsage)
            
        }
    }

    useEffect(() => {
        getProductsData()
    }, [products])

    useEffect(()=>{
        if(!token && localStorage.getItem('token')) {
            setToken(localStorage.getItem('token'))
            getUserCart(localStorage.get('token'))
        }
    },[])


    const value = {
        products, currency, delivery_fee, navigate, setCartItems
        , search, setSearch, showSearch, setShowSearch, getCartAmount,
        cartItems, addToCart, getCartCount, updateQuantity, backendUrl, token, setToken
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}


export default ShopContextProvider;