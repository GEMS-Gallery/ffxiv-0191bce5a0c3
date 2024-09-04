import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface Role { 'name' : string, 'description' : string }
export interface RoleDetails {
  'cons' : Array<string>,
  'name' : string,
  'pros' : Array<string>,
  'description' : string,
  'specialAbilities' : [] | [Array<string>],
}
export interface _SERVICE {
  'getRoleDetails' : ActorMethod<[string], [] | [RoleDetails]>,
  'getRoles' : ActorMethod<[], Array<Role>>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
