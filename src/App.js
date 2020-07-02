import React, { Component } from "react";
import "./App.css";
import styled from "styled-components";
import "./components/fetchWords";

const Title = styled.h1`
  font-size: 56px;
  font-family: "pangolin", cursive;
  margin: 0;
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title>Hangman</Title>
        <p>Guess the phrase</p>
        <fetchWords />
      </header>
    </div>
  );
}

export default App;
