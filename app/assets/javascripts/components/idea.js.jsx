class Idea extends React.Component {
  constructor(props) {
    super(props);
  }

  trimBody(body) {
    var short = body.substr(0, 100);
      if (/^\S/.test(body.substr(100)))
        return short.replace(/\s+\S*$/, "");
      return short;
  }

  handleClick(event) {
    event.preventDefault();

    $.ajax({
      url: "/api/v1/ideas/" + this.props.idea.id,
      method: "DELETE",
      success: (idea) => {
        this.props.handleDelete(idea);
      }
    });
  }

  render() {
    return(
      <tr>
        <td>{this.props.idea.title}</td>
        <td>{this.trimBody(this.props.idea.body)}</td>
        <td>{this.props.idea.quality}</td>
        <td>
          <button onClick={this.handleClick.bind(this)} className='btn btn-danger'>Delete</button>
        </td>
      </tr>
    )
  }
}
