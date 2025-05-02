## Bug 1

_PROBLEM_

_IDENTIFICATION METHOD_

_SOLUTION_

_STATUS_ - successful completion

## Bug #1

- **Problem**: Describe the issue here briefly.
- **Identification Method**: (e.g., Console error, UI behavior, inspection)
- **Solution**: What we did to fix it.
- **Status After Solution**: (Fixed, partially fixed, not fixed, needs review)

## Bug #1

- **Problem**: Duplicate overlay
- **Identification Method**: I inspected the codebase and realised that the overlay styling was being done twice to the in the setInitialOverlay block.
- **Solution**: I commented the redundant codeblock, leaving just one styling operation in the block
- **Status**: Fixed

## Bug #2

- **Problem**: Faulty room dropdown list
- **Identification Method**: I identified this error in the browser console. I realised that, upon switching from one room to the other, there's is an uncaught typeError on "currTemp" being undefined because the entire "room" object was being assigned to option.value, instead of assigning the actual room names.
- **Solution**: I appended the actual names of each room to the options.value method, instead of assigning the entire room object to it
- **Status After Solution**: Room switching fixed.

## Bug #3

- **Problem**: Faulty increment and decrement adjustment buttons
- **Identification Method**: I identified this error using the browser console. I console logged what was being saved into the 'increaseRoomTemperature' variable and reelised that we were passing the entire increment function to it, instead of calling the function onto it to return it's output, which was 'currTemp++'.
- **Solution**: So what i did was to add 'parenthesis' to the function name, so that it gets called into the variable here. And then took of the parenthesis after the 'increaseRoomTemperature' variable because it is just a mere variable, and not a function.
  Same applied to 'decreaseRoomTemperature'
- **Status After Solution**: Adjustment buttons fixed.

## Bug #4

- **Problem**: Alternate color tones for cool and warm instances.
- **Identification Method**: So I was stated in the documentation that when the current temperature is less than 25, the tone of each room should be Cool, and Warm otherwise. But then, by observing the UI behavior, I realised that the color tone for these two instances were switched.
- **Solution**: So I had to switch the color styling between the two overlay variables to match the expected outcome.
- **Status After Solution**: Appropriate color tones assigned now.

## Bug #5

- **Problem**: Alternate color tones for cool and warm instances.
- **Identification Method**: So I was stated in the documentation that when the current temperature is less than 25, the tone of each room should be Cool, and Warm otherwise. But then, by observing the UI behavior, I realised that the color tone for these two instances were switched.
- **Solution**: So I had to switch the color styling between the two overlay variables to match the expected outcome.
- **Status After Solution**: Appropriate color tones assigned now.

## Bug #6

- **Problem**: "Cold" and "Warm" temperature Preset buttons not working as expected
- **Identification Method**: Through code inspection, I realised that the event listener for these preset buttons had an empty function, and so there was no action to be perfermed when a button was clicked
- **Solution**: So I had to write a logic inside the event listener to conditionally check which button was clicked at any point in time, and then check the right preset temperature for the current room, and then render it on the UI accordingly.
- **Status After Solution**: Fixed

## Bug #7

- **Problem**: Error message from a previous invalid input remains visible in future preset configurations.
- **Identification Method**: I noticed this issue through UI observation. Thus, the error message from previous invalid inputs were still showing even when you have empty inputs on your next reopen of the configuration panel
- **Solution**: So I had to style the error message not to display or to be set to hidden, whenever the configuration panel is opened. I also cleared the inputs on every reopen to avoid meeting previous values in the configuration.
- **Status After Solution**: Error message hidden on every reopening of the configuration panel.

## Bug #8

- **Problem**: Alternate status messages on the AirConditioner
- **Identification Method**:
- **Solution**:
- **Status After Solution**:

## Bug #9

- **Problem**: Cursor pointer symbol everywhere
- **Identification Method**: Through UI observation, I realised that the cursor-pointer property was true for almost every single thing on the page, which is bad UX. The user knows that the pointer cursor is for selecting items on the webpage, but here is the case that every item on the page displays a pointer cursor, even if an item isnot selectable or clickable
- **Solution**: So I went into the styling and realised that the entire `container` element had a cursor-pointer property, so i just took that line off.
- **Status After Solution**: The pointer cursor only shows for selectable and clickable items

charle you are confusing me onoffline.apply. so let's go back to the counter project.. this was the default script..
"// SELECTING INDIVIDUAL HTML ELEMENTS FOR SCRIPTING
const toggleBtnIcon = document.getElementById("themeToggle");
const toggleBtn = document.getElementById("themeWrap");
const logo = document.getElementById("logo");

// main input box...
const textInput = document.getElementById("text-input");

