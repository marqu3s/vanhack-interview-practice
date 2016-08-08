"use strict";
// const mongoose = require('mongoose');
var mongoose = require('mongoose');
//const Schema = mongoose.Schema,
//      ObjectId = Schema.ObjectId;
exports.JOAO = 'test';
// Practice Schema
exports.PracticeSchema = new mongoose.Schema({
    topic: String,
    url: String,
    date: String
});
// Create and export a Practice model
exports.Practice = mongoose.model('Practice', exports.PracticeSchema);
// Provide a Practice promise
function getPracticeByDateQuery(date) {
    return exports.Practice.find({ date: date });
}
exports.getPracticeByDateQuery = getPracticeByDateQuery;
/*var Practice = mongoose.model('Practice');
var findByDate = function(date: String, callback: any) {
    console.log('Getting practices...');
    Practice.find({'date': date}, function(err, docs) {
        if (err) {
            console.log(err);
        } else {
            // console.log('Models: %s', docs);
            callback(docs);
            // return JSON.stringify(models);
        }
    });
}
module.exports = findByDate;
*/
/*
export var PracticeProvider = function(){};

// Find Practice by date
PracticeProvider.prototype.findByDate = function(date: String, callback: any) {
    Practice.find({date: date}).lean().exec(function(err, models) {
        return JSON.stringify(models);
    });
};

// Create a new Practice
PracticeProvider.prototype.save = function(params, callback) {
    var practice = new Practice({
        topic: params['topic'],
        url: params['url'],
        date: params['date'],
        created_by: params['created_by'],
        created_at: new Date()
    });
    practice.save(function (err) {
        callback();
    });
};
*/
// exports.PracticeProvider = PracticeProvider; 
//# sourceMappingURL=practice.js.map