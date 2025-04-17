const header = document.querySelector("h3");

header.addEventListener("animationend", (event) => {
    if (event.animationName === "typing") {
        header.classList.add("finished");
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const textElement = document.getElementById("start");
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
        "“Those who seek the truth must be prepared to unlock it. The codes are hidden within the labyrinth of information, where logic and knowledge will light your path.”",
        "-------------------------",
    ];

    let lineIndex = 0;
    let charIndex = 0;

    function typeLine() {
        if (lineIndex < lines.length) {
            const currentLine = lines[lineIndex];
            if (charIndex < currentLine.length) {
                textElement.innerHTML += currentLine[charIndex];
                charIndex++;
                setTimeout(typeLine, 50);
            } else {
                textElement.innerHTML += "<br>";
                charIndex = 0;
                lineIndex++;
                setTimeout(typeLine, 500);
            }
        } else {
            typeInstruction(1);
        }
    }

    setTimeout(typeLine, 2000);
});

const lockData = {
    1: { code: "48531", nextClass: "pass2" },
    2: { code: "26075969", nextClass: "pass3" },
    3: { code: "2222", nextClass: "pass4" },
    4: { code: "8100", nextClass: "pass5" },
    5: { code: "2695", nextClass: "pass6" },
    6: { code: "5555", nextClass: "pass7" },
    7: { code: "6666", nextClass: "pass8" },
    8: { code: "4132", nextClass: null }
};

const instructions = {
    1: "System pathways misaligned. Truth no longer finds its way… Only those who decipher the gates of logic may restore the current. Trace the flow of thought. Every choice leads to a consequence. Follow it… until the outcome is undeniable.",
    2: "The old code stutters, broken by time and corruption. There is a key buried in its loops… but it lies hidden beneath faults. Restore what was lost. Debug. Recompile. The machine remembers, if you can teach it again…",
    3: "The corridors are cold and dark. Numbers whisper from the static. Decode the fragments of ones and zeroes. They will guide you. Seek the numbers and find the corresponding rooms. Unlock what was hidden by time.",
    4: "A message remains - encrypted, fragmented, untrustworthy. Each sentence lies in a different tongue. Only those fluent in transformation will hear the truth. Solve the riddles within the riddles. The numbers they conceal will open the next chamber.",
    5: "The machine obeys instructions… but only those that are precise. Feed it numbers - watch where they go. It is not enough to see what it spits out. You must understand why. The pattern is there… Discover it, and the lock will yield.",
    6: "Chaos, out of order. The system's memory is scrambled. Observe. Watch the sorting unfold. From disorder, truth arises. The key lies in the movement - track it well, and you will find your code buried in order.",
    7: "A solitary unit still functions… blindly. Its path is laid out in commands, but it cannot see. Only those who understand its language will guide it safely. The destination holds the next cipher. Do not let it fall.",
    8: "This is the sum of all understanding. Logic itself now asks for tribute. Decipher the patterns of truth. Listen to each of their voices. Only then will the final gate crumble."
};

function typeInstruction(lockNumber) {
    const instructionElement = document.getElementById("instruction" + lockNumber);
    const instructionText = instructions[lockNumber];
    let charIndex = 0;

    // Clear previous content
    instructionElement.innerHTML = "";

    function typeLine() {
        if (charIndex < instructionText.length) {
            instructionElement.innerHTML += instructionText[charIndex];
            charIndex++;
            setTimeout(typeLine, 50);
        } else {
            // Show all elements for this lock
            const elements = document.querySelectorAll(`.pass${lockNumber > 1 ? lockNumber : ''}`);
            elements.forEach(el => {
                el.style.display = "inline-block";
            });
        }
    }

    setTimeout(typeLine, 500);
}

function handleLock(lockNumber) {
    const codeInput = document.getElementById("code" + lockNumber);
    if (codeInput !== null) {
        const userInput = codeInput.value;

        if (!userInput) {
            alert(`Please enter a password for Lock ${lockNumber}.`);
            return;
        }

        const lock = lockData[lockNumber];

        if (userInput === lock.code) {
            if (lock.nextClass) {
                typeInstruction(lockNumber + 1);
            } else {
                alert("Congratulations! All locks are open.");
            }
        } else {
            alert("Incorrect password for Lock " + lockNumber + ".");
        }
    }
}

// Set up event listeners for all buttons
for (let i = 1; i <= 8; i++) {
    const button = document.getElementById("submit" + i);
    if (button !== null) {
        button.addEventListener("click", () => handleLock(i));
    }
}
