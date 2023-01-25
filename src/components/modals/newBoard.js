import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { visibilities } from '../../constants';
import { useForm } from 'react-hook-form';

function NewBoard(props) {
  const { register, handleSubmit, formState: { errors }, } = useForm();

  const onSubmit = data => {
    console.log(data)
  }

  return (
    <Modal
      {...props}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Create board
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate validated={Object.keys(errors).length !== 0} onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-2" controlId="formBasicEmail">
            <Form.Label>Board title</Form.Label>
            <Form.Control
              type="text"
              isValid
              {...register("title", { required: true })}
              required
            />
            <Form.Control.Feedback type="invalid">
              Board title is required
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-2" controlId="formBasicPassword">
            <Form.Label>Visibility</Form.Label>
            <Form.Select {...register("visibility")}>
              {visibilities.map((x) => (
                <option value={x.id}>{x.label}</option>
              ))}
            </Form.Select>
          </Form.Group>
          <Button variant="primary" type="submit">
            Save
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  )
}
export default NewBoard