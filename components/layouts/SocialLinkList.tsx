import { siteConfig } from "@/config/site";
import { FacebookIcon, MapIcon } from "@/components/icons";
import Link from "next/link";

const getIcon = (iconName: string) => {
  switch (iconName) {
    case "map":
      return <MapIcon />;
    case "facebook":
      return <FacebookIcon />;
    default:
      return null;
  }
};

export const SocialLinkList = ({ className }: { className?: string }) => (
  <div className={className}>
    {siteConfig.socialLinks.map((link) => (
      <Link
        key={link.href}
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-cream/70 hover:text-accent transition-all duration-300 p-2 rounded-lg hover:bg-forest-700/50 hover:scale-110"
        title={link.label}
      >
        {getIcon(link.icon)}
      </Link>
    ))}
  </div>
);