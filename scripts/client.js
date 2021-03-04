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
    console.log(emirp);
    // empty nameIn element
    $('#nameIn').val(''); // SETS value for thiss element 
}

function pTagClick() {
    console.log('Clicked on 1st pTag');
}

function otherTagClick(){
    console.log('Clicked on a class element');
}