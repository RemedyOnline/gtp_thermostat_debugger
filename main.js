// saving room details to local storage...
const saveRoomDetails = () => {
	localStorage.setItem("roomsData", JSON.stringify(rooms));
};

// Room objects
let rooms = [];

const loadRoomDetails = () => {
	const storedRooms = localStorage.getItem("roomsData");

	if (storedRooms) {
		const savedRooms = JSON.parse(storedRooms);

		rooms = savedRooms.map((room) => ({
			...room,
			setCurrTemp(temp) {
				this.currTemp = temp;
			},

			setColdPreset(newCold) {
				this.coldPreset = newCold;
			},

			setWarmPreset(newWarm) {
				this.warmPreset = newWarm;
			},

			decreaseTemp() {
				this.currTemp--;
			},

			increaseTemp() {
				this.currTemp++;
			},
			toggleAircon() {
				this.airConditionerOn
					? (this.airConditionerOn = false)
					: (this.airConditionerOn = true);
			},
		}));
	} else {
		rooms = [
			{
				name: "Living Room",
				currTemp: 32,
				coldPreset: 20,
				warmPreset: 32,
				image: "./assets/living-room.jpg",
				airConditionerOn: false,
				startTime: "16:30",
				endTime: "20:00",

				setCurrTemp(temp) {
					this.currTemp = temp;
				},

				setColdPreset(newCold) {
					this.coldPreset = newCold;
				},

				setWarmPreset(newWarm) {
					this.warmPreset = newWarm;
				},

				decreaseTemp() {
					this.currTemp--;
				},

				increaseTemp() {
					this.currTemp++;
				},
				toggleAircon() {
					this.airConditionerOn
						? (this.airConditionerOn = false)
						: (this.airConditionerOn = true);
				},
			},
			{
				name: "Kitchen",
				currTemp: 29,
				coldPreset: 20,
				warmPreset: 32,
				image: "./assets/kitchen.jpg",
				airConditionerOn: false,
				startTime: "16:30",
				endTime: "20:00",

				setCurrTemp(temp) {
					this.currTemp = temp;
				},

				setColdPreset(newCold) {
					this.coldPreset = newCold;
				},

				setWarmPreset(newWarm) {
					this.warmPreset = newWarm;
				},

				decreaseTemp() {
					this.currTemp--;
				},

				increaseTemp() {
					this.currTemp++;
				},
				toggleAircon() {
					this.airConditionerOn
						? (this.airConditionerOn = false)
						: (this.airConditionerOn = true);
				},
			},
			{
				name: "Bathroom",
				currTemp: 30,
				coldPreset: 20,
				warmPreset: 32,
				image: "./assets/bathroom.jpg",
				airConditionerOn: false,
				startTime: "16:30",
				endTime: "20:00",

				setCurrTemp(temp) {
					this.currTemp = temp;
				},

				setColdPreset(newCold) {
					this.coldPreset = newCold;
				},

				setWarmPreset(newWarm) {
					this.warmPreset = newWarm;
				},

				decreaseTemp() {
					this.currTemp--;
				},

				increaseTemp() {
					this.currTemp++;
				},
				toggleAircon() {
					this.airConditionerOn
						? (this.airConditionerOn = false)
						: (this.airConditionerOn = true);
				},
			},
			{
				name: "Bedroom",
				currTemp: 31,
				coldPreset: 20,
				warmPreset: 32,
				image: "./assets/bedroom.jpg",
				airConditionerOn: false,
				startTime: "16:30",
				endTime: "20:00",

				setCurrTemp(temp) {
					this.currTemp = temp;
				},

				setColdPreset(newCold) {
					this.coldPreset = newCold;
				},

				setWarmPreset(newWarm) {
					this.warmPreset = newWarm;
				},

				decreaseTemp() {
					this.currTemp--;
				},

				increaseTemp() {
					this.currTemp++;
				},
				toggleAircon() {
					this.airConditionerOn
						? (this.airConditionerOn = false)
						: (this.airConditionerOn = true);
				},
			},
		];
	}
	updateRoomDropdown();
};

loadRoomDetails();

// FIX FOUR
const coolOverlay = `linear-gradient(
    to bottom,
    rgba(141, 158, 247, 0.2),
    rgba(194, 197, 215, 0.1)
  )`;

const warmOverlay = `linear-gradient(
	 to bottom,
	 rgba(236, 96, 98, 0.2),
	 rgba(248, 210, 211, 0.13)
  )`;

const setInitialOverlay = () => {
	document.querySelector(".room").style.backgroundImage = `${
		rooms[0].currTemp < 25 ? coolOverlay : warmOverlay
	}, url('${rooms[0].image}')`;
};

