import React, { useEffect, useState } from "react";
import { Accordion, Badge, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
// import notes from "../../components/data/notes";
import MainScreen from "../../components/MainScreen/MainScreen";
import axios from 'axios';

function MyNotes() {
  const [notes, setNotes] = useState([]);
  const deleteHandler = (id) => {
    if (window.confirm("Are You Sure")) {
    }
  };

  const fetchNotes = async () => {
    const {data} = await axios.get('/api/notes');
    setNotes(prevState => [...data]);
  }
  
  useEffect(() => {
    fetchNotes();
  }, [])

  return (
    <MainScreen MainScreen title="Hello User">
      <Link to="createnote">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          Create New Note
        </Button>
      </Link>
      {notes.map((note, index) => (
        <Accordion key={note._id}>
          <Card style={{ margin: 10 }}>
            <Accordion.Item eventKey={index}>
              <Accordion.Header>
                <Card.Header style={{ display: "flex" }}>
                  <span
                    style={{
                      color: "black",
                      textDecoration: "none",
                      flex: 1,
                      cursor: "pointer",
                      alignSelf: "center",
                      fontSize: 18,
                    }}
                  >
                      {note.title}
                  </span>
                  <div>
                    <Button href={`/note/${note._id}`}>Edit</Button>
                    <Button
                      variant="danger"
                      className="mx-2"
                      onClick={() => deleteHandler(note._id)}
                    >
                      Delete
                    </Button>
                  </div>
                </Card.Header>
              </Accordion.Header>
              <Accordion.Body>
                <Card.Body>
                  <h4>
                    <Badge variant="success">Category - {note.category}</Badge>
                  </h4>
                  <blockquote className="blockquote mb-0">
                    <p>{note.content}</p>
                    <footer className="blockquote-footer">
                      Created On - date
                    </footer>
                  </blockquote>
                </Card.Body>
              </Accordion.Body>
            </Accordion.Item>
          </Card>
        </Accordion>
      ))}
    </MainScreen>
  );
}

export default MyNotes;
