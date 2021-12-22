import React from "react";
import Loader from "./Loader";
import Header from "./Header";
function Final(props) {
    const player1 = props.players[0];
    const player2 = props.players[1];
    let player1Result = "";
    let player2Result = "";
    if (player1.followers * 20 + player1.public_repos > player2.followers * 20 + player2.public_repos) {
        player1Result = "Winner";
        player2Result = "Loser"


    } else if (player1.followers * 20 + player1.public_repos < player2.followers * 20 + player2.public_repos) {

        player1Result = "Loser";
        player2Result = "Winner";

    } else {
        player1Result = "Tie";
        player2Result = "Tie";

    }


    if (props.result) {
        return <Loader />
    } else {
        return (

            <><Header />
                <div className="final container">
                    <div className="repo">
                        <strong>{player1Result}</strong>
                        <figure>
                            <img src={player1.avatar_url} alt={player1.name} />
                        </figure>
                        <span className="score">Score:{player1.followers * 20 + player1.public_repos}</span>
                        <span ><a href={player1.html_url} className="bold">{player1.name}</a></span>
                        <div className="elm">
                            <div className="margin">
                                <i class="fas fa-user user red"></i>
                                <span><a href={player1.html_url} className="bold-black">{player1.login}</a></span>
                            </div>
                            <div className="margin">
                                <i class="fas fa-users star sky"></i>
                                <span>{player1.followers} followers</span>
                            </div>

                            <div className="margin">
                                <i class="fas fa-user-friends git green"></i>

                                <span className="fork">{player1.following} following</span>
                            </div>

                            <div className="margin">
                                <i class="fas fa-code issue black"></i>
                                <span>{player1.public_repos} repositories</span>
                            </div>
                        </div>
                    </div>
                    <div className="repo">
                        <strong>{player2Result}</strong>
                        <figure>
                            <img src={player2.avatar_url} alt={player2.name} />
                        </figure>
                        <span className="score">Score:{player2.followers * 20 + player2.public_repos}</span>
                        <span ><a href={player2.html_url} className="bold">{player2.name}</a></span>
                        <div className="elm">
                            <div className="margin">
                                <i class="fas fa-user user red"></i>
                                <span><a href={player2.html_url} className="bold-black">{player2.login}</a></span>
                            </div>
                            <div className="margin">
                                <i class="fas fa-users star sky"></i>
                                <span>{player2.followers} followers</span>
                            </div>

                            <div className="margin">
                                <i class="fas fa-user-friends git green"></i>

                                <span className="fork">{player2.following} following</span>
                            </div>

                            <div className="margin">
                                <i class="fas fa-code issue black"></i>
                                <span>{player2.public_repos} repositories</span>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="reset"><button onClick={props.reset}>Reset</button></div>
            </>
        )
    }
}




export default Final;