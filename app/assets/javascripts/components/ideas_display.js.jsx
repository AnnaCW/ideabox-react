class IdeasDisplay extends React.Component {

  handleDelete(idea) {
    this.props.handleUpdate(idea);
  }

  handleQualityChange(idea) {
    this.props.handleChange(idea);
  }

  render() {
    var ideas = this.props.ideas.map( (idea) => {
      return <Idea key={idea.id} handleDelete={this.handleDelete.bind(this)} handleQualityChange={this.handleQualityChange.bind(this)} idea={idea} />
    });
    return(
      <table className= 'table table-ideas'>
        <thead>
          <tr className= 'table-headers'>
            <td>Title</td>
            <td>Body</td>
            <td>Quality</td>
            <td></td>
            <td></td>
          </tr>
      </thead>
      <tbody>{ideas}</tbody>
      </table>
    );
  }
}
