/**
 * Created by Administrator on 2016/4/6 0006.
 */
'use strict';

module.exports = IsbnScanner;

var IsbnScanner = function(isbnCode){
    if(typeof isbnCode === "string"){
        this.isbnCode = isbnCode;
    }else{
        this.isbnCode = "";
    }
}

IsbnScanner.prototype.setIsbnCode = function(isbnCode){
    this.isbnCode = isbnCode
}

IsbnScanner.prototype.getIsbnCode = function(){
    return this.isbnCode;
}

IsbnScanner.prototype.filterIsbnCode = function(){
    return this.isbnCode;
}
