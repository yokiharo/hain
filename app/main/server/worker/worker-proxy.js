'use strict';

module.exports = class WorkerProxy {
  constructor(workerClient) {
    this.workerClient = workerClient;
  }
  initialize(appPref) {
    this.workerClient.rpc.call('initialize', { appPref });
  }
  searchAll(ticket, query) {
    this.workerClient.rpc.call('searchAll', { ticket, query });
  }
  execute(pluginId, id, payload) {
    this.workerClient.rpc.call('execute', { pluginId, id, payload });
  }
  renderPreview(ticket, pluginId, id, payload) {
    this.workerClient.rpc.call('renderPreview', { ticket, pluginId, id, payload });
  }
  buttonAction(pluginId, id, payload) {
    this.workerClient.rpc.call('buttonAction', { pluginId, id, payload });
  }
  getPluginPrefIds() {
    return this.workerClient.rpc.call('getPluginPrefIds');
  }
  getPreferences(prefId) {
    return this.workerClient.rpc.call('getPreferences', { prefId });
  }
  updatePreferences(prefId, model) {
    this.workerClient.rpc.call('updatePreferences', { prefId, model });
  }
  resetPreferences(prefId) {
    this.workerClient.rpc.call('resetPreferences', { prefId });
  }
  commitPreferences() {
    this.workerClient.rpc.call('commitPreferences');
  }
  updateAppPreferences(model) {
    this.workerClient.rpc.call('updateAppPreferences', { model });
  }
};
