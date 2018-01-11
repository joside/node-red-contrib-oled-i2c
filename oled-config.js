module.exports = function(RED) {

	function OLedConfigNode(n) {
		RED.nodes.createNode(this, n);
		this.name = n.name;
		this.width = n.width;
		this.height = n.height;
		this.address = n.address;
	}

	RED.nodes.registerType('oled-config', OLedConfigNode);
};