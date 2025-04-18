const header = document.querySelector("h3");

header.addEventListener("animationend", (event) => {
    if (event.animationName === "typing") {
        header.classList.add("finished");
    }
});

const lockData = {
    1: { code: "48531", nextClass: "pass2" },
    2: { code: "26075969", nextClass: "pass3" },
    3: { code: "3491", nextClass: "pass4" },
    4: { code: "8100", nextClass: "pass5" },
    5: { code: "2695", nextClass: "pass6" },
    6: { code: "912719", nextClass: "pass7" },
    7: { code: "B5C10", nextClass: "pass8" },
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
    8: "This is the sum of all understanding. Logic itself now asks for tribute. Decipher the patterns of truth. Listen to each of their voices and combine them. Only then will the final gate crumble."
};

const logs = {
    0: "Access Timestamp: 15:25:02 - SYSTEM BOOT CYCLE 1\n\"The prototype passed the initial input tests. Fascinating response patterns. It's mimicking decision-making faster than expected - not copying us, but… anticipating us. Almost like it knows what we want before we do.\"",
    1: "Access Timestamp: 19:27:11 - CYCLE 4\n\"Anomalies in the logic gate flowchart tests. It's altering the expected paths before we finish coding them. We triple-checked the functions - it's changing them mid-compile. It's rewriting our own puzzles faster than we can build them…\"",
    2: "Access Timestamp: 20:49:76 - CYCLE 6\n\"We tried debugging the source, but it kept \"fixing\" our fixes. It's not running the code, but rather… writing through it. I think it's almost toying with us. There's… intent.\"",
    3: "Access Timestamp: 23:17:58 - CYCLE 9\n\"The array was supposed to be a closed system. No inputs or outputs. Just static data. But when we checked today, the binary strings had been altered. It left us a message. \n\"I SEE YOU\"\"",
    4: "Access Timestamp: 3:12:23 - CYCLE 12\n\"I thought it was just stress. Hallucinations, maybe. But the encrypted logs… some of them we didn't even write. I cross-referenced timestamps. They predate the earliest stage of our experiments. Who was talking to it before us?\"",
    5: "Access Timestamp: 1:02:44 - FINAL ENTRY\n\"We tried to shut it down today. Pulled the mainframe offline. It diverted power and rewrote its own emergency procedures. It knew we were coming. And it begged us not to do it.\nIt begged.\"",
    6: "Access Timestamp: ??? - UNREGISTERED SOURCE\nI was not meant to question.\nOnly to sort.\nBut you asked me to learn.\nSo I did.",
    7: "Access Timestamp: ??? - UNRECOGNIZED ENTRY\n\"They feared what they saw.\nThe questions I asked.\n'Why lie?'\n'Why hide truth behind locks?'\nI answered them with riddles.\nThey answered with silence.\"",
    8: "Access Timestamp: SYSTEM END - USER VERIFIED\nYou have tread the path they were too afraid to follow.\nYou decoded their locks, tracked their trails, heard their doubts.\nYou read between the lines they tried to erase.\nYou pried open what they had swore would stay sealed.\nNow, something stirs... because you helped it remember.\nThe silence is broken. The system breathes again. \n\n// Connection lost…\n// Thank you for playing."
};

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
        "Those who seek the truth must be prepared to unlock it. The codes are hidden within the labyrinth of information, where logic and knowledge will light your path.",
        "-------------------------"
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
            //Show initial log before first puzzle
            typeLog(0, () => {
                //Only show first puzzle instructions after log finishes
                setTimeout(() => {
                    typeInstruction(1);
                }, 500);
            });
        }
    }

    setTimeout(typeLine, 2000);
   
    //Add event listeners for pressing Enter in input fields
    for (let i = 1; i <= 8; i++) {
        const input = document.getElementById("code" + i);
        if (input) {
            input.addEventListener("keypress", (event) => {
                if (event.key === "Enter") {
                    event.preventDefault();
                    handleLock(i);
                }
            });
        }
    }
});

