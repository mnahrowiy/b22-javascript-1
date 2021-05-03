// soal nomor 1

const biodata = {
    name: "Nahrowi",
    age: 23,
    hobbies: ["sepak bola", "main catur", "koding"],
    IsMarried: false,
    schoolList : [ 
        {
            name : "SDN Buaran Bambu IV",
            yearIn : 2004,
            yearOut : 2010,
            major: null,
        },
        
        {
            name : "SMPN 1 Pakuhaji",
            yearIn : 2010,
            yearOut : 2013,
            major: null,
        },

        {
            name : "SMAN 11 Kab. Tangerang",
            yearIn : 2013,
            yearOut: 2016,
            major: "IPA",
        },
        {
            name : "Politeknik Negeri Jakarta",
            yearIn: 2017,
            yearOut: 2021,
            major: "Teknik Informatika",
        }

    ],

    skill : [
        {
            skillName: "Python",
            level: "advanced",
            interestInCoding: true,
        },
        {
            skillName: "Javascript",
            level: "beginner",
            interestInCoding: true,
        }
    ]

}

// console.log(biodata.schoolList[1])


// Soal nomor 2

const mtk = 60;
const bahasaIndonesia = 70;
const bahasaInggris = 89;
const ipa = 69;

const nilai_rata_rata = (mtk+bahasaIndonesia+bahasaInggris+ipa)/4;
console.log("Rata-rata = "+nilai_rata_rata);
if (nilai_rata_rata >= 90 && nilai_rata_rata <=100){
    console.log("Grade A")
} else if (nilai_rata_rata>=80 && nilai_rata_rata <=89){
    console.log("Grade B")
} else if (nilai_rata_rata>=70 && nilai_rata_rata <= 79){
    console.log("Grade C")
} else if (nilai_rata_rata>=60 && nilai_rata_rata <= 69){
    console.log("Grade D")
} else if (nilai_rata_rata>=0 && nilai_rata_rata <= 59){
    console.log("Grade E")
} else{
    console.log("Ada yang salah dari ujian anda")
}

// soal nomor 3

const printSegitiga = 5
let hasil = "";

if (typeof(printSegitiga) === "number"){

    for (let i = printSegitiga; i>=1; i--){
        
        for ( let j = 1; j<=i; j++){

            hasil += j;
        }
        hasil += '\n';
    }
    console.log(hasil)
    
}else{
    console.log("Data Harus number")
}


// soal nomor 4

let data_saya = {
    name: "Nahrowi",
    email: "mnahrowiy@gmail.com",
    hobby : "koding"
}
let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: 
        {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    }



let data_baru = {...data,...data_saya}
    
console.log(data_baru);


// destruction
const {street} = data.address
const {city} = data.address

console.log(street)
console.log(city)