// additional input options...
const excludeSpacesCheckbox = document.getElementById(
"exclude-spaces-checkBox"
);
const limitCheckbox = document.getElementById("limit-checkbox");
const limitInputContainer = document.getElementById("limit-input-container");
const textLimitInput = document.getElementById("limit-input");
const limitMessage = document.getElementById("limit-alert");
let limitInputTimer;

const readingTime = document.getElementById("reading-time");

// display values...
const charCountValue = document.getElementById("char-count-value");
const wordCountValue = document.getElementById("word-count-value");
const sentenceCountValue = document.getElementById("sentence-count-value");

// character metrices...
const filledDensityDetails = document.getElementById("density-details-filled");
const emptyDensityCaption = document.getElementById("density-details-empty");

// view more button...
const viewMoreBlock = document.getElementById("view-more-button-block");
const seeMoreButton = document.getElementById("view-more-button");
let isExpanded = false;

// creating lightMode and darkMode functionality...
toggleBtn.addEventListener("click", themeSwitch);

function themeSwitch() {
document.body.classList.toggle("darkMode");
const isDarkMode = document.body.classList.contains("darkMode");

    // toggling the logo...
    if (isDarkMode) {
    	logo.src = "./assets/images/logo-dark-theme.svg";
    } else {
    	logo.src = "./assets/images/logo-light-theme.svg";
    }

    // toggling the icon in the theme button...
    if (isDarkMode) {
    	themeToggle.src = "./assets/images/icon-sun.svg";
    } else {
    	themeToggle.src = "./assets/images/icon-moon.svg";
    }

    // saving the current theme to local storage...
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");

}

const savedTheme = localStorage.getItem("theme");

// toggling the theme of the website based on the saved theme state on local storage if any exist already...
if (savedTheme === "dark") {
document.body.classList.add("darkMode");
logo.src = "./assets/images/logo-dark-theme.svg";
themeToggle.src = "./assets/images/icon-sun.svg";
} else {
logo.src = "./assets/images/logo-light-theme.svg";
themeToggle.src = "./assets/images/icon-moon.svg";
}

// Listening for Input Changes...
textInput.addEventListener("input", characterChanges);
textLimitInput.addEventListener("input", () => {
clearTimeout(limitInputTimer);

    // preventing the limit input from triggering as soon as user starts entering a number...
    limitInputTimer = setTimeout(() => {
    	characterChanges();
    }, 500);

});

// toggling the See More button to See Less on Click
seeMoreButton.addEventListener("click", () => {
isExpanded = !isExpanded;
characterChanges();
seeMoreButtonState();
});

