/**
 * Created by Tatyana on 25.03.2016.
 */
module.exports = (app) => {
    app.filter('getById', getById)
        .factory('timeConverter', timeConverter)
    ;
};

function getById() {
    return function(array, id) {
        var result;
        angular.forEach(array, function(item) {
            if (item.id == id)
                result = item;
        });
        return result;
    }
}

function timeConverter() {
    return {
        fromTimestamp: function(timestamp, months) {
            var a = new Date(timestamp);
            //var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            var year = a.getFullYear();
            var month = months[a.getMonth()];
            var date = a.getDate();
            var hour = a.getHours();
            var min = a.getMinutes();
            var sec = a.getSeconds();
            var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
            return time;
        },
        toTimestamp: function(date) {

        }
    }
}
