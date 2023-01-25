import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import NewBoard from "../modals/newBoard";
import './boads.scss'

function Boads() {
  const [showModalNewBoard, setShowModalNewBoard] = useState(false);

  return (
    <div className="container mt-5">
      <Row className="text-uppercase fw-bold">
        Your boards
      </Row>
      <Row className="mt-1">
        <Col className="col-sm-2 ps-0" >
          <Card className="h-100 card">
            <Card.Body>Chelsea</Card.Body>
          </Card>
        </Col>
        <Col className="col-sm-2 ps-0">
          <Card className="h-100 card">
            <Card.Body onClick={() => setShowModalNewBoard(true)}>
              <FontAwesomeIcon icon={faPlus}/>
              <span className="ms-2">Create new boad</span>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <NewBoard
        show={showModalNewBoard}
        onHide={() => setShowModalNewBoard(false)}
      />
    </div>
  )
}
export default Boads;