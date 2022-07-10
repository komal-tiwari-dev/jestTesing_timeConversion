const TimetoString = require("./index");

describe("Test cases for converting Time to String", () => {
  test("Getting Only seconds as a results", () => {
    expect(TimetoString(5200)).toBe("5 seconds");
  });

  test("Getting Singular minutes as result", () => {
    expect(TimetoString(60000)).toBe("1 minute");
  });

  test("Getting minutes as result", () => {
    expect(TimetoString(180000)).toBe("3 minutes");
  });

  test("Getting minutes and Seconds as result", () => {
    expect(TimetoString(200000)).toBe("3 minutes 20 seconds");
  });
});
