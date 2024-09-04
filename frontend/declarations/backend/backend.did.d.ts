import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface Class { 'name' : string, 'description' : string }
export interface ClassDetails {
  'cons' : Array<string>,
  'name' : string,
  'pros' : Array<string>,
  'description' : string,
  'specialAbilities' : [] | [Array<string>],
}
export interface _SERVICE {
  'getClassDetails' : ActorMethod<[string], [] | [ClassDetails]>,
  'getClasses' : ActorMethod<[], Array<Class>>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
