//Business Logic for AddressBook ---------
function TaskList() {
  this.tasks = {};
  this.numberOfTasks = 0;
}

TaskList.prototype.assignId = function() {
  this.numberOfTasks += 1;
  return this.numberOfTasks;
};

TaskList.prototype.addTask = function(task) {
  task.id = this.assignId();
  this.tasks[task.id] = task;
};

TaskList.prototype.findTask = function(id) {
  if (this.tasks[id] != undefined) {
    return this.tasks[id];
  }
  return false;
};

TaskList.prototype.deleteTask = function(id) {
  if (this.tasks[id] === undefined) {
    return false;
  }
  delete this.tasks[id];
  return true;
};










function Task(taskName, status) {
  this.taskName = taskName;
  this.status = status;
}

// User Interface Logic ----------
let tasklist = new TaskList();
let task = new Task("finish this thing", "nonedone");
//let task2 = new Task("finish something else", "nonedone");
console.log(task.status);
tasklist.addTask(task);
console.log(tasklist.numberOfTasks);
console.log(task.id);
task = new Task("test2", "nonedone");
tasklist.addTask(task);
console.log(tasklist.tasks[2].taskName);




$(document).ready(function() { 
  $("form#side").submit(function(event) {
    event.preventDefault();
    const input = $("#side1").val();
    let task = new Task(input, "nonedone");
    tasklist.addTask(task);
     $("#work-responses").append('<input type="checkbox" name="tasks-to-do" value="'+tasklist.tasks[tasklist.numberOfTasks]+'">' + tasklist.tasks[tasklist.numberOfTasks].taskName + '<br>');
    for (let i = 0; i<5; i++){
      console.log(i);
      //$('#work-responses').append(tasklist.tasks[tasklist.numberOfTasks] + "<br>");
      //$("#work-responses").html('<input type="checkbox" name="tasks-to-do" value="'+i+'">' + tasklist.tasks[tasklist.numberOfTasks].taskName + '<br>');
     
    }
  });
});


$(document).ready(function(){
  $("form#transportation_survey").submit(function(event){
    event.preventDefault();
    $("input:checkbox[name=tasks-to-do]:checked").each(function(){

      const workTransportationMode = $(this).val();
      console.log($(this).val());
      $('#work-responses').append(workTransportationMode + "<br>");
    });
  });
});


































// // Business Logic for AddressBook ---------
// function AddressBook() {
//   this.contacts = {};
//   this.currentId = 0;
// }

// AddressBook.prototype.addContact = function(contact) {
//   contact.id = this.assignId();
//   this.contacts[contact.id] = contact;
// };

// AddressBook.prototype.assignId = function() {
//   this.currentId += 1;
//   return this.currentId;
// };

// AddressBook.prototype.findContact = function(id) {
//   if (this.contacts[id] != undefined) {
//     return this.contacts[id];
//   }
//   return false;
// };

// AddressBook.prototype.deleteContact = function(id) {
//   if (this.contacts[id] === undefined) {
//     return false;
//   }
//   delete this.contacts[id];
//   return true;
// };

// // Business Logic for Contacts ---------
// function Contact(firstName, lastName, phoneNumber) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.phoneNumber = phoneNumber;
// }

// Contact.prototype.fullName = function() {
//   return this.firstName + " " + this.lastName;
// };

// // User Interface Logic ---------
// let addressBook = new AddressBook();

// function displayContactDetails(addressBookToDisplay) {
//   let contactsList = $("ul#contacts");
//   let htmlForContactInfo = "";
//   Object.keys(addressBookToDisplay.contacts).forEach(function(key) {
//     const contact = addressBookToDisplay.findContact(key);
//     htmlForContactInfo += "<li id=" + contact.id + ">" + contact.firstName + " " + contact.lastName + "</li>";
//   });
//   contactsList.html(htmlForContactInfo);
// }

// function attachContactListeners() {
//   $("ul#contacts").on("click", "li", function() {
//     showContact(this.id);
//   });
//   $("#buttons").on("click", ".deleteButton", function() {
//     addressBook.deleteContact(this.id);
//     $("#show-contact").hide();
//     displayContactDetails(addressBook);
//   });
// }


// $(document).ready(function() {
//   attachContactListeners(); 
//   $("form#new-contact").submit(function(event) {
//     event.preventDefault();
//     const inputtedFirstName = $("input#new-first-name").val();
//     const inputtedLastName = $("input#new-last-name").val();
//     const inputtedPhoneNumber = $("input#new-phone-number").val();
//     let newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedPhoneNumber);
//     addressBook.addContact(newContact);
//     displayContactDetails(addressBook);
//   });
// });






