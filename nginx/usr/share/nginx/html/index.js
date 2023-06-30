let client = null;

function connect(uri, username, password) {
	disconnect();
	client = mqtt.connect(uri, {
		"username": username,
		"password": password
	});

	client.on("connect", () => {
		document.getElementById("tool").style.visibility = "visible";
		client.subscribe("$CONTROL/dynamic-security/v1/response", (err) => {
			if (err) {
				alert(err);
			}
		});
	});

	client.on("message", (topic, message) => {
		document.getElementById("received").value = JSON.stringify(JSON.parse(message), null, 2);
		let s_height = document.getElementById('received').value.split('\n').length;
		document.getElementById('received').style.height = s_height + 'rem';
	});

	client.on("close", () => {
		document.getElementById("tool").style.visibility = "hidden";
	});
}

function disconnect() {
	if (client === null) {
		return;
	}
	client.end();
	client = null;
}

function insert(command) {
	let payload = {};

	switch (command) {
		case 'createClient':
			payload = {
				"commands": [
					{
						"command": "createClient",
						"username": "<username>",
					}
				]
			};
			break;
		case 'deleteClient':
			payload = {
				"commands": [
					{
						"command": "deleteClient",
						"username": "<username>",
					}
				]
			};
			break;
		case 'disableClient':
			payload = {
				"commands": [
					{
						"command": "disableClient",
						"username": "<username>",
					}
				]
			};
			break;
		case 'enableClient':
			payload = {
				"commands": [
					{
						"command": "enableClient",
						"username": "<username>",
					}
				]
			};
			break;
		case 'setClientPassword':
			payload = {
				"commands": [
					{
						"command": "setClientPassword",
						"username": "<username>",
						"password": "<password>",
					}
				]
			};
			break;
		case 'addClientRole':
			payload = {
				"commands": [
					{
						"command": "addClientRole",
						"username": "<username>",
						"rolename": "<rolename>",
						"priority": "<priority>"
					}
				]
			};
			break;
		case 'removeClientRole':
			payload = {
				"commands": [
					{
						"command": "removeClientRole",
						"username": "<username>",
						"rolename": "<rolename>"
					}
				]
			};
			break;
		case 'getClient':
			payload = {
				"commands": [
					{
						"command": "getClient",
						"username": "<username>"
					}
				]
			};
			break;
		case 'listClients':
			payload = {
				"commands": [
					{
						"command": "listClients"
					}
				]
			};
			break;
	}

	document.getElementById("send").value = JSON.stringify(payload, null, 2);
	let s_height = document.getElementById('send').value.split('\n').length;
	document.getElementById('send').style.height = s_height + 'rem';
}

function send() {
	const payload = document.getElementById("send").value;
	client.publish("$CONTROL/dynamic-security/v1", payload);
}
