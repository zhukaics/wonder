define([
  'underscore', 
  'backbone', 
  'models/answer'
  ], function(_, Backbone, Answer){

	var AnswerCollection = Backbone.Collection.extend({

    model: Answer,
    url: '/api/answer'
  });
  return AnswerCollection;
});