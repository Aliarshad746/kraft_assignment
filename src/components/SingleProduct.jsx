import {Card, Button} from "react-bootstrap";

function SingleProduct({product = {}, tabPermissions = {}, deleteHandler= () => {}}) {
  return (
    <Card className="my-3 p-3 rounded">
        <Card.Img src={product.image_url} variant="top" />
      <Card.Body>
          <Card.Title as="div">{product.label}</Card.Title>
        <Card.Text as="div">
        </Card.Text>
        <Card.Text as="h3">{product.currency} {product.price}</Card.Text>
      </Card.Body>
      {tabPermissions?.can_edit_products ? 
        <Button className="btn btn-sm btn-danger" onClick={() => deleteHandler(product?.id)}>
            Remove
        </Button> : 
        null}
      
    </Card>
  )
}

export default SingleProduct