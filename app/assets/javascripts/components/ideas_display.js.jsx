class IdeasDisplay extends React.Component {

  render() {
    var ideas = this.props.ideas.map( (idea) => {
      return <Idea key={idea.id} idea={idea} />
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
