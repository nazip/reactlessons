class Img extends React.Component {
  render() {
    return <img src={this.props.src}
                width={this.props.width}
                height={this.props.height}
                alt={this.props.alt} />;
  }
}

// export default Img;