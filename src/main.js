import React, { Component } from "react";
import ReactDom from "react-dom";

class LikeButton extends Component {
  constructor(props) {
    super(props);
    this.state  = {
      hovered: false,
      count: 999,
      liked: false
    };
  }

  styles() {
    return {
      container: {
        fontFamily: "helvetica, arial, 'hiragino kaku gothic pro', meiryo, 'ms pgothic', sans-serif",
        fontSize: 11
      },
      like: {
        display: "inline-block",
        background: "#3b5998",
        padding: "0px 5px",
        borderRadius: 2,
        color: "#ffffff",
        cursor: "pointer",
        float: "left",
        height: 20,
        lineHeight: "20px"
      },
      likeHover: {
        background: "#444"
      },
      counterBefore: {
        display: "block",
        float: "left",
        width: 6,
        height: 6,
        background: "#fafafa",
        marginLeft: "-12px",
        borderRight: 10,
        transform: "rotate(45deg)",
        WebkitTransform: "rotate(45deg)",
        marginTop: 6,
        borderLeft: "1px solid #aaa",
        borderBottom: "1px solid #aaa"
      },
      counter: {
        display: "block",
        background: "#fafafa",
        boxSizing: "border-box",
        border: "1px solid #aaa",
        float: "left",
        padding: "0px 8px",
        borderRadius: 2,
        marginLeft: 8,
        height: 20,
        lineHeight: "20px"
      }
    };
  }

  render() {
    const styles = this.styles();
    const { liked, count } = this.state;
    return (
      <span style={styles.container}>
        <span
          style={styles.like}
          onMouseEnter={() => this.setState({hovered: true})}
          onMouseLeave={() => this.setState({hovered: false})}
          onClick={() => this.setState({
            count: count + (liked ? -1 : 1),
            liked: !liked
          })} 
        >{liked ? "✔ " : ""}いいね！</span>
        <span style={styles.counter}>
          <span style={styles.counterBefore}>{" "}</span> {count}
        </span>
      </span>
    );
  }
}

ReactDom.render(
  <LikeButton />,
  document.getElementById("like-button")
);
