const array=[1,2,3,4]
//array.filter((element)=>element%2==0).forEach((element)=>console.log(element))
const names=["Habeeb","Mazhar","Afridi","Mir","Saif","Taha"]
const studentDetails=[
    {
        "name":"Mazhar",
        "address":"Golconda",
        "city":"Hyderabad",
        "state":"Telangana",
        "mobile":"8125629427",
        "email":"syedmazharali742@gmail.com"
    },
    {
        "name":"Habeeb",
        "address":"Golconda",
        "city":"Hyderabad",
        "state":"Telangana",
        "mobile":"8801735710",
        "email":"habeebadnan@gmail.com"
    },
    {
        "name":"Mir",
        "address":"Tolichowki",
        "city":"Hyderabad",
        "state":"Telangana",
        "mobile":"1234567890",
        "email":"mirali@gmail.com"
    },
    {
        "name":"Afridi",
        "address":"Golconda",
        "city":"Hyderabad",
        "state":"Telangana",
        "mobile":"0987654321",
        "email":"afridi@gmail.com"
    },
    {
        "name":"Saif",
        "address":"Hussaini Alam",
        "city":"Hyderabad",
        "state":"Telangana",
        "mobile":"9867564534",
        "email":"saif@gmail.com"
    },
    {
        "name":"Taha",
        "address":"Malakpet",
        "city":"Hyderabad",
        "state":"Telangana",
        "mobile":"8787878787",
        "email":"taha@gmail.com"
    }
]
//names.filter((element)=>element.length>=5).forEach((i)=>console.log(i))
//console.log(studentDetails.filter((student)=>student.address!=="Golconda"))
console.log(studentDetails.map((element)=>element.address))
function getOddNumbers(element){
    return element%2==0
}
console.log(array.filter((getOddNumbers)))