const setOverlay = (room) => {
	document.querySelector(".room").style.backgroundImage = `${
		room.currTemp < 25 ? coolOverlay : warmOverlay
	}, url('${room.image}')`;
};

// Set svg accordingly
const svgPoint = document.querySelector(".point");
const angleOffset = 86;

const calculatePointPosition = (currTemp) => {
	const normalizedTemp = (currTemp - 10) / (32 - 10);
	const angle = normalizedTemp * 180 + angleOffset;

	const radians = (angle * Math.PI) / 180;
	const radius = 116;

	const translateX = radius * Math.cos(radians);
	const translateY = radius * Math.sin(radians);

	return { translateX, translateY };
};

const setIndicatorPoint = (currTemp) => {
	const position = calculatePointPosition(currTemp);
	svgPoint.style.transform = `translate(${position.translateX}px, ${position.translateY}px)`;
};

// Handle the dropdown data
const roomSelect = document.getElementById("rooms");

const currentTemp = document.getElementById("temp");

let selectedRoom = rooms[0].name;

// Set default temperature
currentTemp.textContent = `${rooms[0].currTemp}°`;

setInitialOverlay();

document.querySelector(".currentTemp").innerText = `${rooms[0].currTemp}°`;
// Set current temperature to currently selected room

const setSelectedRoom = (selectedRoom) => {
	const room = rooms.find((currRoom) => currRoom.name === selectedRoom);
	setIndicatorPoint(room.currTemp);

	//   set the current stats to current room temperature
	currentTemp.textContent = `${room.currTemp}°`;

	// Set the current room image
	setOverlay(room);

	// Set the current room name
	document.querySelector(".room-name").innerText = selectedRoom;

	document.querySelector(".currentTemp").innerText = `${room.currTemp}°`;
};

roomSelect.addEventListener("change", function () {
	selectedRoom = this.value;

	setSelectedRoom(selectedRoom);
});

// Increase and decrease temperature
const attachEventListeners = () => {
	const increaseBtn = document.getElementById("increase");
	const reduceBtn = document.getElementById("reduce");

	// Remove existing listeners if needed (optional safeguard)
	increaseBtn.replaceWith(increaseBtn.cloneNode(true));
	reduceBtn.replaceWith(reduceBtn.cloneNode(true));

	// Re-select after replacement
	const newIncreaseBtn = document.getElementById("increase");
	const newReduceBtn = document.getElementById("reduce");

	newIncreaseBtn.addEventListener("click", () => {
		const room = rooms.find((currRoom) => currRoom.name === selectedRoom);
		if (room.currTemp < 32) {
			room.increaseTemp();
		}
		setIndicatorPoint(room.currTemp);
		currentTemp.textContent = `${room.currTemp}°`;
		saveRoomDetails();
		generateRooms();
		setOverlay(room);
		document.querySelector(".currentTemp").innerText = `${room.currTemp}°`;
	});

	newReduceBtn.addEventListener("click", () => {
		const room = rooms.find((currRoom) => currRoom.name === selectedRoom);
		if (room.currTemp > 10) {
			room.decreaseTemp();
		}
		setIndicatorPoint(room.currTemp);
		currentTemp.textContent = `${room.currTemp}°`;
		saveRoomDetails();
		generateRooms();
		setOverlay(room);
		document.querySelector(".currentTemp").innerText = `${room.currTemp}°`;
	});
};

// calling the increment and decrement buttons..
attachEventListeners();

const coolBtn = document.getElementById("cool");
const warmBtn = document.getElementById("warm");

// Set preset temperatures
const defaultSettings = document.querySelector(".default-settings");
defaultSettings.addEventListener("click", function (e) {
	const buttonId = e.target.closest("button")?.id;
	console.log(buttonId, "- button clicked");
	if (!buttonId) return;

	const currRoom = rooms.find((room) => room.name === selectedRoom);
	console.log(currRoom);

	if (!currRoom) return;

	if (buttonId === "cool") {
		currRoom.currTemp = currRoom.coldPreset;
		console.log(currRoom.currTemp);
		console.log(currRoom.coldPreset);
		setOverlay(currRoom);
	} else if (buttonId === "warm") {
		currRoom.currTemp = currRoom.warmPreset;
		console.log(currRoom.currTemp);
		console.log(currRoom.warmPreset);
		setOverlay(currRoom);
	}

	document.getElementById("temp").textContent = `${currRoom.currTemp}°`;
	document.querySelector(".currentTemp").innerText = `${currRoom.currTemp}°`;
});

const inputsDiv = document.querySelector(".inputs");
// Toggle preset inputs
document.getElementById("newPreset").addEventListener("click", () => {
	if (inputsDiv.classList.contains("hidden")) {
		inputsDiv.classList.remove("hidden");
		document.querySelector(".error").style.display = "none";
		document.getElementById("warmInput").value = "";
		document.getElementById("coolInput").value = "";
	}
});

