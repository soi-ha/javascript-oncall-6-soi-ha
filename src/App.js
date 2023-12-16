import { Controller } from './controller/Controller.js';

class App {
  async run() {
    const onCall = new Controller();
    await onCall.start();
  }
}

export default App;
