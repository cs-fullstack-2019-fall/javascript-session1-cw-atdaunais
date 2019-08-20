//created class to assign new names to from the given array
class FacebookUsers{
    constructor(name){
        this.name = name;
    }
}

//copied given array and created my own empty facebook user array to put new names into
let myArray = ['Marvin','Ferris','Brynn','Damian','Whitney','Leila','Frances','Keith','Cara','Ainsley','Adrian','Adam','Iona','Akeem','Scarlett','Murphy','Angelica','Georgia','Calvin','Amy','Merrill','Gloria','Charissa','Colorado','Inga','Eden','Carla','Hedley','Thaddeus','Maggie','Kimberly','Ezra','Kane','Candace','Cade','Dante','Scott','Philip','Dieter','Kristen','Nerea','Ivor','Stacey','Tanner','Judith','Emery','Lionel','Josiah','Wesley','Anne','Lane','Kameko','Colleen','Travis','Abdul','Scarlet','Quail','Larissa','Palmer','Irene','Cherokee','Rajah','Maxine','Yen','Bruce','Matthew','Ivan','Georgia','Charissa','Thaddeus','Jack','Dean','Florence','Madonna','Dennis','Zeus','Destiny','Maia','Mara','Florence','Anika','Brenda','Jocelyn','Zia','Kiona','Lars','Molly','Gregory','Felix','William','Dahlia','Gil','Byron','Daria','Nevada','Claudia','Zelenia','Nathan','Judah','Sheila'];
let facebookArray = [];

//this function will take each element from myArray, input that element into the facebook class, then return it to the facebookArray
function main(){
    facebookArray = myArray.map(function(eachElement){
        eachElement = new FacebookUsers(eachElement);
        return eachElement
    })
}

console.log(facebookArray); //here I'm checking to make sure the array is empty before calling my function, so if the second console log is successful then I know my function worked
main();
console.log(facebookArray);

let newString = facebookArray.map(function(eachElement){
    return ("<h1 style='color:blue;background:red;text-shadow: -2px 2px 2px #000000;'>" + eachElement.name + "</h1>")
});
console.log(newString);
document.getElementById("classwork").innerHTML = newString;

