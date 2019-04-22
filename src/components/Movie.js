import React, { Component, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchMovieById } from '../actions';
import '../styles/movie.css';

const mapStateToProps = (state) => ({
    movie: state.movie
})

const mapDispatchToProps = {
    fetchMovieById
}

const Movie = (props) => {
    const movie = props.movie ? props.movie : null;
    const isfetching = props.movie ? true : false;
    
    useEffect(() => {
        props.fetchMovieById(props.match.params.id);        
    });

    if (isfetching) {
        return (
            <div className="movie" style={{ color: '#fff' }}>
                <div className="movie__header">
                    <h1>{movie.title}</h1>
                </div>
                <div className="movie__content">
                    <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt="" />
                </div>
                <div className="movie__footer"></div>
            </div>
        )
    } else {
        return (
            <h1>Loading...</h1>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie)
