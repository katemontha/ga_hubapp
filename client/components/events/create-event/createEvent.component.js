const createEventTemplate = require('./create-event.html')
const createEventController = require('./createEvent.controller')

const CreateEventComponent = {
    template: createEventTemplate,
    controller: createEventController
}

angular
    .module('HubApp')
    .component('createEvent', CreateEventComponent);
