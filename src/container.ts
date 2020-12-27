import { Dispatch } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { IAction, SetAge, SetName } from './action';
import { App as Component } from './App';
import { IAppState } from './store';

const mapStateToProps = (state: IAppState) => {
    return {
        age: state.app.age,
        name: state.app.name
    };
}

const mapDispatchToProps = (dispatch: Dispatch<IAction>) => {
    return {
        onClick: () => dispatch(SetAge(Math.floor(Math.random() * 100))),
        onNameChange: (e: React.ChangeEvent<HTMLInputElement>) => dispatch(SetName(e.target.value))
    }
}

export const App = compose(
    connect(mapStateToProps, mapDispatchToProps)
)(Component);