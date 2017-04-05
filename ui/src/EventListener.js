/**
 * Generic event management class; intended to be extended, not used alone.
 */
export default class EventListener {
    constructor() {
        // Map of event types to array of handlers.
        this.handlers = {};
    }

    /**
     * Binds an event.
     * @param name {String} Name of the event to bind to.
     * @param handler {Function} Callback to execute.
     */
    on(name, handler) {
        this.handlers[name] = this.handlers[name] || [];
        this.handlers[name].push(handler)
    }

    /**
     * Unbinds an event; used in clean up.
     * @param name {String} Name of event to unbind.
     * @param handler {Function} Callback to remove.
     */
    off(name, handler) {
        if (this.handlers[name]) {
            const index = this.handlers[name].indexOf(handler);
            if (index !== -1) {
                this.handlers[name].splice(index, 1);
            }
        }
    }

    /**
     * Fires an event.
     * @param name {String} Name of the event to fire.
     * @param parameters {Array} Parameters to pass to the event handler.
     * @private
     */
    _trigger(name, ...parameters) {
        let handlers = this.handlers[name];
        // Consuming code can use response from handlers.
        // e.g. `if(this._trigger()){...}`
        // If there are no handlers always return true, otherwise AND the responses so any one handler
        // can void the event.
        if (handlers) {
            return handlers
                .map(handler => handler.apply(null, parameters))
                .reduce((accumulator, value) => accumulator && value, true);
        } else {
            return true;
        }
    }
}