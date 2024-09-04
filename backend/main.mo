import Array "mo:base/Array";
import HashMap "mo:base/HashMap";
import Text "mo:base/Text";
import Hash "mo:base/Hash";

actor {
  type Class = {
    name: Text;
    description: Text;
  };

  type ClassDetails = {
    name: Text;
    description: Text;
    pros: [Text];
    cons: [Text];
    specialAbilities: ?[Text];
  };

  stable var classes : [Class] = [
    { name = "Paladin"; description = "A tank class that excels in defense" },
    { name = "Warrior"; description = "A tank class focused on offense" },
    { name = "White Mage"; description = "A healer class with powerful healing spells" },
    { name = "Black Mage"; description = "A DPS class specializing in destructive magic" }
  ];

  let classDetails = HashMap.HashMap<Text, ClassDetails>(10, Text.equal, Text.hash);

  // Initialize class details
  classDetails.put("Paladin", {
    name = "Paladin";
    description = "A tank class that excels in defense";
    pros = ["Strong defensive abilities", "Can heal self and others"];
    cons = ["Lower damage output", "Less mobility compared to other tanks"];
    specialAbilities = ?["Divine Veil", "Hallowed Ground"];
  });

  classDetails.put("Warrior", {
    name = "Warrior";
    description = "A tank class focused on offense";
    pros = ["High damage output for a tank", "Strong self-healing"];
    cons = ["Requires good timing for defensive cooldowns", "Less party utility"];
    specialAbilities = ?["Inner Release", "Holmgang"];
  });

  public query func getClasses() : async [Class] {
    return classes;
  };

  public query func getClassDetails(className : Text) : async ?ClassDetails {
    return classDetails.get(className);
  };
}