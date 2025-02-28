declare type EventArgs<T> = [T] extends [(...args: infer U) => any]
  ? U
  : [T] extends [void]
  ? []
  : [T];
/**
 * Example:
 *
 * export interface BaseEvents<P, S> {
 *   SET_STATE: (component: BaseComponent<P, S>, state: S) => void;
 * }
 */
export interface EventEmitter<EventTypes> {
  addListener<EventName extends keyof EventTypes>(
    event: EventName,
    listener: (...args: EventArgs<EventTypes[EventName]>) => void,
  ): EventEmitter<EventTypes>;
  on<EventName extends keyof EventTypes>(
    event: EventName,
    listener: (...args: EventArgs<EventTypes[EventName]>) => void,
  ): EventEmitter<EventTypes>;
  off<EventName extends keyof EventTypes>(
    event: EventName,
    listener: (...args: EventArgs<EventTypes[EventName]>) => void,
  ): EventEmitter<EventTypes>;
  emit<EventName extends keyof EventTypes>(
    event: EventName,
    ...args: EventArgs<EventTypes[EventName]>
  ): boolean;
}
export declare class EventEmitter<EventTypes> {
  private callbacks;
  private init;
}
export {};
