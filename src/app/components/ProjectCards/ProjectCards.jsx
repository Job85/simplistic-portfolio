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
        desc: "A web app for the hospitality industry designed to streamline the inventory process. Using REST API's users have the ability to perform full CRUD of the items model.",
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
        desc: "A web app for the adventerous to go Geo Caching. Using REST API's users have the ability to perform full CRUD of the locations model.",
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
        desc: "A website built for a client per their details and with UX and UI design standards per my suggestions.",
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
                    <div>
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
                            />
                        </div>
                        <div>
                            {card.desc}
                        </div>
                        <Button
                            name={expandedStates[index] ? "Click to Close" : "Click for Details"}
                            style={styles.custom_button}
                            onClick={() => toggleExpansion(index)}
                        />
                    </div>
                    {expandedStates[index] ? (

                        <div className={styles.expanded}>
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
                            <div>
                                <h4>Links</h4>
                                <div className={styles.anchor}>

                                    <a
                                        href={card.site}
                                        target="_blank"
                                        style={{ color: '#9900FF' }}
                                    >
                                        Deployed Site
                                    </a>
                                    {card.gitHub && (

                                        <a
                                            href={card.gitHub}
                                            target="_blank"
                                            style={{ color: '#9900FF' }}
                                        >
                                            Front-End Repo
                                        </a>
                                    )}
                                    {card.gitHub2 && (

                                        <a
                                            href={card.gitHub2}
                                            target="_blank"
                                            style={{ color: '#9900FF' }}
                                        >
                                            Back-End Repo
                                        </a>
                                    )}
                                    {!card.gitHub && !card.gitHub2 && (
                                        <h5
                                            style={{ fontStyle: 'italic', color: '#9900FF' }}
                                        >
                                            Repositories Are Private
                                        </h5>
                                    )}
                                </div>
                            </div>
                        </div>
                    ) : null}
                </div>
            ))}
        </div>
    )
}

export default ProjectCards;