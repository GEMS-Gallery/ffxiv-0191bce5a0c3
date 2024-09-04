import Array "mo:base/Array";
import HashMap "mo:base/HashMap";
import Text "mo:base/Text";
import Hash "mo:base/Hash";

actor {
  type Role = {
    name: Text;
    description: Text;
  };

  type RoleDetails = {
    name: Text;
    description: Text;
    pros: [Text];
    cons: [Text];
    specialAbilities: ?[Text];
  };

  stable var roles : [Role] = [
    { name = "Tank"; description = "Protects the party by absorbing damage" },
    { name = "Healer"; description = "Keeps the party alive with healing magic" },
    { name = "DPS"; description = "Deals high damage to enemies" },
    { name = "Support"; description = "Provides buffs and utility to the party" }
  ];

  let roleDetails = HashMap.HashMap<Text, RoleDetails>(10, Text.equal, Text.hash);

  // Initialize role details
  roleDetails.put("Tank", {
    name = "Tank";
    description = "Protects the party by absorbing damage";
    pros = ["High survivability", "Controls enemy positioning"];
    cons = ["Lower damage output", "Requires good situational awareness"];
    specialAbilities = ?["Damage mitigation cooldowns", "Aggro management"];
  });

  roleDetails.put("Healer", {
    name = "Healer";
    description = "Keeps the party alive with healing magic";
    pros = ["Essential for party survival", "Can prevent wipes"];
    cons = ["Pressure to keep everyone alive", "Limited offensive capabilities"];
    specialAbilities = ?["Area of Effect healing", "Resurrection"];
  });

  public query func getRoles() : async [Role] {
    return roles;
  };

  public query func getRoleDetails(roleName : Text) : async ?RoleDetails {
    return roleDetails.get(roleName);
  };
}