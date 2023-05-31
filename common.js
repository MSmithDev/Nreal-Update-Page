
// air light 在 检查设备 => 连接设备 => 获取实例 => 判断设备类型 进行整合
// 不同类型升级提供俩个接口，通过判断设备类型分别调用不同的SDK包，再进行升级后续操作
let curGlasses = null;
const DEBUG = true;

import GlassesLight from './js_light/glasses.js';
import * as managerLight from './js_light/manager.js'
import GlassesAir from './js_air/glasses.js'
import * as managerAir from './js_air/manager.js'


// *******************

export function isNrealDevice(device) {
    // 涉及俩种设备的区分协议(符合 air 和 light 俩种Nreal设备)
    return device.productId == 0x0423 || device.productId == 0x573C;
}

export function addHidListener() {
    navigator.hid.onconnect = function (event) {
        let device = event.device;
        if (device.productId == 1059 || device.productId == 1060) {
            managerAir.canCommand(device).then(result => {
                if (result) {
                    curGlasses = new GlassesAir(device);
                }
            });
        }
        if (device.productId == 22332 || device.productId == 22336) {
            managerLight.canCommand(device).then(result => {
                if (result) {
                    curGlasses = new GlassesLight(device);
                }
            });
        }
    }

    navigator.hid.ondisconnect = function (event) {
        if (curGlasses && curGlasses.device == event.device) {
            curGlasses = null;
        }
    }

}

export function checkConnection() {
    if (curGlasses) {
        return curGlasses;
    }

    return navigator.hid.getDevices().then(devices => {
        // filters out devices that are nreal devices.
        return devices.filter(isNrealDevice);
    }).then(async devices => {
        for (let device of devices) {
            if (device.productId == 1059 || device.productId == 1060) {
                if (await managerAir.canCommand(device)) {
                    curGlasses = new GlassesAir(device);
                    return curGlasses;
                }
            }
            if (device.productId == 22332 || device.productId == 22336) {
                if (await managerLight.canCommand(device)) {
                    curGlasses = new GlassesLight(device);
                    return curGlasses;
                }
            }
        }
    });
}

function requestDevice() {
    return navigator.hid.requestDevice({
        filters: [{
            vendorId: 0x0486,
        }, {
            vendorId: 0x0483,
        }, {
            vendorId: 0x0482,
        }, {
            vendorId: 0x3318,
        }]
    }).then(async devices => {
        for (let device of devices) {
            if (device.productId == 1059 || device.productId == 1060) {
                if (await managerAir.canCommand(device)) {
                    curGlasses = new GlassesAir(device);
                    return curGlasses;
                }
            }
            if (device.productId == 22332 || device.productId == 22336) {
                if (await managerLight.canCommand(device)) {
                    curGlasses = new GlassesLight(device);
                    return curGlasses;
                }
            }
        }
    });
}

export async function connectDevice() {
    let glasses = await checkConnection();
    if (glasses == undefined) {
        glasses = await requestDevice();
    }
    return glasses;
}

// check glasses is air or light?
export function isAirOrLight() {
    if (!curGlasses) {
        return 'not found device';
    }
    if (curGlasses.device.productId == 1059 || curGlasses.device.productId == 1060) {
        return 1
    }
    if (curGlasses.device.productId == 22332 || curGlasses.device.productId == 22336) {
        return 2
    }
    return null
}

export {
    curGlasses
}
