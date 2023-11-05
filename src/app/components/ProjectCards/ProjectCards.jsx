'use client'

import React, { useState } from "react";
import Image from "next/image";
import styles from "./ProjectCards.module.css";
import Button from "../Button/Button";

const cards = [
    {
        id: "1",
        img: "/Restaurant-Inventory-App.png",
        title: "Restaurant Inventory App",
        title2: "Technologies",
        site: "https://restaurant-inventory-77229.web.app/",
        gitHub: "https://github.com/Job85/Restaurant-Inventory-App",
        gitHub2: "https://github.com/Job85/inventory-app-backend",
        subTitle: "Languages",
        subTitle2: "Libraries & Environments",
        subTitle3: "Database",
        listGroup: ["CSS", "JavaScript"],
        listGroup2: ["React.js", "React Redux", "Axios", "Mongoose", "Font Awesome", "Node.js"],
        listGroup3: ["MongoDB"]
    },
    {
        id: "2",
        img: "/Token_Huntr.png",
        title: "Token Huntr",
        title2: "Technologies",
        site: "https://token-huntr-app.web.app/",
        gitHub: "https://github.com/Job85/token-huntr-app",
        gitHub2: "https://github.com/Job85/token-huntr",
        subTitle: "Languages",
        subTitle2: "Libraries & Environments",
        subTitle3: "Database",
        listGroup: ["CSS", "JavaScript"],
        listGroup2: ["React.js", "Styled-Components", "Validator.js", "Axios", "Font Awesome", "Node.js"],
        listGroup3: ["PostgreSQL"]
    },
    {
        id: "3",
        variant: "click",
        img: "/QCDetailing.png",
        title: "QC Detailing",
        title2: "Technologies",
        site: "https://qcdetailing.net/",
        subTitle: "Languages",
        subTitle2: "Libraries",
        listGroup: ["CSS", "JavaScript"],
        listGroup2: ["React.js", "Styled-Components", "Email.js", "React-Icons", "React-Hook-Forms"],
        listGroup3: ["PostgreSQL"]
    },
]

const ProjectCards = () => {

    // set state of toggled card
    const [expandedStates, setExpandedStates] = useState(cards.map(() => false));

    // toggles individual cards to expand details
    const toggleExpansion = (index) => {
        const newExpandedStates = [...expandedStates];
        newExpandedStates[index] = !newExpandedStates[index];
        setExpandedStates(newExpandedStates);
    };

    return (
        <div className={styles.container}>
            {cards.map((card, index) => (
                <div
                    key={card.id}
                    className={styles.card_container}
                >
                    <h2>{card.title}</h2>
                    <div
                        className={styles.img_container}
                    >
                        <Image
                            src={card.img}
                            alt={card.title}
                            // fill
                            width={400}
                            height={300}
                            sizes="100vw"
                            style={{
                                width: '100%',
                                height: 'auto',
                            }}
                        // sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        />
                        <Button
                            name="Click for Details"
                            style={styles.custom_button}
                            onClick={() => toggleExpansion(index)}
                        />
                    </div>
                    {expandedStates[index] ? (

                        <div>
                            <h3>{card.subTitle}</h3>
                            <ul className={styles.list}>
                                {card.listGroup.map((item, itemIndex) =>
                                    <li
                                        className={styles.list_item}
                                        key={itemIndex}
                                    >
                                        {item}
                                    </li>
                                )}
                            </ul>
                            <h3>{card.subTitle2}</h3>
                            <ul className={styles.list}>
                                {card.listGroup2.map((item, itemIndex) =>
                                    <li
                                        className={styles.list_item}
                                        key={itemIndex}
                                    >
                                        {item}
                                    </li>
                                )}
                            </ul>
                            <h3>{card.subTitle3}</h3>
                            <ul className={styles.list}>
                                {card.listGroup3.map((item, itemIndex) =>
                                    <li
                                        className={styles.list_item}
                                        key={itemIndex}
                                    >
                                        {item}
                                    </li>
                                )}
                            </ul>
                        </div>
                    ) : null}
                </div>
            ))}
        </div>
    )
}

export default ProjectCards;