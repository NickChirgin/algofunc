let courses = [
    { name: "Courses in England", prices: [0, 100] }, 
    { name: "Courses in Germany", prices: [500, null] }, 
    { name: "Courses in Italy", prices: [100, 200] }, 
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] },
];

let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];


const algo = (courses, range) => {
    for (let i=0; i<courses.length; i++){
        if(courses[i].prices[0] == null){
            courses[i].prices[0] = 0
        }
        if(courses[i].prices[1] == null){
            courses[i].prices[1] = 10000
        }
    }
    if (range[0] == null){
        range[0] = 0
    }
    if (range[1] == null){
        range[1] = 9999
    }
    console.log(courses)
    let coursesInRange = courses.filter(course => (course.prices[1] > range[0]) && (range[1] > course.prices[0]))
    return coursesInRange
}

console.log(algo(courses, requiredRange1))
console.log(algo(courses, requiredRange2))
console.log(algo(courses, requiredRange3))