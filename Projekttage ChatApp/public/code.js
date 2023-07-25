    (function () {

      //const app = //A: definiere anstatt diesem Kommentar die Variable app ; 
                    //Sie beinhaltet das Elment app aius der html datei. Suche das Elemet also mit document.querySelector
  
      let uname; 
    







      // AUFGABEN BLOCK 1
      
      app.querySelector(".join-screen #join-user").addEventListener("click", function () {


        // let username =  // A: Anstatt diesem Kommentar: Definiere den Wert (value) des input Feldes
                          //im Join Screen (diese Inpu Feld hat die id="username"). Suche also mit document.querySelector
                           //und . value (am Ende) 


        // A: wenn der username eine länge von 0 Zeichen hat (username.lenghth === 0) , dann return (neustart der funktion)
        
        // socket. 
        // A: Der eingegebene Spitzname (username) wird unter dem Befehl "newuser" an den Server geschickt.

        uname = username; 

        // Wenn der username nicht 0 Zeichen, sondern mehr hat, dann : 

        app.querySelector(".join-screen").classList.remove("active"); 
        // Die Klasse active wird vom Join Scren entfernt

        // A: Was passsiert mit der Klasse Chat Screen? 
        // app.querySelector(".chat-screen"). 
      });
      






    



      // AUFGABEN BLOCK 2

      function renderMessage(type, message) {
        let messageContainer = app.querySelector(".chat-screen .messages");
        if(type == "my") {
              let el = // A: unter der Variable/ dem Namen "el" einen div mit document.createElement erstellen
              // A: das Element "el" soll die Klasse ("class") "message my-message" bekommen.
              el.innerHTML = `
              <div>
                 <div className="name">You</div>
                 <div className="text">${message.text}</div>
              </div>
           `;
              messageContainer.appendChild(el);

        // die Render funktion, wenn der Browser den Befehl "other" vom Server bekommt
        // Dann wird die Nachricht eines anderen Chat Nutzers gerendert /
        } else if(type == "other") {
              let el = document.createElement("div");
              el.setAttribute("class", "message other-message");
              el.innerHTML = `
              <div>
                 <div className="name">${message.username}</div>
                 <div className="text">${message.text}</div>
              </div>
           `;
              messageContainer.appendChild(el);

        // die Render funktion, wenn der Browser den Befehl "update" vom Server bekommt
        // Dann wird die angezeigt, dass ein neuer Nutzer dem Chat beigetreten ist.
        }else if (type == "update") {
              let el = document.createElement("div");
              el.setAttribute("class", "update");
              el.innerText = message;
              messageContainer.appendChild(el);
        }
        messageContainer.scrollTop = messageContainer.scrollHeight - messageContainer.clientHeight;
  }












      // AUFGABEN BLOCK 3

      app.querySelector(".chat-screen #send-message").addEventListener("click", function () {
        
        // "message" Variable definieren , mit querySelector suchen und mit .value den Wert aus dem Input Feld auslesen

        // wenn die Nachrichtenlänge (message.length) gleich 0 ist, soll die funktion wiederholt werden (return)
        
        renderMessage("my", {
          username: uname,
          text: message,
        });
        socket.emit("chat", {
          username: uname,
          text: message,
        });
        app.querySelector(".chat-screen #message-input").value = "";
      });








      



      // AUFGABEN BLOCK 4

      //app.querySelector(".chat-screen #exit-chat"). 
        //A: hinter dem Punkt soll addEventListener mit einem "click" event hinzugefügt werden. 
    






    
    
      // Folgender Code wird ausgeführt, wenn (.on) der Browser den Befehl "update" vom Server erhält. 
      //Wenn er den Befehl erhält wird die Funktion renderMessage "update" ausgeführt.

      socket.on("update", function(update) {
        renderMessage("update", update);
      });


      // Folgender Code wird ausgeführt, wenn (.on) der Browser den Befehl "other" vom Server erhält. 
      //Wenn er den Befehl erhält wird die Funktion renderMessage "other" ausgeführt.

      socket.on("chat", function(message) {
            renderMessage("other", message);
      });







})();