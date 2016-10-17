class Ideas extends React.Component {
  constructor(props) {
    super();
    this.state = {
      ideas: props.ideas
    };
  }

  handleSubmit(idea) {
    var newState = this.state.ideas.concat(idea);
    this.setState({ideas: newState});
  }

  handleUpdate(idea) {
    var ideas = this.props.ideas
    var updated = ideas.filter((id) => { return id.id != idea.id})
    this.setState({ideas: updated})
  }

  render() {
    return(
      <div>
        <NewIdea handleSubmit={this.handleSubmit.bind(this)}/>
        <IdeasDisplay handleUpdate={this.handleUpdate.bind(this)} ideas={this.state.ideas} />
      </div>
    )
  }
}
