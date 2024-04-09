import { createContext, useContext, useState } from "react";


const ViewContext = createContext()

export const useView = () => useContext(ViewContext)

export const ViewProvider = ({children}) =>{
    const [view, setView] = useState([])

      //view item
  const viewItem = (event) => {
    setView([event])
    console.log(view);
  }

  return(
    <ViewContext.Provider value={{view, viewItem}}>{children}</ViewContext.Provider>
  )
}