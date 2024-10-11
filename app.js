let day = prompt("Please enter a day of the week:");

day = day.toLowerCase();

switch (day) {
    case 'monday':
        console.log("Task: Perform day");
        break;
    case 'tuesday':
        console.log("Task: Activity work");
        break;
    case 'wednesday':
        console.log("Task: Rest day");
        break;
    case 'thursday':
        console.log("Task: Assignment work");
        break;
    case 'friday':
        console.log("Task: Review day");
        break;
    case 'saturday':
        console.log("Task: Rest day");
        break;
    case 'sunday':
        console.log("Task: Rest day");
        break;
    default:
        console.log("Invalid input. Please enter a valid day of the week.");
}
