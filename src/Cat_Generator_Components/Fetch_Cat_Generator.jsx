import React, { useState } from "react";
import CatBox_Left from './CatBox_Left';
import Cat_Box_Right from "./CatBox_Right";

const CatInput = () => {
    const [catInfo, setCatInfo] = useState(null);
    const [name, setName] = useState('');
    const [inputName, setInputName] = useState('');
    const [catFacts, setCatFacts] = useState([]);
    const [count, setCount] = useState(0);
    const [factosTodos, setFactosTodos] = useState(null);


    const handleGenerateCat = () => {
        const breedUrl = 'https://api.thecatapi.com/v1/breeds';

        fetch(breedUrl)
            .then(function (res) {
                return res.json();
            })
            .then(function (data) {
                const random_breed = Math.floor(Math.random() * data.length)
                const chosenBreed = data[random_breed];
                const breedId = chosenBreed.id;

                const imageUrl = `https://api.thecatapi.com/v1/images/search?has_breeds=1&breed_ids=${breedId}`;
                return fetch(imageUrl) //this fecth returns a promise, and i have a chain of promises (example: in the then's).
                    .then(function (response1) {
                        return response1.json()
                    }).then(function (cat_img) {
                        setCatInfo({
                            breed: chosenBreed.name,
                            description: chosenBreed.description,
                            temperament: chosenBreed.temperament,
                            image: cat_img[0].url,
                        });

                    })
            });
    };

    const handleCatFact = () => {
        const factUrl = 'https://catfact.ninja/facts';
        fetch(factUrl)
            .then(function (res) {
                return res.json();
            })
            .then(function (fact) {
                setFactosTodos(fact.data);

                for (let i = 0; i < 3; i++) {
                    const randomFact = Math.floor(Math.random() * fact.data.length);
                    const chosenFact = fact.data[randomFact];
                    setCatFacts(facts => [...facts, { id: i, fact: chosenFact.fact }]); //Na 1ª iteração o "...facts" não terá nenhum valor, mas depois passa a ter porque vai acumulando
                }
            })
        setCount(count => count+3); // estava a ter problemas de ele nao atualizar dentro do fetch (por causa de asyncronia) entao o id no fetch vem do for e atualizo ca fora
    };

    const handleRemoveCatFact = (id) => {
        setCatFacts(catFacts.filter(item => item.id !== id));
    };

    const handleAddCatFact = () => {
        const randomFact = Math.floor(Math.random() * factosTodos.length);
        console.log(factosTodos[randomFact])
        const newAddValue = factosTodos[randomFact].fact; //tem de ser o .fact se nao ele e um objeto
        setCatFacts((facts) => [...facts, {id: count, fact: newAddValue }]);
        setCount(count => count + 1)
    };

    return (
        <div>
            <div className="inputSearch">
                <form>
                    <input
                        type="text"
                        required
                        id="personName"
                        name="pName"
                        placeholder="Insert your name"
                        value={inputName}
                        onChange={(event) => setInputName(event.target.value)}
                    />
                    <input
                        type="button"
                        value="Which cat am I?"
                        id="buttonName"
                        onClick={() => {
                            setName(inputName);
                            handleGenerateCat();
                            handleCatFact(); //Ao clicar vai mostrar 3 factos
                        }}
                        disabled={!inputName} // ! é uma negação. se ele tiver vazio, devolve true, se tiver preenchido, devolve false. 
                    />
                </form>
            </div>
            <div className="row justify-content-center">
                {catInfo && <CatBox_Left name={name} catInfo={catInfo} />}
                {catFacts && <Cat_Box_Right CatFact={catFacts} handleRemoveCatFact={handleRemoveCatFact} handleAddCatFact={handleAddCatFact} />}

                {/* <button className="homeButton" onClick={() => handleRemoveCatFact(id)}>Remove Cat Fact</button> */}
            </div>
        </div>
    )
}

export default CatInput
