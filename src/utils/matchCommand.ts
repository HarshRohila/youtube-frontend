type TaggedUnion = { type: string }

type CommandHandlers<TCommand extends TaggedUnion, TResult> = {
  [K in TCommand["type"]]: (command: Extract<TCommand, { type: K }>) => TResult
}

function matchCommand<TCommand extends TaggedUnion, TResult = void>(
  command: TCommand,
  handlers: CommandHandlers<TCommand, TResult>
): TResult {
  const handler = handlers[command.type as TCommand["type"]] as (command: TCommand) => TResult
  return handler(command)
}

export { matchCommand }
export type { CommandHandlers }
