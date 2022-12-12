import '../App.css'
import { useState, useEffect, createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
const urlEndpoint = process.env.REACT_APP_URL_ENDPOINT;
const ContentContext = createContext();

export const ContentProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);
    const [cartCount, setCartCount] = useState(0);
    const [cartItems, setCartItems] = useState([]);
    const [cartItemsCount, setCartItemsCount] = useState(0);
    const [cartItemsTotal, setCartItemsTotal] = useState(0);
    const [shipping, setShipping] = useState(0);
    const [tax, setTax] = useState(0);
    const [total, setTotal] = useState(0);
    const [product, setProduct] = useState({});

    const fetchProducts = async () => {
        const response = await fetch(`${urlEndpoint}/products`);
        const data = await response.json();
        setProducts(data);
    }
    const fetchProduct = async (id) => {
        const response = await fetch(`${urlEndpoint}/products/${id}`);
        const data = await response.json();
        setProduct(data);
    }

    useEffect(() => {
        fetchProducts();
    }
    , []);

    useMemo(() => {
        let items = [];
        let total = 0;
        let count = 0;
        cart.forEach(item => {
            total += item.price * item.quantity;
            count += item.quantity;
            const index = items.findIndex(i => i.id === item.id);
            if (index > -1) {
                items[index].quantity += item.quantity;
            } else {
                items.push(item);
            }
        });
        setCartItems(items);
        setCartItemsCount(count);
        setCartItemsTotal(total);
    }, [cart]);

    useMemo(() => {
        setCartTotal(cartItemsTotal);
        setCartCount(cartItemsCount);
        setShipping(cartItemsTotal > 0 ? 15 : 0);
        setTax((cartItemsTotal + shipping) * 0.05);
        setTotal(cartItemsTotal + shipping + tax);
    }, [cartItemsTotal, cartItemsCount, shipping, tax]);

    

    return (
        <ContentContext.Provider value={{
            products,
            setProducts,
            cart,
            setCart,
            cartTotal,
            setCartTotal,
            cartCount,
            setCartCount,
            cartItems,
            setCartItems,
            cartItemsCount,
            setCartItemsCount,
            cartItemsTotal,
            setCartItemsTotal,
            shipping,
            setShipping,
            tax,
            setTax,
            total,
            setTotal,
            product,
            setProduct,
        }}>
            {children}
        </ContentContext.Provider>
    );
};

export const useContent = () => {
	return useContext(ContentContext);
};



export default ContentProvider;
