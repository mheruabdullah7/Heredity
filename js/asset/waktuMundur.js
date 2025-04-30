// waktu Mundur
// countdown();
function countdown(hour, menit){
    const jam = hour; //jam
    let waktu = "";
    if(jam > 0){

        const waktu = (jam * 3600) + (menit * 60)//jam
        // const totalMenit = totalJam * 60; //menit
        // let waktu = totalMenit * 60; //sekon

        if (sessionStorage.getItem("waktu") == null) {
            var waktu2 = sessionStorage.setItem("waktu", waktu);
        } else {
            var waktu2 = sessionStorage.getItem("waktu");
        }
    
        let timer = setInterval(function(){
            if(sessionStorage.getItem("waktu") == 0){//pencekkan sisa waktu perdetik 
                clearInterval(timer);
                sessionStorage.removeItem("waktu");
                swal ( "Mohon Maaf Waktu Habis" ,  "Waktu pengerjaan Kamu telah berakhir" ,  "error" )
                .then(()=>{
                  document.location.href  = "javascript: history.go(-1)"; //kembali ke halaman sebelumnya
                })
            }else{
                var waktu3 = sessionStorage.setItem("waktu", (sessionStorage.getItem("waktu")-1));//pengurangan 1 detik
            }

            const hour = Math.floor(sessionStorage.getItem("waktu")/3600)
            const min = Math.floor((sessionStorage.getItem("waktu")%3600)/60)
            let sec = sessionStorage.getItem("waktu") % 60;

            let sekon = sec  < 10 ? '0' + sec  : sec ;
            let menit = min < 10 ? '0' + min : min;
            let jam2 = hour < 10 ? '0' + hour : hour;
            
            $(".timer-soal").text( jam2 + ":" + menit + ":" + sekon);
            
            if((min == 6) && (sec == 0)){
                swal("Perhatikan waktu tersisa 5 menit", {
                        buttons: false,
                        timer: 1500,
                      });
            }
        }, 1000);

    }else{
        const totalMenit = menit; //menit
        waktu = totalMenit * 60; //sekon

        if (sessionStorage.getItem("waktu") == null) {
            var waktu2 = sessionStorage.setItem("waktu", waktu);
        } else {
            var waktu2 = sessionStorage.getItem("waktu");
        }
    
        let timer = setInterval(function(){
            if(sessionStorage.getItem("waktu") == 0){//pencekkan sisa waktu perdetik 
                clearInterval(timer);
                sessionStorage.removeItem("waktu");
                swal ( "Mohon Maaf Waktu Habis" ,  "Waktu pengerjaan Kamu telah berakhir" ,  "error" )
                .then(()=>{
                  document.location.href  = "javascript: history.go(-1)"; //kembali ke halaman sebelumnya
                })
            }else{
                var waktu3 = sessionStorage.setItem("waktu", (sessionStorage.getItem("waktu")-1));//pengurangan 1 detik
            }

            const min = Math.floor(sessionStorage.getItem("waktu")/60)
            let sec = sessionStorage.getItem("waktu") % 60;
            let sekon = sec  < 10 ? '0' + sec  : sec ;
            let menit = min < 10 ? '0' + min : min;
            
            $(".timer-soal").text(menit + ":" + sekon);
            
            if((min == 6) && (sec == 0)){
                swal("Perhatikan waktu tersisa 5 menit", {
                        buttons: false,
                        timer: 1500,
                      });
            }
        }, 1000);
    }
}

// export { countdown }