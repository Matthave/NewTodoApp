import React, { Component } from "react";
import ListCopyWindoView from "../../components/List/ListOptions/ListCopyWindow/ListCopyWindowView";

class ListCopyWindow extends Component {
  state = {
    textAreaValue: "",
  };

  componentDidMount() {
    const currentList = this.props.wholeList.filter(
      (ele) => ele.id === this.props.listId
    );
    this.setState({ textAreaValue: currentList[0].title });
  }

  setCopyListValue = (e) => {
    this.setState({ textAreaValue: e.target.value });
  };

  copyList = () => {
    const { wholeList, listId, copyNewList, copyListVisibility } = this.props;
    if (this.state.textAreaValue === "") {
      return this.setState({
        textAreaValue: `List no. ${wholeList.length + 1}`,
      });
    }
    const currentList = wholeList.filter((ele) => ele.id === listId);

    copyNewList(currentList[0].tasks, this.state.textAreaValue);
    copyListVisibility();
  };

  render() {
    const { textAreaValue } = this.state;

    return (
      <ListCopyWindoView
        textAreaValue={textAreaValue}
        setCopyListValue={this.setCopyListValue}
        copyList={this.copyList}
      />
    );
  }
}

export default ListCopyWindow;
