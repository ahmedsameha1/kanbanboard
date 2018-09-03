import React, { Component } from "react";
import List from "./List";
import PropTypes from "prop-types";

class KanbanBoard extends Component {
    render() {
        return (
            <div className="app">
            <List id="todo" title="To Do" taskCallBacks={this.props.taskCallbacks} cards={
                this.props.cards.filter((card) => card.status === "todo")
            } />

            <List id="in-progress" title="In Progress" taskCallBacks={this.props.taskCallbacks} cards={
                this.props.cards.filter((card) => card.status === "in-progress")
            } />

            <List id="done" title="Done" taskCallBacks={this.props.taskCallbacks} cards={
                this.props.cards.filter((card) => card.status === "done")
            } />

            </div>
        );
    }
}

KanbanBoard.propTypes = {
    cards: PropTypes.arrayOf(PropTypes.object),
    taskCallbacks: PropTypes.object,
};

export default KanbanBoard;
