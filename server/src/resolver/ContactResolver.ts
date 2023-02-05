import { Arg, Mutation, Resolver } from "type-graphql";
import { sendMail } from "../utils/sendMail";
import Contact, { ContactInput } from "../entity/Contact";

@Resolver(Contact)
export class ContactResolver {
  @Mutation(() => Boolean)
  async contactAdmin(@Arg("data") data: ContactInput) {
    await sendMail(data).catch(console.error);
  }
}
