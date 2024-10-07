const keyboardElement = document.getElementById("keyboard");
const selected = document.querySelector("#langs");
const textInput = document.getElementById("textInput");

const keyboardLangs = {
    english: {
        numbers: [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "0",
            "Backspace",
        ],
        top: ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
        middle: ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
        bottom: ["Z", "X", "C", "V", "B", "N", "M"],
    },

    persian: {
        numbers: [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "0",
            "Backspace",
        ],
        top: ["ض", "ص", "ث", "ق", "ف", "غ", "ع", "ه", "خ", "ح", "ج", "چ"],
        middle: ["ش", "س", "ی", "ب", "ل", "ا", "ت", "ن", "م", "ک", "گ", "پ"],
        bottom: ["ظ", "ط", "ز", "ر", "ذ", "د", "ئ", "و"],
    },
    pashto: {
        numbers: [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "0",
            "Backspace",
        ],
        top: ["ض", "ص", "ث", "ق", "ف", "غ", "ع", "ه", "ج", "چ", "ځ", "خ"],
        middle: ["ښ", "ش", "س", "ۍ", "ی", "ي", "ب", "ل", "ا", "ت", "ټ", "پ"],
        bottom: ["ر", "ذ", "ظ", "ط", "د", "ډ", "ړ", "ئ", "ې", "و", "ړ", "ږ"],
        bottom2: ["ڼ", "ن", "م", "ک", "ګ", "ز", "ژ", "ء", "ح"],
    },
};

function render(language) {

    keyboardElement.innerHTML = "";


    for (const row in language) {
        const rowDiv = document.createElement("div");
        rowDiv.className = row;

        language[row].forEach((key) => {
            const keyButton = document.createElement("button");
            keyButton.className = "key";
            keyButton.textContent = key;
            if (keyButton.textContent === "Backspace") {
                keyButton.classList.add("backspace");
            }
            keyButton.addEventListener("mousedown", () => {
                keyButton.classList.add("active");
                // Add the clicked key to the input field
                if (key === " ") {
                    textInput.value += " ";
                } else if (key === "Backspace") {
                    textInput.value = textInput.value.slice(0, -1);
                } else {
                    textInput.value += key;
                }
            });
            keyButton.addEventListener("mouseup", () => {
                keyButton.classList.remove("active");
            });
            rowDiv.appendChild(keyButton);
        });

        keyboardElement.appendChild(rowDiv);
    }


    const spaceButton = document.createElement("button");
    spaceButton.className = "key space";
    spaceButton.textContent = "Space";
    spaceButton.addEventListener("mousedown", () => {
        spaceButton.classList.add("active");
        textInput.value += " ";
    });
    spaceButton.addEventListener("mouseup", () => {
        spaceButton.classList.remove("active");
    });
    keyboardElement.appendChild(spaceButton);

}


render(keyboardLangs.english);

selected.addEventListener("change", () => {
    const lang = selected.value;
    if (lang === "fa") {
        render(keyboardLangs.persian);
    } else if (lang === "pashto") {
        render(keyboardLangs.pashto);
    } else {
        render(keyboardLangs.english);
    }
});

document.addEventListener("keydown", (event) => {
    const key = event.key.toUpperCase();
    const keyElements = document.querySelectorAll(".key");
    keyElements.forEach((k) => {
        if (
            k.textContent === key ||
            (key === " " && k.classList.contains("space"))
        ) {
            k.classList.add("active");
        }
    });
});

document.addEventListener("keyup", (event) => {
    const key = event.key.toUpperCase();
    const keyElements = document.querySelectorAll(".key");
    keyElements.forEach((k) => {
        if (
            k.textContent === key ||
            (key === " " && k.classList.contains("space"))
        ) {
            k.classList.remove("active");
        }
    });
});

document.getElementById("copy").addEventListener("click", function () {
    const inputField = textInput;
    const textToCopy = inputField.value;

    if (navigator.clipboard) {
        navigator.clipboard
            .writeText(textToCopy)
            .then(() => {
                showToast("Copied");
            })
            .catch((err) => {
                showToast("Failed to copy text: " + err);
            });
    } else {

        inputField.select();
        try {
            const successful = document.execCommand("copy");
            const msg = successful ? "Copied" : "Failed to copy";
            showToast(msg)
        } catch (err) {
            showToast("Failed to copy text: " + err);
        }
    }
});

const showToast = (message) => {
    const toast = document.querySelector(".custom-toast");
    toast.innerHTML = message;

    setTimeout(() => {
        toast.style.opacity = "1";
    

        setTimeout(() => {
            toast.style.opacity = "0";
           
        }, 500);
    }, 500);
};