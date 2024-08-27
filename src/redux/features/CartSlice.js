import { createSlice } from "@reduxjs/toolkit";
import { db, auth } from "../../firebase/firebaseConfig";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialState = {
    carts: []
};

const cartSlice = createSlice({
    name: "cartslice",
    initialState,
    reducers: {
        setCart: (state, action) => {
            state.carts = action.payload;
        },
        addToCart: (state, action) => {
            const itemIndex = state.carts.findIndex((item) => item.id === action.payload.id);
            if (itemIndex >= 0) {
                state.carts[itemIndex].qnty += 1;
                toast.info(`Increased quantity of ${state.carts[itemIndex].name}`);
            } else {
                const temp = { ...action.payload, qnty: 1 };
                state.carts = [...state.carts, temp];
                toast.success(`${action.payload.name} added to cart`);
            }
            saveCartToFirebase(state.carts);
        },
        removeToCart: (state, action) => {
            const removedItem = state.carts.find((item) => item.id === action.payload);
            state.carts = state.carts.filter((item) => item.id !== action.payload);
            toast.error(`${removedItem.name} removed from cart`);
            saveCartToFirebase(state.carts);
        },
        removeSingleIteams: (state, action) => {
            const itemIndex = state.carts.findIndex((item) => item.id === action.payload.id);
            if (state.carts[itemIndex].qnty > 1) {
                state.carts[itemIndex].qnty -= 1;
                toast.info(`Decreased quantity of ${state.carts[itemIndex].name}`);
            } else {
                state.carts = state.carts.filter((item) => item.id !== action.payload.id);
                toast.error(`${state.carts[itemIndex].name} removed from cart`);
            }
            saveCartToFirebase(state.carts);
        },
        emptycartIteam: (state, action) => {
            // state.carts = [];
            // toast.warn('Cart emptied');
            // saveCartToFirebase(state.carts);
            state.carts = [];
            toast.warn('Cart emptied');
            saveCartToFirebase(state.carts);
        }
        
    }
});

export const { setCart, addToCart, removeToCart, removeSingleIteams, emptycartIteam } = cartSlice.actions;

export default cartSlice.reducer;

// Save cart to Firebase
const saveCartToFirebase = async (cart) => {
    const user = auth.currentUser;
    if (user) {
        try {
            await setDoc(doc(db, "carts", user.uid), { items: cart });
        } catch (error) {
            console.error("Error saving cart to Firebase:", error);
        }
    }
};

// Load cart from Firebase
export const loadCartFromFirebase = () => async (dispatch) => {
    const user = auth.currentUser;
    if (user) {
        try {
            const cartDoc = await getDoc(doc(db, "carts", user.uid));
            if (cartDoc.exists()) {
                dispatch(setCart(cartDoc.data().items));
            }
        } catch (error) {
            console.error("Error loading cart from Firebase:", error);
        }
    }
};

// import { createSlice } from "@reduxjs/toolkit"

// const initialState = {
//     carts: []
// }

// // card slice
// const cartSlice = createSlice({
//     name: "cartslice",
//     initialState,
//     reducers: {

//         // add to cart
//         addToCart: (state, action) => {

//             const IteamIndex = state.carts.findIndex((iteam) => iteam.id === action.payload.id);

//             if (IteamIndex >= 0) {
//                 state.carts[IteamIndex].qnty += 1
//             } else {
//                 const temp = { ...action.payload, qnty: 1 }
//                 state.carts = [...state.carts, temp]

//             }
//         },

//         // remove perticular iteams
//         removeToCart:(state,action)=>{
//             const data = state.carts.filter((ele)=>ele.id !== action.payload);
//             state.carts = data
//         },

//         // remove single iteams
//         removeSingleIteams:(state,action)=>{
//             const IteamIndex_dec = state.carts.findIndex((iteam) => iteam.id === action.payload.id);

//             if(state.carts[IteamIndex_dec].qnty >=1){
//                 state.carts[IteamIndex_dec].qnty -= 1
//             }

//         },

//         // clear cart
//         emptycartIteam:(state,action)=>{
//             state.carts = []
//         }
//     }
// });

// export const { addToCart,removeToCart,removeSingleIteams ,emptycartIteam} = cartSlice.actions;

// export default cartSlice.reducer;


