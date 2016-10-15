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

  handleDelete(idea) {
    var index = this.state.ideas.indexOf(idea);
    console.log(index);
  }

  // deleteRecord(record) {
  //     var index = this.state.records.indexOf(record);
  //     var records = React.addons.update(this.state.records, {$splice: [[index, 1]] });
  //     this.setState({records: records});
  //   };


  render() {
    return(
      <div>
        <NewIdea handleSubmit={this.handleSubmit.bind(this)}/>
        <IdeasDisplay ideas={this.state.ideas} />
      </div>
    )
  }
}
