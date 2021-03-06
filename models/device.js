var Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
	var Device = sequelize.define('Device', {
			name: {
				type: Sequelize.STRING(32),
				unique: true,
			},
			displayName: {
				type: Sequelize.STRING(255),
			},
	});

	return Device;
}
