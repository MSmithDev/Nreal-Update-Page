window.onload = (() => {
	//zh
	addEvent('.zh_air_activation_connect', 'activation_air_connect', 'zh');
	addEvent('.zh_light_activation_connect', 'activation_light_connect', 'zh');
	addEvent('.zh_air_activation_active', 'activation_air_activate', 'zh');
	addEvent('.zh_light_activation_active', 'activation_light_activate', 'zh');
	addEvent('.zh_activation_air_download_file', 'activation_air_download_file', 'zh');
	addEvent('.zh_activation_air_select_firmware', 'activation_air_select_firmware', 'zh');
	addEvent('.zh_activation_air_firmware_update', 'activation_air_firmware_update', 'zh');
	/**ada */
	addEvent('.zh_ada_connect', 'ada_connect', 'zh');
	addEvent('.zh_ada_firmware_update', 'ada_firmware_update', 'zh');
	//ko
	addEvent('.ko_air_activation_connect', 'activation_air_connect', 'ko');
	addEvent('.ko_light_activation_connect', 'activation_light_connect', 'ko');
	addEvent('.ko_air_activation_active', 'activation_air_activate', 'ko');
	addEvent('.ko_light_activation_active', 'activation_light_activate', 'ko');
	addEvent('.ko_activation_air_download_file', 'activation_air_download_file', 'ko');
	addEvent('.ko_activation_air_select_firmware', 'activation_air_select_firmware', 'ko');
	addEvent('.ko_activation_air_firmware_update', 'activation_air_firmware_update', 'ko');
	/**ada */
	addEvent('.ko_ada_connect', 'ada_connect', 'ko');
	addEvent('.ko_ada_firmware_update', 'ada_firmware_update', 'ko');
	//ja
	addEvent('.ja_air_activation_connect', 'activation_air_connect', 'ja');
	addEvent('.ja_light_activation_connect', 'activation_light_connect', 'ja');
	addEvent('.ja_air_activation_active', 'activation_air_activate', 'ja');
	addEvent('.ja_light_activation_active', 'activation_light_activate', 'ja');
	addEvent('.ja_activation_air_download_file', 'activation_air_download_file', 'ja');
	addEvent('.ja_activation_air_select_firmware', 'activation_air_select_firmware', 'ja');
	addEvent('.ja_activation_air_firmware_update', 'activation_air_firmware_update', 'ja');
	/**ada */
	addEvent('.ja_ada_connect', 'ada_connect', 'ja');
	addEvent('.ja_ada_firmware_update', 'ada_firmware_update', 'ja');
	//en
	addEvent('.en_air_activation_connect', 'activation_air_connect', 'en');
	addEvent('.en_light_activation_connect', 'activation_light_connect', 'en');
	addEvent('.en_air_activation_active', 'activation_air_activate', 'en');
	addEvent('.en_light_activation_active', 'activation_light_activate', 'en');
	addEvent('.en_activation_air_download_file', 'activation_air_download_file', 'en');
	addEvent('.en_activation_air_select_firmware', 'activation_air_select_firmware', 'en');
	addEvent('.en_activation_air_firmware_update', 'activation_air_firmware_update', 'en');
	/**ada */
	addEvent('.en_ada_connect', 'ada_connect', 'en');
	addEvent('.en_ada_firmware_update', 'ada_firmware_update', 'en');


	// en-plus
	addEvent('.en_activation_air_download_file_plus', 'actiAirP_download_file', 'en');
	addEvent('.en_air_activation_connect_plus', 'actiAirP_connect', 'en');
	addEvent('.en_air_activation_active_plus', 'actiAirP_activate', 'en');
	addEvent('.en_activation_air_select_firmware_plus', 'actiAirP_select_file', 'en');
	addEvent('.en_activation_air_firmware_update_mcu_plus', 'actiAirP_update_mcu', 'en');
	addEvent('.en_activation_air_firmware_update_dp_plus', 'actiAirP_update_dp', 'en');

	// zh-plus
	addEvent('.zh_activation_air_download_file_plus', 'actiAirP_download_file', 'zh');
	addEvent('.zh_air_activation_connect_plus', 'actiAirP_connect', 'zh');
	addEvent('.zh_air_activation_active_plus', 'actiAirP_activate', 'zh');
	addEvent('.zh_activation_air_select_firmware_plus', 'actiAirP_select_file', 'zh');
	addEvent('.zh_activation_air_firmware_update_mcu_plus', 'actiAirP_update_mcu', 'zh');
	addEvent('.zh_activation_air_firmware_update_dp_plus', 'actiAirP_update_dp', 'zh');
	// kr-plus
	addEvent('.ko_activation_air_download_file_plus', 'actiAirP_download_file', 'ko');
	addEvent('.ko_air_activation_connect_plus', 'actiAirP_connect', 'ko');
	addEvent('.ko_air_activation_active_plus', 'actiAirP_activate', 'ko');
	addEvent('.ko_activation_air_select_firmware_plus', 'actiAirP_select_file', 'ko');
	addEvent('.ko_activation_air_firmware_update_mcu_plus', 'actiAirP_update_mcu', 'ko');
	addEvent('.ko_activation_air_firmware_update_dp_plus', 'actiAirP_update_dp', 'ko');
	// jp-plus
	addEvent('.ja_activation_air_download_file_plus', 'actiAirP_download_file', 'ja');
	addEvent('.ja_air_activation_connect_plus', 'actiAirP_connect', 'ja');
	addEvent('.ja_air_activation_active_plus', 'actiAirP_activate', 'ja');
	addEvent('.ja_activation_air_select_firmware_plus', 'actiAirP_select_file', 'ja');
	addEvent('.ja_activation_air_firmware_update_mcu_plus', 'actiAirP_update_mcu', 'ja');
	addEvent('.ja_activation_air_firmware_update_dp_plus', 'actiAirP_update_dp', 'ja');

	function addEvent(_class, name, lang) {
		let btn = document.querySelector(_class);
		if (btn) {
			btn.addEventListener('click', () => {
				addGa(
					name,
					{
						lang,
					}
				)
			})
		}
	}
	// 升级
	function addGa(event, opts) {
		gtag('event', event, {
			...opts,
		});
	}
})()