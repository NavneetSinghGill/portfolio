const CONSTANTS = {
    ISLOCALENVIRONMENT: false,
    DATABASE: {
        URL_LOCAL: 'mongodb://127.0.0.1:27017',
        URL_PROD: 'mongodb+srv://PortfolioUser1:motionanalysis123@cluster0-r01e5.mongodb.net/test',
        url: function url() {
            return CONSTANTS.ISLOCALENVIRONMENT ? CONSTANTS.DATABASE.URL_LOCAL : CONSTANTS.DATABASE.URL_PROD;
        },
        DATABASENAME: function DATABASENAME() {
            return CONSTANTS.ISLOCALENVIRONMENT ? 'PortfolioDB' : 'Cluster0';
        }
    }
}
module.exports =  CONSTANTS;