import React from 'react';

function createStore(reducer, initialState) {
  let state = initialState;
  const listeners = [];

  const subscribe = (listener) => {
    listeners.push(listener);
  };

  const getState = () => state;

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach((l) => l());
  };

  return {
    subscribe,
    getState,
    dispatch
  };
}

function reducer(state, action) {
  if (action.type === 'ADD_MESSAGE') {
    return {
      messages: state.messages.concat(action.message)
    };
  } else if (action.type === 'DELETE_MESSAGE') {
    return {
      messages: [
        ...state.messages.slice(0, action.index),
        ...state.messages.slice(action.index + 1, state.messages.length)
      ]
    };
  } else {
    return state;
  }
}

const initialState = { messages: [] };

const store = createStore(reducer, initialState);

class App extends React.Component {
  componentDidMount() {
    store.subscribe(() => this.forceUpdate());
  }

  render() {
    const messages = store.getState().messages;

    return (
      <div className="ui segment">
        <MessageView messages={messages} />
        <MessageInput />
      </div>
    );
  }
}

class MessageInput extends React.Component {
  state = {
    value: ''
  };

  onChange = (e) => {
    this.setState({
      value: e.target.value
    });
  };

  handleSubmit = () => {
    store.dispatch({
      type: 'ADD_MESSAGE',
      message: this.state.value
    });
    this.setState({
      value: ''
    });
  };

  render() {
    return (
      <div className="ui input">
        <input onChange={this.onChange} value={this.state.value} type="text" />
        <button
          onClick={this.handleSubmit}
          className="ui primary button"
          type="submit"
        >
          Submit
        </button>
      </div>
    );
  }
}

class MessageView extends React.Component {
  handleClick = (index) => {
    store.dispatch({
      type: 'DELETE_MESSAGE',
      index: index
    });
  };

  render() {
    const messages = this.props.messages.map((message, index) => (
      <div
        className="comment"
        key={index}
        onClick={() => this.handleClick(index)}
      >
        {message}
      </div>
    ));

    return <div className="ui comments">{messages}</div>;
  }
}

export default App;

// const listener = () => {
//   console.log('Current State');
//   console.log(store.getState());
// }

// store.subscribe(listener)

// const addMessageAction1 = {
//   type: 'ADD_MESSAGE',
//   message: 'How does it look, Neil?'
// }

// store.dispatch(addMessageAction1)
// // const stateV1 = store.getState();

// const addMessageAction2 = {
//   type: 'ADD_MESSAGE',
//   message: 'Looking good.',
//   };

// store.dispatch(addMessageAction2);
// // const stateV2 = store.getState();

// // console.log('State v1:');
// // console.log(stateV1);
// // console.log('State v2:');
// // console.log(stateV2);

// const deleteMessageAction = {
//   type: 'DELETE_MESSAGE',
//   index: 0,
// }

// store.dispatch(deleteMessageAction)
// // const stateV3 = store.getState();x
// // console.log(stateV3);
