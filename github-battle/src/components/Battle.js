import React from "react";
import { useState } from 'react';
import Final from "./Final";
import Header from "./Header";
function Battle() {

    let [player, setPlayer] = useState([]);
    let [battle, setBattle] = useState(false);
    let [active1, setActive1] = useState(false);
    let [active2, setActive2] = useState(false);
    let [result, setResult] = useState(false);


    function handleSubmit(e) {
        e.preventDefault();
        console.log(e.target.firstElementChild.value);
        fetch(`https://api.github.com/users/${e.target.firstElementChild.value}`)
            .then((data) => data.json())
            .then((data) => {
                console.log(data);
                setPlayer(
                    player = [...player, data]

                )
            })



    }

    function handleBattle() {
        setResult(result = true)
        setBattle(battle = true)
        console.log(result,'result');




    }

    function handleClose(e) {
        const index = e.target.id;

        setPlayer(
            player = player.filter((item, i) => {

                return i + 1 !== Number(index)
            })

        )

    }
    function handleReset() {
        setBattle(battle = false);
        setPlayer(player = []);
        setActive1(active1 = false);
        setActive2(active2 = false);
    }

    function handleChange1() {
        setActive1(
            active1 = true
        )

    }
    function handleChange2() {
        setActive2(
            active2 = true,
        )

    }



    console.log(player, 'remaining players');
    if (!battle) {
        return (

            <>
                <Header />
                <div className="container battle-ground">
                    <h1>Players</h1>
                    <div className="players">
                        {!player[0] ?
                            <div className="player">
                                <span>Player One</span>
                                <form onSubmit={(e) => handleSubmit(e)}>
                                    <input placeholder="github username" onChange={handleChange1} />
                                    <input type="submit" placeholder="" value="SUBMIT" className={active1 ? "active1" : ""} />
                                </form>
                            </div>
                            : <div className="battle-user">

                                <figure>
                                    <img src={player[0].avatar_url} alt={player[0].login} />


                                </figure>

                                <a href={player[0].html_url} className="link">{player[0].login}</a>
                                <div>
                                    <span onClick={(e) => handleClose(e)} ><i class="fas fa-times-circle" id={1}></i></span>
                                </div>
                            </div>
                        }
                        {!player[1] ?
                            <div className="player">
                                <span>Player Two</span>
                                <form onSubmit={(e) => handleSubmit(e)}>
                                    <input placeholder="github username" onChange={handleChange2} />
                                    <input type="submit" placeholder="" value="SUBMIT" className={active2 ? "active1" : ""} />
                                </form>
                            </div>
                            : <div className="battle-user">
                                <figure>
                                    <img src={player[1].avatar_url} alt={player[1].login} />

                                </figure>
                                <a href={player[1].html_url} className="link">{player[1].login}</a>
                                <div>
                                    <span onClick={(e) => handleClose(e)} ><i class="fas fa-times-circle" id={2}></i></span>
                                </div>
                            </div>
                        }

                    </div>
                    <div className="submit-button">
                        {
                            player.length === 2 ? <button onClick={handleBattle}>Battle</button> : <></>
                        }
                    </div>
                </div>
            </>
        )
    } else {
        return <Final players={player} reset={handleReset} />



    }
}


export default Battle;