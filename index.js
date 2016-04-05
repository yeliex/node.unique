/**
 * Created by yeliex on 16/4/5.
 */
(function () {
    var duplicated = true;
    var sortFunc = function (a, b) {
        if (a === b) {
            duplicated = true;
            return true;
        }
        duplicated = duplicated || false;
        return a - b;
    };

    /**
     * Sorts an array with duplicates removed
     * @param array/object
     * @returns {Array}
     */
    var unique = function (array) {
        var duplicates = [],
            item,
            i = 0,
            j;
        array.sort(sortFunc);

        if (!duplicated) {
            return array;
        }
        // 循环获取
        while ((item = array[i++])) {
            if (item === array[i]) {
                j = duplicates.push(i);
            }
        }
        while (j--) {
            array.splice(duplicates[j], 1);
        }
        return array;
    };

    Array.prototype.unique = function () {
        return unique(this);
    };
    module.export = function (array) {
        return unique(array);
    };
}());