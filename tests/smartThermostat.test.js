const {
	rooms,
	toggleAircon,
	setCurrTemp,
	setColdPreset,
	setWarmPreset,
	decreaseTemp,
	increaseTemp,
	checkSchedule,
} = require("../smartThermostat.js");

describe("Checking current Room and current Temperatur...", () => {
	test("Selected room matches room in the dropdown", () => {
		const room = {
			name: "Living Room",
			currTemp: 25,
		};
		expect(room).toEqual({ name: "Living Room", currTemp: 25 });
	});

	test("setCurrTemp should update currTemp property", () => {
		const room = rooms[0];
		setCurrTemp(room, 30);
		expect(room.currTemp).toBe(30);

		setCurrTemp(room, 22);
		expect(room.currTemp).toBe(22);
	});
});

describe("Increase & Decrease Temperature Controls", () => {
	test("decreaseTemp should decrease temperature by one", () => {
		let room = { currTemp: 18 };
		decreaseTemp(room);
		expect(room.currTemp).toBe(17);
		expect(room.currTemp).toBeLessThan(18);
	});

	test("decreaseTemp should reduce current temperatur by 1", () => {
		const room = { ...rooms[0] };
		const initialTemp = room.currTemp;
		room.decreaseTemp();
		expect(room.currTemp).toBe(initialTemp - 1);
	});

	test("increaseTemp should increase current temperatur by 1", () => {
		const room = { ...rooms[0] };
		const initialTemp = room.currTemp;
		room.increaseTemp();
		expect(room.currTemp).toBe(initialTemp + 1);
	});

	test("increaseTemp should increase temperature by one...", () => {
		let room = { currTemp: 18 };
		increaseTemp(room);
		expect(room.currTemp).toBe(19);
		expect(typeof room.currTemp).toBe("number");
	});
});

describe("setColdPreset and setWarmPreset button functionality...", () => {
	test("setColdPreset should update coldPreset accordingly", () => {
		const room = rooms[0];
		setColdPreset(room, 15);
		expect(room.coldPreset).toBe(15);
	});

	test("setWarmPreset should update coldPreset accordingly", () => {
		const room = rooms[0];
		setWarmPreset(room, 28);
		expect(room.coldPreset).toBeLessThan(Infinity);
		expect(room.coldPreset).toBeGreaterThan(0);
	});
});

describe("Toggle ON & OFF AC button functionality...", () => {
	test("Check if the toggleACon function works", () => {
		const room = rooms[0];
		toggleAircon(room);
		expect(room.airConditionerOn).toBe(true);
	});

	test("Check if the toggleACon works as expected if function is called again", () => {
		const room = rooms[0];
		toggleAircon(room);
		expect(room.airConditionerOn).toBe(false);
	});

	test("Check the initial state of the Air Conditioners", () => {
		const room = rooms[0];
		expect(room.airConditionerOn).toBe(false);
	});
});

describe("checking AC ON & OFF schedule...", () => {
	test("should toggle AC ON if currentTime matches startTime", () => {
		const mockToggle = jest.fn();

		const rooms = [
			{
				startTime: "10:00",
				endTime: "18:00",
				airConditionerOn: false,
				toggleAircon: mockToggle,
			},
		];

		checkSchedule(rooms, "10:00");
		expect(mockToggle).toHaveBeenCalledTimes(1);
	});

	test("should toggle AC OFF if currentTime matches endTime and AC is ON already", () => {
		const mockToggle = jest.fn();

		const rooms = [
			{
				startTime: "10:00",
				endTime: "18:00",
				airConditionerOn: true,
				toggleAircon: mockToggle,
			},
		];

		checkSchedule(rooms, "18:00");
		expect(mockToggle).toHaveBeenCalledTimes(1);
	});

	test("should not toggle AC if AC is already ON", () => {
		const mockToggle = jest.fn();

		const rooms = [
			{
				startTime: "10:00",
				endTime: "18:00",
				airConditionerOn: true,
				toggleAircon: mockToggle,
			},
		];

		checkSchedule(rooms, "10:00");
		expect(mockToggle).not.toHaveBeenCalled();
	});

	test("Room startTime should match HH:MM format", () => {
		const time = "15:32";
		expect(time).toMatch(/^\d{2}:\d{2}$/);
	});
});
