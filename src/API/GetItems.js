import { collection, getDocs } from "firebase/firestore";
import { FirestoreDatabase } from "../Auth/Config";


export const GetAdopt = async () => {
    try {
        const events = await getDocs(collection(FirestoreDatabase, "adopt"))
        return {
            success: true,
            data: events.docs.map((doc) => {
                return { ...doc.data(), id: doc.id, }
            }),
        }
    } catch (error) {
        return (error)
    }
};

export const GetProduct = async () => {
    try {
        const events = await getDocs(collection(FirestoreDatabase, "products"))
        return {
            success: true,
            data: events.docs.map((doc) => {
                return { ...doc.data(), id: doc.id, }
            }),
        }
    } catch (error) {
        return (error)
    }
};