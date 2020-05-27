import React from "react";
import {connect} from "react-redux";

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

export default connect(mapStateProps)(Counter);