$ (document).ready(readyNow);
// create a cohort array 
let emirp = [];

function readyNow() {
    // do a few click handlers
    $ ('#firstPTag').on('click', pTagClick)
    $ ('.otherPTags').on('click', otherTagClick)
    $ ('#sumbitButton').on('click', getInfo)
}

function getInfo() {
    console.log('in getInfo');  
    //get value from nameIn
    const name = $('#nameIn').val(); // GETS the value from the element
    // create a user object
    const user = {
        name: name
    }
    // push user into the cohort
    emirp.push(user);
    // put cohort list on DOM
    // target ul element by id
    let el = $( '#cohortOut' );
    // empty ul
    el.empty();
    // loop through the cohort array
    for (let i=0; i < emirp.length; i++){
        // append each user to ul in DOM
        el.append('<li>' + emirp[i].name + '</li>');
    } // end for loop
    
    //update cohort count
    // new variable
    let count = $( '#cohortCount' );
    // empty element
    count.empty();
    // append to element
    count.append( emirp.length );

    // empty nameIn element
    $('#nameIn').val(''); // SETS value for this element 
} // end getInfo

function pTagClick() {
    console.log('Clicked on 1st pTag');
}

function otherTagClick(){
    console.log('Clicked on a class element');
}