async function solveProblem() {
    const question = document.getElementById('questionInput').value;
    let solution = "";

    // উদাহরণ: "৫ কেজি চালের দাম ১০৫ টাকা হলে ৫০০ গ্রামের দাম?"
    if (question.includes("কেজি") && question.includes("দাম")) {
        const pricePerKg = 105 / 5; // 21/kg
        solution = `৫০০ গ্রামের দাম = ${pricePerKg * 0.5} টাকা`;
    }

    // WolframAlpha API ব্যবহার করুন (ফ্রি)
    else {
        const appId = 'async function solveProblem() {
    const question = document.getElementById('questionInput').value;
    let solution = "";

    // উদাহরণ: "৫ কেজি চালের দাম ১০৫ টাকা হলে ৫০০ গ্রামের দাম?"
    if (question.includes("কেজি") && question.includes("দাম")) {
        const pricePerKg = 105 / 5; // 21/kg
        solution = `৫০০ গ্রামের দাম = ${pricePerKg * 0.5} টাকা`;
    }

    // WolframAlpha API ব্যবহার করুন (ফ্রি)
    else {
        const appId = 'QAAT7L-P2RGPLKWRA';
        const response = await fetch(`https://api.wolframalpha.com/v1/result?appid=${appId}&i=${encodeURIComponent(question)}`);
        solution = await response.text();
    }

    document.getElementById('solution').innerText = solution;
}

// ইমেজ আপলোড (বাংলা OCR)
document.getElementById('imageUpload').addEventListener('change', function(e) {
    Tesseract.recognize(e.target.files[0], 'ben')
    .then(result => {
        document.getElementById('questionInput').value = result.text;
    });
});'; // WolframAlpha থেকে নিন
        const response = await fetch(`https://api.wolframalpha.com/v1/result?appid=${appId}&i=${encodeURIComponent(question)}`);
        solution = await response.text();
    }

    document.getElementById('solution').innerText = solution;
}

// ইমেজ আপলোড (বাংলা OCR)
document.getElementById('imageUpload').addEventListener('change', function(e) {
    Tesseract.recognize(e.target.files[0], 'ben')
    .then(result => {
        document.getElementById('questionInput').value = result.text;
    });
});