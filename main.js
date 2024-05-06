 function R_Click() {

        let janken = ['グー','チョキ','パー'];
        let janken_r = Math.floor( Math.random() * 3);

        document.getElementById("Rejan2").innerHTML = "相手は" + janken[janken_r] + "を出しました";

    }

//音声の再生
document.getElementById("audio").play();

//音声の一時停止
document.getElementById("audio").pause();
