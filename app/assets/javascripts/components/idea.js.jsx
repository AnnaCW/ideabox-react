class Idea extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <tr>
        <td>{this.props.idea.title}</td>
        <td>{this.props.idea.body}</td>
        <td>{this.props.idea.quality}</td>
      </tr>
    )
  }
}
