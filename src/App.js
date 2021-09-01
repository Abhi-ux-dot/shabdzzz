
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Container, Switch, withStyles } from '@material-ui/core';
import Header from './components/Header/Header';
import Definition from './components/Definitions/Definition';
import { purple } from '@material-ui/core/colors';


function App() {

  const [word, setWord] = useState("");
  const [meanings, setMeanings] = useState([]);
  const [LightMode, setLightMode] = useState(false)

  const DarkSide = withStyles({
    switchBase: {
      color: purple[300],
      '&$checked': {
        color: purple[500],
      },
      '&$checked + $track': {
        backgroundColor: purple[500],
      },
    },
    checked: {},
    track: {},
  })(Switch);
  

  const dictApi = async () => {
    try {
      const data = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        // console.log(data);
        setMeanings(data.data);
    } 
    catch (error) {
        console.log(error)
    }
  }

  // console.log(meanings);

  useEffect(() => {

    dictApi();
  }, [word]);

  return (
    <div className="App"
      style = {{  
                  
                  height:"100vh",
                  overflow: "hidden", 
                  backgroundColor:LightMode ? "#F7F6F2" : "#575757", 
                  color:LightMode ? "#2A0944" : "#e8e8e8",
                  transition: "all 0.7s linear" }}
    >
      <Container 
        maxWidth="md"
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          justifyContent: "space-evenly"
        }}
      >
      <div 
        style= {{
          position: "absolute",
          top: 0,
          right: 15,
          paddingTop: 10
        }}
      > 
      <span>{LightMode ? "Light" : "Dark"} Mode</span>
      <DarkSide checked={LightMode} onChange={()=>setLightMode(!LightMode)}/>
      </div>
      <Header word = {word} setWord = {setWord} LightMode={LightMode}/>
      {meanings && (<Definition word={word} meanings={meanings} LightMode={LightMode}/>)}
      </Container>
    </div>
  );
}

export default App;
