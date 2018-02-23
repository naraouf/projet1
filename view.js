class View {
    constructor(side) {
        this.side = side;
        this.encours = undefined;
        this.encourtt = undefined;  //tttttttttttttttttttttttttttttttttttttttt
        this.stop = undefined;
    }

    
    attribuernom(player1, player2) {
        let _this = this;
        let nom1 = document.querySelector("#nomjoueur1");
        nom1.textContent = `${player1.name}`;
        let nom2 = document.querySelector("#nomjoueur2");
        nom2.textContent = `${player2.name}`;

    }


    attack1() {
        let _this = this;
        let perso = document.querySelector("#combatant_" + this.side);
        let block = document.querySelector("#block" + this.side);
        perso.src = "img/pers" + this.side + "/mp.gif";
        perso.style.paddingLeft = "0px";
        block.style.zIndex = "2";
        _this.encours = 1;
        if (_this.side == "D") {
            var time = 250;
        } else {
            time = 500;
        };

        setTimeout(function () {
            perso.src = "img/pers" + _this.side + "/stance.gif";
            block.style.zIndex = "1";
            if (_this.side == "D") {
                perso.style.paddingLeft = "90px";
            }

            _this.encours = undefined;
        }, time);
    }




    attack2() {
        let perso = document.querySelector("#combatant_" + this.side);
        let block = document.querySelector("#block" + this.side);
        perso.src = "img/pers" + this.side + "/lk.gif";
        perso.style.paddingLeft = "0px";
        block.style.zIndex = "2";
        let _this = this;
        _this.encours = 1;
        if (_this.side == "D") {
            var time1 = 250;
        } else {
            time1 = 390;
        };
        setTimeout(function () {
            perso.src = "img/pers" + _this.side + "/stance.gif";
            if (_this.side == "D") {
                perso.style.paddingLeft = "90px";
            }
            block.style.zIndex = "1";
            _this.encours = undefined;
        }, time1);
    }

    reaction1(player1, player2) {// ici j'ai fait passer du controleur le paramettre player1 que je recuper ici
        let _this = this;
        if (_this.side == "G") {
            var inverse = "D"
        } else if (_this.side == "D") {
            var inverse = "G";

        }
        let vari = 1;    // si la sante descend a  0 ou  moins on attribu la valeur à vari
        if (player1.sante < 1) {
            vari = player1.sante;
        } else if (player2.sante < 1) {
            vari = player2.sante;
        }

        if (vari <= 0) {
            _this.encourtt = 1; //pour empecher l'utilisation des commandes     

            let mort1 = document.querySelector("#combatant_" + inverse);
            mort1.src = "img/pers" + inverse + "/ko.gif";
            let gagnant = document.querySelector("#combatant_" + _this.side);
            _this.stop = 1;// 
            let player2 = document.querySelector("#player_audio_font");
            player2.src = "audio/font2.mp3";
            player2.pause();
            let afficheur = document.querySelector("#sec");
            afficheur.style.backgroundColor = "black";
            let player = document.querySelector("#player_audio");
            player.src = "audio/youwin.wav"
            player.play();

            setTimeout(function () {
                if (_this.side == "D") {
                    let blk = document.querySelector("#blockD");
                    blk.style.top = "460px";
                    gagnant.style.height = "280px";
                }
                gagnant.src = "img/pers" + _this.side + "/win.gif";
                mort1.src = "img/pers" + inverse + "/ko1.gif";
                let reload = document.querySelector("#formulaire");
                reload.style.display = "block";

            }, 1000);


        } else {
            let perso = document.querySelector("#combatant_" + inverse);
            let block = document.querySelector("#block" + inverse);
            let player = document.querySelector("#player_coupatteint");
            player.src = "audio/coupatteint.mp3";
            player.play();
            perso.src = "img/pers" + inverse + "/standing.gif";
            if (_this.side == "D") {
            }
            _this.encourtt = 1;  //tttttttttttttttttttttttttttttttttttttttttttttt
            if (inverse == "D") {
                var time1 = 420; //temps de crouching du joueur D
            } else {
                var time1 = 420; // temps de crouching du joueur G
            };
            setTimeout(function () {
                perso.src = "img/pers" + inverse + "/stance.gif";
                if (_this.side == "G") {
                    perso.style.paddingLeft = "90px";
                }
                block.style.zIndex = "1";
                _this.encourtt = undefined; //ttttttttttttttttttttttttttttttttttttt       
            }, time1);



        }
    };

    reaction2(player1, player2) {// ici j'ai fait passer du controleur le paramettre player1 que je recuper ici
        let _this = this;
        if (_this.side == "G") {
            var inverse = "D"
        } else if (_this.side == "D") {
            var inverse = "G";
        }
        let vari = 1;
        if (player1.sante < 1) {
            vari = player1.sante;
        } else if (player2.sante < 1) {
            vari = player2.sante;
        }
        if (vari <= 0) {
            _this.encourtt = 1; //ttttttttttttttttttttttttttttttttttttt       
            let mort1 = document.querySelector("#combatant_" + inverse);
            mort1.src = "img/pers" + inverse + "/ko.gif";
            let gagnant = document.querySelector("#combatant_" + _this.side);
            _this.stop = 1;  // pour stoper les fonctions chrono
            let player2 = document.querySelector("#player_audio_font");
            player2.src = "audio/font2.mp3";
            player2.pause();
            let afficheur = document.querySelector("#sec");
            afficheur.style.backgroundColor = "black";
            let player = document.querySelector("#player_audio");
            player.src = "audio/youwin.wav"
            player.play();
            setTimeout(function () {
                if (_this.side == "D") {
                    let blk = document.querySelector("#blockD");
                    blk.style.top = "460px";
                    gagnant.style.height = "280px";
                }
                gagnant.src = "img/pers" + _this.side + "/win.gif";
                mort1.src = "img/pers" + inverse + "/ko1.gif";
                let reload = document.querySelector("#formulaire");
                reload.style.display = "block";
            }, 1000);


        } else {

            let perso = document.querySelector("#combatant_" + inverse);
            let block = document.querySelector("#block" + inverse);
            perso.src = "img/pers" + inverse + "/standing2.gif";
            let player = document.querySelector("#player_coupatteint");
            player.src = "audio/coupatteint.mp3";
            player.play();
            if (_this.side == "D") {
            }
            _this.encourtt = 1;  //tttttttttttttttttttttttttttttttttttttttttttttt
            if (inverse == "D") {
                var time1 = 420; //temps de crouching du joueur D
            } else {
                var time1 = 420; // temps de crouching du joueur G
            };
            setTimeout(function () {
                perso.src = "img/pers" + inverse + "/stance.gif";
                if (_this.side == "G") {
                    perso.style.paddingLeft = "90px";
                }
                block.style.zIndex = "1";
                _this.encourtt = undefined; //ttttttttttttttttttttttttttttttttttttt
            }, time1);

        };

    }




    marcher(distance) {

        let elemt = document.getElementById("block" + this.side);
        let pos = elemt.style.left;  //
        pos = pos.substring(0, pos.length - 2); // pour recuperer la position actuelle dans le dom
        let z = Number(pos) + Number(distance);
        let myInterval = setInterval(function () {
            if (pos == z) {
                clearInterval(myInterval);
            } else if (distance < 0) {
                pos -= 1;
            } else if (distance > 0) {
                pos++;
            }
            elemt.style.left = pos + "px";
        }, 0);// vitesse du deplacement par nombre de frame crees
    }

    startgame() {
       let _this = this
        let select = document.querySelector("#body1");
        select.style.transition = "all 2s linear";
        select.style.display = "none";
        let select2 = document.querySelector("#body2");
        select2.style.transition = "all 2s linear";
        select2.style.display = "block";
        let player = document.querySelector("#player_audio");
        player.src = "audio/start.wav";
        player.play();
        
        
        setTimeout(function () {
            setTimeout(function () {
                let player = document.querySelector("#player_audio");
                player.src = "audio/fight.mp3";
                player.play();
                
            }, 2000);
            let player = document.querySelector("#player_audio");
            player.src = "audio/suspens.mp3"
            player.play();
        }, 1500)
    }

    couplibre() {
        let player = document.querySelector("#player_couplibre");
        player.src = "audio/coupvide1.mp3";
        player.play();
    }
    //----------------partie chrono -----------------
    chrono() {
        let _this = this;
        let that = this;
        document.querySelector("#sec").value = parseInt(document.querySelector("#sec").value) - 1;
        setTimeout(function () { that.chrono() }, 1000);
        let time = document.querySelector("#sec").value;
        let afficheur = document.querySelector("#sec");
        if (typeof _this.stop == "undefined") {
            if (time == 115) {
                if (time >= 110) {
                    let player2 = document.querySelector("#player_audio_font");
                    player2.src = "audio/font2.mp3";
                    player2.play();
                }
            }
        }
        if (typeof _this.stop == "undefined") {
            if (time == 115) {
                afficheur.style.backgroundColor = "green";
            }
        }
        if (typeof _this.stop == "undefined") {
            if (time == 60) {
                afficheur.style.backgroundColor = "rgb(255, 149, 28)";
                let player = document.querySelector("#player_audio");
                player.src = "audio/gong.mp3";
                player.play();
            }
        }
        if (typeof _this.stop == "undefined") {
            if (time <= 10) {
                if (time >= 0) {
                    if (time % 2 == 0) {
                        afficheur.style.backgroundColor = "red";
                    } else {
                        afficheur.style.backgroundColor = "white";
                    }
                    if (time >= 1) {
                        let player = document.querySelector("#player_audio");
                        player.src = "audio/bip_fin.mp3";
                        player.play();
                    }
                }
            }
        }
        if (typeof _this.stop == "undefined") {
            if (time == 0) { //0//0
                this.encours = 1;
                this.encourtt = 1;
                let persG = document.querySelector("#combatant_G");
                let persD = document.querySelector("#combatant_D");
                persG.src = "img/persG/timeout.gif";
                persD.src = "img/persD/timeout.gif";
                let player = document.querySelector("#player_audio");
                player.src = "audio/rire.mp3";
                afficheur.style.backgroundColor = "black";
            }
        }

    }

}
