import React, { Component } from "react";
import MainComponent from "../components/MainComponent";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: {}, activeMenuItem: "1" };
  }

  componentDidMount() {
    fetch("http://www.mocky.io/v2/5c2ba4983000006400abafe4")
      .then(resp => resp.json())
      .then(data => {
        this.setState({ data: data });
      });
  }

  onMenuItemClick = id => {
    this.setState({ activeMenuItem: id });
  };

  render() {
    const {
      data: { resources, actions },
      activeMenuItem
    } = this.state;

    let menuItems = [];
    let resourceInfo = {};
    let resourceActions = [];

    if (resources) {
      menuItems = resources.map(item => {
        return { id: item.id, name: item.name };
      });
      resourceInfo = resources.filter(item => {
        return item.id === activeMenuItem;
      })[0];
      resourceActions = actions.filter(item => {
        return resourceInfo.actionIds.includes(item.id);
      });
    }
    return (
      <div className="App">
        <MainComponent
          menuItems={menuItems}
          activeMenuItem={activeMenuItem}
          resourceInfo={resourceInfo}
          resourceActions={resourceActions}
          onMenuItemClick={this.onMenuItemClick}
        />
      </div>
    );
  }
}

export default App;
