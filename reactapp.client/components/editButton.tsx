import { Button } from 'react-bootstrap';

const EditButton = () => {
    return (
        <Button variant="outline-light" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src="\image\editIcon.svg" alt="Add" style={{ verticalAlign: 'middle' }}  />
        </Button>
    );
}

export default EditButton;
