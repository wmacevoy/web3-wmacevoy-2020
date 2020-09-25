import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function Square(props) {
    return (
        <button
            className="square"
            onClick={() => props.onClick()}
        >
            {props.value}
        </button>
    );
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] != null &&
            squares[a] === squares[b] &&
            squares[a] === squares[c]) {
            return squares[a];
        }
    }
    for (let i = 0; i < 9; ++i) {
        if (squares[i] === null) {
            return null;
        }
    }
    return "draw";
}

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
            winner: null
        }
    }


    renderSquare(i) {
        return <Square
            value={this.state.squares[i]}
            onClick={() => this.handleClick(i)} />;
    }

    cloneState() {
        return {
            squares: this.state.squares.slice(),
            xIsNext: this.state.xIsNext,
            winner: this.state.winner
        }
    }

    handleClick(i) {
        if (this.state.winner != null) {
            return;
        }
        if (this.state.squares[i] != null) {
            return;
        }
        var newState = this.cloneState();
        newState.squares[i] = this.nextPlayer();
        newState.xIsNext = !newState.xIsNext;
        newState.winner = calculateWinner(newState.squares);
        this.setState(newState);
    }

    nextPlayer() {
        return this.state.xIsNext ? "X" : "O";
    }

    status() {
        const winner = this.state.winner;
        if (winner != null) {
            return 'Winner: ' + winner;
        } else {
            return "Next player: " + this.nextPlayer();
        }
    }

    render() {
        const status = this.status();

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
