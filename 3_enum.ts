enum Membership {
  Simple, //index0
  Sdandart, //index1
  Premium, //index2
}

const membership = Membership.Sdandart;
console.log(membership); // => 1

const reverseMembership = Membership[2];
console.log(reverseMembership); // => Premium

enum SocialMadia {
  VK = "VK",
  FACEBUK = "FACEBOOK",
  INSTAGRAM = "INSTAGRAM",
}

const insta = SocialMadia.INSTAGRAM;
console.log(insta); //() => INSTAGRAM'
