
export abstract class AbstractConnectionStore {
  abstract createHolder(args: {name: string}): Promise<void> // TODO: We need an interface for the argument and we need to return 
}