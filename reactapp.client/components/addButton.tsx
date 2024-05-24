import { Button } from 'react-bootstrap';

const AddButton = () => {
    return (
        <Button variant="outline-light" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src="\image\addIcon.svg" alt="Add" style={{ verticalAlign: 'middle' }}  />
        </Button>
    );
}

export default AddButton;
