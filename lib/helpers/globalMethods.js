if (Meteor.isServer) {

  globalMethods = {
    seedUp : function (seeds, dbCollection) {

      // loop through the seeds and seed the collection if the _id doesn't currently exist
      for (seed in seeds) {

        // check if a seed with that value currently exists in the collection
        var existingSeed = dbCollection.findOne({_id: seeds[seed]._id});

        if (!existingSeed) {

          // variable declarations
          var // vars
          // get the keys of each object to be seeded
          keys = Object.keys(seeds[seed]),
          // empty object that will contain the values to be inserted
          seedValues = {},
          len = keys.length,
          i;

          // build the values to be inserted
          for (i = 0; i < len; i++) {
            seedValues[keys[i]] = seeds[seed][keys[i]];
          };

          dbCollection.insert(seedValues);
        }
      }
    },

    seedDown : function (seeds, dbCollection) {

      // loop through the seeds and unseed the collection
      for (seed in seeds) {

        // check if a seed with that value currently exists in the collection
        var existingSeed = dbCollection.findOne({_id: seeds[seed]._id});

        if (existingSeed) {

          dbCollection.remove({_id: seeds[seed]._id});
        }
      }
    }
  };
}

UI.registerHelper('formatTime', function(context, options) {
  if(context)
    return moment(context).format('MM/DD/YYYY, hh:mm:ss');
});
