import { useRef, useState } from "react";

const AddNotes = ({ notes, setNotes, filterNotes, setFilterNotes }) => {
  const [inputData, setInputData] = useState({ title: "", status: "", id: "" });
  const titleRef = useRef(null);
  const handleChange = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
      id: Math.random() * 7000
    });
  };

  const addNotes = (e) => {
    e.preventDefault();
    console.log(inputData, notes);
    if (inputData.title.length > 0 && inputData.status.length > 0) {
      inputData.status = inputData.status.toLowerCase();
      setNotes([...notes, inputData]);
      //setFilterNotes([...filterNotes, inputData]);

      setInputData({ title: "", status: "", id: "" });
      titleRef.current.focus();
    }
  };
  return (
    <div className="add-container">
      <form onSubmit={addNotes}>
        <input
          type="text"
          name="title"
          value={inputData.title}
          onChange={handleChange}
          autoFocus
          ref={titleRef}
          placeholder="Title"
          data-tesid="input-note-name"
        />
        <input
          type="text"
          name="status"
          value={inputData.status}
          onChange={handleChange}
          placeholder="Status"
          data-tesid="input-status-name"
        />
        <button data-tesid="submit-button">Add Note</button>
      </form>
    </div>
  );
};

export default AddNotes;
