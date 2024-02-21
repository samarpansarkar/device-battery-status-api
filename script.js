const batteryLevel = document.querySelector(".batteryLevel");
const batteryCharging = document.querySelector(".batteryCharging");
const batteryChargingTime = document.querySelector(".batteryChargingTime");
const batteryDisChargingTime = document.querySelector(
  ".batteryDisChargingTime"
);

const battery = () => {
  if ("getBattery" in navigator) {
    navigator.getBattery().then((battery) => {
      //Battery  charging change
      battery.addEventListener("chargingchange", () => {
        updateChargingInfo();
      });
      const updateChargingInfo = () => {
        const isCharging = battery.charging ? "Yes" : "No";
        console.log(isCharging);
        batteryCharging.innerHTML = isCharging;
      };

      //Battery charging time
      battery.addEventListener("chargingtimechange", () => {
        console.log("Charging time has changed");
      });

      //Battery Discharging time
      battery.addEventListener("dischargingtimechange", () => {
        console.log("Discharging time has changed");
      });

      //Battery level change
      battery.addEventListener("levelchange", () => {
        updateLevelChange();
      });
      function updateLevelChange() {
        const level = battery.level * 100 + "%";
        batteryLevel.innerHTML = level;
        console.log(level);
      }

      //Battery status

      function updateAllBatteryDetails() {
        updateChargingInfo();
        updateLevelChange();
      }
      updateAllBatteryDetails();
    });
  }
};

battery();
