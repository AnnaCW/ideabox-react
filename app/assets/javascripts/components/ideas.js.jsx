class Ideas extends React.Component {
  constructor(props) {
    super();
    this.state = {
      ideas: props.ideas
    };
  }

  render() {
    return(
      <div>
        <NewIdea />
        <IdeasDisplay ideas={this.state.ideas} />
      </div>
    )
  }
}
