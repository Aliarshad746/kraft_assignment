import {useMemo, useContext, useEffect} from 'react'
import Products from '../components/Products'
import ListUsers from '../components/ListUsers'
import {Container, Tabs, Tab} from "react-bootstrap"
import { DataContext } from '../App'
import { useNavigate } from "react-router-dom";
import { ALL_ORDERED_DASH_TABS, EMPTY_ARRAY_SIZE, ZEROTH_INDEX } from '../helpers/constants'

const TABKEY_COMPONENT_MAPPING = {
    products : Products,
    users : ListUsers
}

function HomeScreen() {

    const {stakeHolder = {}} = useContext(DataContext) 
    const navigate = useNavigate();

    const finalTabs = useMemo(() => ALL_ORDERED_DASH_TABS.filter(
        (item) => stakeHolder?.accessibility_tabs?.includes(item?.name)
        ), [JSON.stringify(stakeHolder)]) 

    useEffect(() =>{
        if(Object.keys(stakeHolder)?.length === EMPTY_ARRAY_SIZE){
            navigate("/login");
        }
    },[JSON.stringify(stakeHolder)])
    

    if(Object.keys(stakeHolder)?.length > EMPTY_ARRAY_SIZE){
        return <Container className='my-3'>
        <Tabs
      defaultActiveKey={finalTabs?.[ZEROTH_INDEX]?.name}
      className="mb-3"
    >
        {finalTabs?.map((item) => <Tab eventKey={item?.name} key={item?.name} title={item?.label}>
            {TABKEY_COMPONENT_MAPPING[item?.name]({
                tabPermissions: {...(stakeHolder?.accessibility_tabs_permissions?.[item?.name] || {})}
                })}
        </Tab>)}
    </Tabs>
    </Container>
    }

  return null;
}

export default HomeScreen