/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. The first principle is window console object that will output everything that is used in javascript.
* 2. JavaScript uses the, "this" keyword that reference an object and function on how it is called.
* 3. When this is used inside of a constructor function it is assign to that object which returns that constructor function.
* 4. This, can be explicitly binding when it is uses the call and apply methods.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function username(users){
    console.log(this);
    return users;
}
username('Zyoung');
// Principle 2

// code example for Implicit Binding

const passwords = {
    pass_word: 'New password',
    enter_password: function(pass) {
        console.log(`Please enter a  ${this.pass_Word}, ${this.pass}`);
        console.log(this);
    }
}
passwords.enter_password('W@d933!ddE');
// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding