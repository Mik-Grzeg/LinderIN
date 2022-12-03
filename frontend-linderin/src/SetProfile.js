import React, {useState} from 'react'
import ImageUploader from 'react-images-upload';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Button,
    Form,
    FormGroup,
    ModalFooter,
    ModalHeader,
    ModalBody,
    Modal,
    Input,
    Label
  } from 'reactstrap';
  
    // Modal open state



function SetProfile() {

    const [modal, setModal] = useState(false);
  
    // Toggle for Modal
    const toggle = () => setModal(!modal);

    return (
        
        <center><div style={{
            display: 'block', width: 700, padding: 30
        }}>
            <Button color="primary"
                onClick={toggle}>Zakutalizuj profil</Button>
            <Modal isOpen={modal}
                toggle={toggle}
                modalTransition={{ timeout: 2000 }}>
                <ModalBody>
                <div className="App">
                    <h2>Dodaj opis</h2>
                        <Form className="form">
                        <FormGroup>
                            <Label for="description">Wpisz opis profilu</Label>
                            <Input
                            type="description"
                            />
                        </FormGroup>
                    <h2>Załącz zdjęcie</h2>
                        <FormGroup>
                        <ImageUploader
                            withIcon={true}
                            buttonText='Choose images'
                            onChange={this.onDrop}
                            imgExtension={['.jpg', '.gif', '.png', '.gif']}
                            maxFileSize={5242880}
                        />
                        </FormGroup>
                        <Button>Submit</Button>
                    </Form>
                    </div>
                </ModalBody>
            </Modal>
        </div ></center>
    );
}
  
export default SetProfile;