// main count function block...
function characterChanges() {
let textCharacter = textInput.value;
let interpretedText = textCharacter;

    // checking for space exclusion...
    if (excludeSpacesCheckbox.checked) {
    	interpretedText = interpretedText.replace(/\s/g, "");
    }

    // toggling the limit message only when limit is reached
    if (limitCheckbox.checked) {
    	const charLimitValue = parseInt(textLimitInput.value);
    	if (!isNaN(charLimitValue)) {
    		if (textCharacter.length >= charLimitValue) {
    			textCharacter = textCharacter.substring(0, charLimitValue);
    			textInput.value = textCharacter;
    			textInput.classList.add("text-limit-reached");
    			limitMessage.innerHTML = `<img src="./assets/images/icon-info.svg" alt="icon-info">
    			<p>Limit reached! Your text exceeds ${charLimitValue} characters</p>`;
    		} else {
    			textInput.classList.remove("text-limit-reached");
    			limitMessage.innerHTML = "";
    		}
    	}
    }

    // toggling the limit input box only upon checking the limit checkbox...
    if (limitCheckbox.checked) {
    	limitInputContainer.style.display = "block";
    } else {
    	limitInputContainer.style.display = "none";
    }

    // charactor count calculation...
    const charCount = interpretedText.length;
    const paddedCharCount = String(charCount).padStart(2, "0");

    // word count calculation...
    const wordCount = textCharacter
    	.trim()
    	.split(/\s+/)
    	.filter((word) => word !== "").length;
    const paddedWordCount = String(wordCount).padStart(2, "0");

    // sentence count calculation...
    const sentenceCount = textCharacter
    	.split(/[.!?]+/)
    	.filter((sentence) => sentence.trim() !== "").length;
    const paddedSentenceCount = String(sentenceCount).padStart(2, "0");

    // updating values on the UI dynamically...
    charCountValue.innerText = `${paddedCharCount}`;
    wordCountValue.innerText = `${paddedWordCount}`;
    sentenceCountValue.innerText = `${paddedSentenceCount}`;

    const readingTimeDisplay = estimatedReadingTime(wordCount);
    readingTime.innerText = `${readingTimeDisplay}`;

    // Reseting the density container...
    filledDensityDetails.innerHTML = "";

    // switching between Empty State and Filled state based on whether text is entered or not...
    if (interpretedText.length === 0) {
    	emptyDensityCaption.style.display = "block";
    	filledDensityDetails.style.display = "none";
    	isExpanded = false;
    	seeMoreButtonState();
    } else {
    	emptyDensityCaption.style.display = "none";
    	filledDensityDetails.style.display = "block";
    }

    // Counting letter frequencies only, not numbers...
    const alphabeticalCharactersOnly = interpretedText
    	.toUpperCase()
    	.replace(/[^A-Z]/g, "");
    const characterCounts = [];

    for (let character of alphabeticalCharactersOnly) {
    	characterCounts[character] = (characterCounts[character] || 0) + 1;
    }

    const totalCharacters = alphabeticalCharactersOnly.length;

    // toggling the See more button based on whether entered characters are more than 5 or not...
    if (
    	interpretedText.length === 0 ||
    	Object.keys(characterCounts).length <= 5
    ) {
    	viewMoreBlock.style.display = "none";
    	isExpanded = false;
    	seeMoreButtonState();
    } else {
    	viewMoreBlock.style.display = "block";
    }

    // Sorting by highest frequency...
    let sortedCharacters = Object.entries(characterCounts).sort(
    	(a, b) => b[1] - a[1]
    );

    if (!isExpanded) {
    	sortedCharacters = sortedCharacters.slice(0, 5); // thus, getting first top 5 characters only
    }

    // Dynamically creating and injecting character density details...
    sortedCharacters.forEach(([character, count]) => {
    	const percentage = ((count / totalCharacters) * 100).toFixed(2);

    	const densityItem = document.createElement("div");
    	densityItem.classList.add("density-item");

    	densityItem.innerHTML = `
    	<p class="density-letter">${character}</p>
      <div class="total-progress">
        <div
          class="covered-progress"
          style="width: ${percentage}%;"
        ></div>
      </div>
      <p class="density-metrics">${count} (${percentage}%)</p>`;

    	filledDensityDetails.appendChild(densityItem);
    });

}

// Creating the see more text state functionality...
function seeMoreButtonState() {
seeMoreButton.querySelector("p").innerText = isExpanded
? "See Less"
: "See More";
}

// creating the reading time functionality...
function estimatedReadingTime(wordCount) {
const minutes = wordCount / 20; // assuming 20 words per minute...
return minutes < 1 ? "< 1 minute" : `< ${Math.ceil(minutes)} minutes`;
}

// tracking checkbox state changes...
excludeSpacesCheckbox.addEventListener("change", characterChanges);
limitCheckbox.addEventListener("change", characterChanges);"

and this is the content for the counter.js file, where we just created the functions without bringing in any json data or what so ever like the rooms object you are giving me... "// function for counting CHARACTERS
function countCharacters(textString, excludeSpaces = false) {
if (excludeSpaces) {
return textString.replace(/\s/g, "").length;
}
return textString.length;
}

// function for counting WORDS
function countWords(textString) {
return textString
.trim()
.split(/\s+/)
.filter((word) => word !== "").length;
}

// function for counting SENTENCES...
function countSentences(textString) {
return textString.split(/[.!?]+/).filter((sentence) => sentence.trim() !== "")
.length;
}

// function for calculating the estimated reading time...
function estimatedReadingTime(wordCount) {
const minutes = wordCount / 20;
return minutes < 1 ? "< 1 minute" : `< ${Math.ceil(minutes)} minutes`;
}

// function for counting the letter frequencies
function getLetterFrequency(textString) {
const letters = textString.toUpperCase().replace(/[^A-Z]/g, "");
const frequency = {};

    for (const letter of letters) {
    	frequency[letter] = (frequency[letter] || 0) + 1;
    }
    return frequency;

}

// function for sorting frequencies in descending order...
function getSortedFrequencies(frequencyList, limit = null) {
const sorted = Object.entries(frequencyList).sort((a, b) => b[1] - a[1]);
return limit ? sorted.slice(0, limit) : sorted;
}

module.exports = {
countCharacters,
countWords,
countSentences,
estimatedReadingTime,
getLetterFrequency,
getSortedFrequencies,
};
"

can't we do same for the thermostat.js file..
can't we select the things that be used as functions and then create them??
and remember, since i'm coding in vanilla js, i used this to export the functions "module.exports = {
countCharacters,
countWords,
countSentences,
estimatedReadingTime,
getLetterFrequency,
getSortedFrequencies,
};"
so lemme give you my complete codes for the thermostat project, then you create some functions out of it for me.. in this same manner as i did in the counter project.. okay??
