import { eventNames } from 'cluster';

class Dispatcher {
  constructor() {
    this.events = {};
  }

  dispatch(eventName, data) {
    // TODO: dispatch the provided event
    const event = this.events[eventName];

    if (event) {
      event.fire(data);
    }
  }

  on(eventName, callback) {
    // TODO: add the event listener to the provided event
    let event = this.events[eventName];

    if (!event) {
      event = new DispatcherEvent(eventName);
      this.events[eventName] = event;
    }
    event.registerCallback(callback);
  }

  off(eventName, callback) {
    // TODO: remove the event listener from the provided event
    const event = this.events[eventName];
    // Check that the event exists and it has the callback registered
    if (event && event.callbacks.indexOf(callback) > -1) {
      // if it is registered then unregister it!
      event.unregisterCallback(callback);
      // if the event has no callbacks left, delete the event
      if (event.callbacks.length === 0) {
        delete this.events[eventName];
      }
    }
  }
}

class DispatcherEvent {
  constructor(eventName) {
    this.eventName = eventName;
    this.callbacks = [];
  }

  registerCallback(callback) {
    // TODO: Add the provided callback to the event
    this.callbacks.push(callback);
  }

  unregisterCallback(callback) {
    // TODO: Remove the provided callback from the event
    const index = this.callbacks.indexOf(callback);
    // If the callback is in the array then remove it
    if (index > -1) {
      this.callbacks.splice(index, 1);
    }
  }

  fire(data) {
    // TODO: Call each callback with the provided data
    const callbacks = this.callbacks.slice(0);

    callbacks.forEach((callback) => {
      callback(data);
    });
  }
}
