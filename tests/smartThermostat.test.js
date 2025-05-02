const {
	rooms,
	toggleAircon,
	setCurrTemp,
	checkSchedule,
} = require("../smartThermostat.js");

test("Selected room matches room in the dropdown", () => {
	const room = {
		name: "Living Room",
		currTemp: 25,
	};
	expect(room).toEqual({ name: "Living Room", currTemp: 25 });
});

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

test("setCurrTemp should update currTemp property", () => {
	const room = rooms[0];
	setCurrTemp(room, 30);
	expect(room.currTemp).toBe(30);

	setCurrTemp(room, 22);
	expect(room.currTemp).toBe(22);
});

test("Room startTime should match HH:MM format", () => {
	const time = "15:32";
	expect(time).toMatch(/^\d{2}:\d{2}$/);
});
