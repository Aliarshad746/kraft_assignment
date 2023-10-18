import { useContext, useMemo } from 'react';
import {Row, Col} from "react-bootstrap"
import { DataContext } from '../App';
import SingleProduct from './SingleProduct';

function Products(props) { 
    const {productsData = {}, setProductsData = () => {}} = useContext(DataContext);

    const products = useMemo(() => productsData?.products , [JSON.stringify(productsData)])

    const deleteHandler = (id) => {
        const finalProducts = products.filter((item) => item?.id !== id);
        setProductsData({products: finalProducts})
    }

  return (
    <Row>
        {products?.map((product) => <Col key={product?.id} sm={12} md={6} lg={4} xl={3} >
            <SingleProduct product={product} {...props} deleteHandler={deleteHandler}/>
        </Col>)}
    </Row>
  )
}

export default Products