import { limitWaitingTime } from "./limit-waiting-time";
import PromiseWorker from "promise-worker";

export class WorkerWithTerminationTimeout {
  constructor(workerFactory, timeoutMillis) {
    this.workerFactory = workerFactory;
    this.timeoutMillis = timeoutMillis;
    this._recreateWorker();
  }

  async postMessage(message) {
    return limitWaitingTime(this.promiseWorker.postMessage(message), this.timeoutMillis, () => this._recreateWorker());
  }

  _recreateWorker() {
    if (this.worker != null) {
      this.worker.terminate();
    }
    this.worker = this.workerFactory();
    this.promiseWorker = new PromiseWorker(this.worker);
  }
}
