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

  handleDeleteClick(event) {
    event.preventDefault();

    $.ajax({
      url: "/api/v1/ideas/" + this.props.idea.id,
      method: "DELETE",
      success: (idea) => {
        this.props.handleDelete(idea);
      }
    });
  }

  handleQUpClick(event) {
    event.preventDefault();

    var increaseQuality = {
      swill: 'plausible',
      plausible: 'genius',
      genius: 'genius'
    };

    $.ajax({
      url: "/api/v1/ideas/" + this.props.idea.id,
      method: "PATCH",
      data: { idea: { quality: increaseQuality[this.props.idea.quality]} },
      success: (idea) => {
        this.props.handleQualityChange(idea);
      }
    })
  }

  handleQDownClick(event) {
    event.preventDefault();

    var decreaseQuality = {
      swill: 'swill',
      plausible: 'swill',
      genius: 'plausible'
    };

    $.ajax({
      url: "/api/v1/ideas/" + this.props.idea.id,
      method: "PATCH",
      data: { idea: { quality: decreaseQuality[this.props.idea.quality]} },
      success: (idea) => {
        this.props.handleQualityChange(idea);
      }
    })
  }

  render() {
    return(
      <tr>
        <td>{this.props.idea.title}</td>
        <td>{this.trimBody(this.props.idea.body)}</td>
        <td>{this.props.idea.quality}</td>
        <td>
          <button onClick={this.handleQUpClick.bind(this)} className='btn btn-sm btn-success'>Thumbs Up</button>
          <button onClick={this.handleQDownClick.bind(this)} className='btn btn-sm btn-warning'>Thumbs Down</button>
        </td>
        <td>
          <button onClick={this.handleDeleteClick.bind(this)} className='btn btn-danger'>Delete</button>
        </td>
      </tr>
    )
  }
}