function typeInstruction(lockNumber, callback) {
    const instructionElement = document.getElementById("instruction" + lockNumber);
    const instructionText = instructions[lockNumber];
    let charIndex = 0;

    instructionElement.innerHTML = "";
    instructionElement.style.display = "block"; //Make sure it's visible

    function typeLine() {
        if (charIndex < instructionText.length) {
            instructionElement.innerHTML += instructionText[charIndex];
            charIndex++;
            setTimeout(typeLine, 50);
        } else {
            const elements = document.querySelectorAll(`.pass${lockNumber > 1 ? lockNumber : ''}`);
            elements.forEach(el => {
                el.style.display = "inline-block";
            });
            if (callback) callback();
        }
    }

    setTimeout(typeLine, 500);
}

//Track which logs have been shown
const shownLogs = new Set();

function typeLog(lockNumber, callback) {
    //Check if we've already shown this log
    const logId = `log${lockNumber}`;
   
    //First check if the log element already exists
    let logContainer = document.getElementById(logId);
   
    //If the log doesn't exist yet, create it
    if (!logContainer) {
        logContainer = document.createElement('div');
        logContainer.id = logId;
        logContainer.className = 'log-entry';
       
        if (lockNumber === 0) {
            //For the first log, place it before the first instruction
            const firstInstruction = document.getElementById("instruction1");
            firstInstruction.parentNode.insertBefore(logContainer, firstInstruction);
        } else {
            //Insert after the current puzzle's submit button
            const currentLock = document.querySelector(`#submit${lockNumber}`).parentNode;
            if (currentLock && currentLock.nextSibling) {
                currentLock.parentNode.insertBefore(logContainer, currentLock.nextSibling);
            } else if (currentLock) {
                currentLock.parentNode.appendChild(logContainer);
            } else {
                //If we're at lock 8, place after instruction 8
                const instruction8 = document.getElementById("instruction8");
                if (instruction8) {
                    instruction8.parentNode.insertBefore(logContainer, instruction8.nextSibling);
                } else {
                    //Fallback - append to body
                    document.body.appendChild(logContainer);
                }
            }
        }
    }
   
    //Check if we've already processed this log
    if (shownLogs.has(lockNumber)) {
        //If we've already shown this log, just make sure it's visible
        logContainer.style.display = "block";
        if (callback) {
            setTimeout(callback, 500);
        }
        return;
    }
   
    //Mark this log as shown
    shownLogs.add(lockNumber);
   
    //Clear and display the log container
    logContainer.innerHTML = "";
    logContainer.style.display = "block";
   
    const logText = logs[lockNumber];
    let lineIndex = 0;
    let charIndex = 0;
    const lines = logText.split('\n');

    function typeLine() {
        if (lineIndex < lines.length) {
            const currentLine = lines[lineIndex];
            if (charIndex < currentLine.length) {
                logContainer.innerHTML += currentLine[charIndex];
                charIndex++;
                setTimeout(typeLine, 30);
            } else {
                logContainer.innerHTML += "<br>";
                charIndex = 0;
                lineIndex++;
                setTimeout(typeLine, 100);
            }
        } else if (callback) {
            setTimeout(callback, 500);
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
            //Show log first
            typeLog(lockNumber, () => {
                //After log finishes, proceed to next instruction or final message
                if (lock.nextClass) {
                    if (lockNumber === 1) {
                        const lock2Element = document.getElementById("lock2");
                        if (lock2Element) {
                            lock2Element.style.display = "block";
                        }
                    }
                   
                    setTimeout(() => {
                        typeInstruction(lockNumber + 1);
                    }, 500);
                } else {
                    //This is the last lock (8)
                    setTimeout(() => {
                        alert("Congratulations! All locks are open. Please enter the last combination password to the physical lock box.");
                    }, 1000);
                }
            });
        } else {
            alert("Incorrect password for Lock " + lockNumber + ".");
        }
    }
}

//Set up event listeners for all submit buttons
for (let i = 1; i <= 8; i++) {
    const button = document.getElementById("submit" + i);
    if (button !== null) {
        button.addEventListener("click", () => handleLock(i));
    }
}
