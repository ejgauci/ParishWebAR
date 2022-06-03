    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
  
    //Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyByYcfFE5zlae_rIBjqHUgH3cEbHV3OlUc",
      authDomain: "parish-ar.firebaseapp.com",
      projectId: "parish-ar",
      storageBucket: "parish-ar.appspot.com",
      messagingSenderId: "519756129842",
      appId: "1:519756129842:web:6198ad8a40eb73c4c4fe2b"
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    import {getDatabase, ref, get, set, child, update, remove}
    from "https://www.gstatic.com/firebasejs/9.6.9/firebase-database.js"

    const db = getDatabase();

 
    var res = [];
    var name = document.getElementById("pin");
    var time = document.getElementById("clock");
    var priest = document.getElementById("priest");
    var info = document.getElementById("info");

    var myLat = 10;
    var myLon = 10;
    var distClosest = null;
    var chTime = " chTime";
    var chName = " chName";
    var chPriest = "chPriest";
    var chInfo = "chInfo";


    const dbref = ref(db);
        get(child(dbref, "Location")).then((snapshot)=>{
            if(snapshot.exists()){
                

                // console.log(JSON.stringify(snapshot.val()))
                // document.getElementById("demo").innerHTML = JSON.stringify(snapshot.val());
                // document.getElementById("demo").innerHTML = snapshot.val();

                snapshot.forEach(
                function(child){ 
                    // console.log(child.key);

                    // console.log(child.val());
                    
                    var jsonObj = JSON.stringify(child.val())

                    res.push(jsonObj);


                });
                // document.getElementById("out").innerHTML = res;

                for(var i in res){
                        console.log(res[i]);
                }

                // var container = document.getElementById('test');

                for(i in res){
                    const obj = JSON.parse(res[i]);
                    // document.getElementById("test").innerHTML = obj.LocOfCh + ": " + obj.LatOfCh + " ,"+obj.LonOfCh; 

                    
                    // container.append(obj.LocOfCh + ": " + obj.LatOfCh + " ,"+obj.LonOfCh);
                    // container.append('________');



                    if (navigator.geolocation) {
                        navigator.geolocation.getCurrentPosition(showPosition);
                    } else { 
                        time.innerHTML = "Geolocation is not supported by this browser.";
                    }



                    function showPosition(position) {
                        time.innerHTML = "Latitude: " + position.coords.latitude + 
                        "<br>Longitude: " + position.coords.longitude;
                        myLat =position.coords.latitude;
                        myLon =position.coords.longitude;

                        console.log(myLat+" "+myLon+" "+obj.LatOfCh+" "+obj.LonOfCh);
                    
                        var dist = getDistanceFromLatLonInKm(myLat,myLon,obj.LatOfCh,obj.LonOfCh)
                        console.log(obj.LocOfCh+ ": " +dist);

                        if(distClosest==null || dist<distClosest){
                            distClosest = dist;
                            chName = obj.NameOfCh;
                            chTime = obj.TimeOfCh;
                            chPriest = obj.KappillanOfCh;
                            chInfo = obj. HistoryOfCh;
                        }
                        // console.log(chClosest);
                        name.innerHTML = chName;
                        time.innerHTML = chTime;
                        priest.innerHTML = chPriest;
                        info.innerHTML = chInfo;
                    }

                    
                    
                 }

                 

            }else{
                alert("No Data Found");
            }
        })
        .catch((error)=>{
            alert("unsuccessful, error: "+error);
        });

function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
            var R = 6371; // Radius of the earth in km
            var dLat = deg2rad(lat2-lat1);  // deg2rad below
            var dLon = deg2rad(lon2-lon1); 
            var a = 
                Math.sin(dLat/2) * Math.sin(dLat/2) +
                Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
                Math.sin(dLon/2) * Math.sin(dLon/2)
                ; 
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
            var d = R * c; // Distance in km
            return d;
            }

            function deg2rad(deg) {
            return deg * (Math.PI/180)
            }
