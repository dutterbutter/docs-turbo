import { DiscordIcon, GitHubIcon } from "nextra/icons";
import { TelegramIcon, TwitterIcon } from "./Icons";

function Github() {
  return (
    <a
      href="https://github.com/webb-tools"
      className="hidden p-2 text-current sm:flex hover:opacity-75"
      title="Webb GitHub repo"
      target="_blank"
      rel="noreferrer"
    >
      {/* Nextra icons have a <title> attribute providing alt text */}
      <GitHubIcon />
    </a>
  );
}

function Telegram() {
  return (
    <a
      href="https://t.me/webbprotocol"
      className="hidden p-2 text-current sm:flex hover:opacity-75"
      title="Webb GitHub Telegram"
      target="_blank"
      rel="noreferrer"
    >
      {/* Nextra icons have a <title> attribute providing alt text */}
      <TelegramIcon />
    </a>
  );
}

function Twitter() {
  return (
    <a
      href="https://twitter.com/webbprotocol"
      className="hidden p-2 text-current sm:flex hover:opacity-75"
      title="Webb Twitter"
      target="_blank"
      rel="noreferrer"
    >
      {/* Nextra icons have a <title> attribute providing alt text */}
      <TwitterIcon />
    </a>
  );
}

function Discord() {
  return (
    <a
      href="https://discord.com/invite/cv8EfJu3Tn"
      className="hidden p-2 text-current sm:flex hover:opacity-75"
      title="Webb Discord server"
      target="_blank"
      rel="noreferrer"
    >
      <DiscordIcon />
    </a>
  );
}

export { Github, Discord, Telegram, Twitter };
