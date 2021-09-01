import React from 'react';
import './Definition.css';

const Definition = ({word, meanings, LightMode}) => {
    return (
        <div className="meanings">
            {
                word === "" ? (<span className='subTitle'>Yare yare daze, you gotta enter a word</span>

                ) : ( meanings.map((mean) => (
                    mean.meanings.map((item) => (
                        item.definitions.map((def) => (
                            <div 
                                className="singleMeaning" style={{
                                                                    backgroundColor: LightMode ? "#EEEEEE" : "#FCF0C8",
                                                                    color: "black",
                                                                    padding: "3px"}} >
                                <b>{def.definition}</b>
                                <br />
                                <br />
                                {
                                    def.example && (
                                        <span>
                                            <b>Example: </b>
                                            {def.example}
                                        </span>
                                    )
                                }
                                <br />
                                {
                                    def.synonyms.length !== 0 ?
                                        <span>
                                            <b>Synonyms: </b>
                                            {def.synonyms.map((s) => `${s}, `)}
                                        </span>
                                     : ""
                                }
                                <hr style={{
                                    height: "12px",
                                    border: "0",
                                    boxShadow: "inset 0 12px 12px -12px rgba(0, 0, 0, 0.5)"
                                }} />

                            </div>
                    ))
                    ))
                )) )
            }
        </div>
    )
}

export default Definition