// close inputs
document.getElementById("close").addEventListener("click", () => {
	inputsDiv.classList.add("hidden");
});

// handle preset input data
document.getElementById("save").addEventListener("click", () => {
	const coolInput = document.getElementById("coolInput");
	const warmInput = document.getElementById("warmInput");
	const errorSpan = document.querySelector(".error");
	console.log(coolInput.value);
	console.log(warmInput.value);

	if (coolInput.value && warmInput.value) {
		// Validate the data
		if (coolInput.value < 10 || coolInput.value > 24) {
			errorSpan.style.display = "block";
			errorSpan.innerText = "Enter valid COOL temperature values (10° - 24°)";
		}

		if (warmInput.value < 25 || warmInput.value > 32) {
			errorSpan.style.display = "block";
			errorSpan.innerText = "Enter valid WARM temperature values (25° - 32°)";
		}

		// Validation passed
		// Set current room's presets
		const currRoom = rooms.find((room) => room.name === selectedRoom);

		currRoom.setColdPreset(coolInput.value);
		currRoom.setWarmPreset(warmInput.value);

		coolInput.value = "";
		warmInput.value = "";

		saveRoomDetails();
	}
});

// Rooms Control
// Generate rooms
const generateRooms = () => {
	const roomsControlContainer = document.querySelector(".rooms-control");
	let roomsHTML = "";

	rooms.forEach((room) => {
		roomsHTML += `
    <div class="room-control" id="${room.name}">
          <div class="top">
            <h3 class="room-name">${room.name} - ${room.currTemp}°</h3>
            <button class="switch">
              <ion-icon name="power-outline" class="${
								room.airConditionerOn ? "powerOn" : ""
							}"></ion-icon>
            </button>
          </div>

          ${displayTime(room)}
          ${displayTimeSchedule(room)}
         
          <span class="room-status" style="display: ${
						room.airConditionerOn ? "" : "none"
					}">${room.currTemp > 24 ? "Warming room to: " : "Cooling room to: "}${
			room.currTemp
		}°</span>
        </div>
    `;
	});

	const AC_container = document.createElement("div");
	AC_container.id = "ac_container";

	const allAC_btn = document.createElement("button");
	allAC_btn.id = "turnOnAll";
	allAC_btn.textContent = "Turn on All ACs";

	roomsControlContainer.innerHTML = roomsHTML;
	roomsControlContainer.appendChild(AC_container);
	AC_container.appendChild(allAC_btn);

	// turning on all ACs...
	const allAC_btns = document.getElementById("turnOnAll");

	allAC_btns.addEventListener("click", (event) => {
		if (event.target.id === "turnOnAll") {
			rooms.forEach((room) => {
				room.airConditionerOn = true;
			});
			saveRoomDetails();
			generateRooms();
			console.log("All AC's turned ON!");
			showNotification("All AC's turned ON!");
			toast.style.backgroundColor = "";
		}
	});

	//taking start-time inputs...
	document.querySelectorAll(".start-time").forEach((input) => {
		input.addEventListener("change", (event) => {
			const roomName = event.target.dataset.room;
			const room = rooms.find((r) => r.name === roomName);
			room.startTime = event.target.value;
			console.log(roomName, "- startTime set to:", room.startTime);
		});
	});

	// taking end-time inputs...
	document.querySelectorAll(".end-time").forEach((input) => {
		input.addEventListener("change", (event) => {
			const roomName = event.target.dataset.room;
			const room = rooms.find((r) => r.name === roomName);
			room.endTime = event.target.value;
			console.log(roomName, "- endtime set to:", room.endTime);
		});
	});
};

const displayTime = (room) => {
	return `
      <div class="time-display">
        <span class="time">${room.startTime}</span>
        <div class="bars">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
        <span class="time">${room.endTime}</span>
      </div>
  `;
};
const displayTimeSchedule = (room) => {
	return `
    <div class="time-scheduler" style="display: ${
			room.airConditionerOn ? "" : "none"
		}">
      <div class="time-scheduler-inner">
        <div class="time-block start">
          <label>Set Start Time:</label>
          <input type="time" class="start-time" data-room="${
						room.name
					}" value="${room.startTime}" />
        </div>
        <div class="time-block end">
          <label>Set End Time:</label>
          <input type="time" class="end-time" data-room="${room.name}" value="${
		room.endTime
	}" />
        </div>
      </div>
    </div>
  `;
};

generateRooms();

document.querySelector(".rooms-control").addEventListener("click", (e) => {
	if (e.target.classList.contains("switch")) {
		const room = rooms.find(
			(room) => room.name === e.target.parentNode.parentNode.id
		);
		room.toggleAircon();
		saveRoomDetails();
		generateRooms();
	}
	if (e.target.classList.contains("room-name")) {
		setSelectedRoom(e.target.parentNode.parentNode.id);
	}
});

