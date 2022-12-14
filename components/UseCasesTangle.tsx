import {
  CubeIcon,
  CloudIcon,
  EyeIcon,
  ServerIcon,
  BookOpenIcon,
  BeakerIcon
} from "@heroicons/react/outline";
import { DetailedFeatureLink } from "./Feature";

export const UseCasesArea = () => {
  return (
    <div className="grid grid-cols-1 mt-12 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:gap-x-8 lg:gap-y-12">
    <DetailedFeatureLink
      feature={{
        Icon: CubeIcon,
        description: `Powers the ability to privately move and transfer assets between blockchains.`,
        name: "Connected Shielded Pool Protocols",
      }}
      href=""
    ></DetailedFeatureLink>
    <DetailedFeatureLink
        feature={{
          Icon: EyeIcon,
          description: `Create identities and connect groups between blockchains.`,
          name: "Connected Shielded Identity Protocols",
        }}
        href=""
      />
      <DetailedFeatureLink
        feature={{
          Icon: ServerIcon,
          description: `Capable of enabling public/plaintext cross-chain use cases. Providing efficiency, and security through the use of a TSS MPC that rotates frequently.`,
          name: "General Messaging Passing & Public Bridges",
        }}
        href=""
      /><DetailedFeatureLink
        feature={{
          Icon: CloudIcon,
          description: `Leverage the Webb TSS DKG to sign payloads from data feeds for financial, identity, and other applications`,
          name: "Oracle Systems and Data Feeds",
        }}
        href=""
      />
  </div>
  );
};

export const ParticipateArea = () => {
  return (
    <div className="grid grid-cols-1 mt-12 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:gap-x-8 lg:gap-y-12">
      <DetailedFeatureLink
        feature={{
          Icon: CloudIcon,
          description: `Running a relayer helps keep our bridges up to date by relaying the necessary data between both applications and the Tangle Network`,
          name: "Run a Relayer",
        }}
        href=""
      ></DetailedFeatureLink>
      <DetailedFeatureLink
        feature={{
          Icon: ServerIcon,
          description: `Running a validator allows you to help secure the network and earn rewards in the process`,
          name: "Run a Validator",
        }}
        href=""
      ></DetailedFeatureLink>
      <DetailedFeatureLink
        feature={{
          Icon: BookOpenIcon,
          description: `Through governance, you can create proposals for updating cross-chain applications`,
          name: "Participate in Governance ",
        }}
        href="/webb/docs/core-concepts/monorepos"
      ></DetailedFeatureLink>
      <DetailedFeatureLink
        feature={{
          Icon: BeakerIcon,
          description: `Reach out and build new applications on Webb!`,
          name: "Develop new applications / research",
        }}
        href=""
      ></DetailedFeatureLink>
    </div>
  );
};

