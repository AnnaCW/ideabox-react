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

  render() {
    return(
      <div>
        <NewIdea handleSubmit={this.handleSubmit.bind(this)}/>
        <IdeasDisplay ideas={this.state.ideas} />
      </div>
    )
  }
}
