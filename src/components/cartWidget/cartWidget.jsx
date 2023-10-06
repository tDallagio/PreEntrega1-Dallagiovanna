import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

const CartWidget = () => {
    return(
        <Button variant="primary">
            Profile <Badge bg="secondary">9 </Badge>
            <span className="visually-hidden">messages</span>
        </Button>
    )
}

export default CartWidget