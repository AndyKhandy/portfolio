import { Code2, Mail, Share2 } from "lucide-react";

const items = [
  { label: "GitHub", href: "https://github.com/AndyKhandy", Icon: Code2 },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/andy-khang-ta/",
    Icon: Share2,
  },
  { label: "Email", href: "mailto:andytajuly30@gmail.com", Icon: Mail },
];
export default function SocialLinks({ labels = false }) {
  return (
    <div className="flex flex-wrap gap-3">
      {items.map(({ label, href, Icon }) => (
        <a
          className={labels ? "button-secondary" : "icon-button"}
          key={label}
          href={href}
          target={label === "Email" ? undefined : "_blank"}
          rel={label === "Email" ? undefined : "noreferrer"}
          aria-label={label}
        >
          <Icon size={18} />
          {labels && label}
        </a>
      ))}
    </div>
  );
}
