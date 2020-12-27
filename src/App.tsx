import React, { Dispatch } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IAction, SetAge, SetName } from './action';
import { IAppState } from './store';

export const App: React.FunctionComponent = () => {
    const age = useSelector((state: IAppState) => state.app.age);
    const name = useSelector((state: IAppState) => state.app.name);

    const dispatch: Dispatch<IAction> = useDispatch();

    const handleClick = () => {
      dispatch(SetAge(Math.floor(Math.random() * 100)));
    }

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(SetName(e.target.value))
    }

    return (
      <div>
        <h1>Age: {age}</h1>
        <h2>Name: {name} </h2>
        <button onClick={handleClick}>Click me</button>
        <input onChange={handleNameChange} type="text"/>
      </div>
    )
};