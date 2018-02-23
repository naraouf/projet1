class Controler {
    constructor() {
        this.player1 = new Personnage("player01", 90, 350);
        this.player2 = new Personnage("player02", -120, 1280);
        this.viewG = new View("G");
        this.viewD = new View("D");
        let _this = this;
        let start = document.querySelector("#start-game");
        start.addEventListener("click", starte);
        function starte() {
            _this.chrono(_this.player1, _this.player2, _this.viewG);// appeler fonction chrono
            _this.startgame(_this.player1, _this.player2, _this.viewD);
        };
        let limite = 15;
        const formulaire = document.querySelector('#formulaire1');
        formulaire.addEventListener('submit', function (event) {
            event.preventDefault();
            let nameA = document.querySelector('#name1').value;
            if (nameA.length < limite) {
                if (nameA) {
                    _this.player1.name = nameA;
                }
            } else {
                nameA = nameA.substr(0, limite);// limiter le nombre de caracteres pour le nom des joueurs
                if (nameA) {
                    _this.player1.name = nameA;
                }
            }

            let nameB = document.querySelector('#name2').value;
            if (nameB.length < limite) {
                if (nameB) {
                    _this.player2.name = nameB;
                }
            } else {
                nameB = nameB.substr(0, limite); // limiter le nombre de caracteres pour le nom des joueurs
                if (nameB) {
                    _this.player2.name = nameB;
                }
            }
            _this.attribuernom(_this.player1, _this.player2, _this.viewG); // appeler fonction attribue de nom des joueurs

        });

        let elemt = document.getElementById("blockG");
        let posG = elemt.style.left;  //
        posG = posG.substring(0, posG.length - 2); //recuperer la position du Dom du joueur gauche
        let elem = document.getElementById("blockD");
        let posD = elem.style.left;  //
        posD = posD.substring(0, posD.length - 2);  // recuperer la position du Dom du joueur droit
        let action1 = document.querySelector("#gauche");
        window.addEventListener('keydown', checkKeyPressG1, false);
        action1.addEventListener('click', clickG1);
        function checkKeyPressG1(key1) {
            if ((key1.keyCode == "90")) {
                if (typeof _this.viewG.encours == 'undefined') {
                    let block_G = document.querySelector("#blockG");
                    block_G.style.width = "0px";
                    block_G.style.top = "480";
                    if (typeof _this.viewG.encourtt == 'undefined') {  //tttttttttttttttttttttttttttttttttt
                        if (typeof _this.viewD.encourtt == 'undefined') {  // pour bloquer le redressement du jouer apres sa perte
                            _this.attack1(_this.player1, _this.player2, _this.viewG);
                            if (_this.player2.position < 100 + _this.player1.position) {
                                _this.player1.attack(_this.player2);
                                setTimeout(function () { _this.reaction1(_this.player1, _this.player2, _this.viewG); }, 250);//time avant reaction apres declenchement de l'action attack
                                let nivD = document.querySelector("#niveauD1");
                                nivD.style.width = `${_this.player2.sante}%`;
                            } else {
                                _this.couplibre(_this.player1, _this.player2, _this.viewG);
                            }
                        }
                    }
                }
            }
        };
        function clickG1() {
            if (typeof _this.viewG.encours == 'undefined') {
                let block_G = document.querySelector("#blockG");
                block_G.style.width = "0px";
                block_G.style.top = "480";
                if (typeof _this.viewG.encourtt == 'undefined') {  //tttttttttttttttttttttttttttttttttt
                    if (typeof _this.viewD.encourtt == 'undefined') {  // pour bloquer le redressement du jouer apres sa perte
                        _this.attack1(_this.player1, _this.player2, _this.viewG);
                        if (_this.player2.position < 100 + _this.player1.position) {
                            _this.player1.attack(_this.player2);
                            setTimeout(function () { _this.reaction1(_this.player1, _this.player2, _this.viewG); }, 250);//time avant reaction apres declenchement de l'action attack
                            let nivD = document.querySelector("#niveauD1");
                            nivD.style.width = `${_this.player2.sante}%`;
                        } else {
                            _this.couplibre(_this.player1, _this.player2, _this.viewG);
                        }
                    }
                }  //tttttttttttttttttttttttttttttttttttttttttttttttttttt

            }

        };/////////


        let action2 = document.querySelector("#attaqueG2");
        window.addEventListener('keydown', checkKeyPressG2, false);
        action2.addEventListener('click', clickG2);
        function clickG2() {
            if (typeof _this.viewG.encours == 'undefined') {
                let block_G = document.querySelector("#blockG");
                block_G.style.width = "0px";
                block_G.style.top = "480";
                if (typeof _this.viewG.encourtt == 'undefined') {  //tttttttttttttttttttttttttttttttttt
                    if (typeof _this.viewD.encourtt == 'undefined') {  // pour bloquer le redressement du jouer apres sa perte
                        _this.attack2(_this.player1, _this.player2, _this.viewG);
                        if (_this.player2.position < 100 + _this.player1.position) {
                            _this.player1.attack(_this.player2);
                            setTimeout(function () { _this.reaction2(_this.player1, _this.player2, _this.viewG); }, 150);//time avant reaction apres declenchement de l'action attack
                            let nivD = document.querySelector("#niveauD1");
                            nivD.style.width = `${_this.player2.sante}%`;
                        } else {
                            _this.couplibre(_this.player1, _this.player2, _this.viewG);
                        }
                    }
                }  //tttttttttttttttttttttttttttttttttttttttttttttttttttt
            }
        };
        function checkKeyPressG2(key) {
            if ((key.keyCode == "83")) {       //code buton S                 
                if (typeof _this.viewG.encours == 'undefined') {
                    let block_G = document.querySelector("#blockG");
                    block_G.style.width = "0px";
                    block_G.style.top = "480";
                    if (typeof _this.viewG.encourtt == 'undefined') {  //tttttttttttttttttttttttttttttttttt
                        if (typeof _this.viewD.encourtt == 'undefined') {  // pour bloquer le redressement du jouer apres sa perte
                            _this.attack2(_this.player1, _this.player2, _this.viewG);
                            if (_this.player2.position < 100 + _this.player1.position) {
                                _this.player1.attack(_this.player2);
                                setTimeout(function () { _this.reaction2(_this.player1, _this.player2, _this.viewG); }, 150);//time avant reaction apres declenchement de l'action attack
                                let nivD = document.querySelector("#niveauD1");
                                nivD.style.width = `${_this.player2.sante}%`;
                            } else {
                                _this.couplibre(_this.player1, _this.player2, _this.viewG);
                            }
                        }
                    } //tttttttttttttttttttttttttttttttttttttttttttttttttttt
                }
            }
        };               ////

        var action3 = document.querySelector("#avancerG");
        window.addEventListener('keydown', butavancerG1, false);
        action3.addEventListener('click', clickG3);
        function butavancerG1(key) {
            if (typeof _this.viewD.encourtt == 'undefined') {  // pour bloquer le redressement du jouer apres sa perte
                if (typeof _this.viewG.encourtt == 'undefined') {  // pour bloquer le redressement du jouer apres sa perte
                    if ((key.keyCode == "68")) {       //code buton D                
                        if (_this.player2.position > 90 + _this.player1.position) {
                            if (typeof _this.viewG.encours == 'undefined') {
                                _this.player1.position += _this.player1.vitesse;
                                _this.viewG.marcher(_this.player1.vitesse);
                                let block_G = document.querySelector("#blockG");
                                let combatant_G = document.querySelector("#combatant_G").src = "img/persG/walkf.gif";
                                _this.viewG.encours = 1;
                                setTimeout(function () {
                                    _this.viewG.encours = undefined;
                                    let combatant_G = document.querySelector("#combatant_G").src = "img/persG/stance.gif";
                                }, 450);
                            }
                        }
                    }
                }
            }
        };
        function clickG3(event) {
            if (typeof _this.viewD.encourtt == 'undefined') {  // pour bloquer le redressement du jouer apres sa perte
                if (typeof _this.viewG.encourtt == 'undefined') {  // pour bloquer le redressement du jouer apres sa perte    
                    if (_this.player2.position > 90 + _this.player1.position) {
                        if (typeof _this.viewG.encours == 'undefined') {
                            _this.player1.position += _this.player1.vitesse;
                            _this.viewG.marcher(_this.player1.vitesse);
                            let block_G = document.querySelector("#blockG");
                            let combatant_G = document.querySelector("#combatant_G").src = "img/persG/walkf.gif";
                            _this.viewG.encours = 1;
                            setTimeout(function () {
                                _this.viewG.encours = undefined;
                                let combatant_G = document.querySelector("#combatant_G").src = "img/persG/stance.gif";
                            }, 450);
                        }
                    }
                }
            }
        };

        var action4 = document.querySelector("#reculerG");
        window.addEventListener('keydown', butreculerG1, false);
        action4.addEventListener('click', clickG4);
        function butreculerG1(key) {
            if (typeof _this.viewD.encourtt == 'undefined') {  // empecher le joueur d'avancer ou reculer a la fin de la partie suite à la chute de l'adverssaire.
                if (typeof _this.viewG.encourtt == 'undefined') {  // empecher le joueur d'avancer ou reculer a la fin de la partie suite à la chute de l'adverssaire.
                    if ((key.keyCode == "81")) {       //code buton Q                 
                        if (_this.player1.position > 90) { //limite du recule
                            if (typeof _this.viewG.encours == 'undefined') {
                                _this.player1.position -= _this.player1.vitesse;
                                _this.viewG.marcher(-_this.player1.vitesse);//en ajoutant ici le -  il transforme le 90 en -90
                                let block_G = document.querySelector("#blockG");
                                let combatant_G = document.querySelector("#combatant_G").src = "img/persG/walkf.gif";
                                _this.viewG.encours = 1;
                                setTimeout(function () {
                                    _this.viewG.encours = undefined;
                                    let combatant_G = document.querySelector("#combatant_G").src = "img/persG/stance.gif";
                                }, 450);

                            }
                        }
                    }
                }
            }
        };

        function clickG4() {
            if (typeof _this.viewD.encourtt == 'undefined') {  // empecher le joueur d'avancer ou reculer a la fin de la partie suite à la chute de l'adverssaire.
                if (typeof _this.viewG.encourtt == 'undefined') {  // empecher le joueur d'avancer ou reculer a la fin de la partie suite à la chute de l'adverssaire.
                    if (_this.player1.position > 90) { // limite du recule
                        if (typeof _this.viewG.encours == 'undefined') {
                            _this.player1.position -= _this.player1.vitesse;
                            _this.viewG.marcher(-_this.player1.vitesse);//en ajoutant ici le -  il transforme le 90 en -90
                            let block_G = document.querySelector("#blockG");
                            let combatant_G = document.querySelector("#combatant_G").src = "img/persG/walkf.gif";
                            _this.viewG.encours = 1;
                            setTimeout(function () {
                                _this.viewG.encours = undefined;
                                let combatant_G = document.querySelector("#combatant_G").src = "img/persG/stance.gif";
                            }, 450);
                        }
                    }
                }
            }
        };


        //-----------------------------------cote droit------------------------------------------------

        let actionN1 = document.querySelector("#droite");
        window.addEventListener('keydown', checkKeyPressD1, false);
        actionN1.addEventListener('click', clickD1);
        function checkKeyPressD1(key) {
            if ((key.keyCode == "38")) {//code buton fleche up pour attaque 1
                if (typeof _this.viewD.encours == 'undefined') {
                    if (typeof _this.viewD.encourtt == 'undefined') {  //tttttttttttttttttttttttttttttttttt
                        if (typeof _this.viewG.encourtt == 'undefined') {  // pour bloquer le redressement du jouer apres sa perte
                            _this.attack1(_this.player2, _this.player1, _this.viewD);
                            if (_this.player2.position < 100 + _this.player1.position) {
                                _this.player2.attack(_this.player1);
                                setTimeout(function () { _this.reaction1(_this.player1, _this.player2, _this.viewD); }, 90);//time avant reaction apres declenchement de l'action attack
                                let nivD = document.querySelector("#niveauG1");
                                nivD.style.width = `${_this.player1.sante}%`;
                            } else {
                                _this.couplibre(_this.player1, _this.player2, _this.viewD);
                            }
                        }
                    }
                }
            }
        };
        function clickD1() {
            if (typeof _this.viewD.encours == 'undefined') {
                if (typeof _this.viewD.encourtt == 'undefined') {  //tttttttttttttttttttttttttttttttttt
                    if (typeof _this.viewG.encourtt == 'undefined') {  // pour bloquer le redressement du jouer apres sa perte
                        _this.attack1(_this.player2, _this.player1, _this.viewD);
                        if (_this.player2.position < 100 + _this.player1.position) {
                            _this.player2.attack(_this.player1);
                            setTimeout(function () { _this.reaction1(_this.player1, _this.player2, _this.viewD); }, 90);//time avant reaction apres declenchement de l'action attack
                            let nivD = document.querySelector("#niveauG1");
                            nivD.style.width = `${_this.player1.sante}%`;
                        } else {
                            _this.couplibre(_this.player1, _this.player2, _this.viewD);
                        }
                    }
                }
            }
        }

        let actionN2 = document.querySelector("#attaqueD2");
        window.addEventListener('keydown', checkKeyPressD2, false);
        actionN2.addEventListener('click', clickD2);
        function clickD2() {
            if (typeof _this.viewD.encours == 'undefined') {
                if (typeof _this.viewD.encourtt == 'undefined') {  //tttttttttttttttttttttttttttttttttt
                    if (typeof _this.viewG.encourtt == 'undefined') {  // pour bloquer le redressement du jouer apres sa perte
                        _this.viewD.attack2(_this.player2, _this.player1, _this.viewD);
                        if (_this.player2.position < 100 + _this.player1.position) {
                            _this.player2.attack(_this.player1);
                            setTimeout(function () { _this.reaction2(_this.player1, _this.player2, _this.viewD); }, 100);//time avant reaction apres declenchement de l'action attack
                            let nivD = document.querySelector("#niveauG1");
                            nivD.style.width = `${_this.player1.sante}%`;
                        } else {
                            _this.couplibre(_this.player1, _this.player2, _this.viewD);
                        }
                    }
                }
            }
        };
        function checkKeyPressD2(key) {
            if ((key.keyCode == "40")) {       //code buton fleche bas pour attaque 2                 
                if (typeof _this.viewD.encours == 'undefined') {
                    if (typeof _this.viewD.encourtt == 'undefined') {  //tttttttttttttttttttttttttttttttttt
                        if (typeof _this.viewG.encourtt == 'undefined') {  // pour bloquer le redressement du jouer apres sa perte
                            _this.viewD.attack2(_this.player2, _this.player1, _this.viewD);
                            if (_this.player2.position < 100 + _this.player1.position) {
                                _this.player2.attack(_this.player1);
                                setTimeout(function () { _this.reaction2(_this.player1, _this.player2, _this.viewD); }, 100);//time avant reaction apres declenchement de l'action attack
                                let nivD = document.querySelector("#niveauG1");
                                nivD.style.width = `${_this.player1.sante}%`;

                            } else {
                                _this.couplibre(_this.player1, _this.player2, _this.viewD);
                            }
                        }
                    }
                }
            }
        };               ////

        var actionN3 = document.querySelector("#avancerD");
        window.addEventListener('keydown', butavancerD1, false);
        actionN3.addEventListener('click', clickD3);
        function butavancerD1(key) {
            if (typeof _this.viewD.encourtt == 'undefined') {  // empecher le joueur d'avancer ou reculer a la fin de la partie suite à la chute de l'adverssaire.
                if (typeof _this.viewG.encourtt == 'undefined') {  // empecher le joueur d'avancer ou reculer a la fin de la partie suite à la chute de l'adverssaire.
                    if ((key.keyCode == "37")) {       //code button fleche gauche            
                        if (_this.player2.position > 90 + _this.player1.position) {
                            if (typeof _this.viewD.encours == 'undefined') {
                                _this.viewD.marcher(_this.player2.vitesse);
                                _this.player2.position += _this.player2.vitesse;
                                let block_D = document.querySelector("#blockD");
                                let combatant_D = document.querySelector("#combatant_D").src = "img/persD/walkf.gif";
                                _this.viewD.encours = 1;
                                setTimeout(function () {
                                    _this.viewD.encours = undefined;
                                    let combatant_D = document.querySelector("#combatant_D").src = "img/persD/stance.gif";
                                }, 850);
                            }
                        }
                    }
                }
            }
        };
        function clickD3(event) {
            if (typeof _this.viewD.encourtt == 'undefined') {  // empecher le joueur d'avancer ou reculer a la fin de la partie suite à la chute de l'adverssaire.
                if (typeof _this.viewG.encourtt == 'undefined') {  // empecher le joueur d'avancer ou reculer a la fin de la partie suite à la chute de l'adverssaire.
                    if (_this.player2.position > 90 + _this.player1.position) {
                        if (typeof _this.viewD.encours == 'undefined') {
                            _this.viewD.marcher(_this.player2.vitesse);
                            _this.player2.position += _this.player2.vitesse;
                            let block_D = document.querySelector("#blockD");
                            let combatant_D = document.querySelector("#combatant_D").src = "img/persD/walkf.gif";
                            _this.viewD.encours = 1;
                            setTimeout(function () {
                                _this.viewD.encours = undefined;
                                let combatant_D = document.querySelector("#combatant_D").src = "img/persD/stance.gif";
                            }, 850);
                        }
                    }
                }
            }
        };

        var actionN4 = document.querySelector("#reculerD");
        window.addEventListener('keydown', butreculerD1, false);
        actionN4.addEventListener('click', clickD4);
        function butreculerD1(key) {
            if (typeof _this.viewD.encourtt == 'undefined') {  // empecher le joueur d'avancer ou reculer a la fin de la partie suite à la chute de l'adverssaire.
                if (typeof _this.viewG.encourtt == 'undefined') {  // empecher le joueur d'avancer ou reculer a la fin de la partie suite à la chute de l'adverssaire.
                    if ((key.keyCode == "39")) {       //code reculer fleche droite                 
                        if (_this.player2.position < 1300) { // limite de la position reculer
                            if (typeof _this.viewD.encours == 'undefined') {
                                _this.player2.position -= _this.player2.vitesse;
                                _this.viewD.marcher(-_this.player2.vitesse);
                                let block_D = document.querySelector("#blockD");
                                let combatant_D = document.querySelector("#combatant_D").src = "img/persD/walkb.gif";
                                _this.viewD.encours = 1;
                                setTimeout(function () {
                                    _this.viewD.encours = undefined;
                                    let combatant_D = document.querySelector("#combatant_D").src = "img/persD/stance.gif";
                                }, 450);

                            }
                        }
                    }
                }
            }
        };
        function clickD4() {
            if (typeof _this.viewD.encourtt == 'undefined') {  // empecher le joueur d'avancer ou reculer a la fin de la partie suite à la chute de l'adverssaire.
                if (typeof _this.viewG.encourtt == 'undefined') {  //empecher le joueur d'avancer ou reculer a la fin de la partie suite à la chute de l'adverssaire.
                    if (_this.player2.position < 1300) {
                        if (typeof _this.viewD.encours == 'undefined') {
                            _this.player2.position -= _this.player2.vitesse;
                            _this.viewD.marcher(-_this.player2.vitesse);
                            let block_D = document.querySelector("#blockD");
                            let combatant_D = document.querySelector("#combatant_D").src = "img/persD/walkb.gif";
                            _this.viewD.encours = 1;
                            setTimeout(function () {
                                _this.viewD.encours = undefined;
                                let combatant_D = document.querySelector("#combatant_D").src = "img/persD/stance.gif";
                            }, 450);

                        }
                    }
                }
            }
        };





    }
    chrono(player1, player2, view) {        //chrono
        view.chrono(player1, player2, view);
    }
    attack1(player1, player2, view) {
        view.attack1();
    }

    reaction1(player1, player2, view) {
        view.reaction1(this.player1, this.player2);
    }
    reaction2(player1, player2, view) {
        let _this = this;
        view.reaction2(this.player1, this.player2);
    }

    attack2(player1, player2, view) {
        view.attack2();
    }

    startgame(player1, player2, view) {
        view.startgame();
    }

    couplibre(player1, player2, view) {
        view.couplibre();
    }
    attribuernom(player1, player2, view) {
        view.attribuernom(this.player1, this.player2);
    }

}