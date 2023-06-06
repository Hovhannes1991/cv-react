import React from "react";
import { useSelector } from "react-redux";
import styles from "./TheFooter.module.scss";
import { LinkedinIcon } from "../svg-icons/LinkedinIcon";
import { FacebookIcon } from "../svg-icons/FacebookIcon";
import { GitHubIcon } from "../svg-icons/GitHubIcon";
import { IRootState } from "../../store";

export const TheFooter: React.FC = () => {
  const social_medias = useSelector((state: IRootState) => state.author.social);
  const icons: { [key: string]: React.FC } = {
    linkedin: LinkedinIcon,
    github: GitHubIcon,
    facebook: FacebookIcon,
  };

  return (
    <footer>
      <div className={styles.social_media}>
        {social_medias.map((social_media) => {
          const SocialIcon = icons[social_media.name];
          return (
            <a href={social_media.href} target="_blank" key={social_media.name}>
              <SocialIcon />
            </a>
          );
        })}
      </div>

      <div className={styles.copyrighting}>
        <span>©</span>
        <span className={styles.current_year}>{new Date().getFullYear()}</span>
      </div>
    </footer>
  );
};
