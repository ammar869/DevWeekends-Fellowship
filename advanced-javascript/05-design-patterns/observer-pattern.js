// 05-design-patterns/observer-pattern.js
// Observer Pattern Example

// Subject (the object being observed)
class NewsAgency {
  constructor() {
    this.subscribers = [];
  }

  // Subscribe an observer
  subscribe(observer) {
    this.subscribers.push(observer);
    console.log(`Subscribed: ${observer.name}`);
  }

  // Unsubscribe an observer
  unsubscribe(observer) {
    this.subscribers = this.subscribers.subscribers.filter(sub => sub !== observer);
    console.log(`Unsubscribed: ${observer.name}`);
  }

  // Notify all subscribers
  notify(news) {
    console.log(`\\nNews Agency: Broadcasting news - "${news}"`);
    this.subscribers.forEach(subscriber => {
      subscriber.update(news);
    });
  }
}

// Observer
class Subscriber {
  constructor(name) {
    this.name = name;
  }

  update(news) {
    console.log(`${this.name} received news: ${news}`);
  }
}

// Using the observer pattern
console.log('Observer Pattern Example:');

const agency = new NewsAgency();

const subscriber1 = new Subscriber('Alice');
const subscriber2 = new Subscriber('Bob');
const subscriber3 = new Subscriber('Charlie');

agency.subscribe(subscriber1);
agency.subscribe(subscriber2);
agency.subscribe(subscriber3);

agency.notify('Breaking News: JavaScript is awesome!');

// Unsubscribe one subscriber
agency.unsubscribe(subscriber2);
console.log('\\nBob has been unsubscribed.');

agency.notify('Update: New features coming soon.');

// The observer pattern allows for loose coupling between the subject and observers.
// Observers can subscribe and unsubscribe dynamically.