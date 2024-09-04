export const idlFactory = ({ IDL }) => {
  const RoleDetails = IDL.Record({
    'cons' : IDL.Vec(IDL.Text),
    'name' : IDL.Text,
    'pros' : IDL.Vec(IDL.Text),
    'description' : IDL.Text,
    'specialAbilities' : IDL.Opt(IDL.Vec(IDL.Text)),
  });
  const Role = IDL.Record({ 'name' : IDL.Text, 'description' : IDL.Text });
  return IDL.Service({
    'getRoleDetails' : IDL.Func([IDL.Text], [IDL.Opt(RoleDetails)], ['query']),
    'getRoles' : IDL.Func([], [IDL.Vec(Role)], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };
