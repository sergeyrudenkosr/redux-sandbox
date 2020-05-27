import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as actions from "../actions";

const Counter = ({counter, inc, dec, rnd}) => {
    return (
        <div className="jumbotron">
            <h2>{counter}</h2>
            <button className="btn btn-primary bnt-lg m-1" onClick={inc}>INC</button>
            <button className="btn btn-danger bnt-lg m-1" onClick={dec}>DEC</button>
            <button className="btn btn-warning bnt-lg m-1" onClick={rnd}>RND</button>
        </div>
    );
};

const mapStateProps = (state) => {
    return {
        counter: state
    };
};

const mapDispatchProps = (dispatch) => {
    const {inc, dec, rnd} = bindActionCreators(actions, dispatch);

    return {
        inc,
        dec,
        rnd: () => {
            const randomValue = Math.floor(Math.random() * 10);
            rnd(randomValue);
        }
    };
};

export default connect(mapStateProps, mapDispatchProps)(Counter);