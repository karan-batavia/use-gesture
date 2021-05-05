import { registerEngine, DragEngine, Handler, UserDragConfig, EventTypes } from '@use-gesture/core'
import { Recognizer } from './Recognizer'

registerEngine('drag', DragEngine)

interface DragGestureConstructor {
  new <EventType = EventTypes['drag']>(
    target: EventTarget,
    handler: Handler<'drag', EventType>,
    config?: UserDragConfig
  ): DragGesture
}

export interface DragGesture extends Recognizer {}

export const DragGesture: DragGestureConstructor = function <EventType = EventTypes['drag']>(
  target: Element,
  handler: Handler<'drag', EventType>,
  config: UserDragConfig | {} = {}
) {
  return new Recognizer(target, { drag: handler }, config, 'drag')
} as any
