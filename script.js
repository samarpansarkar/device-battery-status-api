const batteryLevel = document.querySelector(".batteryLevel");
const batteryCharging = document.querySelector(".batteryCharging");
const batteryChargingTime = document.querySelector(".batteryChargingTime");
const batteryDisChargingTime = document.querySelector(
  ".batteryDisChargingTime"
);

const battery = () => {
  if ("getBattery" in navigator) {
    navigator.getBattery().then((battery) => {
      console.log(battery);

      //Battery  charging change
      battery.addEventListener("chargingchange", () => {
        updateChargingInfo();
      });
      const updateChargingInfo = () => {
        const isCharging = battery.charging ? "Yes" : "No";
        // console.log(isCharging);
        batteryCharging.innerHTML = isCharging;
      };

      //Battery charging time
      battery.addEventListener("chargingtimechange", () => {
        // console.log("Charging time has changed");
        updateTimeChange();
      });
      function updateTimeChange() {
        batteryChargingTime.innerHTML = battery.chargingTime + " seconds";
      }

      //Battery Discharging time
      battery.addEventListener("dischargingtimechange", () => {
        updateDischargingInfo();
      });
      function updateDischargingInfo() {
        batteryDisChargingTime.innerHTML = battery.dischargingTime + " seconds";
        // console.log(
        //   `Battery discharging time: ${battery.dischargingTime} seconds`
        // );
      }

      //Battery level change
      battery.addEventListener("levelchange", () => {
        updateLevelChange();
      });
      function updateLevelChange() {
        const level = battery.level * 100;
        if (level == 100) {
          batteryLevel.innerHTML = level + " %  -(fully Charge)";
        }
        if (level === 50) {
          batteryLevel.innerHTML = level + "battery power level is low";
        }
        // console.log(level);
      }

      function updateAllBatteryDetails() {
        updateChargingInfo();
        updateLevelChange();
        updateDischargingInfo();
        updateTimeChange();
      }
      updateAllBatteryDetails();
    });
  }
};

battery();
