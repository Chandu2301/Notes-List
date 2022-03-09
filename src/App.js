import { useEffect, useState } from "react";
import AddNotes from "./components/AddNotes";
import Notes from "./components/Notes";
import "./styles.css";

export default function App() {
  const [notes, setNotes] = useState([]);
  const [filterNotes, setFilterNotes] = useState([]);
  const [tabActive, setTabActive] = useState("tab1");
  useEffect(() => {
    setFilterNotes([...notes]);
    setTabActive("tab1");
  }, [notes]);
  const handleClick = (e) => {
    console.log(e.target.getAttribute("data-attr"));
    const tabText = e.target.getAttribute("data-attr");
    if (tabText === "tab1") {
      setFilterNotes([...notes]);
    } else if (tabText === "tab2") {
      setFilterNotes(notes.filter((note) => note.status === "active"));
    } else {
      setFilterNotes(notes.filter((note) => note.status === "completed"));
    }

    setTabActive(tabText);
  };
  return (
    <div className="App">
      <h2 className="header">Notes Application</h2>
      <AddNotes
        notes={notes}
        setNotes={setNotes}
        filterNotes={filterNotes}
        setFilterNotes={setFilterNotes}
      />

      {filterNotes.length > 0 && (
        <div style={{ width: "80%", textAlign: "center" }}>
          <ul className="notes-list">
            <li
              data-attr="tab1"
              className={tabActive === "tab1" ? "active" : ""}
              onClick={handleClick}
              data-tesid="allButton"
            >
              All
            </li>
            <li
              data-attr="tab2"
              className={tabActive === "tab2" ? "active" : ""}
              onClick={handleClick}
              data-tesid="activeButton"
            >
              Active
            </li>
            <li
              data-attr="tab3"
              className={tabActive === "tab3" ? "active" : ""}
              onClick={handleClick}
              data-tesid="completedButton"
            >
              Completed
            </li>
          </ul>
          <div className="notes-list">
            <table>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody data-tesid="noteList">
                {filterNotes.map((note) => (
                  <Notes key={note.id} note={note} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
