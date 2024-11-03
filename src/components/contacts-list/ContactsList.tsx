import {FC} from "react";
import styles from "./ContactsList.module.scss";
import { useTypedSelector } from "@/hooks/useTypedSelector";

export const ContactsList: FC = () => {
  const contacts = useTypedSelector((state) => state.author.contacts);

  return (
    <div className={styles.contacts}>
      <h2 className="app-section-title">Contacts</h2>
      <div className={styles.contactItem}>
        <span>E-mail</span>
        <a className={styles.emailHref} href={`mailto:${contacts.email}`}>
          {contacts.email}
        </a>
      </div>
      <div className={styles.contactItem}>
        <span>Phone</span>
        <a href={`tel:${contacts.phone}`}>{contacts.phone}</a>
      </div>
      <div className={styles.contactItem}>
        <span>Address</span>
        <a href={contacts.googleMapAddress} target="_blank">
          {contacts.address}
        </a>
      </div>
    </div>
  );
};
