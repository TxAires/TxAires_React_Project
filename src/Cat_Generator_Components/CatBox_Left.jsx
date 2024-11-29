import React from 'react';
import './cat_Generator_Page.css'

const CatBox_Left = ({ name, catInfo }) => (
    // <div className="row justify-content-center">
        <div className="column-fix col-md-6 col-sm-12">
            <div className="card tdw-cat">
                <h2>This is your cat</h2>
                <div className="row tdw-cat-child">
                    <div className="col-md-6 col-sm-12">
                        <img src={catInfo.image} id="photoCat" width="90%" min-width="50" />
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="row_photoCat2">
                            <span id="congratsName">Congrats {name}, you are:</span>
                            <span id="catBreed" text-align="left">{catInfo.breed}</span>
                            <br />
                            <p id="catDescription">
                                {catInfo.description}
                            </p>
                            <span id="catTemperament">
                                <b>Temperament:</b> {catInfo.temperament}
                                </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    // </div>
);

export default CatBox_Left;