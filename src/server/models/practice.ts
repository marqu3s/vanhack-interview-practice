// const mongoose = require('mongoose');
import * as mongoose from 'mongoose';

//const Schema = mongoose.Schema,
//      ObjectId = Schema.ObjectId;

export const JOAO = 'test';

// Practice Schema
export var PracticeSchema = new mongoose.Schema({
	topic       : String,
	url         : String,
    date        : String
    // created_by  : String,
	// created_at  : Date
});

// Create and export a Practice model
export var Practice = mongoose.model('Practice', PracticeSchema);

// Provide a Practice promise
export function getPracticeByDateQuery (date: String) {
    return Practice.find({date: date});
}

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