
module.exports = (sequelize, DataTypes) => {
    alias = "Movies";
    cols = {
        id: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING(500),
            allowNull: false,
        },
        rating: {
            type: DataTypes.DECIMAL(3,1).UNSIGNED,
            allowNull: false
        },
        awards : {
            type: DataTypes.INTEGER(10).UNSIGNED,
            allowNull: false,
            defaultValue: 0
        },
        release_date: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        length: {
            type: DataTypes.INTEGER(10).UNSIGNED
        },
        genre_id: {
            type: DataTypes.INTEGER(10).UNSIGNED
        }
    }
    let config= {
        tableName: "Movies",
        timestamps: true
    }
    const Movie = sequelize.define(alias, cols, config) 

    Movie.associate = models => {
        Movie.belongsTo(models.Genres, {
            as: "genre",
            foreignKey: "genre_id"
        })
    }
    return Movie;
}

