class NewIdea extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <form className="add-new-idea">
        <h4>Add New Idea</h4>
        <div className="form-group">
          <label for='title'>Title</label>
          <textarea className='form-control' id='titleTextarea' rows='1'></textarea>
        </div>
        <div className="form-group">
          <label for='body'>Body</label>
          <textarea className='form-control' id='bodyTextarea' rows='10'></textarea>
        </div>
      <button className='btn btn-success' id='save-button'>Save</button>
    </form>
   );
  }
}
