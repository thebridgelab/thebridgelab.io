// Use the Crypto object to create GUIDs.
// The window object provides a read only
// property to access, which is what we're
// using below. The Crypto object is not
// just for GUIDs though. You can implement
// advanced cryptography too.
const guid = crypto.randomUUID();

// Given the provided div element below
// with a custom data attribute, we can
// easily access this value.
<div id="content-section" data-content-id="12SfdS43"></div>;

// Let's get the element first.
const contentSection = document.getElementById("content-section");
// Then we can access the custom attribute via the dataset property.
const contentId = contentSection?.dataset.contentId;

// Define our class with static members.
class MathUtil {
  static pi = 3.14159;

  static piOverTwo = 1.570796;

  static piOverFour = 0.7853982;

  static clamp(value, min, max) {
    let clampedValue = value > max ? max : value;
    clampedValue = value < min ? min : value;

    return clampedValue;
  }

  static cos(value) {
    return Math.cos(value);
  }
}

// Now that classes are native to JavaScript
// we can implement static classes like we're
// use to with other languages by using the
// static freeze method of the Object. This
// prevents inheritance (extend), modifying,
// enumerability, and prototype changes.
Object.freeze(MathUtil);

// We can natively parse out query strings
// thanks to the new URLSearchParams object.
// Here we're passing the query string portion
// of the url. We could have also passed a
// string url with query strings.
const queryStrings = new URLSearchParams(location.search);
const id = queryStrings.get("id");

// Storage and Session can both be easily
// accessed from the Window object. Use
// Local storage for persisting data
// between browser sessions (persists)
// when tabs or the browser is closed.
const acceptCookies = true;

if (acceptCookies) {
  localStorage.setItem("accept-cookies", acceptCookies);
}

// Use session for storing temporary data.
// This data will be removed when tabs or
// the browser is closed.
const shoppingCard = {};

sessionStorage.setItem("user-cart", shoppingCard);

const numbers = [2, 3, 5, 7, 11, 13];
const people = [
  {
    id: 1,
    firstName: "Billy",
    lastName: "Bob",
  },
  {
    id: 2,
    firstName: "John",
    lastName: "Doe",
  },
  {
    id: 3,
    firstName: "Rop",
    lastName: "Blue",
  },
];

// Locating items in arrays is easy with the find
// method. It takes an arrow (lambda) function as
// its parameter where you're free to customize
// the search. You're given the current iterator
// item as a parameter to your arrow function.
// The return value is the found item.
const seven = numbers?.find((n) => n === 7);
const john = people?.find((p) => p.id === 2);

// The reduce function allows you to loop through
// an array and accumulate a value based on the
// items. Below we have an array of grades that
// we want to sum and then find the average.
// reduce accepts an arrow function (reducer)
// that will be called for each item. The first
// parameter is the accumulator and the second
// is the current item. The returned value of
// the arrow function will be provided on
// subsequent calls until the array is exhausted.
// The second parameter to reduce is the initial
// value, which we set to zero.
const grades = [90, 88, 100, 95, 80, 92];
const gradesSum = grades.reduce((total, grade) => total + grade, 0);
const gradeAverage = gradesSum / grades.length;

// We typcically use Object to store key/value
// pairs, along with representing an actual
// object. This works for most use cases, but
// what if we want a true dictionary without
// any duplicate values? That's where Map
// comes in. Simply use set/get for storing/
// retrieving values.
const eventListeners = new Map();
eventListeners.set("click", () => {});
eventListeners.set("drag", () => {});
eventListeners.set("drop", () => {});

const dragEventHandler = eventListeners.get("drag");
