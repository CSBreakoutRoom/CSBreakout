let locks = ["0000", "1111", "2222", "3333"];

document.getElementById("submit1").addEventListener("click", function () {
    handleLock(1);
});

document.getElementById("submit2").addEventListener("click", function () {
    handleLock(2);
});

document.getElementById("submit3").addEventListener("click", function () {
    handleLock(3);
});

document.getElementById("submit4").addEventListener("click", function () {
    handleLock(4);
});

function handleLock(index) {
    const codeInput = document.getElementById("code" + index).value;
    const nextPassClass = "pass" + (index + 1);

    if (codeInput === locks[index - 1]) {
        if (index < locks.length) {
            const nextPassElements = document.getElementsByClassName(nextPassClass);
            for (let i = 0; i < nextPassElements.length; i++) {
                nextPassElements[i].style.display = "inline-block";
            }
        } else {
            alert("Congratulations! All locks are open.");
        }
    } else {
        alert("Incorrect password for Lock " + index + ".");
    }
}

// Select the h3 element
const h3 = document.querySelector("h3");

// Listen for when the typing animation ends
h3.addEventListener("animationend", (event) => {
    if (event.animationName === "typing") {
        h3.classList.add("finished"); // Add the class to stop the cursor
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const textElement = document.getElementById("start");
    const firstLockElements = document.getElementsByClassName("pass");
    const lines = [
        "Initializing system…",
        "System check complete.",
        "",
        "Accessing encrypted data logs…",
        "Data retrieval successful.",
        "",
        "Project BITWISE archive, last accessed: September 24th, 1978",
        "Status: DECOMMISSIONED",
        "Reason: [REDACTED]",
        "",
        "MESSAGE FROM THE ARCHIVE:",
        "-------------------------",
        "“Those who seek the truth must be prepared to unlock it. The codes are hidden within the labyrinth of information, where logic and knowledge will light your path.”"
    ];

    let lineIndex = 0;
    let charIndex = 0;

    // Function to type each line of the paragraph
    function typeLine() {
        if (lineIndex < lines.length) {
            const currentLine = lines[lineIndex];
            if (charIndex < currentLine.length) {
                textElement.innerHTML += currentLine[charIndex];
                charIndex++;
                setTimeout(typeLine, 50); //Typing speed
            } else {
                //Add a newline after each line is complete
                textElement.innerHTML += "<br>";
                charIndex = 0;
                lineIndex++;
                setTimeout(typeLine, 500); //Delay before starting the next line
            }
        } else {
            for (let i = 0; i < firstLockElements.length; i++) {
                firstLockElements[i].style.display = "inline-block";
            }
        }
    }

    // Wait for the h3 animation to finish before starting the paragraph typing effect
    const header = 2000; //Adjust this to match the h3 typing animation duration
    setTimeout(typeLine, header);
});
