const URL = "https://amat-be.herokuapp.com/"

function addQuestion(){
  const myQuestion = document.getElementById("questionTextarea").value;
  console.log('my question is: ', myQuestion);
  
    fetch(URL + "new_question", {  
        method: 'POST',  
        headers: {  
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },  
         body: JSON.stringify({question: myQuestion})
    })
    .then(response => response.json())
    .then(function (jsonData) {  
      console.log('Request success: ', jsonData);  
      document.getElementById("questionTextarea").value = jsonData;
    })  
    .catch(function (error) {  
      console.log('Request failure: ', error);  
    });   
}