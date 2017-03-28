/**
 * Created by Tristan on 2017/3/28.
 */
function isEmpty(str) {
    if (str == null || str.length == 0) {
        return true;
    }
    return false;
}


function notEmpty(str) {
    return !isEmpty(str);
}


let haveEmpty = async (strs) => {
    return new Promise((resove, reject) => {
        let res = false;
        for (let i = 0; i < strs.length; i++) {
            if (isEmpty(strs[i])) {
                res = true;
                break;
            }
        }
        resove(res);
    })
}
module.exports = {
    isEmpty: isEmpty,
    notEmpty: notEmpty,
    haveEmpty: haveEmpty
}
