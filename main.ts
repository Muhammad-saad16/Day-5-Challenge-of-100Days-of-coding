//                                   🚀 Day 5 Challenge: Start Coding! 🚀

//Question 13: 
//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples.
// Use your list to print a series of statements about these items, such as  “I would like to own a Honda motorcycle.”


let transportMode: string[] = ["car", "bike"];
for (let i = 0; i < transportMode.length; i++) {

    console.log(`I would like to own a ${transportMode[i]}.`);
}


// Question 14:
//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least
// three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

let guestList: string[] = ["Muhammad Saad", "Khizar", "Ahmed"];
for (let i = 0; i < guestList.length; i++) {
    console.log(`Hi ${guestList[i]}, I would like to invite you for dinner.`);
}

// Question 15: Changing Guest List: One of your guests can't make it to the dinner,
// so you need to send out a new set of invitations with a replacement guest.

let guestlists: string[] = ["Abdullah","Hammad","Saad","Miss Hina"];

// print the name who cannot make the dinner.

let unableAttend:string= guestlists.splice(1,1)[0];
console.log(`${unableAttend}not invitted for dinner`);

//push 
guestlists.push("Hina Naseer")

// print a message
 for (let i = 0; i < guestlists.length; i++) {
   console.log(`Dear ${guestlists[i]}, you are cordilly invited `)
 }
