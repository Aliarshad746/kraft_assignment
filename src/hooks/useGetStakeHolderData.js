import { useState, useEffect } from "react";
import roleTypes from "../rawData/roles_types.json"
import {EMPTY_ARRAY_SIZE, ERROR_USER_NOT_FOUND, STAKEHOLDER_LOCAL_STORAGE_KEY} from "../helpers/constants"
import bcrypt from "bcryptjs";


const useGetStakeHolderData = (users) => {
    const [stakeHolder, setStakeHolder] = useState();
    const [error, setError] = useState()

    const verifyStakeHolder = (email = '', password = '') => {
        const finalEmail = email?.toLowerCase();
        const finalPassword = password;

        const user = users.find((item) => {
            if(item?.email !== finalEmail){
                return false;
            }
            const compare = bcrypt.compareSync(finalPassword, item?.password_hash);
            if(compare){
                return true;
            }
            return false;
        })

        if(user && Object.keys(user)?.length > EMPTY_ARRAY_SIZE){
                const stakeholder_role = roleTypes?.role_types?.find((item) => user?.role_type === item?.role);
                const stakeholderObj = {
                    email: user?.email,
                    password_hash: user?.password_hash,
                    name: user?.name,
                    ...(stakeholder_role || {})
                }
                setStakeHolder(stakeholderObj);
                localStorage?.setItem(STAKEHOLDER_LOCAL_STORAGE_KEY, JSON.stringify(stakeholderObj));

         }else{
                setError(ERROR_USER_NOT_FOUND);
         }
        
        
    }

    useEffect(() => {
        const item = localStorage.getItem(STAKEHOLDER_LOCAL_STORAGE_KEY);
        if(item){
            setStakeHolder(JSON.parse(item))
        }
    },[])


    return {
        stakeHolder,
        setStakeHolder,
        verifyStakeHolder,
        error,
        setError,
    }
}

export default useGetStakeHolderData;