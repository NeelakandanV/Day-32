import { children, createContext, useContext, useEffect, useState } from "react";


let AppContext = createContext('');

const AppProvider = ({children})=>{
    const [user,setUser] = useState([]);
    const [Book,setBook] = useState([]);

    useEffect(()=>{
        const getDetails = async()=>{
            try{
                //Users
                const response = await fetch("https://65d20b1a987977636bfbddd6.mockapi.io/Users",{
                    method:"GET",
                })
                const data = await response.json();
                //console.log(data)
                setUser(data)
                if(!data){
                    console.log("Unable to fetch Users")
                }

                //Books
                const BookResponse = await fetch("https://65d20b1a987977636bfbddd6.mockapi.io/Books",{
                    method:"GET",
                })
                const BookData = await BookResponse.json();
                setBook(BookData)
                //console.log(BookData)

                if(!BookData){
                    console.log("Unable to fetch Books")
                }

            }
            catch(error){
                console.log(error)
            }
        }
        getDetails();
    },[])

    return(
        <AppContext.Provider
          value={{user,setUser,Book,setBook}}>
            {children}
        </AppContext.Provider>
    );
}

export const Appstate = ()=>{
    return useContext(AppContext);
}

export default AppProvider;