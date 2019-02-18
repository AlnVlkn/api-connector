
(function(){

  var url_user = "https://backend.staffbase.com/api/users/5c6a6c6c19472543e58661dd"; //id input
  var url= "https://backend.staffbase.com/api/users";

  //task 1: add new users

  //user input example
  var text = "John Doe lala@gmail.com,Jan Mueller 123@example.com";
  var lines = text.split(",");   //separates text in lines to know the no. of objects needed
  var numlines = lines.length;      //amount of lines==amount of objects


//class Person to store the parsed data
  class Person {
    constructor (firstName, lastName, email){
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
    }
  }

//declarating of array of objects
  var entry=[];

//parsing data and storing
  for(var count=0; count<numlines; count++){

    var name = lines[count].split(" ");
    entry[count] = new Person(name[0], name[1], name[2]);
  }

  var people = JSON.stringify(entry);
// end of task 1

//task 2: add location and department data
  var modify = {
    "location":"Dresden",
    "department": "Support"};

  var change = JSON.stringify(modify);

  fetch(url_user, {
    "method": "PUT",
    "headers": new Headers({
     'Authorization': 'Basic NWM2YTdmNjIzNTk5YTAyNzU1MjhjOTdhOkNJOUxvMmZfYVQyaXBSXkNaQW1VanBDQnJuSE0mU25BTEhKRnA4UjY3KnV5fS5fcTZCKjt9YUlhXURVWkNLMVs=',
     'Content-Type': 'application/json'
    }),

    "body": change
  })

  //end of task 2

  //post request fails - wrong parameters?
  fetch(url, {
    "method": "POST",
    "headers": new Headers({
     'Authorization': 'Basic NWM2YTdmNjIzNTk5YTAyNzU1MjhjOTdhOkNJOUxvMmZfYVQyaXBSXkNaQW1VanBDQnJuSE0mU25BTEhKRnA4UjY3KnV5fS5fcTZCKjt9YUlhXURVWkNLMVs=',
     'Content-Type': 'application/json'
    }),

    "body": people
  })

  fetch(url, {
    "method":"GET",
    "mode":"cors",
    "credentials": "same-origin",
    "headers": new Headers({
     'Authorization': 'Basic NWM2YTdmNjIzNTk5YTAyNzU1MjhjOTdhOkNJOUxvMmZfYVQyaXBSXkNaQW1VanBDQnJuSE0mU25BTEhKRnA4UjY3KnV5fS5fcTZCKjt9YUlhXURVWkNLMVs=',
     'Content-Type': 'application/json'
    }),
    "body":null
  })
  .then((res) => {
    return res.json();
  })

  .then((data) => {
    //logging for test purposes
    
    console.log(data.id);
    console.log(data.location);
  });

}());
