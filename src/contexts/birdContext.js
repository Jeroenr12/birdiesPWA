import {createContext, useCallback, useContext, useMemo} from "react";
import {addDoc, collection, deleteDoc, query, updateDoc} from "firebase/firestore";
import {birdConverter, firestoreDB} from "../services/firebase";
import {useCollectionData} from "react-firebase-hooks/firestore";

const BirdContext = createContext();

export function BirdProvider(props){
    const collectionRef = useMemo(() =>
    collection(firestoreDB, 'birds').withConverter(birdConverter),[]);
    const queryRef = useMemo(() =>
    query(collectionRef), [collectionRef]);

    const [birds, loading, error] = useCollectionData(queryRef);

    const onNewBird = useCallback(async (bird) => {
        try {
            await addDoc(collectionRef, bird);
            console.log("gelukt");
            return true;
        }catch {
            console.log("iets ging verkeerd");
        }
        return false;
    }, [collectionRef]
    );

    const  api = useMemo(() => ({birds, onNewBird}), [birds, onNewBird()]);

    return <BirdContext.Provider value={api}>
        {props.children}
    </BirdContext.Provider>
}

export const useBirdContext = () => useContext(BirdContext);