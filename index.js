function practicals(){
    var today = new Date();
    var date = today.toLocaleDateString(); console.log(date);
    var time = today.toLocaleTimeString(); console.log(time);
}
practicals();
module.exports.practicals = practicals;
