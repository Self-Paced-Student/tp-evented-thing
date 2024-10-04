
// Evented thing (30 mins)

// Define the "EventedThing" class, so that its instances have
// an "on" and a "trigger" method to react to events. For example:
//
// eventedThing.on('meet', function (name) {
//  console.log('Nice to meet you, ' + name + '.');
// });
//
// eventedThing.trigger('meet', 'Sarah');
// -> 'Nice to meet you, Sarah.'
// eventedThing.trigger('meet', 'Berta');
// -> 'Nice to meet you, Berta.'
//
// eventedThing.trigger('whatever');
// -> nothing happens


class EventedThing {
  _listen = {}

  on (label, handle) {
    if (handle instanceof Function) {
      this._listen[label] = handle;
      return true;
    }
    throw new Error('Second arg must be a function.')
  }

  trigger (label) {
    if (this._listen[label]) {
      this._listen[label]()
    }
  }
}


module.exports = new EventedThing;
