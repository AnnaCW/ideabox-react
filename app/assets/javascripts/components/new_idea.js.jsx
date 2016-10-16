class NewIdea extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick(event) {
    event.preventDefault();
    
    var data = {
      title: this.refs.title.value,
      body: this.refs.body.value
    };

    $.ajax({
      url: "/api/v1/ideas.json",
      method: "POST",
      data: {idea: data },
      success: (idea) => {
        this.props.handleSubmit(idea);
      }
    });
  }

  render() {
    return(
      <form className="add-new-idea">
        <h4>Add New Idea</h4>
        <div className="form-group">
          <label>Title</label>
          <textarea ref='title' className='form-control' rows='1'></textarea>
        </div>
        <div className="form-group">
          <label>Body</label>
          <textarea ref='body' className='form-control' rows='10'></textarea>
        </div>
      <button onClick={this.handleClick.bind(this)} className='btn btn-success'>Save</button>
    </form>
   );
  }
}
