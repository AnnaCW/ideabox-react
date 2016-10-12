class Ideas extends React.Component {
  constructor(props) {
    super();
    this.state = {
      ideas: props.ideas
    };
  }

  render() {
    var ideas = this.state.ideas.map( (idea) => {
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
