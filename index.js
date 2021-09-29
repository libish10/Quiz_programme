var ques_ans_option = [{
        question: "Which of the following ancient Tamil Kingdoms came to be known from Sangam Literature?",
        optionA: "Chola",
        optionB: "Chera",
        optionC: "Pandya",
        optionD: "All of the above",
    },
    {
        question: "Which of the following book is considered as the ‘Odyssus of Tamil poetry’?",
        optionA: "Tirukkural",
        optionB: "Manimekalai",
        optionC: "Silappadikarma",
        optionD: "Jivaka Chintamani",
    },
    {
        question: "Which of the following was the capital of Chola dynasty?",
        optionA: "Madurai",
        optionB: "Karur",
        optionC: "Uraiyaur",
        optionD: "Kaveripattnam",
    }, {
        question: "The Pattini cult was established by which Sangam ruler?",
        optionA: "Nedunjeral Adan, the Chera ruler",
        optionB: "Senguttuvan, the Chera ruler",
        optionC: "Karikala, the Chola ruler",
        optionD: "Nedujeliyan, the Pandyan ruler"
    }, {
        question: "Which among the following is a Tamil grammatical treatise ?",
        optionA: "Pattupattu",
        optionB: "Ettutogai",
        optionC: "Silappadikaram",
        optionD: "Tolkappiam",
    }, {
        question: '“Kuyil Pattu” is a famous work ascribed to which among the following Tamil Poets?',
        optionA: "Bharathidasan",
        optionB: "Avvaiyar",
        optionC: "Anandabharati Aiyangar",
        optionD: "Subramanya Bharathi",
    }, {
        question: 'Which among the following National Parks / Wild Life sanctuaries of Tamil Nadu is called as Top Slip?',
        optionA: "Aanamalai National Park",
        optionB: "Mudumalai Wildlife Sanctuary",
        optionC: "Guindy National Park",
        optionD: "Palani Hills National Park",
    }, {
        question: 'Jayamkondam in Tamil Nadu is famous for which among the following minerals?',
        optionA: "Bauxite",
        optionB: "Lignite",
        optionC: "Calcite",
        optionD: "Magnesite",
    }, {
        question: 'Where was the first Tamil Sangam held__?',
        optionA: "Madurai",
        optionB: "Kapatpuram",
        optionC: "Kaveripattnam",
        optionD: "Kural",
    }, {
        question: 'Which festival is celebrated in north India when Pongal is celebrated in Tamil Nadu?',
        optionA: "Holi",
        optionB: "Makar Sankranti",
        optionC: "Diwali",
        optionD: "Baishaki",
    }, {
        question: 'Which City is known as the Rice Bowl of Tamil Nadu ?',
        optionA: "Chennai",
        optionB: "Tuticorin",
        optionC: "Thanjavur",
        optionD: "Ennore",
    }, {
        question: 'Which of the following was another name of Pallava King Narasimhavarman-I?',
        optionA: "Mamalla",
        optionB: "Mahedravarman",
        optionC: "Apapar",
        optionD: "None of the above",
    },
    {
        question: 'In which year legislative council of Tamilnadu was abolished?',
        optionA: "1983",
        optionB: "1985",
        optionC: "1986",
        optionD: "1987",
    },
    {
        question: 'What is the rank of Tamil Nadu among Indian states in terms of area?',
        optionA: "fifth",
        optionB: "seventh",
        optionC: "ninth",
        optionD: "eleventh",
    }, {
        question: 'Ekamabaranadhar temple of Kanchipuram in Tamil Nadu was built by__?',
        optionA: "Cholas",
        optionB: "Pandyas",
        optionC: "Pallavas",
        optionD: "Vijayanagar Emperors",
    }
];

var questions = document.getElementById("question");
var option_A = document.getElementById("opt1");
var option_B = document.getElementById("opt2");
var option_C = document.getElementById("opt3");
var option_D = document.getElementById("opt4");
var question_No = document.getElementById("q_No")


var next_btn = document.querySelector("#next_button");


let current_question = 0;


window.addEventListener("DOMContentLoaded", function() {
    nextQuestion(current_question);
})

function nextQuestion(question_opt) {
    if (question_opt < 15) {
        let items = ques_ans_option[question_opt];
        question_No.textContent = (question_opt + 1)
        questions.textContent = items.question;
        option_A.textContent = items.optionA;
        option_B.textContent = items.optionB;
        option_C.textContent = items.optionC;
        option_D.textContent = items.optionD
    } else if (question_opt == 15) {
        document.getElementById("next_button").innerHTML = "Submit";
        window.location.href = "./submitted.html"
    }
}


next_btn.addEventListener("click", function() {
    current_question++;
    nextQuestion(current_question);
})