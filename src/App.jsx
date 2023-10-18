import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import { Routes, Route } from "react-router-dom";
import {createContext, useState} from "react"

import products from "./rawData/products.json"
import users from "./rawData/users.json"
import useGetStakeHolderData from "./hooks/useGetStakeHolderData";
import Header from "./components/Header";
import EmptyScreen from "./screens/EmptyScreen";
import { ERROR_PAGE_NOT_FOUND } from "./helpers/constants";

export const DataContext = createContext();

function App() {
  const [productsData, setProductsData] = useState(products)
  const [usersData, setUsersData] = useState(users);

  const {setStakeHolder, stakeHolder, verifyStakeHolder, error} = useGetStakeHolderData(usersData?.users);

  
  return (
    <DataContext.Provider value={{
    stakeHolder, 
    setStakeHolder, 
    productsData, 
    setProductsData,
    usersData,
    setUsersData
    }}>
      <Header />
      <main className="py-3">
      <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/login" element={<LoginScreen verifyStakeHolder={verifyStakeHolder} error={error}/>} />
          <Route
              path="*"
              element={<EmptyScreen message={ERROR_PAGE_NOT_FOUND}/>}
            />        
      </Routes>
      </main>
      
    </DataContext.Provider>
  );
}

export default App;
