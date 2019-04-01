import React, { Component } from "react";
import ACTIONS from "../modules/action";
import { connect } from "react-redux";
import { FormContainer, Table, TableRow } from '../components';

class Home extends Component {
  state = {
    item: '',
    category: '',

  };
  handleSubmit = event => {
    // console.log(this.state.item);
    this.setState({ 
      item: "",
      category: "" 
    });
    if (this.state.item !== "" && this.state.category !== "") {
      // add the item to the store
      this.props.createItem(this.state);
    }
    // event.preventDefault();
  };
  handleDelete = event => {
    // delete the item from the store
    this.props.deleteItem(event.target.value);
  };
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  renderRows() {
    const { items, currentUser } = this.props;
    return (
      items.map(item => 
        <TableRow 
          item={item}
          key={item.id}
          currentUser={currentUser}
          trashOnClick={this.handleDelete}
          editOnClick={() => console.log('EDIT THIS ITEM:', item)}
        />
      )
    )
  }
  render() {
    console.log(this.state);
    console.log(this.props.items);
    return (
      <div>
        <FormContainer 
          onClick={() => this.handleSubmit()}   
          descriptionValue={this.state.item}  
          categoryValue={this.state.category}   
          onChangeDescription={this.handleChange}
          onChangeCategory={this.handleChange}

        />
        <Table>
          {this.renderRows()} 
        </Table>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  items: state.items,
  currentUser: state.currentUser
});
const mapDispatchToProps = dispatch => ({
  createItem: item => dispatch(ACTIONS.createItem(item)),
  deleteItem: id => dispatch(ACTIONS.deleteItem(id))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);