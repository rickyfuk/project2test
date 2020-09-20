'use strict';

module.exports = function (sequelize, DataTypes) {
	const charName = sequelize.define(
		'charName',
		{
			id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true,
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false,
				isAlphanumeric: true,
				validate: {
					len: [2, 50],
				},
			},
			// gender: {
			// 	type: DataTypes.STRING.BINARY,
			// 	allowNull: false,
			// 	len: [1],
			// },
			updated_at: { type: DataTypes.DATE },
			deleted_at: { type: DataTypes.DATE },
		}
		// {
		// 	underscored: true,
		// 	paranold: true,
		// }
	);

	return charName;
};
