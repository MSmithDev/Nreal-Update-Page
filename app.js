const checkDeviceButton = document.getElementById("check-device");
const deviceStatus = document.getElementById("device-status");

const VID = 0x3318;
const PID = 0x0424;

checkDeviceButton.addEventListener("click", async () => {
  try {
    await navigator.usb.requestDevice({ filters: [{ vendorId: VID, productId: PID }] })
      .then(device => {
        console.log("Device connected:", device);
        deviceStatus.textContent = "Device status: Connected";
      })
      .catch(error => {
        console.log("No device found:", error);
        deviceStatus.textContent = "Device status: Not connected";
      });
  } catch (err) {
    console.error("WebUSB Error:", err);
  }
});
