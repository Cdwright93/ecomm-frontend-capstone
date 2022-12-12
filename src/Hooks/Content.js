import '../App.css'
import { useState, useEffect, createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
const urlEndpoint = process.env.REACT_APP_URL_ENDPOINT;
const ContentContext = createContext();

export const ContentProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
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
    const createCheckout = async () => {
        const name = product.name;
        const price = product.price;
        const response = await fetch(`${urlEndpoint}/create-checkout-session`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({name: product.name, price: product.price }),
        });
        const data = await response.json();
        return data;
    }
    
    useEffect(() => {
        fetchProducts();
    }
    , []);



    return (
        <ContentContext.Provider value={{
            products,
            setProducts,
            fetchProducts,
            product,
            setProduct,
            createCheckout,
        }}>
            {children}
        </ContentContext.Provider>
    );
};

export const useContent = () => {
	return useContext(ContentContext);
};



export default ContentProvider;
