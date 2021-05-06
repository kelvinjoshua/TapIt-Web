var firebaseConfig = {
    apiKey: "AIzaSyBMFhT1ZpGblSImh5iYvKqoTUitjc--L4Y",
    authDomain: "ocrimg-b9085.firebaseapp.com",
    databaseURL: "https://ocrimg-b9085-default-rtdb.firebaseio.com",
    projectId: "ocrimg-b9085",
    storageBucket: "ocrimg-b9085.appspot.com",
    messagingSenderId: "702838970297",
    appId: "1:702838970297:web:dc65d6bf73d48450b60868",
    measurementId: "G-VT5EP939XS"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const auth = firebase.auth();

  function signUp() {
      var email = document.getElementById("email");
      var password = document.getElementById("password");

      const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
      promise.catch(e => alert(e.message));

      alert("Completed!");
  }

  function signOut() {
      auth.signOut();
  }

  function selectAllData() {
      firebase.database().ref('UserDetails').on('value',
      function(AllRecords){
          AllRecords.forEach(
              function(CurrentRecord) {
                  var name = CurrentRecord.val().customerName;
                  var date = CurrentRecord.val().date;
                  var latitude = CurrentRecord.val().latitude;
                  var longitude = CurrentRecord.val().longitude;
                  var meterNumber = CurrentRecord.val().meterNumber;
                  var phone = CurrentRecord.val().phoneNumber;
                  var volume = CurrentRecord.val().volumeConsumed;

                  AddItemsToTable(name,date,latitude,longitude,meterNumber,phone,volume);
              }
          );
      });
  }

  window.onload = selectAllData;

  function AddItemsToTable(name,date,latitude,longitude,meterNumber,phone,volume) {
      var meterNo = 0;

      var tbody = document.getElementById('tbody1');
      var trow = document.createElement('tr');
      var td1 = document.createElement('td');
      var td2 = document.createElement('td');
      var td3 = document.createElement('td');
      var td4 = document.createElement('td');
      var td5 = document.createElement('td');
      var td6 = document.createElement('td');
      var td7 = document.createElement('td');

      td1.innerHTML = name;
      td2.innerHTML = date;
      td3.innerHTML = latitude;
      td4.innerHTML = longitude;
      td5.innerHTML = meterNumber;
      td6.innerHTML = phone;
      td7.innerHTML = volume;

      trow.appendChild(td1);
      trow.appendChild(td2);
      trow.appendChild(td3);
      trow.appendChild(td4);
      trow.appendChild(td5);
      trow.appendChild(td6);
      trow.appendChild(td7);

      tbody.appendChild(trow);
  }