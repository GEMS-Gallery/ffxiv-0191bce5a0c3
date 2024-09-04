export const idlFactory = ({ IDL }) => {
  const ClassDetails = IDL.Record({
    'cons' : IDL.Vec(IDL.Text),
    'name' : IDL.Text,
    'pros' : IDL.Vec(IDL.Text),
    'description' : IDL.Text,
    'specialAbilities' : IDL.Opt(IDL.Vec(IDL.Text)),
  });
  const Class = IDL.Record({ 'name' : IDL.Text, 'description' : IDL.Text });
  return IDL.Service({
    'getClassDetails' : IDL.Func(
        [IDL.Text],
        [IDL.Opt(ClassDetails)],
        ['query'],
      ),
    'getClasses' : IDL.Func([], [IDL.Vec(Class)], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };
