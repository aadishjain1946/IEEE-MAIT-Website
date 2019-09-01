function createmsg(name, subject, msg) {
    var mail = {
        'subject': 'Regarding ' + subject,
        'msg': '<h4>Hi ' + name + ',' + '</h4><p>Thank you for showing intrest in <strong>IEEE-MAIT</strong>.</p><p>Your query  "' + msg + '"  will be resolved as soon as possible</p><p> Till then Explore <strong>IEEE-MAIT</strong> on <a href="https://www.facebook.com/ieee.mait/">Facebook</a> and <a href="https://www.instagram.com/ieeemait/">Instagram</a></p><br><h4>Regards</h4><h4><strong>IEEE-MAIT</strong></h4> '
    }
    return mail;
}
module.exports = createmsg;