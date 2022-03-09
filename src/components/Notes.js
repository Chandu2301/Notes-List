const Notes = ({ note }) => {
  return (
    <tr>
      <td>{note.title}</td>
      <td>{note.status}</td>
    </tr>
  );
};

export default Notes;
