
module.exports = (sequelize, DataTypes) => {
    alias = "Genres";
    cols = {
        id: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        ranking: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            allowNull: false,
            unique: true
        },
        active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 1                
        }
    }
    let config= {
        tableName: "Genres",
        timestamps: true
    }
    const Genre = sequelize.define(alias, cols, config) 

    Genre.associate = models => {
        Genre.hasMany(models.Movies, {
            as: "movies",
            foreignKey: "genre_id"
        })
    }
    return Genre;
}