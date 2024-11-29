import TDW_Caixa from '../Images/TDW_Caixa.png'


function Cat_Body({hide}) {
    return (
        <div className="container">
            <div className="card">
                <img className="card-img rounded-0" src={TDW_Caixa} alt="Text_box" />
                <div className="card-img-overlay">
                    <h2 className="card-title">WELCOME</h2>
                    <h3 id="card-h3">
                        <p>In this website you can become a cat.</p>
                    </h3>
                    <p className="card-text">Just insert your name and find out which type of cat are you.</p>
                    <p className="card-text2">Let’s find out?</p>
                    <div className="Div_Button text-center">
                    <button id="buttonHome" onClick={hide}>
                        I want to be a cat
                    </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cat_Body
