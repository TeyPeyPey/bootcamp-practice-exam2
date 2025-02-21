
const collection = [
    {
        title: 'Rear Window',
        year: 1954,
        director: 'Alfred Hitchcock',
        digitalCode: null,
        genreTags: ['Mystery', 'Suspense'],
        specialFeatures: [
            {
                type: 'Documentary',
                title: "Rear Window Ethics: An Original Documentary"
            },
            {
                type: 'Commentary',
                title: 'Feature Commentary with John Fawell'
            },
            {
                type: 'Interview',
                title: 'Hitchcock/Truffaut Interview Excerpts'
            }
        ]
    },
    {
        title: 'Psycho',
        year: 1960,
        director: 'Alfred Hitchcock',
        digitalCode: null,
        genreTags: ['Horror', 'Suspense'],
        specialFeatures: [
            {
                type: 'Documentary',
                title: 'The Making of Psycho'
            },
            {
                type: 'Commentary',
                title: 'Feature Commentary with Stephen Rebello'
            }
        ]
    },
    {
        title: 'The Thing',
        year: '1982',
        director: 'John Carpenter',
        digitalCode: null,
        genreTags: ['Horror', 'Science Fiction'],
        specialFeatures: [
            {
                type: 'Commentary',
                title: 'Feature Commentary with Star Kurt Russell and Director John Carpenter'
            },
        ]
    },
    {
        title: 'Big Trouble in Little China',
        year: 1986,
        director: 'John Carpenter',
        digitalCode: null,
        genreTags: ['Comedy', 'Fantasy'],
        specialFeatures: [
            {
                type: 'Commentary',
                title: 'Audio Commentary with Director John Carpenter and Actor Kurt Russell'
            },
            {
                type: 'Alternate Edits',
                title: 'Deleted Scenes'
            },
            {
                type: 'Interview',
                title: 'Vintage Interviews with Cast and Crew'
            }
        ]
    },
    {
        title: 'Fright Night',
        year: 1985,
        director: 'Tom Holland',
        digitalCode: null,
        genreTags: ['Horror', 'Vampire'],
        specialFeatures: [
            {
                type: 'Documentary',
                title: "'You're So Cool, Brewster!' Documentary"
            },
            {
                type: 'Interview',
                title: 'First Ever Fright Night Reunion Panel'
            }
        ]
    }
];

// PROBLEM #1 //

const setDigitalCode = function(array, value){
for (var i = 0; i < array.length - 1; i++) {
   array.digitalCode = value[i];
}
return array
};
console.log(setDigitalCode([1, 2, 3, 4], 2));

// PROBLEM #2 //

const filterByGenreTag = function(array, tag){
//Create a function called filterByGenreTag that takes in two parameters - array and tag; 
//array represents an array of movie objects; tag represents a string of a certain genre designation. 
//This function should use the native filter method to return a new array of only the movie objects that contain the input genre tag.
var output = [];
output = array.filter(collection.genreTag);
return output;
};





// PROBLEM #3 //

const filterBySpecialFeatureType = function(array, type){
//Create a function called filterBySpecialFeatureType that takes in two parameters - array and type. 
//array represents an array of movie objects; type represents a string describing the type of special feature. 
//This function should use the native filter method to return a new array 
//of only the movie objects that contain that type of special feature.
var output = [];
output = array.filter(collection[specialFeatures].type);
return output;
};


// PROBLEM #4 //

const getTopSpecialFeature = function(array, title){
//Create a function called getTopSpecialFeature that takes in one parameter - array and title. 
//array represents an array of movie objects; title represents a string of the title of a film. 
//This function should use recursion to iterate through the array. 
//If a movie with the title is found, the function should return a string of the movie's title followed by the title of the first special feature in the film's specialFeatures array. 
//If no movie is found matching that title, the function should return "no movie found matching that title".
};


// PROBLEM #5 //

const mapTitles = function(array){
//Create a function called mapTitles that takes in one parameter 
//- array - which represents an array of movie objects. 
//This function should use the native map method 
//to return a new array of the movie's title, year, and director as strings.
var output = [];
return array.map('title', 'year', 'director');
};



// PROBLEM #6 //

const mapSpecialFeatures = function(array){
//Create a function called mapSpecialFeatures that takes in one parameter 
//- array - which represents an array of movie objects. 
//This function should use the native map method to return a new array subarrays. 
//Each subarray in the array that is returned should be the strings of the titles of special features.
var output = [];
array.map = collection[i][5];
return output.push(array);
};
console.log([1, 2, 3, 4]);

// PROBLEM #7 //

const createNonsenseString = function(array, index){
//Create a function called createNonsenseString that takes in two parameters - array and index. 
//array represents an array of movie objects, and index represents the index of a string. 
//This function should use the native reduce method to iterate over the array 
//and accumulate a string by accessing the index of each movie's title and adding it to an output string.

};

// PROBLEM #8 //

const getValues = function(object, props){
//Create a function called getValues that takes in two parameters - object and props. 
//object represents an individual movie object 
//and props represents an array of keys that exist in the object. 
//This function should return a new array of the values that exist at those keys.
var output = [];
return output.push(object[key], object[key].props);
};

