import { limitWaitingTime } from "./limit-waiting-time";

export class WorkerWithTerminationTimeout {
  constructor(workerFactory, timeoutMillis) {
    this.workerFactory = workerFactory;
    this.timeoutMillis = timeoutMillis;
    this._recreateWorker();
  }

  async postMessage(message) {
    return new Promise((resolve, reject) => {
      this.worker.addEventListener("message", (e) => {
        if (e.data.error) {
          reject(new Error(e.data.error));
        } else {
          resolve(e.data);
        }
      });
      limitWaitingTime(this.worker.postMessage(message), this.timeoutMillis, () => this._recreateWorker());
    });
  }

  _recreateWorker() {
    if (this.worker != null) {
      this.worker.terminate();
    }
    this.worker = this.workerFactory();
  }
}
