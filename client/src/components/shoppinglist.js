/* jshint esversion:6 */
import React, { Component } from 'react';
import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import uuid from 'uuid';
import {connect} from 'react-redux';
import {getItems} from '../actions/itemActions.js';
import PropTypes from 'prop-types';


class ShoppingList extends Component {
    
    componentDidMount(){
        this.props.getItems();
    }

    render() {
        const {items} = this.props.item;
        return (
            <Container>
                <Button
                color="dark" style={{marginBottom:'2rem'}}
                onClick={ () => {
                    const name = prompt('enter name');
                    if(name)
                        this.setState(state => ({
                            items : [...state.items,{ id:uuid(), name}]
                        }));
                }}>
                    Add Item
                </Button>

                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        {items.map( ({id, name}) => (
                            <CSSTransition key={id} timeout={500} classNames={'fade'}>
                                <ListGroupItem>
                                    {name}
                                    <Button className="remove-btn" color="danger" size="sm"
                                    onClick={ () => {
                                        this.setState(state => ({
                                            items:state.items.filter(item => item.id !== id)
                                        }));
                                    }} >
                                        &times;
                                    </Button>
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        )
    }
}

ShoppingList.PropTypes = {
    getItems : PropTypes.func.isRequired,
    item:PropTypes.object.isRequired
}

const mapStateToProps = (state) =>({
    item:state.item
});

export default connect(mapStateToProps, {getItems})(ShoppingList);
