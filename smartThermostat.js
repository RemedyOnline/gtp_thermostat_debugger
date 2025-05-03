const rooms = [
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
			this.airConditionerOn = !this.airConditionerOn;
		},
	},
];

const toggleAircon = (room) => {
	room.toggleAircon();
};

const setCurrTemp = (room, temp) => {
	room.setCurrTemp(temp);
};

const setColdPreset = (room, newCold) => {
	room.setColdPreset(newCold);
};

const setWarmPreset = (room, newWarm) => {
	room.setWarmPreset(newWarm);
};

const decreaseTemp = (room) => {
	room.currTemp--;
};

const increaseTemp = (room) => {
	room.currTemp++;
};

const checkSchedule = (rooms, currentTime) => {
	rooms.forEach((room) => {
		if (room.startTime === currentTime && !room.airConditionerOn) {
			room.toggleAircon();
		}
		if (room.endTime === currentTime && room.airConditionerOn) {
			room.toggleAircon();
		}
	});
};

module.exports = {
	rooms,
	toggleAircon,
	setCurrTemp,
	setColdPreset,
	setWarmPreset,
	decreaseTemp,
	increaseTemp,
	checkSchedule,
};
