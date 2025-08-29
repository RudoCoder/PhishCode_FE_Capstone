const quiz = [
    {
        id: 1,
        question: "What should you do if you receive a suspicious email?",
        options: [
            {text: "Click the link to verify"},
            {text: "Hover over links and report to IT", correct: true},
            {text:"Ignore and delete immediately"}
        ]
    },
    {
        id: 2,
        question: "True or False: All emails from your manager are safe.",
        options: [
            {text: "True"},
            {text: "False", correct: true}
        ]
    },
    {
        id: 3,
        question: "What does SPF stand for in email security?",
        options: [
            {text: "Sender Policy Framework", correct: true},
            {text: "Secure Protocol Format"},
            {text: "Spam Prevention Filter"}
        ]
    },
    {
        id: 4,
        question: "Which of the following is a sign of a fake website?",
        options: [
            {text: "A secure HTTPS CONNECTION"},
            {text: "A mispelled domain name", correct: true},
            {text: "A company logo"}
        ]
    },
    {
        id: 5,
        question: "What is the role of DKIM in email security?",
        options: [
            {text: "verifies the authenticity of the email messages", correct: true},
            {text: "blocks spam emails"},
            {text: "encrypts email content"}
        ]
    },
    {
        id: 6,
        question: "which file attachment is most likely to be malicious?",
        options: [
            {text: ".TXT"},
            {text: ".PDF"},
            {text: ".EXE", correct: true},
        ]
    },
    {
        id: 7,
        question: "Which protocol adds encryption to an email in transit?",
        options: [
            {text: "TLS", correct: true},
            {text: "FTP"},
            {text: "HTTP"}
        ]
    },
    {
        id: 8,
        question: "How often should a phishing awareness training be conducted?",
        options: [
            {text: "Once every 5 years"},
            {text: "Regularly, with simulations", correct: true},
            {text: "Only after a phishing incident"}
        ]
    },
    {
        id: 9,
        question: "What is a VMC used for?",
        options: [
            {text: "Virus Monitor Certifificate"},
            {text: "Verified Mark Certificate", correct: true},
            {text: "Virtual Mail Client"}
        ]
    },
    {
        id: 10,
        question: "Which is the safest way to verify a request for payment?",
        options: [
            {text: "Call the sender directly using known contact", correct: true},
            {text: "Reply to the email asking for confirmation"},
            {text: "Click the link in the email to verify"}
        ]
    }
];

export default quiz;
