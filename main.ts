// // // // More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// // // // • Tests for equality and inequality with strings

// // // // • Tests using the lower case function

// // // // • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// // // // • Tests using "and" and "or" operators

// // // // • Test whether an item is in a array

// // // // • Test whether an item is not in a array

// // // // let name_1 : string = "Sarwat"
// // // // let name_2 : string = "Sarwat Jahan"
// // // // let name_3 : string = "Mrs Sarwat Jahan"

// // // // if (name_1 == name_3){
// // // //     console.log("name are equal")
// // // // } else {
// // // //     console.log("names are not equal")
// // // // }

// // // // if (name_1 != name_2){
// // // //     console.log("names are equal")
// // // // };

// // let age_1 : number = 18
// // let age_2 : number =22

// // // // if (age_1 ==18) {
// // // //     console.log("eligible for vote")
// // // // }

// // // if (age_1 !== 22) {
// // //     console.log("eligible for vote in older category")
// // // }

// // // if (age_1 <= age_2) { //less
// // //     console.log("younger")
// // // }

// // // if (age_2 >= age_1) { //greater
// // //     console.log ("older")
// // // }

// // // if (age_1 == 18 &&  age_2 == 22) {
// // //     console.log("person is eligible for vote")
// // // }

// // if (age_1 == 18 || age_2 != 22) {
// //     console.log("person is eligible not for vote")
// // }


let country : string[] = ["Pakistan", "India", "Japan", "China"]
// if (country.includes("Pakistan")){
//     console.log("Pakistan is in country list")

// }

if (!country.includes ("America")){
    console.log("america is not include in array")
}