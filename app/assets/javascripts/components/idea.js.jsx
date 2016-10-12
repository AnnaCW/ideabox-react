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

  render() {
    return(
      <tr>
        <td>{this.props.idea.title}</td>
        <td>{this.trimBody(this.props.idea.body)}</td>
        <td>{this.props.idea.quality}</td>
      </tr>
    )
  }
}