// time checker logic...
const checkScheduleAndToggleAC = () => {
	const now = new Date();
	const currentTime = now.toTimeString().slice(0, 5);
	console.log("current time is:", currentTime);

	rooms.forEach((room) => {
		if (room.startTime === currentTime && !room.airConditionerOn) {
			room.airConditionerOn = true;
			console.log(`${room.name} AC turned ON by schedule...`);
			showNotification(`${room.name} AC turned ON by schedule...`);
			toast.style.backgroundColor = "";
			saveRoomDetails();
			generateRooms();
		}
		if (room.endTime === currentTime && room.airConditionerOn) {
			room.airConditionerOn = false;
			console.log(`${room.name} AC turned OFF by schedule...`);
			showNotification(`${room.name} AC turned OFF by schedule...`);
			toast.style.backgroundColor = "";
			saveRoomDetails();
			generateRooms();
		}
	});
};

// checking scheduler every 30secs...
setInterval(checkScheduleAndToggleAC, 30000);

// toast for auto-triggered AC...
const toastContainer = document.getElementById("notification-container");
const toast = document.createElement("p");
function showNotification(message) {
	toast.className = "toast";
	toast.textContent = message;
	toastContainer.appendChild(toast);

	setTimeout(() => {
		toast.remove();
	}, 10000);
}

// show/hide add-room-modal...
const modal = document.getElementById("addRoomModal");
const openModalBtn = document.getElementById("openAddRoomModal");
const cancelAddRoomBtn = document.getElementById("cancelAddRoom");

openModalBtn.addEventListener("click", () => {
	modal.classList.remove("hidden");
	console.log("open modal btn clicked!");
});

cancelAddRoomBtn.addEventListener("click", () => {
	modal.classList.add("hidden");
	newRoomForm.reset();
	console.log("cancel btn clicked!");
});

// handling image preview...
const newRoomImgInput = document.getElementById("newRoomImage");
const previewImage = document.getElementById("previewImage");

newRoomImgInput.addEventListener("change", function () {
	const file = this.files[0];
	if (file) {
		const reader = new FileReader();
		reader.onload = function (e) {
			previewImage.src = e.target.result;
			previewImage.style.display = "block";
		};
		reader.readAsDataURL(file); // converts to base64 string...
	}
});

// add room functionality...
const newRoomForm = document.getElementById("addRoomForm");

newRoomForm.addEventListener("submit", function (e) {
	e.preventDefault();

	const name = document.getElementById("newRoomName").value;
	const currTemp = parseInt(document.getElementById("newRoomTemp").value);
	const coldPreset = parseInt(document.getElementById("newColdPreset").value);
	const warmPreset = parseInt(document.getElementById("newWarmPreset").value);
	const newRoomImgFile = document.getElementById("newRoomImage").files[0];

	if (!name || isNaN(currTemp) || isNaN(coldPreset) || isNaN(warmPreset)) {
		showNotification("Please fill in all fields appropriately...");
		toast.style.backgroundColor = "red";
		return;
	}

	if (!newRoomImgFile) {
		showNotification("Please select an image");
		toast.style.backgroundColor = "red";
		return;
	}

	const reader = new FileReader();
	reader.onload = function (e) {
		const imageBase64 = e.target.result;

		const newRoom = {
			name,
			currTemp,
			coldPreset,
			warmPreset,
			image: imageBase64, // save the base64 string
			airConditionerOn: false,
			startTime: "16:30",
			endTime: "20:30",

			setCurrTemp(temp) {
				this.currTemp = temp;
			},

			setColdPreset(newCold) {
				this.coldPreset = newCold;
			},

			setWarmPreset(newWarm) {
				this.warmPreset = newWarm;
			},

			decreaseTemp() {
				this.currTemp--;
			},

			increaseTemp() {
				this.currTemp++;
			},
			toggleAircon() {
				this.airConditionerOn
					? (this.airConditionerOn = false)
					: (this.airConditionerOn = true);
			},
		};

		rooms.push(newRoom);
		console.log("new room added to rooms");
		saveRoomDetails();
		updateRoomDropdown();
		generateRooms();
		newRoomForm.reset();
		modal.classList.add("hidden");
		showNotification("New room added!");
		toast.style.backgroundColor = "";
	};
	reader.readAsDataURL(newRoomImgFile);
});

// creating a function to update the dropdown...
function updateRoomDropdown() {
	const roomSelect = document.getElementById("rooms");
	roomSelect.innerHTML = "";

	rooms.forEach((room) => {
		const option = document.createElement("option");
		option.value = room.name;
		option.textContent = room.name;
		roomSelect.appendChild(option);
	});
}
